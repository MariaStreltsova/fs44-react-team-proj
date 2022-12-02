import React, { useState, useCallback, useEffect } from 'react';
import {
  CircularProgress,
  Select,
  FormControl,
  InputLabel,
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import CloseIcon from '@mui/icons-material/Close';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { Form, Formik, Field, useFormik } from 'formik';
import { TextField } from 'formik-mui';
import { object, number, string } from 'yup';
import operations from '../../redux/wallet/wallet-operations';
import { authOperations } from 'redux/auth';
import { useDispatch, useSelector } from 'react-redux';
import walletSelectors from '../../redux/wallet/wallet-selectors';
import 'react-datepicker/dist/react-datepicker.css';
import {
  MyFab,
  MyBox,
  MyModal,
  DataPickerWrapper,
  MyDataPicker,
  ModalBtn,
  ModalHeader,
  MiddleWrapper,
  MiddleFormDiv,
  CloseFab,
  BasicFormDiv,
  BasicWrapper,
  BtnDiv,
  MyMenuItem,
  SwitchLabel,
  Income,
  Expense,
  SwitchField,
  Slider,
} from './AddTransactionModal.styled';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MenuProps = {
  PaperProps: {
    style: {
      background: 'rgba(255, 255, 255, 0.7)',
      boxShadow: '0px 6px 15px rgba(0, 0, 0, 0.1)',
      backdropFilter: 'blur(25px)',
      borderRadius: '20px',
    },
  },
};

function AddTransactionBtn() {
  const [open, setIsOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [isChecked, setIsChecked] = useState(true);
  const [myDate, setMyDate] = useState(new Date().getTime());

  const { t } = useTranslation();

  const DIRECTION = {
    expense: 'expense',
    income: 'income',
  };

  const dispatch = useDispatch();
  const categories = useSelector(walletSelectors.getCategories);

  useEffect(() => {
    dispatch(operations.fetchCategories());
  }, [dispatch]);

  const f = useFormik({
    initialValues: {
      direction: DIRECTION.expense,
      amount: '',
      date: myDate,
      comment: ' ',
      category: '',
    },
  });

  const validationSchema = object().shape({
    amount: number()
      .min(1, 'Your sum must be at least 1')
      .max(100000, 'Maximum sum is 100000')
      .required('Provide an amount'),

    date: number().required('Choose date'),
    direction: string().required(),
    comment: string().max(150, 'You can enter only 150 symbols'),
    category: string(),
  });

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleToggle = useCallback(() => setShow(prevShow => !prevShow), []);
  const addClass = checked => {
    if (!checked) {
      return 'disabled';
    }
  };
  const handleDirection = () => {
    if (isChecked) {
      f.values.direction = DIRECTION.income;
    } else {
      f.values.direction = DIRECTION.expense;
    }
  };
  const handleCheck = () => {
    setIsChecked(!isChecked);
    handleToggle();
    handleDirection();
  };

  const sendTransaction = (values, { resetForm }) => {
    const categoriesFilter = {
      ...values,
      category: categories.find(item => item.name === values.category)
        ?.category_id,
    };

    dispatch(operations.addTransaction(categoriesFilter)).catch(error => {
      toast.error(t('messages.transactionError'));
    });

    resetForm({ values: '' });
    toast.success(t('messages.transactionSuccess'));
    closeModal();
  };
  return (
    <StyledEngineProvider injectFirst>
      <MyFab onClick={openModal} aria-label="add">
        <AddIcon sx={{ color: '#ffffff' }} />
      </MyFab>

      <MyModal
        open={open}
        onClose={closeModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <MyBox>
          <CloseFab onClick={closeModal} aria-label="add">
            <CloseIcon
              className="fabIcon"
              sx={{
                color: '#000000',
                backgroundColor: 'transparent',
                width: '16px',
                height: '16px',
              }}
              onClick={closeModal}
            />
          </CloseFab>

          <ModalHeader>{t('modal.title')}</ModalHeader>

          <Formik
            initialValues={f.initialValues}
            validationSchema={validationSchema}
            enableReinitialize={true}
            onSubmit={sendTransaction}
          >
            {({ values, isSubmitting, setFieldValue, handleSubmit }) => (
              <Form
                autoComplete="off"
                onSubmit={e => {
                  e.preventDefault();
                  handleSubmit();
                }}
              >
                <BasicWrapper>
                  <BasicFormDiv>
                    <SwitchLabel>
                      <Income className={addClass(!isChecked)} name="Income">
                        {t('modal.direction.income')}
                      </Income>
                      <SwitchField
                        checked={isChecked}
                        type="checkbox"
                        name="direction"
                        onChange={handleCheck}
                      />
                      <Slider />
                      <Expense className={addClass(isChecked)} name="Expense">
                        {t('modal.direction.expence')}
                      </Expense>
                    </SwitchLabel>
                  </BasicFormDiv>

                  {show && (
                    <BasicFormDiv item>
                      <FormControl fullWidth>
                        <InputLabel id="demo-simple-select-label">
                          {t('modal.form.categoriesTitle')}
                        </InputLabel>

                        <Select
                          type="select"
                          value={values.category}
                          name="category"
                          label={`${t('modal.form.categoriesTitle')}`}
                          MenuProps={MenuProps}
                          fullWidth
                        >
                          {categories &&
                            categories.map(data => (
                              <MyMenuItem
                                value={data.name}
                                key={data.category_id}
                                onClick={() =>
                                  setFieldValue('category', data.name)
                                }
                              >
                                {data.name}
                              </MyMenuItem>
                            ))}
                        </Select>
                      </FormControl>
                    </BasicFormDiv>
                  )}

                  <MiddleWrapper container>
                    <MiddleFormDiv item>
                      <Field
                        fullWidth
                        name="amount"
                        type="number"
                        placeholder="0.00"
                        label={t('modal.form.amountLabel')}
                        component={TextField}
                      />
                    </MiddleFormDiv>

                    <MiddleFormDiv item>
                      <DataPickerWrapper direction="row">
                        <MyDataPicker
                          name="date"
                          selected={myDate}
                          dateFormat="dd/MM/yyyy"
                          label="Choose Date"
                          value={values.date}
                          onChange={newDate => {
                            setMyDate(newDate);
                            values.date = setFieldValue(
                              'date',
                              newDate.getTime()
                            );
                          }}
                        />
                        <CalendarMonthIcon
                          sx={{
                            color: '#24CCA7',
                            '&:hover': {
                              color: '#FF6596',
                              cursor: 'pointer',
                            },
                          }}
                        />
                      </DataPickerWrapper>
                    </MiddleFormDiv>
                  </MiddleWrapper>

                  <BasicFormDiv item>
                    <Field
                      fullWidth
                      name="comment"
                      label={t('modal.form.comment')}
                      placeholder="Comment"
                      component={TextField}
                      minRows={1}
                      maxRows={3}
                    />
                  </BasicFormDiv>
                </BasicWrapper>

                <BtnDiv>
                  <ModalBtn
                    disabled={isSubmitting}
                    type="submit"
                    variant="contained"
                    color="success"
                    startIcon={
                      isSubmitting ? (
                        <CircularProgress size="0.9rem" />
                      ) : undefined
                    }
                    sx={{
                      backgroundColor: '#24CCA7',
                      color: '#ffffff',
                      margin: '20px 0',
                      alignSelf: 'center',
                    }}
                  >
                    {' '}
                    {isSubmitting
                      ? `${t('modal.button.adding')}`
                      : `${t('modal.button.add')}`}
                  </ModalBtn>
                  <ModalBtn
                    sx={{ border: '2px solid #24CCA7', color: '#24CCA7' }}
                    onClick={closeModal}
                  >
                    {t('modal.button.cancel')}
                  </ModalBtn>
                </BtnDiv>
              </Form>
            )}
          </Formik>
          <ToastContainer />
        </MyBox>
      </MyModal>
    </StyledEngineProvider>
  );
}

export default AddTransactionBtn;

AddTransactionBtn.propTypes = {
  f: PropTypes.object,
};
