import { Container } from 'components/UI/Container/Container.styled';
import ModalLogout from 'components/ModalLogout/ModalLogout';
import {
  HeaderWrapper,
  HeaderContent,
  LogoWrapper,
  Logo,
  LogoText,
} from './Header.styled';
import User from 'components/User/User';
import icons from '../../images/icons.svg';

export default function Header() {
  return (
    <HeaderWrapper>
      <ModalLogout />
      <Container>
        <HeaderContent>
          <LogoWrapper to="/">
            <Logo>
              <use href={`${icons}#icon-logo`}></use>
            </Logo>
            <LogoText>Wallet</LogoText>
          </LogoWrapper>
          <User />
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
}
