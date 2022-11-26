import InputAdornment from '@mui/material/InputAdornment';
import { InputForm, InputLabelForm } from './Input.styles';

export const Input = ({
  icon = null,
  label = '',
  value,
  mb = 0,
  id = '',
  onChange,
  error,
}) => {
  return (
    <InputForm
      variant="standard"
      style={{ width: '100%', marginBottom: `${mb}px` }}
    >
      <InputLabelForm
        onChange={onChange}
        id={id}
        name={id}
        value={value}
        error={error}
        placeholder={label}
        startAdornment={
          <InputAdornment position="start">{icon && icon()}</InputAdornment>
        }
      />
    </InputForm>
  );
};
