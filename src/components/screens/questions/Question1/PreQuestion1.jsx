import React from 'react';
import styled from 'styled-components';
import { useProgress } from '../../../../hooks/useProgress';
import { pre1 } from '../../../../constants/images';
import { Description, DescriptionBold } from '../../../shared/styledTexts';
import { BorderBlock } from '../../../shared/BorderBlock';
import { SvgWrapper } from '../../../shared/SvgWrapper';
import { ButtonCentered } from '../../../shared/ButtonCentered';
import { ContentWrapper } from '../../../shared/wrappers';

const Wrapper = styled(ContentWrapper)`
  padding: 8.5vw 5.5vw;
`;

const TextBlock = styled(BorderBlock)`
  display: flex;
  flex-direction: column;
  padding: 6.4vw;
  width: 100%;
  font-weight: 700;
  margin: min(38.4vw, 144px) 0 0;
`;

const Rectangles = styled(SvgWrapper)`
  background: url(${pre1}) -8.3vw 0;
  width: 113vw;
  left: -5.5vw;
  top: -9.8vw;
  height: 53.333vw;
`;

const ButtonStyled = styled(ButtonCentered)`
    margin-top: 5.5vw;
`;

export const PreQuestion1 = () => {
    const {next} = useProgress();
    return (
        <Wrapper>
            <Description>
                {'Принято! Теперь ментор знает, какие задачи давать роботу.'}
            </Description>
            <br/>
            <Description>
                {'Пора знакомиться с командой!'}
            </Description>
            <TextBlock>
                <Rectangles/>
                <DescriptionBold>
                    Выведи на экран «Hi, mates!»
                </DescriptionBold>
                <ButtonStyled onClick={next}>За дело</ButtonStyled>
            </TextBlock>
        </Wrapper>
    )
}