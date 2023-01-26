import React from 'react';
import styled from 'styled-components';
import { LocationWrapper } from '../../shared/LocationWrapper';
import { SvgWrapper } from '../../shared/SvgWrapper';
import rectangles from '../../shared/svg/rectangles/coffee.svg';
import { coffeeBrake } from '../../../constants/images';

const Rectangles = styled(SvgWrapper)`
  background: url(${rectangles});
  width: 234px;
  left: -36px;
  top: -11px;
  height: 95px;
`;

export const CoffeeBrake = () => {
    return <LocationWrapper text={'Кофе-брейк'} bg={coffeeBrake}>
        <Rectangles/>
    </LocationWrapper>
}