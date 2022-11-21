import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import { UniversalBtn } from 'components/buttons/authButtons/loginBtn/UniversalBtn';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Container, FormikForm } from './LoginForm.styles';
import { FormLogo } from '../formsLogo/formLogo';

const validationScheme = Yup.object().shape({
  login: Yup.string().required('Login is requred field'),
  password: Yup.string().required('password is requred field'),
});
const initialState = {
  login: '',
  password: '',
};

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
      <FormLogo />

      <Formik
        initialValues={{ ...initialState }}
        validationSchema={validationScheme}
        onSubmit={values => console.log(values)}
      >
        <FormikForm>
          <TextField
            id="standard-basic"
            label="E-mail"
            variant="standard"
            name="login"
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
              name={'password'}
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
