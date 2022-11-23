import styled from 'styled-components';
import { Form } from 'formik';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 1280px) {
    width: 410px;
  }
  @media screen and (max-width: 1279px) {
    width: 410px;
  }
  @media screen and (max-width: 767px) {
    width: 360px;
  }
`;
