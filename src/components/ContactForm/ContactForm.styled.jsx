import styled from 'styled-components';

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

export const Input = styled.input`
  margin-top: ${props => props.theme.spacing(3)};
  margin-bottom: ${props => props.theme.spacing(6)};
  padding: ${props => props.theme.spacing(2)};
  border: ${props => props.theme.borders.normal};
  border-color: ${props => props.theme.colors.accent};
  color: ${props => props.theme.colors.light};
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeight.normal};
`;

export const BtnSubmit = styled.button`
  cursor: pointer;
  display: block;
  margin: 0 auto;
  padding: ${props => props.theme.spacing(3)} ${props => props.theme.spacing(5)};
  border: ${props => `1px solid ${props.theme.colors.accent}`};
  font-size: ${props => props.theme.fontSizes.small};
  font-weight: ${props => props.theme.fontWeight.medium};
  color: ${props => props.theme.colors.accent};
  background-color: transparent;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1),
    color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: ${props => props.theme.colors.light};
    background-color: ${props => props.theme.colors.accent};
  }
`;
