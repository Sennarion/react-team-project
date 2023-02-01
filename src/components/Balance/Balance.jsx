import { useSelector } from 'react-redux';
import { getBalance } from 'redux/auth/selectors';
import {
  BalanceWrapper,
  Desc,
  BalanceStatus,
  BalanceCurrency,
} from './Balance.styled';
import { formatCurrency } from 'utils/formatCurrency';

export default function Balance() {
  const balance = useSelector(getBalance);
  return (
    <BalanceWrapper>
      <Desc>Your balance</Desc>
      <BalanceStatus>
        <BalanceCurrency>₴</BalanceCurrency> {formatCurrency(balance)}
      </BalanceStatus>
    </BalanceWrapper>
  );
}
