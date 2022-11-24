import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import { Button, Modal } from '@mui/material';

export const MyModal = styled(Modal)`
outline: none;
border: none;
`

export const MyDataPicker = styled(DatePicker)`
outline: none;
border: none;
width: 100%;
height: 100%;
`

export const DataPickerWrapper = styled.label`
display: flex;
flex-direction: row;
justify-content: space-evenly;
background-color: #fff;
height: 100%;
padding: 18px 20px;
border: 1px solid #E0E0E0;
border-radius: 3px;

& .react-datepicker__day--keyboard-selected{
   background-color: green;
}
`
export const ModalBtn = styled(Button)`
border-radius: 20px;
width: 300px;
height: 50px;
font-size: 18px;
line-height: 1.5;
text-align: center;

&:hover, &:focus{
background-color: #24CCA7;
}
`
export const ModalHeader = styled.p`
font-family: 'Poppins';
font-weight: 400;
font-size: 24px;
line-height: 1.5;
text-align: center;
color: #000000;
margin-bottom: 40px;
margin-top: 20px;
`

export const ToggleWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`

export const ToggleLeft = styled.p`
font-family: 'Circe';
font-weight: 700;
font-size: 16px;
line-height: 1.5;
text-align: center;
// color: #E0E0E0;
margin-right: 20px;
`

export const ToggleRight = styled.span`
font-family: 'Circe';
font-weight: 700;
font-size: 16px;
line-height: 1.5;
text-align: center;
// color: #E0E0E0;
margin-left: 5px;
`