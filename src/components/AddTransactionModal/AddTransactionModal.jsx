import React, { useState, useCallback, useEffect} from "react";
import { CircularProgress } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import { Form, Formik, Field, useFormik} from 'formik';
import { TextField} from "formik-mui";
import { object, number, string} from "yup";
import operations from '../../redux/wallet/wallet-operations';
import { authOperations } from "redux/auth";
import "react-datepicker/dist/react-datepicker.css";
import {
  MyFab, MyBox, MyModal, DataPickerWrapper, MyDataPicker, ModalBtn, ModalHeader, MiddleWrapper, MiddleFormDiv,
  CloseFab, BasicFormDiv, BasicWrapper, BtnDiv, 
} from "./ModalCustomStyles";
import {  SwitchLabel, Income, Expense, SwitchField, Slider } from "./ToggleSwitch.styled";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import StyledEngineProvider from "@mui/material/StyledEngineProvider";
import CloseIcon from '@mui/icons-material/Close';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { allCategories } from './allCategories';
import CustomizedSelectForFormik from "./CustomizedSelect";
import { FormControl, InputLabel } from '@mui/material';
import { MyMenuItem } from "./ModalCustomStyles";
import walletSelectors from "../../redux/wallet/wallet-selectors";
import { useTranslation } from 'react-i18next';


function AddTransactionBtn() {
  const [open, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);  
  const [isChecked, setIsChecked] = useState(true);
 
  const { t } = useTranslation();
  
  const DIRECTION = {
    expense: "expense",
    income: "income"
  }

  const dispatch = useDispatch();
  const categories = useSelector(walletSelectors.getCategories);

  useEffect(() => {
   dispatch(operations.fetchCategories());
  }, [dispatch, categories]);

const f = useFormik({
    initialValues: {
    direction: DIRECTION.expense,
    amount: "",
    date: new Date().getTime(),
      // new Date().toLocaleDateString("en-gb"), //number
    comment: "",    
    category: DIRECTION.income,
    },
});

  const validationSchema = object().shape({
      amount: number().required("Provide an amount").min(1, "Your sum must be at least 1").max(100000, "Maximum sum if 100000"),
      date: number().required("Choose date"),
      direction: string().required(),
    comment: string().max(15, "You can enter only 15 symbols"),
    category: string(),
  });
  
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

 
  const handleToggle = useCallback(() => setShow(prevShow => !prevShow), []); 
  const addClass = (checked) => {
    if (!checked) {
          return "disabled";
    }
  }
 const handleDirection = () => {
    if (isChecked) {
      f.values.direction = DIRECTION.income;
    } else {
      f.values.direction = DIRECTION.expense;
  }
}
  const handleCheck = () => {
    setIsChecked(!isChecked);
    handleToggle();
    handleDirection();
  }

  const sendTransaction = (values, { resetForm }) => {
                setTimeout(() => {
                  dispatch(operations.addTransaction(values));
                  dispatch(authOperations.fetchCurrentUser());
                  console.log(values);
                  resetForm({ values: "" });
                  closeModal();
                }, 1000);
              }
 

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
              <CloseIcon className="fabIcon" sx={{ color: "#000000", backgroundColor: "transparent", width: "16px", height: "16px" }}
                onClick={closeModal} />
            </CloseFab> 

            <ModalHeader>{t("modal.title")}</ModalHeader>

             <Formik
              initialValues={f.initialValues}
              validationSchema={validationSchema}
              enableReinitialize={true}
              onSubmit={sendTransaction}
            >
              {({ values, isSubmitting, setFieldValue, handleSubmit}) => (
                <Form autoComplete="off" onSubmit={(e) => {
                  e.preventDefault();
                  handleSubmit();
                }}>
                  <BasicWrapper>
                    
      <BasicFormDiv >
      <SwitchLabel>
                        <Income  className={addClass(!isChecked)} name="Income" >{t("modal.direction.income")}</Income> 
                        <SwitchField checked={isChecked} type="checkbox" name="direction" onChange={handleCheck} />
                    <Slider />
                        <Expense className={addClass(isChecked)}  name="Expense" >{t("modal.direction.expence")}</Expense>
      </SwitchLabel>
      </BasicFormDiv>

                    {show && (
                      <BasicFormDiv item >
                         <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label" >{t("modal.form.categoriesTitle") }</InputLabel>
            <Field type="select"  name="category" label={`${t("modal.form.categoriesTitle") }`} component={CustomizedSelectForFormik}  >
              {allCategories.map((category) => (
                < MyMenuItem
                 value={category.value} key={category.key}
                >
                  {category.value}
                  </ MyMenuItem>
        ))}
                            
                            {/* {operations.fetchCategories.map((category) => (
                < MyMenuItem
                 key={category.category_id}  value={category.value}
                >
                  {category.value}
                  </ MyMenuItem>
        ))} */}
            </Field>
            </FormControl>
                    </BasicFormDiv>
                  )}
                    
                  <MiddleWrapper container>
                    <MiddleFormDiv item>
                        <Field fullWidth name="amount" type="number" placeholder="0.00" label={t("modal.form.amountLabel")}  component={TextField} />
                    </MiddleFormDiv>
                    
                      <MiddleFormDiv item>
                      <DataPickerWrapper direction="row">
                          <MyDataPicker
                            name="date"
                            selected={new Date()}
                            dateFormat="dd/MM/yyyy"
                            label="Choose Date"
                            value={values.date}
                            onChange={(newDate) => {
                            const d = new Date(newDate).getTime();
                              setFieldValue("date", d, true);
                          }}
                        />
                        <CalendarMonthIcon sx={{color: "#24CCA7", "&:hover": {color: "#FF6596", cursor: "pointer"}}} />
                      </DataPickerWrapper>
                    </MiddleFormDiv>
                  </MiddleWrapper>
                    
                    <BasicFormDiv item>
                      <Field fullWidth name="comment" label={t("modal.form.comment")} component={TextField} minRows={1} maxRows={3} />
                    </BasicFormDiv>
                  
                  </BasicWrapper>
                        
                  <BtnDiv>
                <ModalBtn disabled={isSubmitting} type="submit" variant="contained" color="success" 
                    startIcon={isSubmitting ? <CircularProgress size="0.9rem" /> : undefined}
                    sx={{ backgroundColor: "#24CCA7", color: "#ffffff",  margin: "20px 0", alignSelf: "center" }}
                  > {isSubmitting ? `${t("modal.button.adding")}` : `${t("modal.button.add")}`}
                    </ModalBtn>
                <ModalBtn  sx={{ border: "2px solid #24CCA7", color: "#24CCA7" }}
                      onClick={closeModal}>{t("modal.button.cancel")}</ModalBtn>
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