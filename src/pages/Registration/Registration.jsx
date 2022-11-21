import { Container } from '../Login/Login.styled';
import { Link } from 'react-router-dom';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import {ButtonRegistr, ButtonLogin, IconColorButtom, InputForm, InputLabelName, InputLabelForm, BoxBottoms, Label} from "../Registration/Registration.styled"
import { EmailIcon } from '../../images/icons/icon-form/Email';
import { PasswordIcon} from '../../images/icons/icon-form/LockPs';
import { UserIcon} from '../../images/icons/icon-form/User';
import Box from '@mui/material/Box';
import LogoIcon from "../../components/Logo/LogoForm"

const Registration = () => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmpassword: '',
    name: '',
    showPassword: false,
    showConfirmPassword: false,
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
   const handleClickShowConfirmPassword = () => {
    setValues({
      ...values,
      showConfirmPassword: !values.showConfirmPassword,
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
          '& > :not(style)': { m: 1, width: '400px' },
        }}
        style={{gap:"20px"}}
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
        <InputForm variant="standard">
            <InputLabelName htmlFor="component-simple">Email</InputLabelName>
            <InputLabelForm id="input-with-icon-adornment"startAdornment= {
                <InputAdornment position="start">
                    <EmailIcon />
                </InputAdornment>
                }
            />
        </InputForm>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabelName htmlFor="standard-adornment-password">
            Password
          </InputLabelName>
          <InputLabelForm
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            startAdornment= {
                <InputAdornment position="start">
                    <PasswordIcon />
                </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconColorButtom 
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconColorButtom>
              </InputAdornment>
            }
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="standard">
          <InputLabelName htmlFor="standard-adornment-password">
            Confirm password
          </InputLabelName>
          <InputLabelForm
            id="standard-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.confirmpassword}
            onChange={handleChange('confirmpassword')}
            startAdornment= {
                <InputAdornment position="start">
                    <PasswordIcon />
                </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconColorButtom
                  aria-label="toggle confirmpassword visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {values.showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                </IconColorButtom>
              </InputAdornment>
            }
          />
        </FormControl>
         <FormControl variant="standard">
            <InputLabelName htmlFor="component-simple">Name</InputLabelName>
             <InputLabelForm id="input-with-icon-adornment" startAdornment= {
                <InputAdornment position="start">
                    <UserIcon />
                </InputAdornment>
                }
            />
        </FormControl>
        <BoxBottoms display={'flex'} flexDirection={'column'}>
            <ButtonRegistr variant="contained">REGISTER</ButtonRegistr>
            <Link to="/login" style={{textDecoration: 0}}>
             <ButtonLogin variant="outlined" type="submit">LOGIN IN</ButtonLogin>
          </Link>
        </BoxBottoms>
      </Box>
    </Container>
  );
};

export default Registration;