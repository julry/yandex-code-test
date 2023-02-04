import React, { useCallback, useMemo, useState } from 'react';
import styled from 'styled-components';
import { getArray } from '../../../../utils/getArray';
import { colors } from '../../../../constants/colors';
import { ContentWrapper } from '../../../shared/wrappers';
import { DescriptionMd, DescriptionSm, Medium, RegularDescription, Title } from '../../../shared/styledTexts';
import { DoneMark } from '../../../shared/svg/DoneMark';
import { WinModal } from '../../../shared/WinModal';
import { LooseModal } from '../../../shared/LooseModal';
import { useProgress } from '../../../../hooks/useProgress';
import { RulesModal } from '../../../shared/RulesModal';
import { Rules1Yellow } from '../../../shared/svg/rectangles/Rules1Yellow';
import { Rules1Purple } from '../../../shared/svg/rectangles/Rules1Purple';
import { ArrowBtn } from '../../../shared/ArrowBtn';
import { DeleteBtn } from '../../../shared/svg/DeleteBtn';

const ANSWER = [9, 5, 3, 4, 6];
const TRIES_AMOUNT = 5;
const CELLS_AMOUNT = 5;
const TOTAL_TRIES_AMOUNT = 1;

const Wrapper = styled(ContentWrapper)`
  --cellWidth: 58px;
  ${({isModal}) => isModal ? 'filter: blur(5px);' : ''};
  
  @media screen and (max-width: 330px) {
    --cellWidth: 50px;
  }

  @media screen and (max-width: 300px) {
    --cellWidth: 45px;
  }
  
  @media screen and (min-width: 700px) {
    --cellWidth: 75px;
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
  transition: background-color 0.3s ease-in;

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

const DeleteBtnStyled = styled(DeleteBtn)`
  height: var(--cellWidth);
  width: var(--cellWidth);
	position: absolute;
	right: 0;
	top: 0;
`;

const ButtonsBlock = styled.div`
	position: relative;
	display: flex;
	width: calc(var(--cellWidth) * 5);
	margin: 0 auto;
`;

const ButtonModalStyled = styled(ArrowBtn)`
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
    const initialTries = useMemo(() => [...getArray(TRIES_AMOUNT, getArray(CELLS_AMOUNT, ''))],[]);
    const {next} = useProgress();
    const [tries, setTries] = useState(initialTries);
    const [totalTries, setTotalTries] = useState(TOTAL_TRIES_AMOUNT);
    const [currentTry, setCurrentTry] = useState(0);
    const [currentNumId, setCurrentNumId] = useState(0);
    const [finishModal, setFinishModal] = useState({shown: false});
    const [rulesModal, setRulesModal] = useState({shown: true, isFirstTime: true});

    const numbers = getArray(10, (a, i) => i);
    const maxLength = numbers.length / CELLS_AMOUNT;

    let numbersLines = getArray(maxLength).map((_, i) => numbers.slice(i * CELLS_AMOUNT, (i + 1) * CELLS_AMOUNT));

    const onChooseNumber = (num) => {
        let id = currentNumId;
        if (id + 1 > CELLS_AMOUNT) return;
        const newTries = [...tries];
        const newLine = [...newTries[currentTry]];
        newLine[id] = {num};
        newTries[currentTry] = newLine;
        setTries([...newTries]);
        setCurrentNumId(() => id + 1);
    };

    const getDoneBtnActive = useCallback(() => {
        return tries[currentTry].filter(tr => typeof (tr.num) === 'number').length === tries[currentTry].length;
    }, [tries, currentTry]);

    const onAcceptTry = useCallback(() => {
        if (!getDoneBtnActive()) return;
        const newTries = [...tries];
        const newLine = [...tries[currentTry]];
				const correctNums = [];
				const colored = newLine.map((n, i) => {
            let bg;
            let correct = false;
            if (ANSWER.includes(n.num)) {
                if (ANSWER.indexOf(n.num) === i) {
                    bg = colors.purple;
                    correct = true;
										correctNums.push(n.num);
                } else if (newLine.findIndex(num => num.num === n.num) === i) bg = colors.yellow;
            }
            return ({...n, bg, correct});
        });

				newTries[currentTry] = colored
					.map(n => (correctNums.includes(n.num) && !n.correct) ? ({...n, bg: null}) : n);

        setTries([...newTries]);
        if (newTries[currentTry].filter(num => !!num.correct).length === newTries[currentTry].length) {
            setFinishModal({shown: true, isWin: true});
            return;
        }
        if (currentTry + 1 === tries.length) {
            if (totalTries > 1) {
							setTimeout(() => {
								setFinishModal({shown: true, isOneMoreTry: true});
							}, 500);
            } else {
                setFinishModal({shown: true, isLose: true});
            }
            return;
        }
        setCurrentNumId(0);
        setCurrentTry(id => id + 1);
    }, [tries, currentTry, totalTries, getDoneBtnActive]);

    const onRetry = useCallback(() => {
        setTries(initialTries);
        setCurrentTry(0);
        setCurrentNumId(0);
        setFinishModal({shown: false, isOneMoreTry: false});
        setTotalTries(total => --total);
    }, [initialTries]);

    const closeRulesModal = useCallback(() => {
        setRulesModal({shown: false, isFirstTime: false});
    }, [setRulesModal]);


		const onDelete = useCallback(() => {
			if (currentNumId - 1 < 0) return;
			const newTries = [...tries];
			const newLine = [...tries[currentTry]];
			newLine[currentNumId - 1] = {num: ''};
			newTries[currentTry] = newLine;
			setTries([...newTries]);
			setCurrentNumId(numId => --numId);
		}, [tries, currentTry, currentNumId]);

    return (
        <>
            <Wrapper isModal={finishModal.shown || rulesModal.shown}>
                <RulesText onClick={() => setRulesModal({shown: true, isFirstTime: false})}>Правила</RulesText>
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
								<ButtonsBlock>
									<DoneBtn
										background={getDoneBtnActive() && colors.purple}
										onClick={onAcceptTry}
									>
										<Done/>
									</DoneBtn>
									<DeleteBtnStyled onClick={onDelete} />
								</ButtonsBlock>
            </Wrapper>
            {finishModal.shown && (
                finishModal.isWin ? <WinModal onClick={next}/>
                    : finishModal.isOneMoreTry ? (
                        <LooseModal>
                            <DescriptionMd>
                                {
                                    'Ты почти у цели! У тебя есть ещё 5 попыток. В этот раз обязательно получится ;)'
                                }
                            </DescriptionMd>
                            <ButtonModalStyled onClick={onRetry}>Подобрать снова</ButtonModalStyled>
                        </LooseModal>
                    ) : (
                        <LooseModal>
                            <DescriptionMd>
                                {'Пароль подобрать не вышло :( \n' +
                                    'Но ничего страшного, на встречу стажёр всё равно войдёт — коллеги уже отправили верные цифры! \n' +
                                    '\n' +
                                    'Ответ: ' + ANSWER.join('')}
                            </DescriptionMd>
                            <ButtonModalStyled onClick={next}/>
                        </LooseModal>
                    )
            )}
            {
                rulesModal.shown && <RulesModal close={closeRulesModal} firstTime={rulesModal.isFirstTime}>
                    <RegularDescription>
                        {
                            'Вписывай цифры в пустые ячейки ряда так, чтобы они в сумме давали 27.\nОтправляй свой ответ галочкой, ' +
                            '\nкак только подберёшь ряд.'
                        }
                        <br/><br/>
                        {'Если ячейка стала '}
                        <Medium>жёлтой</Medium>
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