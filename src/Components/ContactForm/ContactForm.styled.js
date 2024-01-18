import styled from '@emotion/styled';
import { Form } from 'formik';

export const Label = styled.label`
  color: black;
  font-size: 20px;
  font-weight: 600;
`;

export const ContainerForm = styled(Form)`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid;
  border-radius: 8px;
  padding: 20px;
  margin-bottom: 20px;
  & > div {
    color: red;
    margin-bottom: 15px;
    font-size: 16px;
    font-weight: 500;
    & > input {
      padding: 8px 8px;
      border-radius: 8px;
      width: 100%;
      border: 1px solid;
      font-size: 16px;
      font-weight: 500;
    }
  }
`;
