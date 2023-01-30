import styled from 'styled-components';
import { NextArrow } from './svg/NextArrow';
import React from 'react';
import { ButtonCentered } from './ButtonCentered';

const ButtonStyled = styled(ButtonCentered)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Arrow = styled(NextArrow)`
  height: 16px;
  width: 78px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  @media screen and (min-width: 700px) {
    height: 24px;
    width: 117px;
  }
`;

export const ArrowBtn = (props) => (
    <ButtonStyled hasSvg {...props}><Arrow/></ButtonStyled>
)
