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
import { NextArrow } from './svg/NextArrow';
import { LooseModal } from './LooseModal';

const Wrapper = styled(ContentWrapper)`
  padding: 8.5vw 5.5vw 1vw;
  filter: blur(${({isModal}) => isModal ? '5px' : 0});
`;

const TextBlock = styled(BorderBlock)`
  padding: 8.5vw 4.8vw 5.5vw;
  width: 100%;
  margin: auto 0;
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

const Arrow = styled(NextArrow)`
  height: 16px;
  width: 78px;
`;

const ButtonModalStyled = styled(ButtonCentered)`
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

export const QuestionWrapper = (props) => {
    const [isModal, setIsModal] = useState({shown: false});
    const {updateAnswer, answers, next, language} = useProgress();
    const {question, correctAnswer} = props;

    const onBtnClick = useCallback(() => {
        document.addEventListener('scroll', (e) => e.preventDefault());
        const isWin = correctAnswer?.id === answers[question?.id];
        setIsModal({shown: true, isWin});
        if (isWin) {
            setTimeout(() => {
                 next();
            }, 3000);
        }
    }, [setIsModal, answers]);

    const onAnswerChoose = (id) => {
        if (answers[question.id] === id) {
            updateAnswer(question.id, null);
            return;
        }
        updateAnswer(question.id, id);
    };

    return (
        <>
            <Wrapper ref={props.wrapperRef} isModal={isModal.shown}>
                {!!question?.text && <DescriptionMdStyled>{question.text}</DescriptionMdStyled>}
                <TextBlock>
                    {props.children}
                    <Description>
                        {question?.question}
                    </Description>
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
                                {getPostAnswerById(question?.id).getText(correctAnswer?.text.replaceAll('\n\n', '\n'))}
                            </DescriptionMd>
                            <ButtonModalStyled hasSvg onClick={next} width={'65vw'}><Arrow/></ButtonModalStyled>
                        </LooseModal>
                    )
            )}
        </>
    );
};