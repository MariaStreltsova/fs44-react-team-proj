import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {
  IconColorButtom,
  InputLabelName,
  InputLabelForm,
} from './securInput.styles';

export const SecurInput = ({ label = '', icon = null }) => {
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
  //   const handleClickShowConfirmPassword = () => {
  //     setValues({
  //       ...values,
  //       showConfirmPassword: !values.showConfirmPassword,
  //     });
  //   };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{ m: 1, width: '100%' }} variant="standard">
      <InputLabelName htmlFor="standard-adornment-password">
        {label}
      </InputLabelName>
      <InputLabelForm
        id="standard-adornment-password"
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={handleChange('password')}
        startAdornment={
          <InputAdornment position="start">{icon && icon()}</InputAdornment>
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
  );
};
