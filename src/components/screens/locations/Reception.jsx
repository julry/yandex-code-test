import React from 'react';
import styled from 'styled-components';
import { LocationWrapper } from '../../shared/LocationWrapper';
import { SvgWrapper } from '../../shared/SvgWrapper';
import rectangles from '../../shared/svg/rectangles/reception.svg';
import { reception } from '../../../constants/images';

const Rectangles = styled(SvgWrapper)`
  background: url(${rectangles});
  width: 223px;
  left: -44px;
  top: -21px;
  height: 97px;
`;

export const Reception = () => {
    return <LocationWrapper text={'Ресепшн'} bg={reception} isScaled={true}>
        <Rectangles/>
    </LocationWrapper>
};