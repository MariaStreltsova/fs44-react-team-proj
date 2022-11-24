import React from 'react';
import { Field } from 'formik';
import { allCategories } from './allCategories';

export default function SelectFieldModal({show}) {
  
    return (
      <>
        {show && (           
            <Field
              as="select"
              name="categories"
>
              <option>Select a category</option>
              {allCategories.map((category) => (
          <option value={category.value} key={category.key}>
            {category.value}
          </option>
        ))}
</Field>
 )}
            </>
  );
}