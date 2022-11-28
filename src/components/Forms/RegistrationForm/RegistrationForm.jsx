import { Container } from '../LoginForm/LoginForm.styles';
import { EmailIcon } from 'images/icons/icon-form/Email';
import { PasswordIcon } from '../../../images/icons/icon-form/LockPs';
import { UserIcon } from '../../../images/icons/icon-form/User';
import { FormLogo } from '../FormsLogo/formLogo';
import { SecurInput } from '../inputs/SecurInput/SecurInput';
import { Input } from '../inputs/Input/Input';
import { UniversalBtn } from 'components/Buttons/AuthButtons/loginBtn/UniversalBtn';
import { useNavigate } from 'react-router-dom';
import { Form } from './RegistrationForm.styles';

import * as Yup from 'yup';
import { useFormik } from 'formik';
import { BASE_URL_FRONT } from 'baseUrl/baseUrl';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { authOperations } from 'redux/auth';
import PasswordStrenghtMeter from './PasswordStrengthMeter';
import { t } from 'i18next';

const validationSchema = Yup.object().shape({
  email: Yup.string().required(t('validation.email')),
  password: Yup.string()
    .min(6, 'Minimum password length 6 characters')
    .max(12, 'Maximum password length 6 characters')
    .required(t('validation.password')),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], t('validation.passwordMatch'))
    .required(t('validation.confirmPassword')),
  name: Yup.string().required(t('validation.firstName')),
});

export const RegistrationForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
    },
    validationSchema,
    onSubmit: ({ email, password, name }, { resetForm }) => {
      dispatch(authOperations.register({ email, password, name }));
      navigate('/login');
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
          onBlur={formik.handleBlur}
          value={formik.values.email}
          onChange={formik.handleChange}
          error={formik.touched.email && Boolean(formik.errors.email)}
          helper={formik.errors.email}
        />
        <SecurInput
          label={t('input.password')}
          icon={PasswordIcon}
          onBlur={formik.handleBlur}
          id={'password'}
          value={formik.values.password}
          onChange={formik.handleChange}
          helper={formik.errors.password}
          error={formik.touched.password && Boolean(formik.errors.password)}
        />
        <SecurInput
          label={t('input.confirmPassword')}
          icon={PasswordIcon}
          onBlur={formik.handleBlur}
          id={'confirmPassword'}
          value={formik.values.confirmPassword}
          onChange={formik.handleChange}
          helper={formik.errors.confirmPassword}
          error={
            formik.touched.password && Boolean(formik.errors.confirmPassword)
          }
        />

        {formik.values.password && (
          <PasswordStrenghtMeter password={formik.values.password} />
        )}

        <Input
          label={t('input.firstName')}
          icon={UserIcon}
          onBlur={formik.handleBlur}
          id={'name'}
          value={formik.values.name}
          helper={formik.errors.name}
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
