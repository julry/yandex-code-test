import React from 'react';
import styled from 'styled-components';
import { useProgress } from '../../../../hooks/useProgress';
import { workPlace2, preInteract3 } from '../../../../constants/images';
import { BackgroundBlurred, BackgroundWrapper, DarkenWrapper } from '../../../shared/wrappers';
import { Description, DescriptionMdBold } from '../../../shared/styledTexts';
import { ButtonCentered } from '../../../shared/ButtonCentered';
import { Dialog } from '../../../shared/Dialog';
import { SvgWrapper } from '../../../shared/SvgWrapper';

const Wrapper = styled(DarkenWrapper)`
  padding: min(8.533vw, 32px) 5.5vw;
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
  background: url(${preInteract3}) -7.3vw 0;
  width: 109.3vw;
  max-width: 410px;
  left: -5.5vw;
  top: -9.3vw;
  height: 62.93vw;
  max-height: 236px;
  z-index: -2;
`;

export const PreInteract3 = () => {
    const {next} = useProgress();
    return (
        <>
            <BackgroundWrapper>
                <BackgroundBlurred src={workPlace2} alt={''}/>
            </BackgroundWrapper>
            <Wrapper>
                <Description>
                    {
                        'Хм, странно, тебе на рабочее место подкинули планшет… \n' +
                        'На экране непонятные куски изображения, что бы это могло значить? ' +
                        'Может, это какая-то шутка?'
                    }
                </Description>
                <TextBlock position={'right'}>
                    <DescriptionMdBold>
                        {
                            'Нужно разобраться и собрать всё воедино, пока что выглядит, как абракадабра…'
                        }
                    </DescriptionMdBold>
                    <ButtonCentered onClick={next}>Что у нас тут?</ButtonCentered>
                    <Rectangles />
                </TextBlock>
            </Wrapper>
        </>
    );
};