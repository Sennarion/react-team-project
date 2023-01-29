import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getToken } from 'redux/auth/selectors';
import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { Container } from 'components/UI/Container/Container.styled';
import Logo from 'components/Logo/Logo';

export default function RegisterPage() {
  const navigate = useNavigate();
  const token = useSelector(getToken);

  useEffect(() => {
    if (token === null) {
      return;
    }
    navigate('/', { replace: true });
  }, [navigate, token]);

  return (
    <Container>
      <Logo />
      <RegistrationForm />
    </Container>
  );
}
