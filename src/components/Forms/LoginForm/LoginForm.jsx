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
import { useTranslation } from 'react-i18next';
import { t } from 'i18next';

const validationSchema = Yup.object().shape({
  email: Yup.string().required(t('validation.email')),
  password: Yup.string().required(t('validation.password')),
});

export const LoginForm = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema,
    onSubmit: (values, { resetForm }) => {
      dispatch(authOperations.logIn(values));
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
          mb={30}
          id={'email'}
          value={formik.values.email}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helper={formik.errors.email}
        />
        <SecurInput
          label={t('input.password')}
          icon={PasswordIcon}
          mb={40}
          id={'password'}
          value={formik.values.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
          helper={formik.errors.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
        />

        <UniversalBtn
          title={t('button.login')}
          variant="contained"
          type="submit"
          color="#24CCA7"
        />
      </Form>
      <UniversalBtn
        title={t('button.register')}
        variant="outlined"
        mb="0px"
        href={`${BASE_URL_FRONT}/signup`}
      />
    </Container>
  );
};
