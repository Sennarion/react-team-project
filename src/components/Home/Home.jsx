import { useState } from 'react'; 
import useMediaQuery from 'hooks/useMediaQuery/useMediaQuery';
import Balance from 'components/Balance/Balance';
import { HomeWrapper } from './Home.styled';
import { ButtonAddTransaction } from 'components/ButtonAddTransaction/ButtonAddTransaction';
import ModalAddTransaction from 'components/ModalAddTransaction/ModalAddTransaction';
import { Table } from '../../components/Table/Table.jsx'
 
export default function Home() {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const onOpenModal = e => {
    setShowModal(true);
  };

  return (
    <HomeWrapper>
      {isMobile && <Balance />}
      <Table/>
      <ButtonAddTransaction />
      <ModalAddTransaction />
      <ButtonAddTransaction onClick={onOpenModal}/>
      {showModal && (<ModalAddTransaction onClose={toggleModal}/>)}
    </HomeWrapper>
  );
}
