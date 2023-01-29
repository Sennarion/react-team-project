import React, { useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
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
  sum: '',
  category: '',
  comment: '',
  date: new Date(),
};


export default function ModalAddTransaction({ onClose, children }) {
  useEffect(() => {
    const handleKeyDown = e => {
      const ESC_KEY_CODE = 'Escape';
      if (e.code === ESC_KEY_CODE) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleEventOverlay = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  const categories = useSelector(selectCategories);

  return (
          <Backdrop onClick={handleEventOverlay}>
      <Modal>
        <CloseButton onClick={onClose}>
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
              options={categories
                .map(({ name, id }) => ({
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
