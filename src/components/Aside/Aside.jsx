import DesktopNavigation from 'components/DesktopNavigation/DesktopNavigation';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';
import { AsideWrapper, LeftSide } from './AsideWrapper.styled';

export default function Aside() {
  return (
    <AsideWrapper>
      <LeftSide>
        <DesktopNavigation />
        <Balance />
      </LeftSide>
      <Currency />
    </AsideWrapper>
  );
}
