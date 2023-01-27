import { Formik, Form, ErrorMessage, Field  } from 'formik';
import * as yup from 'yup';
import {useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Link } from 'react-router-dom';
export default function LoginForm() {
  const dispatch = useDispatch();
  const FormError = ({ name }) => {
    return (
      <ErrorMessage
        name={name}
        render={message => <p>{message}</p>}
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
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
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
  });
  const onSubmit = (values, { resetForm }) => {
   
    const user = {       
        email: values.email,
        password: values.password,        
      }; 
    console.log(user);
    dispatch(
      logIn(user)
    );
    resetForm();
  };

  return (
    <div>
        <Formik
      initialValues={initialValues}
      validationSchema={userSchema}
      onSubmit={onSubmit}
    >
      <Form autoComplete="off">
        <div>
          <Field             
            type="email"
            name="email"
            id="email"            
          />
          <label htmlFor="email"> Email</label>
          <FormError name="email" />
        </div>
        <div>
          <Field             
            type="password"
            name="password"
            id="password"            
          />
          <label htmlFor="password">Password</label>
          <FormError name="password" />
        </div>       

        <div>
          <button type="submit">log in</button>
        </div>
      </Form>
    </Formik>
    <Link  to="/register">Registration</Link>
    </div>
  );
};
