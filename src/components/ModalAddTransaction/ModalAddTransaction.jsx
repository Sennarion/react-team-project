import {
  Backdrop,
  Modal,
  CloseButton,
  ModalTitle,
  SwitchWrap,
  Switch,
  TransactionForm,
  SumInput,
} from './ModalAddTransaction.styled';
import { Formik } from 'formik';

const initialValues = {
  sum: '',
  category: '',
  comment: '',
  date: new Date(),
};

export default function ModalAddTransaction() {
  return (
    <Backdrop>
      <Modal>
        <CloseButton />
        <ModalTitle>Add transaction</ModalTitle>
        <SwitchWrap>
          <Switch></Switch>
        </SwitchWrap>
        <Formik initialValues={initialValues}>
          <TransactionForm>
            <SumInput
              name="sum"
              type="number"
              min="0.01"
              step="0.01"
              // value={sum}
              placeholder="0.00"
            />
          </TransactionForm>
        </Formik>
      </Modal>
    </Backdrop>
  );
}
