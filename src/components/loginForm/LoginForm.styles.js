import styled from 'styled-components';
import { Form } from 'formik';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  display: flex;
  margin-bottom: 50px;
`;

export const TitleText = styled.h1`
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
`;

export const Logo = styled.div`
  margin-right: 20px;
`;

export const FormikForm = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
