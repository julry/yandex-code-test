import React from 'react';
import styled from 'styled-components';
import { LocationWrapper } from '../../shared/LocationWrapper';
import { SvgWrapper } from '../../shared/SvgWrapper';
import rectangles from '../../shared/svg/rectangles/workPlace.svg';
import { workPlace } from '../../../constants/images';

const Rectangles = styled(SvgWrapper)`
  background: url(${rectangles});
  width: 243px;
  left: -26px;
  top: -21px;
  height: 102px;
`;

export const WorkPlace = () => {
    return <LocationWrapper text={'Рабочее место'} bg={workPlace} isScaled={true}>
        <Rectangles/>
    </LocationWrapper>
}