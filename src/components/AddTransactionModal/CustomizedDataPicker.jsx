import DatePicker from 'react-datepicker';
import styled from 'styled-components';

export const MyDataPicker = styled(DatePicker)`
color: "#000000";
border: 1px solid #E0E0E0;
outline: none;
border-radius: 3px;
width: 100%;
height: 50px;
padding: 20px 8px;

`

export const DataPickerWrapper = styled.div`
background-color: #fff;


& .react-datepicker__day--keyboard-selected{
   background-color: green;
}
`