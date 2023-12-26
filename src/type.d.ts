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

interface Months {
  Id: number;
  MonthMm: string;
  MonthEn: string;
  FestivalMm: string;
  FestivalEn: string;
  Description: string;
  Detail: string;
}

interface ProverbsTitle {
  TitleId: number;
  TitleName: string;
}

interface ProverbsBody {
  TitleId: number;
  ProverbId: number;
  ProverbName: string;
  ProverbDesp: string;
}
