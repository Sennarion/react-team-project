import { Outlet } from 'react-router-dom';
import { Container } from 'components/UI/Container/Container.styled';
import Header from 'components/Header/Header';

export default function SharedLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}
