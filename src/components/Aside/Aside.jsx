import Navigation from 'components/Navigation/Navigation';
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
