import { useState } from 'react';
import { screens } from '../screens.config';
import { LANGUAGE_TYPE } from '../constants/languageTypes';


const INITIAL_ANSWERS = {};

const INITIAL_PROGRESS = {
    answers: INITIAL_ANSWERS,
    language: LANGUAGE_TYPE.Java
};

export function useProgressInit() {
    const [progress, setProgress] = useState(INITIAL_PROGRESS);

    /////////////////// for development ////////////////////////////////////
    const urlParams = new URLSearchParams(window.location.search);
    const screenParam = urlParams.get('screen');
    ////////////////////////////////////////////////////////////////////////

    const [currentScreenIndex, setCurrentScreenIndex] = useState(+screenParam || 0);
    const screen = screens[currentScreenIndex];

    const setPrev = () => {
        const canSet = currentScreenIndex > 0;
        if (canSet) {
            setCurrentScreenIndex(currentScreenIndex - 1);
        }
    };

    const next = () => {
        const nextScreenIndex = currentScreenIndex + 1;
        const canNext = nextScreenIndex <= screens.length - 1;
        const nextScreen = screens[nextScreenIndex];

        if (canNext) {
            if (nextScreen?.ref?.current) nextScreen.ref.current.scrollTop = 0;
            setCurrentScreenIndex(nextScreenIndex);
        }
    };


    const updateAnswer = (name, value) => {
        const answers = {...progress.answers, [name]: value};
        setProgress(progress => {
            return {
                ...progress,
                answers
            };
        });
    };

    const updateProgress = (name, value) => {
        setProgress(progress => ({...progress, [name]: value}));
    };

    return {
        progress,
        currentScreenIndex,
        answers: progress.answers,
        language: progress.language,
        screen,
        next,
        updateAnswer,
        setPrev,
        updateProgress,
    };
}
