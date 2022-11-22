import React, {useState} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


const categories = [
    { key: "Main", value: "Main" },
    { key: "Food", value: "Food" },
    { key: "Auto", value: "Auto" },
    { key: "Development", value: "Development" },
    { key: "Children", value: "Children" },
    { key: "House", value: "House" },
    { key: "Education", value: "Education" },
    { key: "Other", value: "Other" },
];

export default function SelectFieldModal({show}) {

const [category, setCategory] = useState("");

const handleCategory = (event) => {
    console.log(event.target.value);
    setCategory(event.target.value);
  };
    return (
  <>
            {show && (<Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>

                <InputLabel id="modalSelect">Select a category</InputLabel>
                    <Select
                        labelId="selectLabel"
                        id="select"
                        value={category}
                        label="Select a category"
                        onChange={handleCategory}
                    >
                        {categories.map((category) => (
          <MenuItem value={category.value} key={category.key}>
            {category.value}
          </MenuItem>
        ))}
                      
                    </Select>
                </FormControl>
            </Box>)}
            </>
  );
}