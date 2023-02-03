import React from 'react';
import styled from 'styled-components';
import { Background, BackgroundScaled, BackgroundWrapper, ContentWrapper } from './wrappers';
import { BorderBlock } from './BorderBlock';
import { Description } from './styledTexts';
import { useProgress } from '../../hooks/useProgress';
import { ArrowBtn } from './ArrowBtn';
import { colors } from '../../constants/colors';
import { getArray } from '../../utils/getArray';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const LocationName = styled(BorderBlock)`
  margin: min(38px, 10.133vw) auto 0;
  padding: 20px 24px;
`;

const ButtonStyled = styled(ArrowBtn)`
  margin-top: 24px;
  margin-bottom: 9.0667vw;
  @media screen and (min-width: 700px) {
    padding: 20px;
  }
`;

const TimeLineWrapper = styled.div`
  margin: auto auto 0;
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 64.5vw;
  max-width: 243px;
  
  @media screen and (min-width: 700px) {
    max-width: 294px;
  }
`;

const TimeLineBack = styled.div`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  z-index: 0;
  width: 100%;
  height: 3px;
  background: ${colors.gray};
  
  @media screen and (min-width: 700px) {
    height: 6px;
  }
`;

const TimeLineRect = styled.div`
  position: relative;
  z-index: 1;
  width: 22px;
  height: 22px;
  border: 1px solid ${colors.gray};
  background: ${({active}) => active ? colors.yellow : 'white'};
  
  @media screen and (min-width: 700px) {
    width: 24px;
    height: 24px;
    border-width: 2px;
  }
`;

const LOCATIONS_AMOUNT = 5;

export const LocationWrapper = (props) => {
    const {bg, text, isScaled, locNum} = props;
    const {next} = useProgress();
    const timeLine = getArray(LOCATIONS_AMOUNT);
    const BgComponent = isScaled ? BackgroundScaled : Background;
    return (
        <Wrapper>
            <BackgroundWrapper>
                <BgComponent src={bg} alt={''}/>
            </BackgroundWrapper>
            <ContentWrapper>
                <LocationName>
                    <Description>{text}</Description>
                    {props.children}
                </LocationName>
                <TimeLineWrapper>
                  <TimeLineBack />
                  {
                    timeLine.map((_, i) => (
                      <TimeLineRect active={ i <= locNum } />
                    ))
                  }
                </TimeLineWrapper>
                <ButtonStyled onClick={next} />
            </ContentWrapper>
        </Wrapper>
    );
};