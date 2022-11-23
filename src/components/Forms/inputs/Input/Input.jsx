import InputAdornment from '@mui/material/InputAdornment';
import { InputForm, InputLabelForm, InputLabelName } from './Input.styles';

export const Input = ({ icon = null, label = '', mb = 0, id = '' }) => {
  return (
    <InputForm
      variant="standard"
      style={{ width: '100%', marginBottom: `${mb}px` }}
    >
      <InputLabelName htmlFor="component-simple">{label}</InputLabelName>
      <InputLabelForm
        id={id}
        startAdornment={
          <InputAdornment position="start">{icon && icon()}</InputAdornment>
        }
      />
    </InputForm>
  );
};
