import { Formik, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import icons from '../../images/icons.svg';
import Button from 'components/UI/Button/Button';
import Logo from 'components/Logo/Logo';
import {
  FormWrapper,
  StyledForm,
  Wrapper,
  Label,
  Icon,
  Input,
  ErrorMess,
  LinkTo,
} from '../LoginForm/LoginForm.styled';



export default function RegistrationForm() {
  const dispatch = useDispatch();
  const FormError = ({ name }) => {
    return <ErrorMessage name={name} render={message => <ErrorMess>{message}</ErrorMess>} />;
  };
  const initialValues = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  };
  const userSchema = yup.object().shape({
    email: yup
      .string()
      .matches(
        /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        'Email may contain letters, @, numbers. For example bar.ba@test.co.uk'
      )
      .required(),
    password: yup
      .string()
      .matches(
        /^.{6,12}$/,
        'Password must contain minimum 6 to 12 include symbols.'
      )
      .required(),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Your passwords do not match.')
      .required(),
    username: yup
      .string()
      .matches(
        /^.{1,12}$/,
        'Username must contain minimum 1 to 12 include symbols.'
      )
      .required(),
  });
  const onSubmit = (values, { resetForm }) => {
    const user = {
      username: values.username,
      email: values.email,
      password: values.password,
    };
    
    dispatch(register(user));
    resetForm();
  };

  return (
    <FormWrapper>
      <Logo/>
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
            <Input type="password" name="password" id="password" placeholder=" " />
            <Label htmlFor="password">Password</Label>
            <Icon>
              <svg width="24" height="24">
                <use href={`${icons}#icon-password`}></use>
              </svg>
            </Icon>
            <FormError name="password" />
          </Wrapper>
          <Wrapper>
            <Input type="password" name="confirmPassword" id="confirmPassword" placeholder=" " />
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Icon>
              <svg width="24" height="24">
                <use href={`${icons}#icon-password`}></use>
              </svg>
            </Icon>
            <FormError name="confirmPassword" />
          </Wrapper>
          <Wrapper>
            <Input type="username" name="username" id="username" placeholder=" "  />
            <Label htmlFor="username">First Name</Label>
            <Icon>
              <svg width="24" height="24">
                <use href={`${icons}#icon-name`}></use>
              </svg>
            </Icon>
            <FormError name="username" />
          </Wrapper>

          <Wrapper>
            <Button type="submit" text='Registrer'/>
          </Wrapper>
        </StyledForm>
      </Formik>
      <LinkTo to="/login">log in</LinkTo>
    </FormWrapper>
  );
}
