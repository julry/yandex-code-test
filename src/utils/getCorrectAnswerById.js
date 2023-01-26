import {getQuestionById} from "./getQuestionById";

export const getCorrectAnswerById = (language, questionId) => {
    return getQuestionById(language, questionId)?.answers?.find(answer => !!answer.isCorrect);
};