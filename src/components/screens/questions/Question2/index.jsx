import React from 'react';
import styled from 'styled-components';
import { useProgress } from '../../../../hooks/useProgress';
import { getQuestionById } from '../../../../utils/getQuestionById';
import { getCorrectAnswerById } from '../../../../utils/getCorrectAnswerById';
import { QuestionWrapper } from '../../../shared/QuestionWrapper';
import { QuestionYellow } from '../../../shared/svg/rectangles/QuestionYellow';
import { Question2Purple } from '../../../shared/svg/rectangles/Question2Purple';

const PurpleRectangle = styled(Question2Purple)`
  position: absolute;
  top: -2.9vw;
  left: -5.5vw;
  width: 72.5333vw;
  height: 69.333vw;
  z-index: -4;
`;

const YellowRectangle = styled(QuestionYellow)`
  position: absolute;
  bottom: -12.5vw;
  right: -5.5vw;
  width: 74.9333vw;
  height: 78.6vw;
  z-index: -4;
`;


export const Question2 = () => {
    const {language} = useProgress();

    return (
        <QuestionWrapper
            question={getQuestionById(language, '2')}
            correctAnswer={getCorrectAnswerById(language, '2')}
            metrika={'q3'}
        >
            <PurpleRectangle />
            <YellowRectangle />
        </QuestionWrapper>
    );
};
