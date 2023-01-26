import {getQuestionById} from "./getQuestionById";
import { postAnswers } from '../postAnswers.config';

export const getPostAnswerById = (questionId) => {
    return postAnswers.find(answer => answer.id === questionId);
};