import { Container } from '../loginForm/LoginForm.styles';
import { EmailIcon } from 'images/icons/icon-form/Email';
import { PasswordIcon } from '../../../images/icons/icon-form/LockPs';
import { UserIcon } from '../../../images/icons/icon-form/User';
import Box from '@mui/material/Box';
import { FormLogo } from '../formsLogo/formLogo';
import { SecurInput } from '../inputs/securInput/securInput';
import { Input } from '../inputs/Input/Input';
import { UniversalBtn } from 'components/buttons/authButtons/loginBtn/UniversalBtn';

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
        <Input label="Name" icon={EmailIcon} />
        <SecurInput label="Password" icon={PasswordIcon} />
        <SecurInput label="Confirm password" icon={PasswordIcon} />
        <Input label="Name" icon={UserIcon} />

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
          href="/login" //correct this navigate
        />
      </Box>
    </Container>
  );
};
