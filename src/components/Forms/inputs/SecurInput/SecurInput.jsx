import { useState } from 'react';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { IconColorButtom, InputLabelForm } from './SecurInput.styles';
import { FormHelperText } from '@mui/material';

export const SecurInput = ({
  label = '',
  icon = null,
  mb = 0,
  id = '',
  value,
  onChange,
  error,
  helper,
}) => {
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmpassword: '',
    name: '',
    showPassword: false,
    showConfirmPassword: false,
  });

  // const handleChange = prop => event => {
  //   setValues({ ...values, [prop]: event.target.value });
  // };

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
    <FormControl
      sx={{ m: 1, width: '100%', marginBottom: `${mb}px` }}
      variant="standard"
    >
      <InputLabelForm
        id={id}
        type={values.showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        error={error}
        placeholder={label}
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
      {error && <FormHelperText name={id} style={{color: "red"}}>{helper}</FormHelperText>}
    </FormControl>
  );
};
