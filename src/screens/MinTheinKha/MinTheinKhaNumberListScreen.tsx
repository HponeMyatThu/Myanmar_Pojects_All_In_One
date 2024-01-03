import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { RootStackScreenProps } from "../../navigator/type";
import { useAppSelector } from "../../hooks/useAppSelector";
import Answer from "../../components/MinTheinKha/Answer";
import Button from "../../components/MinTheinKha/Button";

type Props = RootStackScreenProps<"MinTheinKhaNumberListScreen">;

const MinTheinKhaNumberListScreen = ({ navigation, route }: Props) => {
  const { questionName } = useAppSelector((state) => state.bayDin);
  return (
    <>
      <View>
        <Text style={styles.questionTxt}>{questionName}</Text>
      </View>
      <View style={styles.main}>
        <Answer navigation={navigation} route={route} />
      </View>
      <View>
        <Button navigation={navigation} route={"MinTheinKhaHomeScreen"} />
      </View>
    </>
  );
};

export default MinTheinKhaNumberListScreen;

const styles = StyleSheet.create({
  questionTxt: {
    color: "black",
    marginTop: "10%",
    marginHorizontal: 50,
    textAlign: "center",
    fontSize: 20,
  },
  main: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 10,
    marginVertical: "10%",
  },
});
