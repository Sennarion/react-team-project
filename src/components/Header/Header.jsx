import { useSelector } from 'react-redux';
import { selectLogoutModalOpen } from 'redux/global/selectors';
import { Container } from 'components/UI/Container/Container.styled';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import { HeaderWrapper } from './Header.styled';
import HeaderContent from 'components/HeaderContent/HeaderContent';

export default function Header() {
  const isModalLogoutOpen = useSelector(selectLogoutModalOpen);

  return (
    <HeaderWrapper>
      {isModalLogoutOpen && <ModalLogout />}
      <Container>
        <HeaderContent />
      </Container>
    </HeaderWrapper>
  );
}
