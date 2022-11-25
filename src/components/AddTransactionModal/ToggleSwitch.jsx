import * as React from 'react';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';
import { useState, useCallback} from 'react';
import PlusSvg from '../../images/icons/modal/plus.svg';
import MinusSvg from '../../images/icons/modal/minus.svg'
import styled from 'styled-components';
// import SelectFieldModal from "./SelectFieldModal";
// import { useCallback } from 'react';

// const MaterialUISwitch = styled(Switch)(() => ({
//   width: 80,
//   height: 40,
//   padding: 4,
 
//   '& .MuiSwitch-switchBase': {
//     margin: 0,
//     padding: 0,

//     '&.Mui-checked': {
//       color: '#fff',
//       transform: 'translateX(35px)',
//       '& .MuiSwitch-thumb:before': {
//         backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="${encodeURIComponent(
//           '#fff',
//         )}" d="M0 13v6c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1z"/></svg>')`,
//       },
//       '& + .MuiSwitch-track': {
//         opacity: 1,
//         backgroundColor: '#aab4be',
//       },
//       '& .MuiSwitch-thumb': {
//       backgroundColor: '#FF6596',
//       },
//     },
//   },
//   '& .MuiSwitch-thumb': {
//     width: "44px",
//     height: "44px",
//     backgroundColor: "#24CCA7",
//     '&:before': {
//       content: "''",
//       position: 'absolute',
//       width: '20px',
//       height: "20px",
//       left: 0,
//       top: 0,
//       transform: "translate(55%, 50%)",
//       backgroundRepeat: 'no-repeat',
//       backgroundPosition: 'center',
//       backgroundSize: "contain",
//       backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="${encodeURIComponent(
//         '#fff')}" d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"/></svg>')`,
//     },
//   },
//   '& .MuiSwitch-track': {
//     opacity: 1,
//     backgroundColor: '#E0E0E0',
//   },
// }));

// function ToggleSwitch({onToggle}) {
//     return (
      
//       <FormControlLabel  onClick={onToggle} control={<MaterialUISwitch  defaultChecked />}/>
      
//     )
// }

export const SwitchLabel = styled.label`
    position: relative;
    display: inline-block;
    width: 80px;
    height: 40px;
    margin-bottom: 40px;
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
  background-color: ${p=> p.theme.colors.lightBackgroundColor};
  border-radius: 34px;
  border: ${p => p.theme.borders.normal};
  border-color: ${p=> p.theme.colors.borderColor};
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
  background-color:  ${p => p.theme.colors.incomeColor};
  border-radius: ${p => p.theme.radii.round};
  box-shadow: 0px 6px 15px rgba(36, 204, 167, 0.5);
  transition: .4s;
  ${SwitchField}:checked + &{
      transform: translateX(34px);
      background-color: ${p => p.theme.colors.expenseColor};
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
`

export const Expence = styled.span`
position: absolute;
left: calc(100% + 20px);
top: 50%;
transform: translateY(-50%);
color: #FF6596;
 &.disabled{
  color: #E0E0E0;
 }
`

function ToggleSwitch({ field, form }) {
  
  const [isChecked, setIsChecked] = useState(false);
const addClass = (checked) => {
        if (!checked) {
          return "disabled";
          
        }
    }
    const handleCheck = () => {
      setIsChecked(!isChecked);
      form.setFieldValue(isChecked);  
  }
  const handleToggle = useCallback(() => setIsChecked(prevShow => !prevShow), []);

  return (
    <>
      <SwitchLabel>
        <Income className={addClass(!isChecked)}>Income</Income> 
        <SwitchField checked={isChecked} type="checkbox" name="toggle" onClick={handleToggle} onChange={handleCheck} />
                    <Slider />
        <Expence className={addClass(isChecked)}>Expence</Expence>
            </SwitchLabel>
    </>
  )
}

export default ToggleSwitch;