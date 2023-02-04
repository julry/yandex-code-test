import React from 'react';
import styled from 'styled-components';
import { useProgress } from '../../../../hooks/useProgress';
import { workPlace, preInteract1 } from '../../../../constants/images';
import { reachMetrikaGoal } from '../../../../utils/reachMetrikaGoal';
import { BackgroundBlurred, BackgroundWrapper, ContentWrapper } from '../../../shared/wrappers';
import { Description, DescriptionMdBold } from '../../../shared/styledTexts';
import { ButtonCentered } from '../../../shared/ButtonCentered';
import { Dialog } from '../../../shared/Dialog';
import { SvgWrapper } from '../../../shared/SvgWrapper';

const Wrapper = styled(ContentWrapper)`
  padding: min(8.533vw, 32px) 5.5vw;
  background: rgba(8, 7, 22, 0.75);
`;

const TextBlock = styled(Dialog)`
  display: flex;
  flex-direction: column;
  padding: 4.533vw;
  width: 100%;
  margin: min(37.866vw, 142px) 0 0 0;

  & ${ButtonCentered} {
    margin-top: min(5.3vw, 20px);
  }

  @media screen and (min-width: 600px) {
    white-space: normal;
  }
`;

const Rectangles = styled(SvgWrapper)`
  background: url(${preInteract1}) -4.5vw 0;
  width: 113.9333vw;
  left: -5.5vw;
  top: -11.7vw;
  height: 85vw;
  z-index: -2;
`;

export const PreInteract1 = () => {
    const {next} = useProgress();

    const onNext = () => {
      reachMetrikaGoal('startq2');
      next();
    };

    return (
        <>
            <BackgroundWrapper>
                <BackgroundBlurred src={workPlace} alt={''}/>
            </BackgroundWrapper>
            <Wrapper>
                <Description>
                    {
                        'Теперь, когда ты в курсе некоторых преимуществ Яндекса, нужно найти твоё личное рабочее место.'
                    }
                </Description>
                <br/>
                <Description>
                    {
                        'А, вот и оно! Пора подключаться на первый созвон с командой!'
                    }
                </Description>
                <TextBlock position={'right'}>
                    <DescriptionMdBold>
                        {
                            'О нет, нужен пароль для входа \n' +
                            'в конференцию… Хорошо, \n' +
                            'что роботу направили подсказку:\nон состоит из 5 чисел, которые \n' +
                            'в сумме дают 27. Помоги стажёру подобрать верный!'
                        }
                    </DescriptionMdBold>
                    <ButtonCentered onClick={onNext}>За дело</ButtonCentered>
                    <Rectangles/>
                </TextBlock>
            </Wrapper>
        </>
    );
};