import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import Logo from 'components/Logo/Logo';
import icons from '../../images/icons.svg';
import {
  FormWrapper,
  StyledForm,
  Wrapper,
  Label,
  Icon,
  Input,
  ErrorMess,
  LinkTo,
} from './LoginForm.styled';
import Button from 'components/UI/Button/Button';

export default function LoginForm() {
  const dispatch = useDispatch();
  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <ErrorMess>{message}</ErrorMess>}
      />
    );
  };
  const initialValues = {
    email: '',
    password: '',
  };
  const userSchema = yup.object().shape({
    email: yup
      .string()
      .matches(
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        'Email may contain letters, @, numbers. For example bar.ba@test.co.uk.'
      )
      .required(),
    password: yup
      .string()
      .matches(
        /^.{6,12}$/,
        'Password must contain minimum 6 to 12 include symbols.'
      )
      .required(),
  });
  const onSubmit = (values, { resetForm }) => {
    const user = {
      email: values.email,
      password: values.password,
    };
    dispatch(logIn(user));
    resetForm();
  };

  return (
    <FormWrapper>
      <Logo />
      <Formik
        initialValues={initialValues}
        validationSchema={userSchema}
        onSubmit={onSubmit}
      >
        <StyledForm autoComplete="off">
          <Wrapper>
            <Input type="email" name="email" id="email" placeholder=" " />

            <Label htmlFor="email"> E-mail</Label>
            <Icon>
              <svg width="24" height="24">
                <use href={`${icons}#icon-email`}></use>
              </svg>
            </Icon>
            <FormError name="email" />
          </Wrapper>
          <Wrapper>
            <Input
              type="password"
              name="password"
              id="password"
              placeholder=" "
            />

            <Label htmlFor="password">Password</Label>
            <Icon>
              <svg width="24" height="24">
                <use href={`${icons}#icon-password`}></use>
              </svg>
            </Icon>
            <FormError name="password" />
          </Wrapper>

          <Wrapper>
            <Button type="submit">log in</Button>
          </Wrapper>
        </StyledForm>
      </Formik>
      <LinkTo to="/register">Registration</LinkTo>
    </FormWrapper>
  );
}
