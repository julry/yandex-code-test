import React from 'react';
import styled from 'styled-components';
import { LocationWrapper } from '../../shared/LocationWrapper';
import { SvgWrapper } from '../../shared/SvgWrapper';
import { workPlace, workPlaceRect } from '../../../constants/images';

const Rectangles = styled(SvgWrapper)`
  background: url(${workPlaceRect});
  width: 243px;
  left: -26px;
  top: -21px;
  height: 102px;
`;

export const WorkPlace = () => {
    return <LocationWrapper text={'Рабочее место'} bg={workPlace} isScaled={true} locNum={2}>
        <Rectangles/>
    </LocationWrapper>
}