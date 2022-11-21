import { Container, Title, TitleText, Logo } from './LoginForm.styles';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import Box from '@mui/material/Box';
import { AuthBtn } from 'components/buttons/authButtons/loginBtn/AuthBtn';
import { WalletSvg } from 'images/icons/WalletSvg';

export const LoginForm = () => {
  const [values, setValues] = useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Container>
      <Title>
        <Logo> {WalletSvg()}</Logo>
        <TitleText>Wallet</TitleText>
      </Title>
      <Box
        component="form"
        noValidate
        autoComplete="off"
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
      >
        <TextField
          id="standard-basic"
          label="E-mail"
          variant="standard"
          style={{ width: '100%', margin: '0 0 40px 0' }}
        />
        <FormControl
          style={{ width: '100%', marginBottom: '40px' }}
          variant="standard"
        >
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Box display={'flex'} flexDirection={'column'} alignItems="center">
          <AuthBtn
            title="LOG IN"
            variant="contained"
            type="submit"
            color="#24CCA7"
          />
          <AuthBtn
            title="REGISTER"
            variant="outlined"
            mb="0px"
            href="https://youtu.be/JjNLA-EtsSQ?list=RDMM&t=34"
          />
        </Box>
      </Box>
    </Container>
  );
};
