import Backdrop from 'components/UI/Backdrop/Backdrop';
import { ModalWrapper, ModalTitle, ButtonsWrapper } from './ModalLogout.styled';
import Button from 'components/UI/Button/Button';

export default function ModalLogout() {
  return (
    <Backdrop>
      <ModalWrapper>
        <ModalTitle>Are you sure you want to exit?</ModalTitle>
        <ButtonsWrapper>
          <Button>Yes</Button>
          <Button>No</Button>
        </ButtonsWrapper>
      </ModalWrapper>
    </Backdrop>
  );
}
