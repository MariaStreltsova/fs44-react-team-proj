import { Container } from '../LoginForm1/LoginForm.styles';
import { EmailIcon } from 'images/icons/icon-form/Email';
import { PasswordIcon } from '../../../images/icons/icon-form/LockPs';
import { UserIcon } from '../../../images/icons/icon-form/User';
import Box from '@mui/material/Box';
import { FormLogo } from '../FormsLogo/formLogo';
import { SecurInput } from '../inputs/SecurInput1/SecurInput1';
import { Input } from '../inputs/Input/Input1';
import { UniversalBtn } from 'components/Buttons1/AuthButtons1/loginBtn/UniversalBtn';

export const RegistrationForm = () => {
  return (
    <Container>
      <FormLogo />
      <Box
        component="form"
        style={{
          gap: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '410px',
        }}
        noValidate
      >
        <Input label="E-mail" icon={EmailIcon} id={'name'} />
        <SecurInput label="Password" icon={PasswordIcon} id={'Password'} />
        <SecurInput
          label="Confirm password"
          icon={PasswordIcon}
          id={'Confirm password'}
        />
        <Input label="First name" icon={UserIcon} id={'First name'} />

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
      </Box>
    </Container>
  );
};
