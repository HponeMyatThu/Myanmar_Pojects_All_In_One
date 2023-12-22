interface Question {
    questionNo: number;
    questionName: string;
}

interface Answer {
    questionNo: number;
    answerNo: number;
    answerResult: string;
}

interface DreamHeader {
    BlogId: number;
    BlogTitle: string;
}

interface Dreamdetail {
    BlogDetailId: number;
    BlogId: number;
    BlogContent: string;
}