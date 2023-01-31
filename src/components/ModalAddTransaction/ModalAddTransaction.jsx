import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Formik, Field } from 'formik';
import DatePicker from 'react-datepicker';
import { selectCategories } from 'redux/transactions/selectors';
import { toggleModalAddTransaction } from 'redux/global/slice';
import useMediaQuery from 'hooks/useMediaQuery/useMediaQuery';
import HeaderContent from 'components/HeaderContent/HeaderContent';
// import * as yup from 'yup';
import {
  Modal,
  CloseButton,
  ModalTitle,
  TransactionForm,
  SumInput,
  CommentInput,
  PrimaryBut,
  But,
  Wrap,
  ButWrap,
  ToggleWrapper,
  Toggle,
  ToggleText,
  ToggleInput,
  ToggleLabel,
} from './ModalAddTransaction.styled';
import Backdrop from 'components/UI/Backdrop/Backdrop';
import icons from '../../images/icons.svg';
import { addTransaction } from 'redux/transactions/operations';
import 'react-datepicker/dist/react-datepicker.css';

export default function ModalAddTransaction() {
  const initialValues = {
    transactionDate: '',
    type: 'INCOME',
    categoryId: '',
    comment: '',
    amount: 0,
    date: new Date(),
  };

  const [date, setDate] = useState(new Date());
  const [isChecked, setIsChecked] = useState(true);

  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const isMobile = useMediaQuery('(max-width: 767px)');

  const incomeCategoryId = categories.find(el => el.name === 'Income').id;
  const filteredCategories = categories.filter(el => el.name !== 'Income');

  useEffect(() => {
    const onPressEsc = e => {
      if (e.code === 'Escape') {
        dispatch(toggleModalAddTransaction());
      }
    };

    window.addEventListener('keydown', onPressEsc);

    return () => {
      window.removeEventListener('keydown', onPressEsc);
    };
  }, [dispatch]);

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(toggleModalAddTransaction());
    }
  };

  const handleSubmit = (
    { amount, categories, comment, date },
    { resetForm }
  ) => {
    const transaction = {
      amount: isChecked ? -amount : amount,
      comment,
      transactionDate: new Date(date).toISOString(),
      categoryId: isChecked ? categories : incomeCategoryId,
      type: isChecked ? 'EXPENSE' : 'INCOME',
    };

    dispatch(addTransaction(transaction));
    dispatch(toggleModalAddTransaction());

    resetForm();
  };

  const onCheckboxChange = () => {
    setIsChecked(prev => !prev);
  };

  return (
    <Backdrop onClick={onBackdropClick}>
      <Modal>
        {isMobile ? (
          <HeaderContent />
        ) : (
          <CloseButton onClick={() => dispatch(toggleModalAddTransaction())}>
            <svg width="16" height="16">
              <use href={`${icons}#icon-close`}></use>
            </svg>
          </CloseButton>
        )}

        <ModalTitle>Add transaction</ModalTitle>

        <ToggleWrapper>
          <ToggleText data-active={!isChecked}>Income</ToggleText>
          <Toggle>
            <ToggleInput
              type="checkbox"
              name="check"
              id="switch"
              value={isChecked}
              onChange={onCheckboxChange}
            />
            <ToggleLabel htmlFor="switch" value={isChecked} />
          </Toggle>
          <ToggleText data-active={isChecked}>Expense</ToggleText>
        </ToggleWrapper>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, setFieldValue }) => (
            <TransactionForm>
              {isChecked && (
                <Field as="select" name="categories">
                  {filteredCategories.map(({ name, id }) => (
                    <option key={id} value={id}>
                      {name}
                    </option>
                  ))}
                </Field>
              )}
              <Wrap>
                <SumInput
                  name="amount"
                  type="number"
                  min="0.01"
                  step="0.01"
                  placeholder="0.00"
                />
                <DatePicker
                  showDisabledMonthNavigation
                  name="date"
                  selected={date}
                  value={values.date}
                  onChange={val => {
                    setDate(val);
                    setFieldValue('date', val);
                  }}
                  dateFormat="dd.MM.yyyy"
                  style={{
                    border: 'none',
                    outline: 'none',
                    color: 'red',
                  }}
                />
              </Wrap>
              <CommentInput
                name="comment"
                type="text"
                value={values.comment}
                placeholder="Comment"
              ></CommentInput>
              <ButWrap>
                <PrimaryBut type="submit">Add</PrimaryBut>
                <But
                  onClick={() => dispatch(toggleModalAddTransaction())}
                  type="button"
                >
                  Cancel
                </But>
              </ButWrap>
            </TransactionForm>
          )}
        </Formik>
      </Modal>
    </Backdrop>
  );
}
