import { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchCategories } from 'redux/transactions/operations';
import WithAuthRedirect from 'hoc/WithAuthRedirect';
import { Container } from 'components/UI/Container/Container.styled';
import { BgWrapper, Content } from './HomePage.styled';
import Header from 'components/Header/Header';
import Aside from 'components/Aside/Aside';
import MobileNavigation from 'components/MobileNavigation/MobileNavigation';
import useMediaQuery from 'hooks/useMediaQuery/useMediaQuery';

function HomePage() {
  const isMobile = useMediaQuery('(max-width: 767px)');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch])

  return (
    <BgWrapper>
      <Header />
      <Container>
        <Content>
          {isMobile ? <MobileNavigation /> : <Aside />}
          <Outlet />
        </Content>
      </Container>
    </BgWrapper>
  );
}

export default WithAuthRedirect(HomePage, '/login');
