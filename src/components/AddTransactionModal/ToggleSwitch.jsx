import * as React from 'react';
import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';


const MaterialUISwitch = styled(Switch)(() => ({
  width: 80,
  height: 40,
  padding: 4,
 
  '& .MuiSwitch-switchBase': {
    margin: 0,
    padding: 0,

    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(35px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M0 13v6c0 0.552 0.448 1 1 1h30c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1h-30c-0.552 0-1 0.448-1 1z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#aab4be',
      },
      '& .MuiSwitch-thumb': {
      backgroundColor: '#FF6596',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: "44px",
    height: "44px",
    backgroundColor: "#24CCA7",
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '20px',
      height: "20px",
      left: 0,
      top: 0,
      transform: "translate(55%, 50%)",
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: "contain",
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="${encodeURIComponent(
        '#fff')}" d="M31 12h-11v-11c0-0.552-0.448-1-1-1h-6c-0.552 0-1 0.448-1 1v11h-11c-0.552 0-1 0.448-1 1v6c0 0.552 0.448 1 1 1h11v11c0 0.552 0.448 1 1 1h6c0.552 0 1-0.448 1-1v-11h11c0.552 0 1-0.448 1-1v-6c0-0.552-0.448-1-1-1z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: '#E0E0E0',
  },
}));

function ToggleSwitch({onToggle}) {
    return (
      
      <FormControlLabel  onClick={onToggle} control={<MaterialUISwitch  defaultChecked />}/>
      
    )
}

export default ToggleSwitch;