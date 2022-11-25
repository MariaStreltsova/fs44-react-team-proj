import React, { useState, useCallback} from "react";
import { CircularProgress } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Form, Formik, Field, useFormik} from 'formik';
import { TextField} from "formik-mui";
import { object, number, string} from "yup";
import SelectFieldModal from "./SelectFieldModal";
import "react-datepicker/dist/react-datepicker.css";
import { MyFab, MyBox, MyModal, DataPickerWrapper, MyDataPicker, ModalBtn, ModalHeader, MiddleWrapper, CloseFab, BasicFormDiv, BasicWrapper, BtnDiv } from "./ModalCustomStyles";
import {  SwitchLabel, Income, Expense, SwitchField, Slider } from "./ToggleSwitch.styled";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import CloseIcon from '@mui/icons-material/Close';
// import { useDispatch} from 'react-redux';
// import {
//     addTransaction,
//     getTransactionsList,
// } from '../../redux/wallet/wallet-operations';
// import { getCategoriesList } from '../../redux/wallet/wallet-selectors';


function AddTransactionBtn() {
  
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
      addAmount: number().required("Provide an amount").min(1, "Your sum must be at least 1").max(100000, "Maximum sum if 100000"),
      transactionDate: string().required("Choose date"),
      type: string().required(),
      comment: string().max(15, "You can enter only 15 symbols"),
  });

  const [open, setIsOpen] = useState(false);
  const openModal = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setTransaction("");
    setIsOpen(false);
  };
  const [transaction, setTransaction] = useState(f.initialValues);
  
  const [show, setShow ] = useState(true);
  const handleToggle = useCallback(() => setShow(prevShow => !prevShow), []); 

  const [isChecked, setIsChecked] = useState(true);
  const addClass = (checked) => {
    if (!checked) {
          return "disabled";
    }
  }
  
  const handleCheck = () => {
      setIsChecked(!isChecked);
      f.setFieldValue();  
        handleToggle();
 
    
  }

  // const dispatch = useDispatch();
  
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
            <CloseFab onClick={closeModal} aria-label="add">
            <CloseIcon sx={{ color: "#000000", backgroundColor: "transparent", width: "16px", height: "16px"}} onClick={closeModal}/>
            </CloseFab> 

            <ModalHeader> Add transaction </ModalHeader>

             <Formik
              initialValues={f.initialValues}
              validationSchema={validationSchema}
              
              enableReinitialize={true}
              onSubmit={(values, { resetForm }) => {
                setTimeout(() => {
                  // dispatch(addTransaction(values));
                  console.log(values);
                  resetForm({ values: "" });
                }, 1000);
              }}
            >
              {({ values, isSubmitting, setFieldValue, handleSubmit}) => (
                <Form autoComplete="off" onSubmit={handleSubmit}>
                  <BasicWrapper>
                    
      <BasicFormDiv >
      <SwitchLabel>
                        <Income
                          className={addClass(!isChecked && `${!transaction.type}`)}
                          name="Income">Income</Income> 
                        <SwitchField checked={isChecked} type="checkbox" name="type" onChange={handleCheck} />
                    <Slider />
                        <Expense
                          className={addClass(isChecked && `${transaction.type}`)}
                          name="Expense">Expense</Expense>
      </SwitchLabel>
      </BasicFormDiv>


                    {!f.type && (
                      <BasicFormDiv item >
                      <SelectFieldModal show={show} value={transaction.categories} />
                    </BasicFormDiv>
                  )}
                    
                  <MiddleWrapper container>
                    <BasicFormDiv item>
                      <Field fullWidth name="addAmount" type="number" placeholder="0.00" label="Amount ($)"  component={TextField} />
                    </BasicFormDiv>
                    
                    <BasicFormDiv item>
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
                    </BasicFormDiv>
                  </MiddleWrapper>
                    
                    <BasicFormDiv item>
                      <Field fullWidth name="comment" label="Comment" component={TextField} minRows={1} maxRows={3} />
                    </BasicFormDiv>
                  
                  </BasicWrapper>
                        
                  <BtnDiv>
                <ModalBtn disabled={isSubmitting} type="submit" variant="contained" color="success" 
                    startIcon={isSubmitting ? <CircularProgress size="0.9rem" /> : undefined}
                    sx={{ backgroundColor: "#24CCA7", color: "#ffffff",  margin: "20px 0", alignSelf: "center" }}
                  > {isSubmitting ? "Adding" : "Add"}
                    </ModalBtn>
                <ModalBtn  sx={{ border: "2px solid #4A56E2", color: "#4A56E2" }}
                      onClick={closeModal}>Cancel</ModalBtn>
                    </BtnDiv>
                   
                </Form>
                
              )}
            </Formik>
                    
     </MyBox>
 </MyModal>
</StyledEngineProvider>
    )
}

export default AddTransactionBtn;
