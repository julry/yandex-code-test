import {questions} from "../questions.config";

export const getQuestionById = (language, id) => {
    return questions[language].find(question => question.id === id);
};