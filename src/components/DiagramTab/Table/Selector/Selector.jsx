import React from 'react';
import { Arrow, SelectorGroup, Select } from './Selector.styled';
import arrow from './Vector19.png';

function Selector({ options, id, onChange }) {
  console.log(options);
  return (
    <SelectorGroup>
      <Arrow src={arrow} alt="arrow"></Arrow>
      <Select name="1A" id={id} required onChange={onChange}>
        {options.map(item => (
          <option key={item}>{item}</option>
        ))}
      </Select>
    </SelectorGroup>
  );
}

export default Selector;
