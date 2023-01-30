import React from 'react';
import styled from 'styled-components';
import { LocationWrapper } from '../../shared/LocationWrapper';
import { SvgWrapper } from '../../shared/SvgWrapper';
import { coffeeBrake, coffee } from '../../../constants/images';

const Rectangles = styled(SvgWrapper)`
  background: url(${coffee});
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