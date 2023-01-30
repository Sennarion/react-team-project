import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { toggleModalLogout } from 'redux/global/slice';
import { logOut } from 'redux/auth/operations';
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
        dispatch(toggleModalLogout());
      }
    };

    window.addEventListener('keydown', onPressEsc);

    return () => {
      window.removeEventListener('keydown', onPressEsc);
    };
  }, [dispatch]);

  const logout = () => {
    dispatch(toggleModalLogout());
    dispatch(logOut());
  };

  const onBackdropClick = e => {
    if (e.currentTarget === e.target) {
      dispatch(toggleModalLogout());
    }
  };

  return (
    <Backdrop onClick={onBackdropClick}>
      <ModalWrapper>
        <ModalTitle>Are you sure you want to exit?</ModalTitle>
        <ButtonsWrapper>
          <Button onClick={logout}>Yes</Button>
          <But onClick={() => dispatch(toggleModalLogout())}>No</But>
        </ButtonsWrapper>
      </ModalWrapper>
    </Backdrop>
  );
}
