import { useEffect } from 'react';
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

  return (
    <Backdrop onClick={onBackdropClick}>
      <Modal>
        <CloseButton onClick={() => dispatch(toggleModalAddTransaction())}>
          <AiOutlineClose />
        </CloseButton>

        <ModalTitle>Add transaction</ModalTitle>
        <SwitchWrap>
          <Switch>
            <AiOutlinePlus size={20} />
          </Switch>
        </SwitchWrap>
        <Formik initialValues={initialValues}>
          <TransactionForm>
            <Select
              options={categories.map(({ name, id }) => ({
                value: id,
                label: [`categoryName.${name}`],
              }))}
            />
            <SumInput
              name="sum"
              type="number"
              min="0.01"
              step="0.01"
              // value={sum}
              placeholder="0.00"
            />
            <DateInput>
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
              // value={sum}
              placeholder="Comment"
            ></CommentInput>
            <Button>Add</Button>
          </TransactionForm>
        </Formik>
      </Modal>
    </Backdrop>
  );
}
