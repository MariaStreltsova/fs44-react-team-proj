import React from 'react';
import { Field } from 'formik';
import { allCategories } from './allCategories';
import CustomizedSelectForFormik from "./CustomizedSelect";
import { FormControl, MenuItem, InputLabel } from '@mui/material';

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
          < MenuItem value={category.value} key={category.key}>
            {category.value}
          </ MenuItem>
        ))}
            </Field>
            </FormControl>
 )}
            </>
  );
}