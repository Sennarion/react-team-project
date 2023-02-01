import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import iconsSprite from '../../images/icons.svg';
import { selectCategories } from 'redux/transactions/selectors';
import { closeModalAddTransaction } from 'redux/global/slice';
import useMediaQuery from 'hooks/useMediaQuery/useMediaQuery';
import HeaderContent from 'components/HeaderContent/HeaderContent';
import * as yup from 'yup';
import { ErrorMess } from 'components/LoginForm/LoginForm.styled';
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
  DateInput,
  DateWrapper,
  Wrapper,
} from './ModalAddTransaction.styled';
import Backdrop from 'components/UI/Backdrop/Backdrop';
import icons from '../../images/icons.svg';
import { addTransaction } from 'redux/transactions/operations';
import SelectTransaction from 'components/SelectTransaction/SelectTransaction';
import 'react-datepicker/dist/react-datepicker.css';

export default function ModalAddTransaction() {
  const [date, setDate] = useState(new Date());
  const [isChecked, setIsChecked] = useState(true);
  const [selectId, setSelectId] = useState('');
  const [selectErrorStyle, setSelectErrorStyle] = useState({
    opacity: 0,
    height: '0px',
  });

  const initialValues = {
    transactionDate: '',
    type: 'INCOME',
    comment: '',
    amount: '',
    date: new Date(),
  };
  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <ErrorMess>{message}</ErrorMess>}
      />
    );
  };

  const transactionSchema = yup.object().shape({
    amount: yup
      .string()
      .matches(/^\d+(\.\d+)*$/, 'Only numbers with dots. For example: 125.50.')
      .required(),
    comment: yup.string().min(2).max(20),
    date: yup.date().max(new Date()).required('Date is a required field.'),
  });

  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const isMobile = useMediaQuery('(max-width: 767px)');

  const incomeCategoryId = categories.find(el => el.name === 'Income').id;
  const filteredCategories = categories.filter(el => el.name !== 'Income');

  useEffect(() => {
    if (selectId.length > 0 && selectErrorStyle.opacity === 1) {
      setSelectErrorStyle({
        opacity: 0,
        height: '0px',
      });
    }
  }, [selectId, selectErrorStyle]);

  useEffect(() => {
    const onPressEsc = e => {
      if (e.code === 'Escape') {
        dispatch(closeModalAddTransaction());
      }
    };

    window.addEventListener('keydown', onPressEsc);

    return () => {
      window.removeEventListener('keydown', onPressEsc);
    };
  }, [dispatch]);

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(closeModalAddTransaction());
    }
  };

  const onSelectToggle = id => {
    setSelectId(id);
  };

  const handleSubmit = ({ amount, comment, date }, { resetForm }) => {
    if (!selectId.length && isChecked) {
      setSelectErrorStyle({
        opacity: 1,
        height: 'auto',
      });
      return;
    }
    const transaction = {
      amount: isChecked ? -Number(amount) : Number(amount),
      comment,
      transactionDate: new Date(date),
      categoryId: isChecked ? selectId : incomeCategoryId,
      type: isChecked ? 'EXPENSE' : 'INCOME',
    };

    dispatch(closeModalAddTransaction());
    dispatch(addTransaction(transaction));

    resetForm();
  };

  return (
    <Backdrop onClick={onBackdropClick}>
      <Modal>
        {isMobile ? (
          <HeaderContent />
        ) : (
          <CloseButton onClick={() => dispatch(closeModalAddTransaction())}>
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
              onChange={() => setIsChecked(prev => !prev)}
            />
            <ToggleLabel htmlFor="switch" value={isChecked} />
          </Toggle>
          <ToggleText data-active={isChecked}>Expense</ToggleText>
        </ToggleWrapper>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={transactionSchema}
        >
          {({ values, setFieldValue }) => (
            <TransactionForm>
              {isChecked && (
                <Wrapper>
                  <SelectTransaction
                    categories={filteredCategories}
                    onSelectToggle={onSelectToggle}
                  />
                  <ErrorMess style={selectErrorStyle}>
                    Category is a required field
                  </ErrorMess>
                </Wrapper>
              )}
              <Wrap>
                <Wrapper>
                  <SumInput name="amount" type="text" placeholder="0.00" />
                  <FormError name="amount" />
                </Wrapper>
                <DateWrapper>
                  <DateInput
                    showDisabledMonthNavigation
                    name="date"
                    selected={date}
                    value={values.date}
                    onChange={val => {
                      setDate(val);
                      setFieldValue('date', val);
                    }}
                    dateFormat="dd.MM.yyyy"
                  />
                  <svg width="24" height="24">
                    <use href={`${iconsSprite}#icon-calendar`}></use>
                  </svg>
                  <FormError name="date" />
                </DateWrapper>
              </Wrap>
              <Wrapper>
                <CommentInput
                  name="comment"
                  type="text"
                  placeholder="Comment"
                />
                <FormError name="comment" />
              </Wrapper>
              <ButWrap>
                <PrimaryBut type="submit">Add</PrimaryBut>
                <But
                  onClick={() => dispatch(closeModalAddTransaction())}
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
