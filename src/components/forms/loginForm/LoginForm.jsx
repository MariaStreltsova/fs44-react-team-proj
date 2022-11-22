import { UniversalBtn } from 'components/buttons/authButtons/loginBtn/UniversalBtn';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Container, FormikForm } from './LoginForm.styles';
import { FormLogo } from '../formsLogo/formLogo';
import { EmailIcon } from 'images/icons/icon-form/Email';
import { PasswordIcon } from 'images/icons/icon-form/LockPs';
import { Input } from '../inputs/Input/Input';
import { SecurInput } from '../inputs/securInput/securInput';

const validationScheme = Yup.object().shape({
  login: Yup.string().required('Login is requred field'),
  password: Yup.string().required('password is requred field'),
});
const initialState = {
  login: '',
  password: '',
};

export const LoginForm = () => {
  return (
    <Container>
      <FormLogo />

      <Formik
        initialValues={{ ...initialState }}
        validationSchema={validationScheme}
        onSubmit={values => console.log(values)}
      >
        <FormikForm>
          <Input label="E-mail" icon={EmailIcon} mb={30} />
          <SecurInput label="Password" icon={PasswordIcon} mb={40} />

          <UniversalBtn
            title="LOG IN"
            variant="contained"
            type="submit"
            color="#24CCA7"
          />
          <UniversalBtn title="REGISTER" variant="outlined" mb="0px" />
        </FormikForm>
      </Formik>
    </Container>
  );
};
