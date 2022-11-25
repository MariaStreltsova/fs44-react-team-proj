import DatePicker from 'react-datepicker';
import styled from 'styled-components';
import { Button, Modal, Box,Fab, MenuItem} from '@mui/material';

export const MyFab = styled(Fab)`
background-color: #24CCA7;
width: 44px;
height: 44px;
border-radius: 50px;
position: fixed;
bottom: 20px;
right: 20px;
z-index: 99;

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
display: inline;
background-color: transparent;
color: #000000;
width: 20px;
height: 20px;
position: absolute;
top: 20px;
right: 20px;
z-index: 98;
border: 0;
outline: none;
box-shadow: none;

&:hover, &:focus {
background-color: transparent;

}
}
`


export const MyModal = styled(Modal)`
outline: none;
border: none;
`

export const MyBox = styled(Box)`
position: absolute;
top: 0;
left: 0;
right: 0;
bottom: 0;
width: 100vw;
height: 100vh;
overflow-y: scroll;
overflow-x: scroll;
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
height: 100%;
`

export const DataPickerWrapper = styled.label`
display: flex;
flex-direction: row;
background-color: #fff;
height: 100%;
padding: 18px 20px 18px 10px;
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
align-self: center;

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
margin-bottom: 20px;
margin-top: 20px;
`

export const MyMenuItem = styled(MenuItem)`
&.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus, &.Mui-focusVisible, &.Mui-focusVisible:hover, &.Mui-focusVisible:focus{
    color: #FF6596;
    background: rgba(255, 255, 255, 0.7);
    cursor: pointer;
}
`

export const MiddleWrapper = styled.div`

@media screen and (min-width: 767px){
display:flex;
justufy-content: space-evenly;
align-items: center;
width: 400px;
}

`
export const BasicWrapper = styled.div`
display: flex;
flex-direction: column;

margin-top: 10px;
`

export const BasicFormDiv = styled.div`
// margin-top: 10px;
// margin-bottom: 10px;
padding: 8px;

`

export const BtnDiv = styled.div`
display: flex;
flex-direction: column;
padding: 8px;

`