import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Formik, Field } from 'formik';
import DatePicker from 'react-datepicker';
// import { addMonths } from 'date-fns';
import { selectCategories } from 'redux/transactions/selectors';
// import moment from 'moment';
import { toggleModalAddTransaction } from 'redux/global/slice';
// import * as yup from 'yup';
import {
  Backdrop,
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
  ToggleInput,
  ToggleLabel,
} from './ModalAddTransaction.styled';
import { AiOutlineClose } from 'react-icons/ai';

import { addTransaction } from 'redux/transactions/operations';
import 'react-datepicker/dist/react-datepicker.css';
import { AnimatePresence, motion } from 'framer-motion';

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
  const [isChecked, setIsChecked] = useState(false);

  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

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
      amount: isChecked ? amount : Number(amount * -1),
      comment,
      transactionDate: new Date(date).toISOString(),
      categoryId: isChecked ? incomeCategoryId : categories,
      type: isChecked ? 'INCOME' : 'EXPENSE',
    };

    dispatch(addTransaction(transaction));
    dispatch(toggleModalAddTransaction());

    resetForm();
  };

  const onCheckboxChange = () => {
    setIsChecked(prev => !prev);
  };

  return (
    <AnimatePresence>
      <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
    <Backdrop onClick={onBackdropClick}>
      <Modal>
        <CloseButton onClick={() => dispatch(toggleModalAddTransaction())}>
          <AiOutlineClose size={16} />
        </CloseButton>

        <ModalTitle>Add transaction</ModalTitle>
        <ToggleWrapper>
          <ToggleInput
            type="checkbox"
            name="check"
            id="switch"
            value={isChecked}
            onChange={onCheckboxChange}
          />
          <ToggleLabel htmlFor="switch" value={isChecked} />
        </ToggleWrapper>

        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, setFieldValue }) => (
            <TransactionForm>
              {!isChecked && (
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
                <But>Cancel</But>
              </ButWrap>
            </TransactionForm>
          )}
        </Formik>
      </Modal>
    </Backdrop>
    </motion.div>
    </AnimatePresence>
  );
}
