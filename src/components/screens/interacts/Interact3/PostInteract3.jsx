import React from 'react';
import styled from 'styled-components';
import { useProgress } from '../../../../hooks/useProgress';
import { BackgroundBlurred, BackgroundWrapper, DarkenWrapper } from '../../../shared/wrappers';
import { workPlace2 } from '../../../../constants/images';
import { Description } from '../../../shared/styledTexts';
import { ButtonCentered } from '../../../shared/ButtonCentered';
import { BorderBlock } from '../../../shared/BorderBlock';
import welcome from '../../../shared/svg/welcome.svg';
import { Post3Purple } from '../../../shared/svg/rectangles/Post3Purple';
import { Post3Yellow } from '../../../shared/svg/rectangles/Post3Yellow';

const Wrapper = styled(DarkenWrapper)`
  padding: min(8.533vw, 32px) 5.5vw;
`;

const TextBlock = styled(BorderBlock)`
  display: flex;
  flex-direction: column;
  background: url(${welcome}) no-repeat;
  background-size: contain;
  width: 80.266vw;
  min-width: 80.266vw;
  max-width: 301px;
  height: 80.266vw;
  min-height: 80.266vw;
  max-height: 301px;
  margin: min(7.4666vw, 28px) auto min(10.1333vw, 38px);
`;

const RectanglePurple = styled(Post3Purple)`
  position: absolute;
  width: 102.4vw;
  max-width: 384px;
  left: -27.4666vw;
  top: -6.1333vw;
  height: 58.4vw;
  max-height: 219px;
  z-index: -2;
`;

const RectangleYellow = styled(Post3Yellow)`
  position: absolute;
  width: 84.8vw;
  max-width: 318px;
  right: -14.8533vw;
  bottom: -7.2vw;
  height: 50.1333vw;
  max-height: 188px;
  z-index: -2;
`;

export const PostInteract3 = () => {
    const {next} = useProgress();
    return (
        <>
            <BackgroundWrapper>
                <BackgroundBlurred src={workPlace2} alt={''}/>
            </BackgroundWrapper>
            <Wrapper>
                <Description>
                    {
                        'Оуу, какая милая электронная открытка! Робот-стажёр с первого дня зарекомендовал себя \n' +
                        'в команде и прекрасно справляется :)'
                    }
                </Description>
                <br/><br/>
                <Description>
                    {
                        'В завершение первого рабочего дня коллеги ещё и вручают пак мерча от Яндекса! Приятно в 1024 раза больше, не правда ли?'
                    }
                </Description>
                <TextBlock>
                    <RectanglePurple />
                    <RectangleYellow />
                </TextBlock>
                <ButtonCentered onClick={next}>Очень приятно :)</ButtonCentered>
            </Wrapper>
        </>
    );
};