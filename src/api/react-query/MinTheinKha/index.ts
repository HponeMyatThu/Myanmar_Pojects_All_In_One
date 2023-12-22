import API from "./interceptor";

//Min Thein Kha
export const getQuestions = () => API.get(`/questions`);
export const getAnswers = () => API.get(`/answers`);
export const getNumberLists = () => API.get(`/numberList`);

//Dream Dictonary
export const getBlogHeader = () => API.get(`/BlogHeader`);
export const getBlogDetail = () => API.get(`/BlogDetail`);

//MyanmarMonths
export const getMyanmarMonths = () => API.get(`/Tbl_Months`);
