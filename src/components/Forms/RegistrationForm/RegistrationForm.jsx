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
import style from './Registration.module.css';

const validationScheme = Yup.object().shape({
  registration: Yup.string().required('Login is requred field'),
  password: Yup.string().required('password is requred field'),
  confirmPassword: Yup.string().required('password is requred field'),
  name: Yup.string().required('Login is requred field'),
});
const initialState = {
  registration: '',
  password: '878858769569',
  confirmPassword: '',
  name: '',
};

function protectionLine(password) {
  const passLength = password.length;
  if (passLength >= 1 && passLength < 7) {
    return style.lowProtection;
  }
  if (passLength >= 7 && passLength < 10) {
    return style.middleProtection;
  }
  if (passLength >= 10) {
    return style.strongProtection;
  }
  return style.protection;
}


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
           <div className={protectionLine(initialState.password)}></div>
          <Input label="First name" icon={UserIcon} id={'First name'}  mb={40}/>

          <UniversalBtn
            title="REGISTER"
            variant="contained"
            type="submit"
            color="#24CCA7"
          />
          <UniversalBtn
            title="LOG IN"
            variant="outlined"
            mb="0px"
            href="/fs44-react-team-proj/login"
          />
        </FormikForm>
      </Formik>
    </Container>
  );
};
