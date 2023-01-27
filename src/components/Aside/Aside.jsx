import DesktopNavigation from 'components/DesktopNavigation/DesktopNavigation';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';

export default function Aside() {
  return (
    <aside>
      <div>
        <DesktopNavigation />
        <Balance />
      </div>
      <Currency />
    </aside>
  );
}
