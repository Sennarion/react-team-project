import icons from '../../images/icons.svg';
import { LogoWrapper,LogoText } from './Logo.styled';
export default function Logo() {
  return (
    <LogoWrapper>
      <svg width="30" height="30">
        <use href={`${icons}#icon-logo`}></use>
      </svg>
      <LogoText>Wallet</LogoText>
    </LogoWrapper>
  );
}
