import React from 'react';
import styled from 'styled-components';
import { Description, DescriptionBold, Title } from '../shared/styledTexts';
import rectangles from '../shared/svg/rectangles/intro.svg';
import { ButtonCentered } from '../shared/ButtonCentered';
import { ContentWrapper } from '../shared/wrappers';
import { SvgWrapper } from '../shared/SvgWrapper';
import { BorderBlock } from '../shared/BorderBlock';
import { useProgress } from '../../hooks/useProgress';

const Wrapper = styled(ContentWrapper)`
  padding: 8.5vw 5.5vw;
`;

const TextBlock = styled(BorderBlock)`
  padding: 5.5vw;
  width: 100%;
  margin: 20vw 0 16vw;
`;

const Rectangles = styled(SvgWrapper)`
  background: url(${rectangles}) -8.3vw 0;
  width: 111vw;
  left: -5.5vw;
  top: -9.8vw;
  height: 40.8vw;
`;

const TitleStyled = styled(Title)`
  margin-bottom: 4.5vw;
  white-space: pre-line;
  @media screen and (min-width: 600px) {
    text-align: center;
    white-space: normal;
  }
`;

export const Intro = () => {
    const {next} = useProgress();
    return (
        <Wrapper>
            <Description>
                {
                    'Тебе выпала уникальная возможность: ' +
                    'помочь экспериментальному роботу-стажёру, которого взяли в Яндекс! \n' +
                    'Робот может генерировать речь \n' +
                    'и двигаться. Но все его действия требуют правильно написанного кода.'
                }
            </Description>
            <TextBlock>
                <Rectangles/>
                <DescriptionBold>
                    Твоя цель — помочь ему выполнить все задачи.
                </DescriptionBold>
            </TextBlock>
            <TitleStyled>
                {'Первый робо-рабочий день\nв офисе начинается!'}
            </TitleStyled>
            <ButtonCentered onClick={next}>Поехали</ButtonCentered>
        </Wrapper>
    )
}