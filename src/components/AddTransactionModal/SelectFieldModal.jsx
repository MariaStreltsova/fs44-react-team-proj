import React from 'react';
import { Field } from 'formik';
import { allCategories } from './allCategories';
import CustomizedSelectForFormik from "./CustomizedSelect";
import { FormControl, InputLabel } from '@mui/material';
import { MyMenuItem } from "./ModalCustomStyles";

export default function SelectFieldModal({show}) {
  
    return (
      <>
        {show && (           
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label" >Select a category</InputLabel>
            <Field
            type="select"
            name="categories"
            label="Select a category"
              component={CustomizedSelectForFormik} 
>
              {allCategories.map((category) => (
                < MyMenuItem value={category.value}  key={category.key}> 
            {category.value}
                  </ MyMenuItem>
        ))}
            </Field>
            </FormControl>
 )}
            </>
  );
}

