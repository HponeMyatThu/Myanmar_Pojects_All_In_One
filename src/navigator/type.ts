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
    ArtGalleryArtScreen: undefined,

    //Birds
    BirdsHomeScreen: undefined,
    BirdsDetailScreen: undefined,

    //DreamDictionary
    DreamDictionaryHomeScreen: undefined,
    DreamDictonaryResultScreen: undefined,

    //MyanmarMonths
    MyanmarMonthsHomeScreen: undefined,
    MyanmarMonthScreen: undefined,

    //MyanmarProverbs
    MyanmarProverbsHomeScreen: undefined,
    MyanmarProverbsScreen: undefined,
    MyanmarProverbsResultScreen: undefined,

    //PickAPile
    PickAPileHomeScreen: undefined,
    PickAPileResultScreen: undefined,
    PickAPilePictureScreen: undefined,
    PickAPileReadMoreScreen: undefined,

    //Snakes
    SnakesHomeScreen: undefined,
    SnakesDetailScreen: undefined,
    
    //Zodiac
    ZodiacHomeScreen: undefined,
}

export type RootStackScreenProps<T extends keyof RootStackParametersList> =
  NativeStackScreenProps<RootStackParametersList, T>;