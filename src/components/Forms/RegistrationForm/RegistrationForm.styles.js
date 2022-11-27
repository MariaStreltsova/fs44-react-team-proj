import styled from 'styled-components';
import PasswordStrengthBar from 'react-password-strength-bar';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 410px;
  gap: 40px;
  @media screen and (max-width: 1279px) {
    width: 410px;
  }
  @media screen and (max-width: 767px) {
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const PasswordBar = styled(PasswordStrengthBar)`
  width: 100%;
`;