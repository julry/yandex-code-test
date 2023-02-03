import React from 'react';
import styled from 'styled-components';
import { LocationWrapper } from '../../shared/LocationWrapper';
import { SvgWrapper } from '../../shared/SvgWrapper';
import { reception, receptionRect } from '../../../constants/images';

const Rectangles = styled(SvgWrapper)`
  background: url(${receptionRect});
  width: 223px;
  left: -44px;
  top: -21px;
  height: 97px;
`;

export const Reception = () => {
    return <LocationWrapper text={'Ресепшн'} bg={reception} isScaled={true} locNum={0}>
        <Rectangles/>
    </LocationWrapper>
};