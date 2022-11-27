import React, { useState, useCallback} from "react";
import { CircularProgress } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Form, Formik, Field, useFormik} from 'formik';
import { TextField} from "formik-mui";
import { object, number, string} from "yup";
import SelectFieldModal from "./SelectFieldModal";
import operations from '../../redux/wallet/wallet-operations';
import "react-datepicker/dist/react-datepicker.css";
import {
  MyFab, MyBox, MyModal, DataPickerWrapper, MyDataPicker, ModalBtn, ModalHeader, MiddleWrapper, MiddleFormDiv,
  CloseFab, BasicFormDiv, BasicWrapper, BtnDiv
} from "./ModalCustomStyles";
import {  SwitchLabel, Income, Expense, SwitchField, Slider } from "./ToggleSwitch.styled";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
// import { format } from "fecha";

// const defaultState = {
//   direction: "",
//   amount: '',
//   date: new Date(),
//   comment: '',
//   category: '',
// }

function AddTransactionBtn() {
  const [open, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);  

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

  
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setTransaction();
    setIsOpen(false);
  };

 
  const handleToggle = useCallback(() => setShow(prevShow => !prevShow), []); 
  const [isChecked, setIsChecked] = useState(true);

  const addClass = (checked) => {
    if (!checked) {
          return "disabled";
    }
  }

  const handleCheck = () => {
    setIsChecked(!isChecked);
    f.setFieldValue("type", isChecked)
    handleToggle();
  }

  const [transaction, setTransaction] = useState(f.initialValues);
 
  const dispatch = useDispatch();
  
    return (
      <StyledEngineProvider injectFirst>
        <MyFab onClick={openModal} aria-label="add">
            <AddIcon sx={{ color: "#ffffff"}}/>
        </MyFab>
          
        <MyModal open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
       >
                     
          <MyBox >
            <CloseFab onClick={closeModal} aria-label="add">
            <CloseIcon className="fabIcon" sx={{ color: "#000000", backgroundColor: "transparent", width: "16px", height: "16px"}} onClick={closeModal}/>
            </CloseFab> 

            <ModalHeader> Add transaction </ModalHeader>

             <Formik
              initialValues={f.initialValues}
              validationSchema={validationSchema}
              enableReinitialize={true}
              onSubmit={(values, { resetForm }) => {
                setTimeout(() => {
                  dispatch(operations.addTransaction(transaction));
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
                          className={addClass(!isChecked)} value="Income"
                          name="Income">Income</Income> 
      <SwitchField checked={isChecked} type="checkbox" name="type" onChange={handleCheck} />
                    <Slider />
                        <Expense
                          className={addClass(isChecked)} value="Expence"
                          name="Expense">Expense</Expense>
      </SwitchLabel>
      </BasicFormDiv>

                    {!f.type && (
                      <BasicFormDiv item >
                      <SelectFieldModal show={show} value={transaction.category} />
                    </BasicFormDiv>
                  )}
                    
                  <MiddleWrapper container>
                    <MiddleFormDiv item>
                      <Field fullWidth name="addAmount" type="number" placeholder="0.00" label="Amount ($)"  component={TextField} />
                    </MiddleFormDiv>
                    
                      <MiddleFormDiv item>
                      <DataPickerWrapper direction="row">
                          <MyDataPicker
                          name="transactionDate"
                            dateFormat="dd/MM/yyyy"
                            label="Choose Date"
                            value={values.transactionDate}
                            onChange={(date) => {
                            const d = new Date(date).toLocaleDateString("en-gb");
                              setFieldValue("transactionDate", d, true);
                          }}
                        />
                        <CalendarMonthIcon sx={{color: "#24CCA7", "&:hover": {color: "#FF6596"}}} />
                      </DataPickerWrapper>
                    </MiddleFormDiv>
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
                <ModalBtn  sx={{ border: "2px solid #24CCA7", color: "#24CCA7" }}
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

AddTransactionBtn.propTypes = {
  f: PropTypes.object,
};