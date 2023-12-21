import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {RootStackScreenProps} from '../../navigator/type';
import {useAppSelector} from '../../hooks/useAppSelector';
import Result from '../../components/MinTheinKha/Result';
import Button from '../../components/MinTheinKha/Button';

type Props = RootStackScreenProps<'MinTheinKhaAnswerScreen'>;

const MinTheinKhaAnswerScreen = ({navigation, route}: Props) => {
  const {questionId, questionName, answerNo} = useAppSelector(
    state => state.bayDin,
  );
  return (
    <>
    <View style={{flex:1}}>
      <Result
        questionId={questionId}
        answerNo={answerNo}
        navigation={navigation}
        title='လက်ထောက်ဗေဒင်'
        route={route}
      />
    </View>
    <View>
      <Button navigation={navigation} route={'MinTheinKhaNumberListScreen'} />
    </View>
  </>
  );
};

export default MinTheinKhaAnswerScreen;

const styles = StyleSheet.create({});
