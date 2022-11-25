import React, { useState, useCallback} from "react";
import { CircularProgress, Grid, } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Form, Formik, Field, useFormik} from 'formik';
import { TextField} from "formik-mui";
import { object, number, string, boolean} from "yup";
import SelectFieldModal from "./SelectFieldModal";
import ToggleSwitch from "./ToggleSwitch";
import "react-datepicker/dist/react-datepicker.css";
import {MyFab, MyBox, MyModal, DataPickerWrapper, MyDataPicker, ModalBtn, ModalHeader } from "./ModalCustomStyles";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";

// import {
//     addTransaction,
//     getTransactionsList,
// } from '../../redux/wallet/wallet-operations';
// import { useDispatch} from 'react-redux'
// import { getCategoriesList } from '../../redux/wallet/wallet-selectors';



function AddTransactionBtn(){
  const [open, setIsOpen] = useState(false);
   
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setTransaction("");
    setIsOpen(false);
  };

  const [show, setShow ] = useState(true);
  const handleToggle = useCallback(() => setShow(prevShow => !prevShow), []);

// const handleInputChange = (event) => {
//     const name = event.target.name
//     const value =
//       event.target.type === 'checkbox'
//         ? event.target.checked
//         : event.target.value
//     updateTransaction(name, value)
//     if (event.target.type === 'checkbox') {
//       updateTransaction('categories', '')
//     }
//   }
// const updateTransaction = (name, value) => {
//     setTransaction((prev) => ({ ...prev, [name]: value }))
//   }


  const f = useFormik({
    initialValues: {
    type: false,
    addAmount: "",
    transactionDate: new Date().toLocaleDateString("en-gb"),
    comment: "",    
    categories: "",
    },
  });

  const [transaction, setTransaction] = useState(f.initialValues);

    const validationSchema = object().shape({
      addAmount: number().required("Provide an amount").min(1, "Your sum must be at least 1").max(100000, "Maximum sum if 100000"),
      transactionDate: string().required("Choose date"),
      type: boolean().required(),
      comment: string().max(15, "You can enter only 15 symbols"),
    });
  
    return (
      <StyledEngineProvider injectFirst>
        <MyFab onClick={openModal} aria-label="add">
            <AddIcon sx={{ color: "#ffffff"}}/>
        </MyFab>
          
        <MyModal open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{  padding:"20px 11px"}}
       >
                      
          <MyBox >
            <ModalHeader> Add transaction </ModalHeader>

             <Formik
              initialValues={f.initialValues}
              validationSchema={validationSchema}
              sx={{ marginTop: "20px" }}
              enableReinitialize={true}
              onSubmit={(values, { resetForm }) => {
                setTimeout(() => {
                  console.log(values);
                  resetForm({ values: "" });
                }, 1000);
              }}
            >
              {({ values, isSubmitting, setFieldValue, handleSubmit}) => (
                <Form autoComplete="off" onSubmit={handleSubmit}>
                  <Grid container direction="column" spacing={3}>
                    
                    <Field name="type" value={transaction.type} component={ToggleSwitch} onChange={handleToggle}
                     />

                   <Grid item sx={{marginTop: "40px"}}>
                        <SelectFieldModal show={show} value={transaction.categories} />
                    </Grid>
                    

                    <Grid item>
                      <Field fullWidth name="addAmount" type="number" placeholder="0.00" label="Amount ($)" component={TextField} />
                    </Grid>

                    <Grid item >
                      <DataPickerWrapper direction="row">
                          <MyDataPicker
                          name="transactionDate"
                          dateFormat="dd/MM/yyyy"              
                          value={values.transactionDate}
                          onChange={(date) => {
                          const d = new Date(date).toLocaleDateString("en-gb");
                          setFieldValue("transactionDate", d, true);
                          }}
                        />
                        <CalendarMonthIcon sx={{color: "#4A56E2"}} />
                      </DataPickerWrapper>
                    </Grid>
                    
                    <Grid item>
                      <Field fullWidth name="comment" label="Comment" component={TextField} minRows={1} maxRows={3} />
                    </Grid>
                  
                  </Grid>

                  <ModalBtn disabled={isSubmitting} type="submit" variant="contained" color="success" spacing={2}
                    startIcon={isSubmitting ? <CircularProgress size="0.9rem" /> : undefined}
                    sx={{ backgroundColor: "#24CCA7", color: "#ffffff",  marginBottom: "20px", marginTop: "20px",  }}
                  > {isSubmitting ? "Adding" : "Add"}
                    </ModalBtn>
                
                </Form>
              )}
            </Formik>
                    <ModalBtn  sx={{ border: "2px solid #4A56E2", color: "#4A56E2" }}
                                 onClick={closeModal}>Cancel</ModalBtn>
     </MyBox>
 </MyModal>
</StyledEngineProvider>
    )
}

export default AddTransactionBtn;
