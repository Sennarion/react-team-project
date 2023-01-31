import { useSelector } from 'react-redux';
import { selectLogoutModalOpen } from 'redux/global/selectors';
import { Container } from 'components/UI/Container/Container.styled';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import { HeaderWrapper } from './Header.styled';
import HeaderContent from 'components/HeaderContent/HeaderContent';
import Portal from 'components/UI/Portal/Portal';

export default function Header() {
  const isModalLogoutOpen = useSelector(selectLogoutModalOpen);

  return (
    <HeaderWrapper>
      <Portal isVisible={isModalLogoutOpen}>
        <ModalLogout />
      </Portal>
      <Container>
        <HeaderContent />
      </Container>
    </HeaderWrapper>
  );
}
