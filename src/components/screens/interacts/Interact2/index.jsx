import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { ContentWrapper } from '../../../shared/wrappers';
import { DescriptionMd, RulesText } from '../../../shared/styledTexts';
import { colors } from '../../../../constants/colors';
import { ButtonCentered } from '../../../shared/ButtonCentered';
import { Rules2 } from './Rules2';
import { FinishModal } from './FinishModal';
import { useProgress } from '../../../../hooks/useProgress';
import { LooseModal } from '../../../shared/LooseModal';
import { NextArrow } from '../../../shared/svg/NextArrow';

const ANSWER = ['#E72525', '#F8791D', '#FCCD00', '#62B146'];
const TRIES_AMOUNT = 5;
const CIRCLES_AMOUNT = 4;
const TOTAL_TRIES = 2;
const COLORS = ['#E72525', '#5A50E2', '#1495CF', '#62B146', '#FCCD00', '#F8791D', '#FFFFFF', '#D7D7D7'];

const Wrapper = styled(ContentWrapper)`
  --circleWidth: 65px;
  ${({isModal}) => isModal ? 'filter: blur(5px);' : ''};
  @media screen and (max-width: 330px) {
    --circleWidth: 55px;
  }

  @media screen and (max-width: 315px) {
    --circleWidth: 45px;
  }

  @media screen and (min-width: 700px) {
    --circleWidth: 85px;
  }
`;

const Line = styled.div`
  display: flex;
  justify-content: space-between;
`;

const CircleLine = styled(Line)`
  margin: min(31.46vw, 117px) auto;
`;

const Shape = styled.div`
  border: 1px solid ${colors.textGray};
  background: ${({background}) => background ?? 'transparent'};
  transition: backround 0.3s ease-in;
`;

const Circle = styled(Shape)`
  height: var(--circleWidth);
  width: var(--circleWidth);
  border-radius: 50%;

  & + & {
    margin-left: calc(var(--circleWidth) / 3.6);
  }
`;

const Rhombus = styled(Shape)`
  transform: rotate(45deg);
  height: 16.5px;
  width: 16.5px;

  & + & {
    margin-left: 15px;
  }
  
  @media screen and (min-width: 700px) {
    height: 30.5px;
    width: 30.5px;
    
    & + & {
      margin-left: 25px;
    }
  }
`;

const TriesWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 4.53vw 0 0 min(73px, 19.4666vw);
  color: #ABABAB;
  font-size: 12px;
  
  @media screen and (min-width: 450px) {
    font-size: 18px;
    margin:  4.53vw auto 0;
  }
`;

const RhombusLine = styled(Line)`
  margin-left: min(9.8667vw, 37px);
`;

const ButtonModalStyled = styled(ButtonCentered)`
  margin-top: 5.5vw;
`;


const Arrow = styled(NextArrow)`
  height: 16px;
  width: 78px;
`;

export const Interact2 = () => {
    const {next} = useProgress();
    const getArray = (length, content) => {
        const func = typeof content === 'function' ? content : () => content;
        return Array.from({length}, func);
    };
    const initialTries = useMemo(() => [
        ...getArray(TRIES_AMOUNT, getArray(CIRCLES_AMOUNT, ''))
    ], []);
    const [tries, setTries] = useState(initialTries);
    const [currentTry, setCurrentTry] = useState(0);
    const [currentColors, setCurrentColors] = useState([]);
    const [finishModal, setFinishModal] = useState({shown: false});
    const [rulesModal, setRulesModal] = useState({shown: true, isFirstTime: true});
    const [totalTries, setTotalTries] = useState(TOTAL_TRIES);


    const circles = getArray(CIRCLES_AMOUNT, () => '');

    const onCircleClick = useCallback((num) => {
        const colors = [...currentColors];
        const colorId = (!colors[num] || (colors[num]?.id + 1) >= COLORS.length) ? 0 : colors[num].id + 1;
        colors[num] = {bg: COLORS[colorId], id: colorId};
        setCurrentColors([...colors]);
    }, [currentColors]);

    const onRetry = useCallback(() => {
        setTries(initialTries);
        setCurrentTry(0);
        setTotalTries(total => --total);
    }, [setTries, setCurrentTry, initialTries, setTotalTries]);

    const onAcceptTry = useCallback(() => {
        const colorIds = [...(new Set(currentColors.map(color => color.id)))];
        const amount = colorIds.reduce((res, id) => {
            if (ANSWER.includes(COLORS[id])) res += 1;
            return res;
        }, 0);
        const newTries = [...tries];

        newTries[currentTry] = currentColors
            .map((color) => (
                {bg: ANSWER.includes(color.bg) ? 'white' : null}
            ));
        setTries([...newTries]);

        if (amount === CIRCLES_AMOUNT) {
            setFinishModal({shown: true, isWin: true});
            setTimeout(() => {
                next();
            }, 1500);
        }
        if (currentTry + 1 >= TRIES_AMOUNT) {
            if (totalTries > 1) {
                onRetry();
            } else {
                setFinishModal({shown: true, isLose: true});
            }
        } else setCurrentTry(id => id + 1);
    }, [tries, currentColors, currentTry, onRetry, next, totalTries]);

    return (
        <>
            <Wrapper isModal={finishModal.shown || rulesModal.shown}>
                <RulesText onClick={() => setRulesModal({shown: true, isFirstTime: false})}>Правила</RulesText>
                {tries.map((tr, ind) => (
                    <TriesWrapper key={'wrapper_' + ind}>
                        {ind + 1}
                        <RhombusLine>
                            {tr.map((cell, i) => (
                                <Rhombus key={'cell_' + i} background={cell?.bg}/>
                            ))}
                        </RhombusLine>
                    </TriesWrapper>
                ))}

                <CircleLine>
                    {circles.map((_, ind) => (
                        <Circle key={'cellN_' + ind} onClick={() => onCircleClick(ind)}
                                background={currentColors[ind]?.bg}/>
                    ))}
                </CircleLine>
                <ButtonCentered
                    onClick={onAcceptTry}
                    disabled={currentColors.length !== CIRCLES_AMOUNT}
                >
                    Отправить
                </ButtonCentered>
            </Wrapper>
            {finishModal.shown && (finishModal.isWin ? <FinishModal/> : (
                <LooseModal>
                    <DescriptionMd>
                        {
                            'Видимо, вы на разных языках говорили с машиной, но её рассмешил ваш немного неловкий диалог. \n' +
                            'Ура, она всё же улыбнулась! :)'
                        }
                    </DescriptionMd>
                    <ButtonModalStyled hasSvg onClick={next}><Arrow/></ButtonModalStyled>
                </LooseModal>
            ))}
            {
                rulesModal.shown && <Rules2
                    close={() => setRulesModal({shown: false, isFirstTime: false})}
                    firstTime={rulesModal.isFirstTime}
                />
            }
        </>
    );
};
