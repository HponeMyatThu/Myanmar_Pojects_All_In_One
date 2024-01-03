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

interface PickAPile_Questions {
  QuestionId: number;
  QuestionName: string;
  QuestionDesp: string;
}

interface PickAPile_Answers {
  AnswerId: number;
  AnswerImageUrl: string;
  AnswerName: string;
  AnswerDesp: string;
  QuestionId: number;
}

interface Birds{
  Id:number;
  BirdMyanmarName:string;
  BirdEnglishName:string;
  Description:string;
  ImagePath:string; 
}

interface Snakes {
  Id:number;
  MMName:string;
  EngName:string;
  Detail:string;
  IsPoison:string;
  IsDanger:string;
}

interface Gallery {
  [x: string]: ReactNode;
  GalleryId:number;
  ArtistId:number;
  ArtId:number;
}

interface Art {
  [x: string]: any;
  ArtId:number;
  ArtName:string;
  ArtDescription:string;
}

interface Artist {
  ArtistId:number;
  ArtistName:string;
  Social: SocialDataTypes[];
}

interface SocialDataTypes{
  Name:string;
  Link:string;
}

interface ZodiacSignsDetail {
  Id:number;
  Name:string;
  MyanmarMonth:string;
  ZodiacSignImageUrl:string;
  ZodiacSign2ImageUrl:string;
  Dates:string;
  Elements:string;
  ElementImageUrl:string;
  LifePurpose:string;
  Loyal:string;
  RepresentativeFlower:string;
  Angry:string;
  Character:string;
  PrettyFeatures:string;
  Traits:TraitsDataTypes[];
}

interface TraitsDataTypes{
  name:string;
  percentage:number;
}