import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { ContentWrapper } from '../../../shared/wrappers';
import { DescriptionMd, DescriptionSm, Medium, RegularDescription, Title } from '../../../shared/styledTexts';
import { colors } from '../../../../constants/colors';
import { DoneMark } from '../../../shared/svg/DoneMark';
import { WinModal } from '../../../shared/WinModal';
import { LooseModal } from '../../../shared/LooseModal';
import { NextArrow } from '../../../shared/svg/NextArrow';
import { ButtonCentered } from '../../../shared/ButtonCentered';
import { useProgress } from '../../../../hooks/useProgress';
import { RulesModal } from '../../../shared/RulesModal';
import { Rules1Yellow } from '../../../shared/svg/rectangles/Rules1Yellow';
import { Rules1Purple } from '../../../shared/svg/rectangles/Rules1Purple';

const ANSWER = [9, 5, 3, 4, 6];
const TRIES_AMOUNT = 5;
const CELLS_AMOUNT = 5;
const TOTAL_TRIES_AMOUNT = 2;

const Wrapper = styled(ContentWrapper)`
  --cellWidth: 58px;
  ${({isModal}) => isModal ? 'filter: blur(5px);' : ''};
  
  @media screen and (max-width: 330px) {
    --cellWidth: 50px;
  }

  @media screen and (max-width: 300px) {
    --cellWidth: 45px;
  }
`;

const Line = styled.div`
  display: flex;
  height: var(--cellWidth);
  margin: 0 auto;

  & + & {
    margin-top: -1px;
  }
`;

const Cell = styled.div`
  height: var(--cellWidth);
  width: var(--cellWidth);
  border: 1px solid ${colors.textGray};
  color: ${colors.textGray};
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({background}) => background ?? 'transparent'};
  transition: backround 0.3s ease-in;

  & + & {
    margin-left: -1px;
  }
`;

const RulesText = styled(DescriptionSm)`
  width: min-content;
  margin: min(8.533vw, 32px) 0 min(9.333vw, 35px) 5.5vw;
  color: ${colors.yellow};
  border-bottom: 1px solid ${colors.yellow};
`;

const ButtonsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin: min(14.6vw, 53px) auto min(5.6vw, 21px);
`;

const Done = styled(DoneMark)`
  width: 8.266vw;
  height: 6.666vw;
  max-width: 31px;
  max-height: 25px;
`;

const DoneBtn = styled(Cell)`
  margin: 0 auto;
`;

const Arrow = styled(NextArrow)`
  height: 16px;
  width: 78px;
`;

const ButtonModalStyled = styled(ButtonCentered)`
  margin-top: 5.5vw;
`;

const RulesPurpleRectangle = styled(Rules1Purple)`
  position: absolute;
  left: -13.8vw;
  top: -7.46vw;
  height: 70.666vw;
  width: 114.4vw;
  max-width: 429px;
  max-height: 265px;
  z-index: -4;
`;

const RulesYellowRectangle = styled(Rules1Yellow)`
  position: absolute;
  bottom: -10vw;
  right: -10vw;
  height: 61.333vw;
  width: 83.4666vw;
  max-width: 313px;
  max-height: 230px;
  z-index: -4;
`;

export const Interact1 = () => {
    const getArray = (length, content) => {
        const func = typeof content === 'function' ? content : () => content;
        return Array.from({length}, func);
    };
    const initialTries = [...getArray(TRIES_AMOUNT, getArray(CELLS_AMOUNT, ''))];
    const {next} = useProgress();
    const [tries, setTries] = useState(initialTries);
    const [totalTries, setTotalTries] = useState(TOTAL_TRIES_AMOUNT);
    const [currentTry, setCurrentTry] = useState(0);
    const [currentNumId, setCurrentNumId] = useState(0);
    const [finishModal, setFinishModal] = useState({shown: false});
    const [rulesModal, setRulesModal] = useState(true);

    const numbers = getArray(10, (a, i) => i + 1);
    const maxLength = numbers.length / CELLS_AMOUNT;

    let numbersLines = getArray(maxLength).map((_, i) => numbers.slice(i * CELLS_AMOUNT, (i + 1) * CELLS_AMOUNT));

    const onChooseNumber = (num) => {
        let id = currentNumId;
        if (id + 1 > CELLS_AMOUNT) {
            id = 0;
        }
        const newTries = [...tries];
        const newLine = [...newTries[currentTry]];
        newLine[id] = {num};
        newTries[currentTry] = newLine;
        setTries([...newTries]);
        setCurrentNumId(() => id + 1);
    };

    const onAcceptTry = useCallback(() => {
        const newTries = [...tries];
        const newLine = [...tries[currentTry]];
        newTries[currentTry] = newLine.map((n, i) => {
            let bg;
            let correct = false;
            if (ANSWER.includes(n.num)) {
                if (ANSWER.indexOf(n.num) === i) {
                    bg = colors.purple;
                    correct = true;
                } else if (newLine.findIndex(num => num.num === n.num) === i) {
                    bg = colors.yellow;
                }
            }
            return ({...n, bg, correct});
        });
        setTries([...newTries]);
        if (newTries[currentTry].filter(num => !!num.correct).length === newTries[currentTry].length) {
            setFinishModal({shown: true, isWin: true});
            setTimeout(() => {
                setFinishModal({shown: false, isWin: false});
                next();
            }, 1500);
            return;
        }
        if (currentTry + 1 === tries.length) {
            if (totalTries > 1) {
                setFinishModal({shown: true, isOneMoreTry: true});
            } else {
                setFinishModal({shown: true, isLose: true});
            }
            return;
        }
        setCurrentNumId(0);
        setCurrentTry(id => id + 1);
    }, [tries, next]);

    const onRetry = () => {
        setTries(initialTries);
        setCurrentTry(0);
        setCurrentNumId(0);
        setFinishModal({shown: false, isOneMoreTry: false});
        setTotalTries(total => --total);
    };

    return (
        <>
            <Wrapper isModal={finishModal.shown || rulesModal}>
                <RulesText onClick={() => setRulesModal(true)}>Правила</RulesText>
                {tries.map((tr, ind) => (
                    <Line key={'line_' + ind}>
                        {tr.map((cell, i) => (
                            <Cell key={'cell_' + i} background={cell?.bg}>
                                <Title>{cell?.num}</Title>
                            </Cell>
                        ))}
                    </Line>
                ))}
                <ButtonsWrapper>
                    {numbersLines.map((tr, ind) => (
                        <Line key={'lineN_' + ind}>
                            {tr.map((cell, i) => (
                                <Cell key={'cellN_' + i} onClick={() => onChooseNumber(cell)}>
                                    <Title>{cell}</Title>
                                </Cell>
                            ))}
                        </Line>
                    ))}
                </ButtonsWrapper>
                <DoneBtn background={colors.purple} onClick={onAcceptTry}><Done/></DoneBtn>
            </Wrapper>
            {finishModal.shown && (
                finishModal.isWin ? <WinModal/>
                    : finishModal.isOneMoreTry ? (
                        <LooseModal>
                            <DescriptionMd>
                                {
                                    'Ты почти у цели! У тебя есть ещё 5 попыток. В этот раз обязательно получится ;)'
                                }
                            </DescriptionMd>
                            <ButtonModalStyled onClick={onRetry} width={'65vw'}>Подобрать снова</ButtonModalStyled>
                        </LooseModal>
                    ) : (
                        <LooseModal>
                            <DescriptionMd>
                                {'Пароль подобрать не вышло :( \n' +
                                    'Но ничего страшного, на встречу стажёр всё равно войдёт — коллеги уже отправили верные цифры! \n' +
                                    '\n' +
                                    'Ответ: ' + ANSWER.join('')}
                            </DescriptionMd>
                            <ButtonModalStyled hasSvg onClick={next} width={'65vw'}><Arrow/></ButtonModalStyled>
                        </LooseModal>
                    )
            )}
            {
                rulesModal && <RulesModal close={() => setRulesModal(false)}>
                    <RegularDescription>
                        {
                            'Вписывай цифры в пустые ячейки ряда так, чтобы они в сумме давали 27. Отправляй свой ответ галочкой, \n' +
                            'как только подберешь ряд.'
                        }
                        <br/><br/>
                        {'Если ячейка стала '}
                        <Medium>желтой</Medium>
                        {' — цифра есть в пароле, но стоит на другом месте. Если '}
                        <Medium>фиолетовой</Medium>
                        {' — цифра расположена верно. В остальных случаях выбранной цифры в пароле нет.'}
                        <br/><br/>
                        {'Ориентируйся на цвета из прошлых попыток!'}
                    </RegularDescription>
                    <RulesPurpleRectangle/>
                    <RulesYellowRectangle/>
                </RulesModal>
            }
        </>
    );

};