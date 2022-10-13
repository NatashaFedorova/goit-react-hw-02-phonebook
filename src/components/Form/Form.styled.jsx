import styled from 'styled-components';

export const Label = styled.label`
  margin-right: ${props => props.theme.spacing(2)};
  color: #fff;
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeight.medium};
`;

export const Input = styled.input`
  margin-left: ${props => props.theme.spacing(3)};
  border: ${props => props.theme.borders.normal};
  border-color: ${props => props.theme.colors.accent};
  color: #fff;
  font-size: ${props => props.theme.fontSizes.medium};
  font-weight: ${props => props.theme.fontWeight.medium};
`;
