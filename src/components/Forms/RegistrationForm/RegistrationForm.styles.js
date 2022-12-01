import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 410px;
  gap: 40px;
margin-top: 60px;

 
  @media screen and (max-width: 767px) {
    max-width: 320px;
    margin-left: auto;
    margin-right: auto;
    padding-left: 20px;
    padding-right: 20px;
  }

   @media screen and (max-width: 1279px) {
    width: 410px;
  }
`;

export const PasswordBarStyle = styled.div`
  background-color: #e5f1ef;
  width: 100%;
  height: 4px;
  margin-top: -15px;
`;

// export const PasswordBar = styled(PasswordStrengthBar)`
//   width: 100%;
// `;