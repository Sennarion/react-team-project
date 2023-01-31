import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { closeModalAddTransaction, closeModalLogout } from 'redux/global/slice';
import { clearTransactions } from 'redux/transactions/transactionsSlice';
import Backdrop from 'components/UI/Backdrop/Backdrop';
import {
  ModalWrapper,
  ModalTitle,
  ButtonsWrapper,
  But,
} from './ModalLogout.styled';
import Button from 'components/UI/Button/Button';

export default function ModalLogout() {
  const dispatch = useDispatch();

  useEffect(() => {
    const onPressEsc = e => {
      if (e.code === 'Escape') {
        dispatch(closeModalLogout());
      }
    };

    window.addEventListener('keydown', onPressEsc);

    return () => {
      window.removeEventListener('keydown', onPressEsc);
    };
  }, [dispatch]);

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(closeModalLogout());
    }
  };

  const onLogoutBtnClick = () => {
    dispatch(clearTransactions());
    dispatch(closeModalAddTransaction());
    dispatch(closeModalLogout());
    dispatch(logOut());
  };

  return (
    <Backdrop onClick={onBackdropClick}>
      <ModalWrapper>
        <ModalTitle>Are you sure you want to exit?</ModalTitle>
        <ButtonsWrapper>
          <Button onClick={onLogoutBtnClick}>Yes</Button>
          <But onClick={() => dispatch(closeModalLogout())}>No</But>
        </ButtonsWrapper>
      </ModalWrapper>
    </Backdrop>
  );
}
