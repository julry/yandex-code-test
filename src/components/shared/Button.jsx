import React from 'react';
import styled from 'styled-components';
import { colors } from '../../constants/colors';
import { DescriptionMd } from './styledTexts';

const StyledButton = styled.button`
  outline: none;
  border: none;
  color: ${colors.textGray};
  background: ${({disabled}) => disabled ? colors.darkGray : colors.purple};
  box-shadow: 0 0 0 ${({disabled}) => disabled ? '1px' : 0} ${colors.textGray} inset;
  width: ${({width}) => width ?? '65vw'};
  padding: 8px 17px;
  max-width: 245px;
  border-radius: 5px;
  transition: background-color 0.3s ease-in, box-shadow 0.3s ease-in;
`;

export const Button = (props) => {
    const {hasSvg} = props;
    return (
        <StyledButton {...props}>
            {hasSvg ? props.children : <DescriptionMd>{props.children}</DescriptionMd>}
        </StyledButton>
    );
};
