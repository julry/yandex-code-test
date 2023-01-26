import React from 'react';
import styled from 'styled-components';
import { LocationWrapper } from '../../shared/LocationWrapper';
import { SvgWrapper } from '../../shared/SvgWrapper';
import rectangles from '../../shared/svg/rectangles/workPlace2.svg';
import { workPlace2 } from '../../../constants/images';

const Rectangles = styled(SvgWrapper)`
  background: url(${rectangles});
  width: 240px;
  left: -26px;
  top: -21px;
  height: 101px;
`;

export const WorkPlace2 = () => {
    return <LocationWrapper text={'Рабочее место'} bg={workPlace2} isScaled={true}>
        <Rectangles/>
    </LocationWrapper>
}