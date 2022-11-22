import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function SelectFieldModal({show}) {

  const [category, setCategory] = React.useState("");

  const handleChange = (event) => {
   setCategory(event.target.value);
  };

    return (
  <>
            {show && (<Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="modal-select">Select a category</InputLabel>
                    <Select
                        labelId="modal-select-label"
                        id="modal-select-id"
                        value={category}
                        label="Select a category"
                        onChange={handleChange}
                    >
                        <MenuItem value={"Main"}>Main</MenuItem>
                        <MenuItem value={"Food"}>Food</MenuItem>
                        <MenuItem value={"Auto"}>Auto</MenuItem>
                        <MenuItem value={"Development"}>Development</MenuItem>
                        <MenuItem value={"Children"}>Children</MenuItem>
                        <MenuItem value={"House"}>House</MenuItem>
                        <MenuItem value={"Education"}>Education</MenuItem>
                        <MenuItem value={"Other"}>Other</MenuItem>
                    </Select>
                </FormControl>
            </Box>)}
            </>
  );
}