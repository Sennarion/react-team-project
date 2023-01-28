import {
  Backdrop,
  Modal,
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
import Select from 'react-select'

const initialValues = {
  sum: '',
  category: '',
  comment: '',
  date: new Date(),
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

export default function ModalAddTransaction() {
  return (
    <Backdrop>
      <Modal>
        <AiOutlineClose />
        <ModalTitle>Add transaction</ModalTitle>
        <SwitchWrap>
          <Switch>
            <AiOutlinePlus size={20} />
          </Switch>
        </SwitchWrap>
        <Formik initialValues={initialValues}>
          <TransactionForm>
          <Select options={options} />
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
