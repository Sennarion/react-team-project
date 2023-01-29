import { BalanceWrapper, Desc, BalanceStatus } from './Balance.styled';

export default function Balance() {
  return (
    <BalanceWrapper>
      <Desc>Your balance</Desc>
      <BalanceStatus>₴ 24 000.00</BalanceStatus>
    </BalanceWrapper>
  );
}
