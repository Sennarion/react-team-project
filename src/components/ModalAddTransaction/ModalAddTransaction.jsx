import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { toggleModalAddTransaction } from 'redux/global/slice';
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
  categoryId: 'string',
  comment: 'string',
  amount: 0,
};

export default function ModalAddTransaction() {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

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

  const handleType = () => {
    setTypeTransaction(typeTransaction === 'EXPANCE' ? 'INCOME' : 'EXPANCE');
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
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
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
                dateFormat="DD.MM.YYYY"
                timeFormat={false}
                initialValue={new Date()}
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
