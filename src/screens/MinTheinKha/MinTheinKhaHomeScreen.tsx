import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import Question from '../../components/MinTheinKha/Question';
import {useQuery} from 'react-query';
import {getQuestions} from '../../api/react-query/MinTheinKha';
import SearchBar from '../../components/MinTheinKha/SearchBar';

const MinTheinKhaHomeScreen: React.FC = () => {
  const [search, setSearch] = useState<string>('');
  const [dataServer, setDataServer] = useState<Question[] | null>();

  const {data, error, status} = useQuery('questions', getQuestions);

  useEffect(() => {
    if (status === 'success') setDataServer(data.data);
    if (error) console.log('error', error);
  }, [data, error, status]);

  const filteredQuestions: Question[] | [] = dataServer
    ? dataServer.filter(item => {
        return item.questionName
          ? item.questionName
              .toLowerCase()
              .includes(search?.toLocaleLowerCase())
          : null;
      })
    : [];

  return (
    <>
      <View>
        <SearchBar onChangeText={(text: string) => setSearch(text)} />
      </View>
      <View style={{flex: 1}}>
        <Question filteredQuestions={filteredQuestions} />
      </View>
    </>
  );
};

export default MinTheinKhaHomeScreen;

const styles = StyleSheet.create({});
