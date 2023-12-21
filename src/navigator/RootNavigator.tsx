import {createNativeStackNavigator} from '@react-navigation/native-stack'

type RootStackParamList = {
    DashBoardScreen : undefined,
    
    //Mintheinkha
    MinTheinKhaHomeScreen: undefined,

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

const Stack = createNativeStackNavigator<RootStackParamList>();

