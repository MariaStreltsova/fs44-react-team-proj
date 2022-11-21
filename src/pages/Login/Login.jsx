import { Container } from './Login.styled';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import { ButtonLogin, ButtonRegistr, BoxBottoms } from 'pages/Registration/Registration.styled';
import LogoIcon from "../../components/Logo/LogoForm"

import Box from '@mui/material/Box';

const Login = () => {
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
      <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '410px' },
        }}
        noValidate
        autoComplete="off"
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
      >
         <LogoIcon style={{
            display: "inline-flex",
            justifyContent: "center",
            }}/> 
        <TextField id="standard-basic" label="E-mail" variant="standard" />
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
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
        <BoxBottoms display={'flex'} flexDirection={'column'}>
           <ButtonRegistr variant="contained" type="submit">LOGIN IN</ButtonRegistr>
            <Link to="/registration">
             <ButtonLogin variant="outlined">REGISTER</ButtonLogin>
          </Link>
          {/* <Button variant="contained" type="submit">
            LOGIN IN
          </Button>
          <Button variant="outlined">REGISTER</Button> */}
        </BoxBottoms>
      </Box>
    </Container>
  );
};

export default Login;
