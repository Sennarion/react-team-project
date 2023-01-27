import RegistrationForm from 'components/RegistrationForm/RegistrationForm';
import { Container } from 'components/UI/Container/Container.styled';
import Logo from 'components/Logo/Logo';
export default function RegisterPage() {
  return (
    <Container>
      <Logo />
      <RegistrationForm />
    </Container>
  );
}
