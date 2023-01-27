import { Outlet } from 'react-router-dom';
import WithAuthRedirect from 'hoc/WithAuthRedirect';
import { Container } from 'components/UI/Container/Container.styled';
import Header from 'components/Header/Header';
import Aside from 'components/Aside/Aside';
import useMediaQuery from 'hooks/useMediaQuery/useMediaQuery';

function HomePage() {
  const isDesktop = useMediaQuery('(min-width: 1280px)');

  return (
    <Container>
      <Header />
      {isDesktop && <Aside />}
      <Outlet />
    </Container>
  );
}

export default WithAuthRedirect(HomePage, '/login');
