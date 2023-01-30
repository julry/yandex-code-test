import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useProgress } from '../../../../hooks/useProgress';
import { getCorrectAnswerById } from '../../../../utils/getCorrectAnswerById';
import { getQuestionById } from '../../../../utils/getQuestionById';
import { Question1Purple } from '../../../shared/svg/rectangles/Question1Purple';
import { QuestionYellow } from '../../../shared/svg/rectangles/QuestionYellow';
import { QuestionWrapper } from '../../../shared/QuestionWrapper';

const PurpleRectangle = styled(Question1Purple)`
  position: absolute;
  opacity: ${({top}) => !!top ? 1 : 0};
  top: ${({top}) => top};
  left: -5.5vw;
  width: 75.4vw;
  height: 62.66vw;
  z-index: -4;
  overflow: hidden;
`;

const YellowRectangle = styled(QuestionYellow)`
  position: absolute;
  opacity: ${({bottom}) => !!bottom ? 1 : 0};
  bottom: ${({bottom}) => bottom};
  right: -5.5vw;
  width: 74.9333vw;
  height: 78.6vw;
  z-index: -4;
`;


export const Question1 = () => {
    const [position, setPosition] = useState({});
    const {language} = useProgress();
    const wrapperRef = useRef();
    const getPosition = () => {
        if (!wrapperRef?.current) return {};
        const screenWidth = document.documentElement.clientWidth;
        const padding = screenWidth * 0.085;
        const predictableHeight = wrapperRef.current?.clientHeight - (2 * padding) - (screenWidth * 0.386);
        const contentHeight = wrapperRef.current?.firstElementChild?.clientHeight;
        if (contentHeight > predictableHeight) {
            return {bottom: 'min(-6.4vw, 30px)', top: '-8.5vw'};
        }
        return {bottom: '-12.5vw', top: '-13.333vw'};
    };

    useEffect(() => {
        setPosition(getPosition());
    }, []);


    return (
        <QuestionWrapper
            question={getQuestionById(language, '1')}
            correctAnswer={getCorrectAnswerById(language, '1')}
            wrapperRef={wrapperRef}
        >
            <PurpleRectangle top={position.top}/>
            <YellowRectangle bottom={position.bottom}/>
        </QuestionWrapper>
    );
};