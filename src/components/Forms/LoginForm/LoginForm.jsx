import { UniversalBtn } from 'components/Buttons/AuthButtons/loginBtn/UniversalBtn';
import * as Yup from 'yup';
import { Container, Form } from './LoginForm.styles';
import { FormLogo } from '../FormsLogo/formLogo';
import { EmailIcon } from 'images/icons/icon-form/Email';
import { PasswordIcon } from 'images/icons/icon-form/LockPs';
import { Input } from '../inputs/Input/Input';
import { SecurInput } from '../inputs/SecurInput/SecurInput';
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import { BASE_URL_FRONT } from 'baseUrl/baseUrl';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('email is requred field'),
  password: Yup.string().required('password is requred field'),
});

export const LoginForm = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      dispatch(authOperations.logIn(values));
      resetForm();
    },
  });

  return (
    <Container>
      <FormLogo />
      <Form onSubmit={formik.handleSubmit}>
        <Input
          label="E-mail"
          icon={EmailIcon}
          mb={30}
          id={'email'}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <SecurInput
          label="Password"
          icon={PasswordIcon}
          mb={40}
          id={'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
        />

        <UniversalBtn
          title="LOG IN"
          variant="contained"
          type="submit"
          color="#24CCA7"
        />
      </Form>
      <UniversalBtn
        title="REGISTER"
        variant="outlined"
        mb="0px"
        href={`${BASE_URL_FRONT}/registration`}
      />
    </Container>
  );
};
