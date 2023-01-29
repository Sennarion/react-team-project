import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleModalAddTransaction } from 'redux/global/slice';
// import * as yup from 'yup';
import {
  Backdrop,
  Modal,
  CloseButton,
  ModalTitle,
  SwitchWrap,
  Switch,
  TransactionForm,
  SumInput,
  DateInput,
  CommentInput,
} from './ModalAddTransaction.styled';
import Button from 'components/UI/Button/Button';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import Datetime from 'react-datetime';

import { Formik } from 'formik';
import Select from 'react-select';
import { selectCategories } from 'redux/categories/selector';
import { addTransaction } from 'redux/transactions/operations';

const initialValues = {
  transactionDate: 'string',
  type: 'INCOME',
  // categoryId: 'string',
  comment: 'string',
  amount: 0,
};

// const validationSchema = yup.object().shape({
//   type: yup.string().required('Required'),
//   categoryId: yup.string().required('Required'),
//   transactionDate: yup.string().required('Required'),
//   amount: yup.number().required('Required'),
//   comment: yup.string(),
// });

export default function ModalAddTransaction() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const expenseCategories = categories.filter(
    element => element.type !== 'INCOME'
  );
  const incomeCategories = categories.filter(
    element => element.type === 'INCOME'
  );
  const incomeCategoriesId = incomeCategories.map(element => {
    return element.id;
  });

  const [amount, setAmount] = useState();
  const [comment, setComment] = useState();
  const [category, setCategory] = useState();
  const [typeTransaction, setTypeTransaction] = useState('EXPANCE');

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
    { amount, category, comment, transactionDate },
    { resetForm }
  ) => {
    dispatch(
      addTransaction({
        amount,
        category,
        comment,
        transactionDate,
        // categoryId
        type: typeTransaction,
      })
    );
    dispatch(toggleModalAddTransaction());
  };

  // const [isIncomeTransaction, setIsIncomeTransaction] = useState(true);
  // const [categoryIdFromDropdown, SetCategoryIdFromDropdown] = useState('');
  // console.log('categoryIdFromDropdown:', categoryIdFromDropdown);

  const handleType = (values, actions) => {
    setTypeTransaction(typeTransaction === 'EXPANCE' ? 'INCOME' : 'EXPANCE');

    // setIsIncomeTransaction(isIncomeTransaction => !isIncomeTransaction);

    // if (isIncomeTransaction) {
    //   values.type = 'INCOME';
    //   values.categoryId = incomeCategoriesId[0];
    // } else {
    //   values.amount = -values.amount;
    //   values.type = 'EXPENSE';
    //   categoryIdFromDropdown
    //     ? (values.categoryId = categoryIdFromDropdown)
    //     : (values.categoryId = expenseCategories[8].id);
    // }

    // console.log(values);
    // dispatch(addTransaction(values));
    // dispatch(toggleModalAddTransaction());
    // actions.resetForm();
  };

  return (
    <Backdrop onClick={onBackdropClick}>
      <Modal>
        <CloseButton onClick={() => dispatch(toggleModalAddTransaction())}>
          <AiOutlineClose />
        </CloseButton>

        <ModalTitle>Add transaction</ModalTitle>
        <SwitchWrap>
          <Switch>
            <AiOutlinePlus size={20} onClick={handleType} />
          </Switch>
        </SwitchWrap>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          // validationSchema={validationSchema}
        >
          <TransactionForm>
            <Select
              options={categories.map(({ name, id }) => ({
                value: id,
                label: [`categoryName.${name}`],
              }))}
            />
            <SumInput
              name="amount"
              type="number"
              min="0.01"
              step="0.01"
              value={amount}
              placeholder="0.00"
            />
            <DateInput name="transactionDate">
              <Datetime
                initialValue={new Date()}
                dateFormat="DD.MM.YYYY"
                timeFormat={false}
                // initialValue={new Date().toISOString().slice(0, 19) + 'Z'}
                input={true}
                closeOnSelect
              />
            </DateInput>
            <CommentInput
              name="comment"
              type="text"
              value={comment}
              placeholder="Comment"
            ></CommentInput>
            <Button>Add</Button>
          </TransactionForm>
        </Formik>
      </Modal>
    </Backdrop>
  );
}
