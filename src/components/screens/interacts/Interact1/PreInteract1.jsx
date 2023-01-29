import React from 'react';
import styled from 'styled-components';
import { useProgress } from '../../../../hooks/useProgress';
import { BackgroundBlurred, BackgroundWrapper, ContentWrapper } from '../../../shared/wrappers';
import { workPlace } from '../../../../constants/images';
import { Description, DescriptionMdBold } from '../../../shared/styledTexts';
import { ButtonCentered } from '../../../shared/ButtonCentered';
import rectangles from '../../../shared/svg/rectangles/preInteract1.svg';
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
  margin: min(58.6vw, 210px) 0 0 0;
  
  & ${ButtonCentered} {
    margin-top: min(5.3vw, 20px);
  }

  @media screen and (min-width: 600px) {
    white-space: normal;
  }
`;

const Rectangles = styled(SvgWrapper)`
  background: url(${rectangles}) -4.5vw 0;
  width: 113.9333vw;
  left: -5.5vw;
  top: -11.7vw;
  height: 85vw;
  z-index: -2;
`;

export const PreInteract1 = () => {
    const {next} = useProgress();
    return (
        <>
            <BackgroundWrapper>
                <BackgroundBlurred src={workPlace} alt={''}/>
            </BackgroundWrapper>
            <Wrapper>
                <Description>
                    {
                        'Теперь, когда ты в курсе некоторых преимуществ Яндекса, пришло время искать твое личное рабочее место!'
                    }
                </Description>
                <TextBlock position={'right'}>
                    <DescriptionMdBold>
                        {
                            'О нет, нужен пароль для входа \n' +
                            'в конференцию… Хорошо, \n' +
                            'что роботу направили подсказку: он состоит из 5 чисел, которые \n' +
                            'в сумме дают 27. Помоги стажёру подобрать верный!'
                        }
                    </DescriptionMdBold>
                    <ButtonCentered width={'65vw'} onClick={next}>За дело</ButtonCentered>
                    <Rectangles />
                </TextBlock>
            </Wrapper>
        </>
    );
};