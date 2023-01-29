import { useSelector } from 'react-redux';
import { getUsername } from 'redux/auth/selectors';
import { Container } from 'components/UI/Container/Container.styled';
import {
  HeaderWrapper,
  HeaderContent,
  LogoWrapper,
  Logo,
  LogoText,
  UserWrapper,
  UserName,
  LogoutBtn,
  LogoutIcon,
  LogoutText,
} from './Header.styled';
import icons from '../../images/icons.svg';

export default function Header() {
  const username = useSelector(getUsername);

  return (
    <HeaderWrapper>
      <Container>
        <HeaderContent>
          <LogoWrapper to="/">
            <Logo>
              <use href={`${icons}#icon-logo`}></use>
            </Logo>
            <LogoText>Wallet</LogoText>
          </LogoWrapper>
          <UserWrapper>
            <UserName>{username}</UserName>
            <LogoutBtn>
              <LogoutIcon width="18" height="18">
                <use href={`${icons}#icon-logout`}></use>
              </LogoutIcon>
              <LogoutText>Exit</LogoutText>
            </LogoutBtn>
          </UserWrapper>
        </HeaderContent>
      </Container>
    </HeaderWrapper>
  );
}
