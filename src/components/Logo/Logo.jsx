import icons from '../../images/icons.svg';
import { LogoWrapper,LogoText } from './Logo.styled';
export default function Logo() {
  return (
    <LogoWrapper>
      <svg>
        <use href={`${icons}#icon-logo`}></use>
      </svg>
      <LogoText>Wallet</LogoText>
    </LogoWrapper>
  );
}
