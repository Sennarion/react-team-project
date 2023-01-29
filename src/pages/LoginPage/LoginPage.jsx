import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import LoginForm from 'components/LoginForm/LoginForm';
import {
  Container,
  LeftSide,
  RightSide,
  MainTitle,
  ImgBox,
} from './LoginPage.styled';

import loginTablet1x from '../../images/loginBg-tablet-1x.png';
import loginTablet2x from '../../images/loginBg-tablet-2x.png';
import loginDesk1x from '../../images/loginBg-desktop-1x.png';
import loginDesc2x from '../../images/loginBg-desktop-2x.png';
import { getIsLoggedIn } from 'redux/auth/selectors';

export default function LoginPage() {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(getIsLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      return;
    }
    navigate('/', { replace: true });
  }, [navigate, isLoggedIn]);

  return (
    <Container>
      <LeftSide>
        <ImgBox>
          <picture>
            <source
              srcSet={`${loginDesk1x} 1x, ${loginDesc2x} 2x`}
              media="(min-width: 1200px)"
              type="image/jpg"
            />
            <source
              srcSet={`${loginTablet1x} 1x, ${loginTablet2x} 2x`}
              media="(min-width: 768px)"
              type="image/jpg"
            />
            <img src={`${loginTablet2x}`} alt="finance wallet app" />
          </picture>
        </ImgBox>
        <MainTitle>Finance app</MainTitle>
      </LeftSide>
      <RightSide>
        <LoginForm />
      </RightSide>
    </Container>
  );
}
