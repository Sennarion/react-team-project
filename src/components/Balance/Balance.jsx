import { useSelector } from 'react-redux';
import { getUserBalance } from 'redux/auth/selectors';
import { BalanceWrapper, Desc, BalanceStatus } from './Balance.styled';

export default function Balance() {
  const userBalance = useSelector(getUserBalance);

  return (
    <BalanceWrapper>
      <Desc>Your balance</Desc>
      <BalanceStatus>₴ {userBalance}</BalanceStatus>
    </BalanceWrapper>
  );
}
