import {createNativeStackNavigator} from '@react-navigation/native-stack'
import {RootStackParametersList} from './type'

import DashBardScreen from '../screens/DashBardScreen';
import MinTheinKhaHomeScreen from '../screens/MinTheinKha/MinTheinKhaHomeScreen';
import ArtGalleryHomeScreen from '../screens/ArtGallery/ArtGalleryHomeScreen';
import BirdsHomeScreen from '../screens/Birds/BirdsHomeScreen';
import DreamDictionaryHomeScreen from '../screens/DreamDictonary/DreamDictionaryHomeScreen';
import MyanmarMonthsHomeScreen from '../screens/MyanmarMonths/MyanmarMonthsHomeScreen';
import MyanmarProverbsHomeScreen from '../screens/MyanmarProverbs/MyanmarProverbsHomeScreen';
import PickAPileHomeScreen from '../screens/PickAPile/PickAPileHomeScreen';
import SnakesHomeScreen from '../screens/Snakes/SnakesHomeScreen';
import ZodiacHomeScreen from '../screens/Zodiac/ZodiacHomeScreen';
import MinTheinKhaQuestionScreen from '../screens/MinTheinKha/MinTheinKhaQuestionScreen';
import MinTheinKhaNumberListScreen from '../screens/MinTheinKha/MinTheinKhaNumberListScreen';
import MinTheinKhaAnswerScreen from '../screens/MinTheinKha/MinTheinKhaAnswerScreen';
import DreamDictonaryResultScreen from '../screens/DreamDictonary/DreamDictonaryResultScreen';
import MyanmarMonthScreen from '../screens/MyanmarMonths/MyanmarMonthScreen';
import MyanmarProverbsScreen from '../screens/MyanmarProverbs/MyanmarProverbsScreen';
import MyanmarProverbsResultScreen from '../screens/MyanmarProverbs/MyanmarProverbsResultScreen';
import PickAPilePictureScreen from '../screens/PickAPile/PickAPilePictureScreen';
import PickAPileResultScreen from '../screens/PickAPile/PickAPileResultScreen';
import PickAPileReadMoreScreen from '../screens/PickAPile/PickAPileReadMoreScreen';
import BirdsDetailScreen from '../screens/Birds/BirdsDetailScreen';

const Stack = createNativeStackNavigator<RootStackParametersList>();

export const RootNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='DashBoardScreen' component={DashBardScreen} />

            {/*MinTheinKha*/}
            <Stack.Screen name='MinTheinKhaHomeScreen' component={MinTheinKhaHomeScreen} />
            <Stack.Screen name='MinTheinKhaQuestionScreen' component={MinTheinKhaQuestionScreen} />
            <Stack.Screen name='MinTheinKhaNumberListScreen' component={MinTheinKhaNumberListScreen} />
            <Stack.Screen name='MinTheinKhaAnswerScreen' component={MinTheinKhaAnswerScreen} />

            {/*ArtGallery*/}
            <Stack.Screen name='ArtGalleryHomeScreen' component={ArtGalleryHomeScreen} />

            {/*Birds*/}
            <Stack.Screen name='BirdsHomeScreen' component={BirdsHomeScreen} />
            <Stack.Screen name='BirdsDetailScreen' component={BirdsDetailScreen} />

            {/*DreamDictionary*/}
            <Stack.Screen name='DreamDictionaryHomeScreen' component={DreamDictionaryHomeScreen} />
            <Stack.Screen name='DreamDictonaryResultScreen' component={DreamDictonaryResultScreen} />

            {/*MyanmarMonths*/}
            <Stack.Screen name='MyanmarMonthsHomeScreen' component={MyanmarMonthsHomeScreen} />
            <Stack.Screen name='MyanmarMonthScreen' component={MyanmarMonthScreen} />

            {/*MyanmarProverbs*/}
            <Stack.Screen name='MyanmarProverbsHomeScreen' component={MyanmarProverbsHomeScreen} />
            <Stack.Screen name='MyanmarProverbsScreen' component={MyanmarProverbsScreen} />
            <Stack.Screen name='MyanmarProverbsResultScreen' component={MyanmarProverbsResultScreen} />

            {/*PickAPile*/}
            <Stack.Screen name='PickAPileHomeScreen' component={PickAPileHomeScreen} />
            <Stack.Screen name='PickAPilePictureScreen' component={PickAPilePictureScreen} />
            <Stack.Screen name='PickAPileResultScreen' component={PickAPileResultScreen} />
            <Stack.Screen name='PickAPileReadMoreScreen' component={PickAPileReadMoreScreen} />

            {/*Snakes*/}
            <Stack.Screen name='SnakesHomeScreen' component={SnakesHomeScreen} />

            {/*Zodiac*/}
            <Stack.Screen name='ZodiacHomeScreen' component={ZodiacHomeScreen} />

        </Stack.Navigator>
    )
}