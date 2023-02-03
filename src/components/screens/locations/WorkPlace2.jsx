import React from 'react';
import styled from 'styled-components';
import { workPlace2, workPlace2Rect } from '../../../constants/images';
import { LocationWrapper } from '../../shared/LocationWrapper';
import { SvgWrapper } from '../../shared/SvgWrapper';

const Rectangles = styled(SvgWrapper)`
  background: url(${workPlace2Rect});
  width: 240px;
  left: -26px;
  top: -21px;
  height: 101px;
`;

export const WorkPlace2 = () => {
    return <LocationWrapper text={'Рабочее место'} bg={workPlace2} isScaled={true} locNum={4}>
        <Rectangles/>
    </LocationWrapper>
}