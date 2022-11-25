import PlusSvg from '../../images/icons/modal/plus.svg';
import MinusSvg from '../../images/icons/modal/minus.svg'
import styled from 'styled-components';

export const ToggleWrapper = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
position: absolute;
`


export const SwitchLabel = styled.label`
position: relative;
display: inline-block;
width: 80px;
height: 40px;
font-family: 'Circe';
font-weight: 700;
font-size: 16px;
line-height: 1.5;
text-align: center;
transform: translateX(150%)
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