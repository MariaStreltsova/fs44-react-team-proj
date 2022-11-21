import InputAdornment from '@mui/material/InputAdornment';
import { InputForm, InputLabelForm, InputLabelName } from './Input.styles';

export const Input = ({ icon = null, label = '' }) => {
  return (
    <InputForm variant="standard" style={{ width: '100%' }}>
      <InputLabelName htmlFor="component-simple">{label}</InputLabelName>
      <InputLabelForm
        id="input-with-icon-adornment"
        startAdornment={
          <InputAdornment position="start">{icon && icon()}</InputAdornment>
        }
      />
    </InputForm>
  );
};
