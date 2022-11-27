import styled from 'styled-components';

export const SelectorGroup = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 20px;
`;
export const Select = styled.select`
  width: 100%;
  height: 50px;
  padding-left: 20px;
  padding-right: 20px;
  background: none;
  border-radius: 30px;
  border: 1px solid black;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;
export const Arrow = styled.img`
  width: 18px;
  height: 9px;
  position: absolute;
  z-index: 10;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
`;
