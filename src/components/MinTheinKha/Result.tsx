import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
// import data from '../api/data.json';
import { getAnswers } from '../../api/react-query/MinTheinKha';
import {useQuery} from 'react-query';

let globalData:Answer[];

const Result = ({questionId, answerNo, title}: any) => {
  const [dataServer, setDataServer] = useState<Answer[] | []>();
  const {data, status, error} = useQuery('answers', getAnswers);
  globalData = dataServer && dataServer.length > 0 ? dataServer : [];

  const result = getResult(questionId, answerNo);

  useEffect(() => {
    if (status === 'success') setDataServer(data.data);
    if (error) console.log('error', error);
  }, []);

  return (
    <View style={styles.main}>
      <View>
        <Image
          style={styles.tinylogo}
          source={{
            uri: 'https://play-lh.googleusercontent.com/OcWGuEpiIsSX8OKbLNx0lz6SPbu7cFLHC6H8W0AUeZ_DK3_z8u8D5uOjhsks7uxVJ0E',
          }}
        />
      </View>
      <View>
        {status === 'loading' ? <Text>Loading...</Text> : null}
        <Text style={styles.txtTitle}>{title}</Text>
      </View>
      <View>
        <Text style={styles.txt}>{result?.answerResult}</Text>
      </View>
    </View>
  );
};

const getResult = (questionId: number, answerNo: number) =>
  globalData &&
  globalData.find(
    (item: {questionNo: number; answerNo: number}) =>
      questionId === item.questionNo && answerNo === item.answerNo,
  );

const styles = StyleSheet.create({
  txtTitle: {
    color: 'black',
    fontSize: 30,
    marginVertical: 5,
  },
  txt: {
    color: 'black',
    fontSize: 15,
    marginHorizontal: 10,
    textAlign: 'center',
  },
  main: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 200,
  },
  tinylogo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  button: {
    borderRadius: 30,
    margin: 20,
    backgroundColor: 'brown',
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});

export default Result;
