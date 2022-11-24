import React, { useState, useCallback } from "react";
import { Modal, Box, Typography, Stack, Fab, Button, CircularProgress, Grid, } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Form, Formik, Field, useFormik} from 'formik';
import { TextField} from "formik-mui";
import { object, number, string, boolean} from "yup";
import SelectFieldModal from "./SelectFieldModal";
import ToggleSwitch from "./ToggleSwitch";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { DataPickerWrapper, MyDataPicker } from "./CustomizedDataPicker";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

// import {
//     addTransaction,
//     getTransactionsList,
// } from '../../redux/wallet/wallet-operations';
// import { useDispatch} from 'react-redux'
// import { getCategoriesList } from '../../redux/wallet/wallet-selectors';

const style = {
  position: "absolute",
    top: 0,
  left: 0,
  rigth: 0,
    bottom: 0,
    width: '100vw',
    height: '100vh',
  overflowY: "scroll",
    overflowX: "scroll",
    scrollbarWidth: "hidden",
    border: "none",
   backgroundColor: "#ffffff",
    display: "flex",
  flexDirection: "column",
  alignItems: "center",
  padding: "0",
  zIdex: 10,
};

function AddTransactionBtn(){
  const [open, setIsOpen] = useState(false);
  const [transaction, setTransaction] = useState("");
  
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setTransaction("");
    setIsOpen(false);
  };

const handleInputChange = (event) => {
    const name = event.target.name
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value
    updateTransaction(name, value)
    if (event.target.type === 'checkbox') {
      updateTransaction('category', '')
    }
  }
const updateTransaction = (name, value) => {
    setTransaction((prev) => ({ ...prev, [name]: value }))
  }

  const [show, setShow ] = useState(true);
  const handleToggle = useCallback(() => setShow(prevShow => !prevShow), []);


  const f = useFormik({
    initialValues: {
    type: false,
    addAmount: "",
    transactionDate: new Date().toLocaleDateString("en-gb"),
    comment: "",    
    categories: "",
    },
  });

    const validationSchema = object().shape({
        addAmount: number().required("Provide an amount").min(1, "Your sum must be at least 1"),
      transactionDate: string().required("Choose date"),
      type: boolean().required(),
        comment: string().max(15, "You can enter only 15 symbols"),
    });

  // const onSubmit = async (values, { resetForm }) => {
  //   console.log(values);
  //   return new Promise(res => setTimeout(res, 1500));
  //   resetForm({ values: "" });
  // };


    return (
      <>
        <Fab onClick={openModal} aria-label="add" sx={{
                backgroundColor: "#24CCA7",
                width: "44px", height: "44px",
                borderRadius: "50px", position: "fixed", bottom: "20px", right: "20px", zIndex: 99,
            }}>
            <AddIcon sx={{ color: "#ffffff"}}/>
        </Fab>
          
        <Modal open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          sx={{  padding:"20px 11px"}}
       >
                      
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2"
              sx={{ fontSize: "24px", lineHeight: "36px", textAlign: "center", marginBottom: "40px", marginTop: "20px" }}
            >
           Add transaction 
            </Typography>

                <Stack direction="row" spacing={1} alignItems="center">
              <Typography sx={{ marginRight: "10px" }} className={
                !transaction.type ? 'active-green' : ''}>
                Income</Typography>
              <ToggleSwitch onChange={handleInputChange} onToggle={handleToggle}
              checked={transaction.type}/>     
              <Typography sx={{ marginLeft: "10px" }} default="checked" value={f.values.type} className={transaction.type ? 'active-pink' : ''}
              >Expense</Typography>
            </Stack>

             
             <Formik
              initialValues={f.initialValues}
              validationSchema={validationSchema}
              sx={{ marginTop: "20px" }}
              enableReinitialize={true}
              onSubmit={(values, { resetForm }) => {
                console.log(values);
                resetForm({ values: "" });
              }}
            >
              {({ values, errors, isSubmitting, setFieldValue, handleSubmit, resetForm}) => (
                <Form autoComplete="off" onSubmit={handleSubmit}>
                  <Grid container direction="column" spacing={5}>
                    
                    <Grid item>
                      <SelectFieldModal show={show} value={values.categories} />
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
        className="MyDataPicker"     
        onChange={(date) => {
          const d = new Date(date).toLocaleDateString("en-gb");
          setFieldValue("transactionDate", d, true);
                          }}
                        />
                        <CalendarMonthIcon sx={{color: "#4A56E2"}} />
                </DataPickerWrapper>
                    </Grid>
                    
                    <Grid item>
                      <Field fullWidth name="comment" label="Comment" component={TextField} />
                    </Grid>
                  
                  </Grid>

                  <Button disabled={isSubmitting} type="submit" variant="contained" color="success" spacing={3}
                    startIcon={isSubmitting ? <CircularProgress size="0.9rem" /> : undefined}
                      sx={{
                        backgroundColor: "#24CCA7", color: "#ffffff",
                        marginBottom: "20px", borderRadius: "10px", width: "300px", height: "50px"
                    }}
                  > {isSubmitting ? "Adding" : "Add"}
                    </Button>
                
                </Form>
              )}
            </Formik>
            
                    <Button  sx={{ border: "2px solid #4A56E2", borderRadius: "10px", width: "300px", height: "50px" }}
                                 onClick={closeModal}>Cancel</Button>
     </Box>
 </Modal>
</>
    )
}

export default AddTransactionBtn;
