import DatePicker from 'react-datepicker';
import styled from 'styled-components';

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