import {  TextField } from "@mui/material";
import Autocomplete from '@mui/material/Autocomplete';


function SelectFieldModal({show, handleChange, handleBlur}) {


    const expenceList = [
        { label: 'Main', name: "Main", value: "Main" },
        { label: 'Food', name: "Food", value: "Food" },
        { label: 'Auto', name: "Auto", value: "Auto" },
        { label: 'Development', name: "Development", value: "Development"},
        { label: 'Children', name: "Children", value: "Children" },
        { label: 'House', name: "House", value: "House" },
        { label: 'Education', name: "Education", value: "Education" },
        { label: 'Other', name: "Other", value: "Other" },
    ];

  
    return (
        <div>
            
            {show && (<Autocomplete
                disablePortal
                options={expenceList}
                name="categories"
                type="select"
                onChange={handleChange}
              onBlur={handleBlur}
            
                    sx={{
                        width: 300, marginTop: "40px", margonBottom: "40px"}}
                renderInput={(params) => <TextField  {...params} name="select" value="" label="Select a category" />}
            />) }
        </div>
)
}

export default SelectFieldModal;