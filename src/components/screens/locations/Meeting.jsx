import React from 'react';
import styled from 'styled-components';
import { LocationWrapper } from '../../shared/LocationWrapper';
import { SvgWrapper } from '../../shared/SvgWrapper';
import { meeting, meetingRect } from '../../../constants/images';

const Rectangles = styled(SvgWrapper)`
  background: url(${meetingRect});
  width: 257px;
  left: -32px;
  top: -21px;
  height: 102px;
`;

export const Meeting = () => {
    return <LocationWrapper text={'Место встречи'} bg={meeting}>
        <Rectangles/>
    </LocationWrapper>
}