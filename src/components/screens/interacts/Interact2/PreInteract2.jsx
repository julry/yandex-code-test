import React from 'react';
import styled from 'styled-components';
import { useProgress } from '../../../../hooks/useProgress';
import { reachMetrikaGoal } from '../../../../utils/reachMetrikaGoal';
import { coffeeBrake, preInteract2 } from '../../../../constants/images';
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
  padding: 5.06vw 4.533vw 5.06vw 5.06vw;
  width: 100%;
  margin: min(58.6vw, 210px) 0 0 0;

  & ${ButtonCentered} {
    margin-top: min(5.3vw, 20px);
  }
`;

const Rectangles = styled(SvgWrapper)`
  background: url(${preInteract2}) 0 0;
  width: 100vw;
  left: -5.5vw;
  top: -9.3vw;
  height: 62.9vw;
  z-index: -2;
`;

export const PreInteract2 = () => {
    const {next} = useProgress();

    const onNext = () => {
      reachMetrikaGoal('startq4');
      next();
    };

    return (
        <>
            <BackgroundWrapper>
                <BackgroundBlurred src={coffeeBrake} alt={''}/>
            </BackgroundWrapper>
            <Wrapper>
                <Description>
                    {
                        'Ох уж эти люди… Не могут разобраться с кофемашиной… \n' +
                        'Это ведь тоже машина — поговори с ней на языке кода и разберись, \n' +
                        'в чём проблема.'
                    }
                </Description>
                <TextBlock position={'right'}>
                    <DescriptionMdBold>
                        {
                            'Ой, кажется, у неё сегодня просто плохое настроение :(  Подбери нужные цвета для его поднятия!'
                        }
                    </DescriptionMdBold>
                    <ButtonCentered onClick={onNext}>За дело</ButtonCentered>
                    <Rectangles />
                </TextBlock>
            </Wrapper>
        </>
    );
};