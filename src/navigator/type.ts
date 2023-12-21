import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type RootStackParametersList = {
    DashBoardScreen : undefined,
    
    //Mintheinkha
    MinTheinKhaHomeScreen: undefined,
    MinTheinKhaQuestionScreen: undefined,
    MinTheinKhaNumberListScreen: undefined,
    MinTheinKhaAnswerScreen: undefined,

    //ArtGallery
    ArtGalleryHomeScreen: undefined,

    //Birds
    BirdsHomeScreen: undefined,

    //DreamDictionary
    DreamDictionaryHomeScreen: undefined,

    //MyanmarMonths
    MyanmarMonthsHomeScreen: undefined,

    //MyanmarProverbs
    MyanmarProverbsHomeScreen: undefined,

    //PickAPile
    PickAPileHomeScreen: undefined,

    //Snakes
    SnakesHomeScreen: undefined,
    
    //Zodiac
    ZodiacHomeScreen: undefined,
}

export type RootStackScreenProps<T extends keyof RootStackParametersList> =
  NativeStackScreenProps<RootStackParametersList, T>;