import { Container } from '../LoginForm/LoginForm.styles';
import { EmailIcon } from 'images/icons/icon-form/Email';
import { PasswordIcon } from '../../../images/icons/icon-form/LockPs';
import { UserIcon } from '../../../images/icons/icon-form/User';
import { FormLogo } from '../FormsLogo/formLogo';
import { SecurInput } from '../inputs/SecurInput/SecurInput';
import { Input } from '../inputs/Input/Input';
import { UniversalBtn } from 'components/Buttons/AuthButtons/loginBtn/UniversalBtn';
import { Form } from './RegistrationForm.styles';
import * as Yup from 'yup';
import { useFormik } from 'formik';
import { BASE_URL_FRONT } from 'baseUrl/baseUrl';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('email is requred field'),
  password: Yup.string().required('password is requred field'),
  confirmPassword: Yup.string().required('confirmPassword is requred field'),
  firstName: Yup.string().required('firstName is requred field'),
});

export const RegistrationForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      firstName: '',
    },
    validationSchema,
    onSubmit: ({ email, password, firstName }, { resetForm }) => {
      console.log({ email, password, firstName });
      //  dispatch(authOperations.logIn(values));

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
          id={'email'}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <SecurInput
          label="Password"
          icon={PasswordIcon}
          id={'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
        />
        <SecurInput
          label="Confirm password"
          icon={PasswordIcon}
          id={'confirmPassword'}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.password && Boolean(formik.errors.confirmPassword)
          }
        />
        <Input
          label="First name"
          icon={UserIcon}
          id={'firstName'}
          value={formik.values.firstName}
          onChange={formik.handleChange}
          error={formik.touched.firstName && Boolean(formik.errors.firstName)}
        />

        <UniversalBtn
          title="REGISTER"
          variant="contained"
          type="submit"
          color="#24CCA7"
        />
      </Form>
      <UniversalBtn
        title="LOG IN"
        variant="outlined"
        mb="0px"
        href={`${BASE_URL_FRONT}/login`}
      />
    </Container>
  );
};
