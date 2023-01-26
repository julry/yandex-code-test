import React, { useEffect } from 'react';
import styled from 'styled-components';
import { Background, BackgroundScaled, BackgroundWrapper, ContentWrapper } from './wrappers';
import { BorderBlock } from './BorderBlock';
import { Description } from './styledTexts';
import { useProgress } from '../../hooks/useProgress';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const LocationName = styled(BorderBlock)`
  margin: auto auto 9.0667vw;
  padding: 20px 24px;
`;

export const LocationWrapper = (props) => {
    const {bg, text, isScaled} = props;
    const {next} = useProgress();

    useEffect(() => {
        setTimeout(() => next(), 1500);
    }, [next]);

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
            </ContentWrapper>
        </Wrapper>
    );
};