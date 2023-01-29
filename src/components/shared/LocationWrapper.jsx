import React from 'react';
import styled from 'styled-components';
import { Background, BackgroundScaled, BackgroundWrapper, ContentWrapper } from './wrappers';
import { BorderBlock } from './BorderBlock';
import { Description } from './styledTexts';
import { useProgress } from '../../hooks/useProgress';
import { ButtonCentered } from './ButtonCentered';
import { NextArrow } from './svg/NextArrow';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const LocationName = styled(BorderBlock)`
  margin: min(38px, 10.133vw) auto 0;
  padding: 20px 24px;
`;

const ButtonStyled = styled(ButtonCentered)`
  margin-top: auto;
  margin-bottom: 9.0667vw;
`;

const Arrow = styled(NextArrow)`
  height: 16px;
  width: 75px;
`;

export const LocationWrapper = (props) => {
    const {bg, text, isScaled} = props;
    const {next} = useProgress();

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
                <ButtonStyled hasSvg onClick={next} width={'65vw'}><Arrow/></ButtonStyled>
            </ContentWrapper>
        </Wrapper>
    );
};