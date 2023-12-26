import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";

const PickAPileResultScreen = () => {
  const { Result } = useAppSelector((state) => state.pickAPile);
  return (
    <>
      <View style={{margin: 20}}>
        <Text style={{width: '100%', height: 300, color: 'white', backgroundColor: 'black'}}>{Result.AnswerImageUrl}</Text>
        <Text style={{textAlign: 'center', margin: 10, color: 'black'}}>{Result.AnswerName}</Text>
        <Text style={{color: 'black', fontSize: 15}}>{Result.AnswerDesp}</Text>
      </View>
    </>
  );
};

export default PickAPileResultScreen;

const styles = StyleSheet.create({});
