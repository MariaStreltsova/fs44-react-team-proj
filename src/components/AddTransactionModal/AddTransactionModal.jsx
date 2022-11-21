import React, { useState, useCallback  } from "react";
import { Modal, Box, Typography, Stack, Fab, Button, CircularProgress, Grid, InputAdornment } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { DatePicker } from '@mui/x-date-pickers';
import {Form, Formik, Field} from 'formik';
import { TextField} from "formik-mui";
import { object, number, string} from "yup";
import SelectFieldModal from "./SelectFieldModal";
import ToggleSwitch from "./ToggleSwitch";

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
  const [open, setOpen] = useState(false);
const handleOpen = () => setOpen(true);
const handleClose = () => setOpen(false);
  

  const [show, setShow ] = useState(true);
    const handleToggle = useCallback(() => setShow(prevShow => !prevShow), []);


    const [transaction, setTransaction] = useState();
    const handleTransaction = (newValue) => {
        setTransaction(newValue);
    }

    const initialValues = {
        addAmount: "",
        date: "",
        comment: "",    
        categories: "",
     }
    // const datePattern = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

    const validationSchema = object().shape({
        addAmount: number().required("Provide an amount").min(1, "Your sum must be at least 1"),
        // date: string().matches(datePattern, "Choose date properly").required("Choose date"),
        date: string().required("Choose date"),
        comment: string(),
        // categories: string().required("Select a category"),
    });


   const onFormSubmit = async (values) => {
        console.log("my values:", values);
      return new Promise(res => setTimeout(res, 1500));
    }


    return (
      <>
        <Fab onClick={handleOpen} aria-label="add" sx={{
                backgroundColor: "#24CCA7",
                width: "44px", height: "44px",
                borderRadius: "50px", position: "fixed", bottom: "20px", right: "20px", zIndex: 99,
            }}>
            <AddIcon sx={{ color: "#ffffff"}}/>
        </Fab>
          
        <Modal open={open}
        onClose={handleClose}
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
                <Typography sx={{marginRight: "10px"}}>Income</Typography>
              <ToggleSwitch onToggle={handleToggle}  />     
                  <Typography sx={{marginLeft: "10px"}}>Expense</Typography>
                </Stack>
                 
            <SelectFieldModal show={show} />
            
              <Formik
                 initialValues={initialValues}
                 validationSchema={validationSchema}
                sx={{marginTop: "20px"}}
              enableReinitialize={true}
                onSubmit={onFormSubmit}>
                 {({ values, errors, isSubmitting, touched, handleBlur, setFieldTouched, handleChange, resetForm}) => (
                     <Form autoComplete="off">
                         <Grid container direction="column" spacing={5}>
                          
                         
                             <Grid item>
                                 <Field fullWidth name="addAmount" type="number" placeholder="0.00" label="Amount ($)" component={TextField}/>
                             </Grid>
                        

                             <Grid item
                                 dateAdapter={DatePicker}
                             >
                                 <Field fullWidth name="date" placeholder="DD/MM/YYYY" format="DD/MM/YYYY"
                                     selected={values.date}
                                    value={values.date}
                                     component={TextField}
                                     onBlur={handleBlur}
                                     onClick={() => setFieldTouched("date", true)}
                                    
                                     InputProps={{
                                         endAdornment: (
                                        <InputAdornment position="end">
                                            <CalendarMonthIcon sx={{color: "#4A56E2"}} />
                                        </InputAdornment>
                                                    ),
                                     }}
                                 />
                            </Grid>
                             
                             <Grid item>
                                 <Field fullWidth  name="comment" label="Comment" component={TextField} />
                             </Grid>
                            
                            <Button disabled={isSubmitting} type="submit" variant="contained" color="success" spacing={3}
                                 startIcon={isSubmitting ? <CircularProgress size="0.9rem" /> : undefined}
                                 onClick={handleTransaction}
                                     onSubmit={resetForm}
                                sx={{ backgroundColor: "#24CCA7", color: "#ffffff",
                                 marginBottom: "20px", borderRadius: "10px", width: "300px", height: "50px"  }}
                                    >{isSubmitting ? "Adding" : "Add"}
                                     
                                 </Button>
                             
                         </Grid>     
                    
                         {/* <pre>{JSON.stringify({ values, errors }, null, 4)}</pre> */}
                     </Form>
             )}
            </Formik>
                    <Button spacing={3}
                                 sx={{ border: "2px solid #4A56E2", borderRadius: "10px", width: "300px", height: "50px" }}
                                 onClick={handleClose}>Cancel</Button>
     </Box>
 </Modal>
</>
    )
}

export default AddTransactionBtn;
