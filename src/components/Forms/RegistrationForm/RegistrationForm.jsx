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
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('email is requred field'),
  password: Yup.string().required('password is requred field'),
  confirmPassword: Yup.string().required('confirmPassword is requred field'),
  name: Yup.string().required('firstName is requred field'),
});

export const RegistrationForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
    },
    validationSchema,
    onSubmit: ({ email, password, name }, { resetForm }) => {
      console.log({ email, password, name });
      dispatch(authOperations.register({ email, password, name }));
      resetForm();
    },
  });

  return (
    <Container>
      <FormLogo mb={40} />
      <Form onSubmit={formik.handleSubmit}>
        <Input
          label={t('input.email')}
          icon={EmailIcon}
          id={'email'}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
        />
        <SecurInput
          label={t('input.password')}
          icon={PasswordIcon}
          id={'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          error={formik.touched.password && Boolean(formik.errors.password)}
        />
        <SecurInput
          label={t('input.confirmPassword')}
          icon={PasswordIcon}
          id={'confirmPassword'}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          error={
            formik.touched.password && Boolean(formik.errors.confirmPassword)
          }
        />
        <Input
          label={t('input.firstName')}
          icon={UserIcon}
          id={'name'}
          value={formik.values.name}
          onChange={formik.handleChange}
          error={formik.touched.name && Boolean(formik.errors.name)}
        />

        <UniversalBtn
          title={t('button.register')}
          variant="contained"
          type="submit"
          color="#24CCA7"
        />
      </Form>
      <UniversalBtn
        title={t('button.login')}
        variant="outlined"
        mb="0px"
        href={`${BASE_URL_FRONT}/login`}
      />
    </Container>
  );
};
