import { Outlet } from 'react-router-dom';
import WithAuthRedirect from 'hoc/WithAuthRedirect';
import { Container } from 'components/UI/Container/Container.styled';
import Header from 'components/Header/Header';

function DashboardPage() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}

export default WithAuthRedirect(DashboardPage, '/login');
