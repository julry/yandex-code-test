import styled from 'styled-components';
import { NextArrow } from './svg/NextArrow';
import React from 'react';
import { ButtonCentered } from './ButtonCentered';
import { MiniArrow } from './svg/MiniArrow';

const ButtonStyled = styled(ButtonCentered)`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ mini }) => mini ? `
		width: 66px;
		height: 33px;
		padding: 0 18px;
		
		@media screen and(min-width: 700px) {
			width: 100px;
			height: 50px;
		}
  ` : ''};
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

const Mini = styled(MiniArrow)`
  height: 100%;
  width: 100%;
`;

export const ArrowBtn = (props) => {
	const { miniArrow, ...restProps } = props;
	return (
		<ButtonStyled hasSvg {...restProps} mini={miniArrow}>
			{
				miniArrow ? <Mini /> : <Arrow />
			}
		</ButtonStyled>
	);
};
