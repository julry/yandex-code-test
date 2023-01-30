import React from 'react';
import styled from 'styled-components';
import { BackgroundBlurred, BackgroundWrapper, ContentWrapper } from '../../shared/wrappers';
import {
    Description,
    DescriptionMd,
    MentorName,
    RegularDescription
} from '../../shared/styledTexts';
import { BorderBlock } from '../../shared/BorderBlock';
import { reception, language } from '../../../constants/images';
import { LANGUAGE_TYPE } from '../../../constants/languageTypes';
import { Button } from '../../shared/Button';
import { useProgress } from '../../../hooks/useProgress';
import { Man } from '../../shared/svg/Man';
import { SvgWrapper } from '../../shared/SvgWrapper';
import { Dialog } from '../../shared/Dialog';

const Wrapper = styled(ContentWrapper)`
  padding: 8.5vw 5.5vw;
  background: rgba(8, 7, 22, 0.75);
`;

const TextBlock = styled(Dialog)`
  position: relative;
  padding: 5.5vw;
  width: 77vw;
  margin: min(28vw, 105px) 0 min(28vw, 105px) 12vw;
  text-align: center;
  max-width: 550px;
`;

const Question = styled(BorderBlock)`
  padding: 4vw 4.5vw;
  
  @media screen and (min-width: 600px) {
    max-width: 400px;
    margin: 0 auto;
  }
`;

const ManStyled = styled(Man)`
  position: absolute;
  bottom: -20.6vw;
  width: 27.2vw;
  height: 27.2vw;
  left: -23.2vw;
  z-index: -1;
  user-select: none;
  pointer-events: none;
`;

const AnswersWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 370px;
`;

const Answer = styled(Button)`
  margin-top: 2.5vw;
  width: 37.6vw;
  max-width: 150px;
`;

const Rectangles = styled(SvgWrapper)`
  background: url(${language}) -3.4667vw 0;
  width: 106.9333vw;
  left: -20vw;
  top: -5.3vw;
  height: 33.666vw;
  z-index: -2;
`;



export const Question0 = () => {
    const {next, updateProgress} = useProgress();

    const onPickAnswer = (type) => {
        updateProgress('language', type);
        next();
    }

    return (
        <>
            <BackgroundWrapper>
                <BackgroundBlurred src={reception} alt={''}/>
            </BackgroundWrapper>
            <Wrapper>
                <Description>
                    {'А вот и первая встреча! \n' +
                        'К роботу-стажеру подходит ментор:'}
                </Description>
                <TextBlock>
                    <MentorName>Ментор</MentorName>
                    <DescriptionMd>На чём кодишь?</DescriptionMd>
                    <ManStyled />
                    <Rectangles/>
                </TextBlock>
                <Question>
                    <RegularDescription>{'Выбери свой предпочитаемый ЯП\nдля кодинга:'}</RegularDescription>
                    <AnswersWrapper>
                        {Object.keys(LANGUAGE_TYPE).map((type) => (
                            <Answer onClick={() => onPickAnswer(LANGUAGE_TYPE[type])} key={type}>{LANGUAGE_TYPE[type]}</Answer>
                        ))}
                    </AnswersWrapper>
                </Question>
            </Wrapper>
        </>
    )
}