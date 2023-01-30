import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import DatePicker from 'react-datepicker';
import { addMonths } from 'date-fns';

import moment from 'moment';
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
  PrimaryBut,
  But,
  Wrap,
  ButWrap,
} from './ModalAddTransaction.styled';
import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
import Datetime from 'react-datetime';

import { Formik } from 'formik';
import Select from 'react-select';
import { selectCategories } from 'redux/categories/selector';
import { addTransaction } from 'redux/transactions/operations';
import { useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";

// const validationSchema = yup.object().shape({
//   type: yup.string().required('Required'),
//   categoryId: yup.string().required('Required'),
//   transactionDate: yup.string().required('Required'),
//   amount: yup.number().required('Required'),
//   comment: yup.string(),
// });

export default function ModalAddTransaction() {

  //Налаштування дати
  const dateMoment = moment(new Date()).format('DD.MM.YYYY');
  const initialValues = {
    transactionDate: 'string',
    type: 'INCOME',
    categoryId: 'string',
    comment: 'string',
    amount: 0,
    date: dateMoment,
  };

  const [startDate, setStartDate] = useState(new Date());
  const [isOpenDate, setIsOpenDate] = useState(false);

  const handleChangeDate = e => {
    setIsOpenDate(!isOpenDate);
    setStartDate(e);
  };
//Догіка відкривання та закриття модалки
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
          <AiOutlineClose size={16} />
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
            <Wrap>
              <SumInput
                name="sum"
                type="number"
                min="0.01"
                step="0.01"
                // value={sum}
                placeholder="0.00"
              />
              <DatePicker
                maxDate={addMonths(new Date(), 0)}
                showDisabledMonthNavigation
                name="date"
                selected={startDate}
                onChange={handleChangeDate}
                dateFormat="dd.MM.yyyy"

                style={{
                  border: "none",
                  outline: "none",
                  color:"red"
                }}
              />
            </Wrap>
            <CommentInput
              name="comment"
              type="text"
              value={comment}
              placeholder="Comment"
            ></CommentInput>
            <ButWrap>
            <PrimaryBut>Add</PrimaryBut>
            <But>Cancel</But>
            </ButWrap>
          </TransactionForm>
        </Formik>
      </Modal>
    </Backdrop>
  );
}

// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { useSelector } from 'react-redux';
// import { toggleModalAddTransaction } from 'redux/global/slice';
// import {
//   Backdrop,
//   Modal,
//   CloseButton,
//   ModalTitle,
//   SwitchWrap,
//   Switch,
//   TransactionForm,
//   SumInput,
//   DateInput,
//   CommentInput,
//   PrimaryBut,
//   But,
//   Wrap
// } from './ModalAddTransaction.styled';
// import { AiOutlineClose, AiOutlinePlus } from 'react-icons/ai';
// import Datetime from 'react-datetime';

// import { Formik } from 'formik';
// import Select from 'react-select';
// import { selectCategories } from 'redux/categories/selector';

// const initialValues = {
//   transactionDate: 'string',
//   type: 'INCOME',
//   categoryId: 'string',
//   comment: 'string',
//   amount: 0,
// };

// export default function ModalAddTransaction() {
//   const dispatch = useDispatch();
//   const categories = useSelector(selectCategories);

//   useEffect(() => {
//     const onPressEsc = e => {
//       if (e.code === 'Escape') {
//         dispatch(toggleModalAddTransaction());
//       }
//     };

//     window.addEventListener('keydown', onPressEsc);

//     return () => {
//       window.removeEventListener('keydown', onPressEsc);
//     };
//   }, [dispatch]);

//   const onBackdropClick = e => {
//     if (e.currentTarget === e.target) {
//       dispatch(toggleModalAddTransaction());
//     }
//   };

//   return (
//     <Backdrop onClick={onBackdropClick}>
//       <Modal>
//         <CloseButton onClick={() => dispatch(toggleModalAddTransaction())}>
//           <AiOutlineClose />
//         </CloseButton>

//         <ModalTitle>Add transaction</ModalTitle>
//         <SwitchWrap>
//           <Switch>
//             <AiOutlinePlus size={20} />
//           </Switch>
//         </SwitchWrap>
//         <Formik initialValues={initialValues}>
//           <TransactionForm>
//             <Select
//               options={categories.map(({ name, id }) => ({
//                 value: id,
//                 label: [`categoryName.${name}`],
//               }))}
//             />
//             <Wrap>
//             <SumInput
//               name="sum"
//               type="number"
//               min="0.01"
//               step="0.01"
//               // value={sum}
//               placeholder="0.00"
//             />
//             <DateInput>
//               <Datetime
//                 dateFormat="DD.MM.YYYY"
//                 timeFormat={false}
//                 initialValue={new Date()}
//                 input={true}
//                 closeOnSelect

//               />
//             </DateInput></Wrap>
//             <CommentInput
//               name="comment"
//               type="text"
//               // value={sum}
//               placeholder="Comment"
//             ></CommentInput>
//             <PrimaryBut>Add</PrimaryBut>
//             <But>Cancel</But>
//           </TransactionForm>
//         </Formik>
//       </Modal>
//     </Backdrop>
//   );
// }
