import LoginForm from 'components/LoginForm/LoginForm';
import { Container } from 'components/UI/Container/Container.styled';
import Logo from 'components/Logo/Logo';
export default function LoginPage() {
  return (
    <Container>
      <Logo />
      <LoginForm />
    </Container>
  );
}
