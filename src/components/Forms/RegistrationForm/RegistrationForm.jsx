import { UniversalBtn } from 'components/Buttons/AuthButtons/loginBtn/UniversalBtn';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Container, FormikForm } from './RegistrationForm.styles';
import { FormLogo } from '../FormsLogo/formLogo';
import { EmailIcon } from 'images/icons/icon-form/Email';
import { PasswordIcon } from 'images/icons/icon-form/LockPs';
import { UserIcon } from '../../../images/icons/icon-form/User';
import { Input } from '../inputs/Input/Input';
import { SecurInput } from '../inputs/SecurInput/SecurInput';

const validationScheme = Yup.object().shape({
  registration: Yup.string().required('Login is requred field'),
  password: Yup.string().required('password is requred field'),
  confirmPassword: Yup.string().required('password is requred field'),
  name: Yup.string().required('Login is requred field'),
});
const initialState = {
  registration: '',
  password: '',
  confirmPassword: '',
  name: '',
};


export const RegistrationForm = () => {
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
          <SecurInput label="ConfirmPassword" icon={PasswordIcon} id={'Confirm Password'} mb={40} />
          <Input label="First name" icon={UserIcon} id={'First name'}  mb={40}/>

          <UniversalBtn
            title="REGISTER"
            variant="outlined"
            href="/fs44-react-team-proj/login"
          />
           <UniversalBtn
            title="LOG IN"
            variant="contained"
            mb="0px"
            type="submit"
            color="#24CCA7"
          />
        </FormikForm>
      </Formik>
    </Container>
  );
};
