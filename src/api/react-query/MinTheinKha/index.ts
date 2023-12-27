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

//PickAPile
export const getPickAPile_Questions = () => API.get(`/PickAPile_Questions`);
export const getPickAPile_Answers = () => API.get(`/PickAPile_Answers`);

//MyanmarProverbs 
export const getMyanmarProverbsTitle = () => API.get(`/Tbl_MMProverbsTitle`);
export const getMyanmarProverbsBody = () => API.get(`/Tbl_MMProverbs`);

//Birds
export const getBirds = () => API.get(`/Tbl_Bird`);

//Snakes
export const getSnakes = () => API.get(`/Snakes`);
