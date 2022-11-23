import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { InputAdornment } from "@mui/material";
import 'dayjs/locale/uk';

const locales = ["en", "uk"];

const InputDate = ({ value, setValue, valueKey }) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale={locales.en}>
      <DatePicker
       
        value={value}
        maxDate={new Date()}
        onChange={newValue => {
          setValue(valueKey, newValue);
        }}
              renderInput={params => <TextField {...params}  fullWidth/>}
              InputProps={{endAdornment: (
                    <InputAdornment position="end">
                          <CalendarMonthIcon sx={{color: "#4A56E2"}} />
                    </InputAdornment>
                 ),
         }}
      />
    </LocalizationProvider>
  );
};

export default InputDate;