import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import json from '../../api/jsons/Main.json'
import {useAppDispatch} from '../../hooks/useAppDispatch';
import {answerNo} from '../../features/bayDinSlice';
import { getNumberLists } from '../../api/react-query/MinTheinKha';
import {useQuery} from 'react-query';

const Answer = ({navigation}: any) => {
  const dispatch = useAppDispatch();
  const [dataServer, setDataServer] = useState<string[] | null>();
  const {data, error, status} = useQuery('numberLists', getNumberLists);

  useEffect(() => {
    if(status === 'loading') setDataServer(json.numberList)
    if (status === 'success') setDataServer(data.data);
    if (error) console.log('error', error);
  }, []);
  const handleToResultScreen = (item: string) => {
    const englishNumber = convertMyanmarToEnglishNumber(item);
    dispatch(answerNo(Number(englishNumber)));
    navigation.navigate('MinTheinKhaAnswerScreen');
  };

  return (
    <>
      <View style={styles.main}>
        {dataServer && dataServer.length > 0 ? (
          dataServer.map((item, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => handleToResultScreen(item)}>
              <View style={styles.div}>
                <Text style={styles.text}>{item}</Text>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <View style={styles.messageContainer}>
            <Text>Loading</Text>
          </View>
        )}
      </View>
    </>
  );
};

const convertMyanmarToEnglishNumber = (myanmarNumber: string): string => {
  const myanmarToEnglishMap: Record<string, string> = {
    '၀': '0',
    '၁': '1',
    '၂': '2',
    '၃': '3',
    '၄': '4',
    '၅': '5',
    '၆': '6',
    '၇': '7',
    '၈': '8',
    '၉': '9',
  };

  return myanmarNumber
    .split('')
    .map(char => myanmarToEnglishMap[char] || char)
    .join('');
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: 10,
    marginVertical: '10%',
  },
  messageContainer: {
    marginTop: 10,
    padding: 100,
    paddingVertical: 50,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    alignItems: 'center',
  },
  div: {
    borderColor: 'brown',
    borderWidth: 1,
    padding: 7,
    marginHorizontal: 1,
    marginVertical: 1,
    backgroundColor: 'brown',
  },
  text: {
    color: 'white',
    width: 20,
    height: 20,
    textAlign: 'center',
  },
});

export default Answer;
