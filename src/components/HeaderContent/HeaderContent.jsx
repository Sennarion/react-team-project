import User from 'components/User/User';
import { Content, LogoWrapper, Logo, LogoText } from './HeaderContent.styled';
import icons from '../../images/icons.svg';

export default function HeaderContent() {
  return (
    <Content>
      <LogoWrapper to="/">
        <Logo>
          <use href={`${icons}#icon-logo`}></use>
        </Logo>
        <LogoText>Wallet</LogoText>
      </LogoWrapper>
      <User />
    </Content>
  );
}
