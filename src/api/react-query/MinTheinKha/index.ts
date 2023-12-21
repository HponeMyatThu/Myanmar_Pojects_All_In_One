import API from "./interceptor";

export const getQuestions = () => API.get(`/questions`);
export const getAnswers = () => API.get(`/answers`);
export const getNumberLists = () => API.get(`/numberList`);
