import useMediaQuery from 'hooks/useMediaQuery/useMediaQuery';
import Balance from 'components/Balance/Balance';
import { HomeWrapper } from './Home.styled';
import { ButtonAddTransaction } from 'components/ButtonAddTransaction/ButtonAddTransaction';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';

export default function Home() {
  const isMobile = useMediaQuery('(max-width: 767px)');

  return (
    <HomeWrapper>
      {isMobile && <Balance />}
      Home
      <ButtonAddTransaction />
      <ModalAddTransaction />
    </HomeWrapper>
  );
}
