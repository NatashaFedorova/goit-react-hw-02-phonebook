import styled from 'styled-components';
import {
  Button,
  Input,
} from 'components/constants/DefaultStyleComponents.styled';

export const Form = styled.form`
  padding: ${props => props.theme.spacing(4)};
  border: ${props => props.theme.borders.normal};
  border-color: ${props => props.theme.colors.accent};
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-right: ${props => props.theme.spacing(2)};
  color: #fff;
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeight.medium};
`;

export const InputForm = styled(Input)``;

export const BtnSubmit = styled(Button)`
  margin: 0 auto;
`;
