import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import { Button, Modal, Box, Fab, MenuItem } from '@mui/material';
import PlusSvg from '../../images/icons/modal/plus.svg';
import MinusSvg from '../../images/icons/modal/minus.svg';

export const MyFab = styled(Fab)`
background-color: #24CCA7;
width: 44px;
height: 44px;
border-radius: 50px;
position: fixed;
bottom: 20px;
right: 20px;
z-index: 99;

&:hover, &:focus {
 background-color: #FF6596;
}

@media screen and (min-width: 768px){
bottom: 40px;
right: 40px; 
}
`

export const CloseFab = styled(Fab)`
@media screen and (max-width: 768px){
display: none;
}

@media screen and (min-width: 768px){
display: inline-block;
background-color: transparent;
color: #000000;
width: 20px;
height: 20px;
position: absolute;
top: 20px;
right: 20px;
z-index: 98;
border: none;
outline: none;
box-shadow: none;

&:hover, &:focus {
background-color: transparent;
border: none;
outline: none;
box-shadow: none;
& .MuiSvgIcon-root {
  color: #FF6596;
    }
  }
}
`

export const MyModal = styled(Modal)`
outline: none;
border: none;
padding: 20px 11px;
`

export const MyBox = styled(Box)`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
width: 100vw;
height: 100vh;
overflow: nonel;
scrollbar-width: hidden;
border: none;
background-color: #ffffff;
display: flex;
flex-direction: column;
justify-content: space-evenly;
padding: 20px;
z-index: 1;
&::-webkit-scrollbar {
  display: none;
}
@media screen and (min-width: 768px){
  position: relative;
  padding: 40px 75px 60px 75px;
  max-width: 540px;
  height: 560px;
  border-radius: 20px;
  scrollbar-width: hidden;
   margin: 60px auto;
}

@media screen and (min-width: 1280px){
    max-height: 80vh;
    max-height: 90vh;
}

`

export const MyDataPicker = styled(DatePicker)`
outline: none;
border: none;
width: 100%;
`

export const DataPickerWrapper = styled.label`
display: flex;
flex-direction: row;
height: 57px;
background-color: #fff;
padding: 18px 20px 18px 10px;
border: 1px solid #E0E0E0;
border-radius: 3px;

& .react-datepicker__day--keyboard-selected, & .react-datepicker__day--selected{
   background-color: #FF6596;
}
& .react-datepicker__day:hover, & .react-datepicker__day:focus, & .react-datepicker__day-active{
  background-color: #FF6596;
  color: #ffffff;

  &.MuiSvgIcon-root:hover, &.MuiSvgIcon-root:focus{
    color: #FF6596;
  }
}
`

export const ModalBtn = styled(Button)`
border-radius: 20px;
width: 300px;
height: 50px;
font-size: 18px;
line-height: 1.5;
text-align: center;
align-self: center;

&:hover, &:focus {
 background-color: #FF6596;
 color: #ffffff;
}
`
export const ModalHeader = styled.p`
font-family: 'Poppins';
font-weight: 400;
font-size: 24px;
line-height: 1.5;
text-align: center;
color: #000000;
margin-bottom: 20px;
margin-top: 20px;
`

export const MyMenuItem = styled(MenuItem)`
&:hover, &:focus{
color: #FF6596;
}

&.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus, &.Mui-focusVisible, &.Mui-focusVisible:hover, &.Mui-focusVisible:focus{
    color: #FF6596;
    background: rgba(255, 255, 255, 0.7);
    cursor: pointer;
}
`

export const MiddleWrapper = styled.div`
@media screen and (min-width: 767px){
display: flex;
justufy-content: space-evenly;
align-items: center;
}

`
export const BasicWrapper = styled.div`
display: flex;
flex-direction: column;
margin-top: 10px;
`

export const BasicFormDiv = styled.div`
padding: 8px;
`
export const MiddleFormDiv = styled.div`
width: 100%;
padding: 10px;

@media screen and (min-width: 767px){
width: 200px;
}
`

export const BtnDiv = styled.div`
display: flex;
flex-direction: column;
padding: 8px;
`

//TOGGLE

export const SwitchLabel = styled.label`
position: relative;
display: flex;
margin: 0 auto;
width: 80px;
height: 40px;
font-family: 'Circe';
font-weight: 700;
font-size: 16px;
line-height: 1.5;
text-align: center;
`;

export const SwitchField = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.span`
position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  border-radius: 34px;
  border: 1px solid;
  border-color: rgba(224, 224, 224, 1);
  transition: .4s;
  &::before {
  position: absolute;
  content: "";
  background-image: url(${PlusSvg});
  background-repeat: no-repeat;
  background-size: 20px;
  background-position: center;
  height: 44px;
  width: 44px;
  left: 0;
  bottom: -3px;
  background-color:  #24CCA7;
  border-radius: 50px;
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  transition: .4s;
  ${SwitchField}:checked + &{
      transform: translateX(34px);
      background-color: #FF6596;
      background-image: url(${MinusSvg});
      box-shadow: 0px 6px 15px rgba(255, 101, 150, 0.5);
  }
}
`;

export const Income = styled.span`
position: absolute;
left: -66px;
top: 50%;
transform: translateY(-50%);
color:  #24CCA7;
 &.disabled{
  color: #E0E0E0;
 }
`;

export const Expense = styled.span`
position: absolute;
left: calc(100% + 20px);
top: 50%;
transform: translateY(-50%);
color: #FF6596;
 &.disabled{
  color: #E0E0E0;
 }
`;