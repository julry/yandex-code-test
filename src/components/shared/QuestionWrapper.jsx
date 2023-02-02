import React, { useCallback, useState } from 'react';
import styled from 'styled-components';
import { ContentWrapper } from './wrappers';
import { BorderBlock } from './BorderBlock';
import { useProgress } from '../../hooks/useProgress';
import { Description, DescriptionMd, DescriptionSm } from './styledTexts';
import { colors } from '../../constants/colors';
import { ButtonCentered } from './ButtonCentered';
import { WinModal } from './WinModal';
import { getPostAnswerById } from '../../utils/getPostAnswerById';
import { LooseModal } from './LooseModal';
import { ArrowBtn } from './ArrowBtn';
import { reachMetrikaGoal } from '../../utils/reachMetrikaGoal';

const Wrapper = styled(ContentWrapper)`
  padding: 8.5vw 5.5vw 8vw;
  ${({isModal}) => isModal ? 'filter: blur(5px);' : ''};
`;

const TextBlock = styled(BorderBlock)`
  padding: 8.5vw 4.8vw 5.5vw;
  width: 100%;
  margin: auto 0;
  white-space: break-spaces;
`;

const Answer = styled.div`
  padding: 3.2vw 4.2667vw;
  background: ${({chosen}) => chosen ? colors.darkGray : colors.textGray};
  box-shadow: 0 0 0 ${({chosen}) => chosen ? '1px' : 0} ${colors.textGray};
  border-radius: 5px;
  margin-top: min(5.06vw, 19px);
  white-space: pre-wrap;

  & + & {
    margin-top: min(2.6vw, 10px);
  }

  p {
    color: ${({chosen}) => chosen ? colors.textGray : colors.darkGray};
  }
`;

const ButtonStyled = styled(ButtonCentered)`
  margin-top: min(8.2vw, 31px);
`;


const ButtonModalStyled = styled(ArrowBtn)`
  margin-top: 5.5vw;
`;

const LanguageWrapper = styled(Description)`
  position: absolute;
  top: 2.1vw;
  right: 4.8vw;
  color: #ABABAB;
`;

const DescriptionMdStyled = styled(DescriptionMd)`
    margin-bottom: 2.9vw;
`;

const QuestionSm = styled(DescriptionSm)`
    margin-top: 0.5em;
`;

export const QuestionWrapper = (props) => {
    const [isModal, setIsModal] = useState({shown: false});
    const {updateAnswer, answers, next, language} = useProgress();
    const {question, correctAnswer, metrika} = props;

    const onBtnClick = useCallback(() => {
        document.addEventListener('scroll', (e) => e.preventDefault());
        const isWin = correctAnswer?.id === answers[question?.id];
        if (metrika) reachMetrikaGoal(metrika);
        setIsModal({shown: true, isWin});
        if (isWin) {
            setTimeout(() => {
                 next();
            }, 3000);
        }
    }, [setIsModal, answers, correctAnswer, next, question]);

    const onAnswerChoose = (id) => {
        if (answers[question.id] === id) {
            updateAnswer(question.id, null);
            return;
        }
        updateAnswer(question.id, id);
    };

    const QuestionWrapper = question?.questionSize === 'sm' ?
        QuestionSm : question?.questionSize === 'md' ? DescriptionMd
        : Description;
    return (
        <>
            <Wrapper ref={props.wrapperRef} isModal={isModal.shown}>
                {!!question?.text && <DescriptionMdStyled>{question.text}</DescriptionMdStyled>}
                <TextBlock>
                    {props.children}
                    <QuestionWrapper>
                        {question?.question}
                    </QuestionWrapper>
                    <LanguageWrapper>
                        {language}
                    </LanguageWrapper>
                    {question?.answers.map(answer => (
                        <Answer
                            onClick={() => onAnswerChoose(answer.id)}
                            key={answer.id}
                            chosen={answer.id === answers[question.id]}
                        >
                            <DescriptionSm>
                                {answer.text}
                            </DescriptionSm>
                        </Answer>
                    ))}
                </TextBlock>
                <ButtonStyled width={'65vw'} disabled={!answers[question.id]} onClick={onBtnClick}>
                    {question.buttonText}
                </ButtonStyled>
            </Wrapper>
            {isModal.shown && (
                isModal.isWin ? <WinModal/>
                    : (
                        <LooseModal>
                            <DescriptionMd>
                                {getPostAnswerById(question?.id).getText(correctAnswer?.text)}
                            </DescriptionMd>
                            <ButtonModalStyled onClick={next}/>
                        </LooseModal>
                    )
            )}
        </>
    );
};