import Navigation from 'components/MobileNavigation/MobileNavigation';
import Balance from 'components/Balance/Balance';
import Currency from 'components/Currency/Currency';

export default function Aside() {
  return (
    <aside>
      <Navigation />
      <Balance />
      <Currency />
    </aside>
  );
}
