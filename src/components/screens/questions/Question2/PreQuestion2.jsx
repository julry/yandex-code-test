import React from 'react';
import styled from 'styled-components';
import { useProgress } from '../../../../hooks/useProgress';
import { BackgroundBlurred, BackgroundWrapper, ContentWrapper } from '../../../shared/wrappers';
import { workPlace, preQuestion2 } from '../../../../constants/images';
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
  text-align: center;
  padding: 5.5vw 0 7.2vw;
  width: 100%;
  margin: min(58.6vw, 210px) 0 0 0;
  
  & ${ButtonCentered} {
    margin-top: min(5.3vw, 20px);
  }
`;

const Rectangles = styled(SvgWrapper)`
  background: url(${preQuestion2}) -9.8vw 0;
  width: 113.0666vw;
  left: -5.5vw;
  top: -8.8vw;
  height: 52.2666vw;
  z-index: -2;
`;

export const PreQuestion2 = () => {
    const {next} = useProgress();
    return (
        <>
            <BackgroundWrapper>
                <BackgroundBlurred src={workPlace} alt={''}/>
            </BackgroundWrapper>
            <Wrapper>
                <Description>
                    {
                        'Созвон помог подружиться \n' +
                        'с коллегами! И после созвона \n' +
                        'они подходят к тебе — кажется, \n' +
                        'им нужна помощь? Да, они \n' +
                        'слишком долго сидели \n' +
                        'над сложным кодом и теперь \n' +
                        'не могут найти ошибку :('
                    }
                </Description>
                <TextBlock position={'right'}>
                    <DescriptionMdBold>
                        {
                            'Дебажинг?'
                        }
                    </DescriptionMdBold>
                    <ButtonCentered onClick={next}>Вызов принят!</ButtonCentered>
                    <Rectangles />
                </TextBlock>
            </Wrapper>
        </>
    );
};