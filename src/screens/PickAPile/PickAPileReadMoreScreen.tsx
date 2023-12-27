import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import PickAPilePicture from "../../components/PickAPile/PickAPilePicture";

const PickAPileReadMoreScreen = () => {
  const { QuestionId, QuestionName, QuestionDesp } = useAppSelector(
    (state) => state.pickAPile
  );

  return (
    <ScrollView>
      <View key={QuestionId} style={styles.itemContainer}>
        <Text style={styles.itemTitleText}>{QuestionName}</Text>
        <Text style={styles.itemText}>{QuestionDesp}</Text>
        <PickAPilePicture />
      </View>
    </ScrollView>
  );
};

export default PickAPileReadMoreScreen;

const styles = StyleSheet.create({
  itemContainer: {
    marginVertical: 15,
    marginHorizontal: 10,
    backgroundColor: "#ffffff",
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
  },
  itemText: {
    fontSize: 12,
    color: "#333333",
  },
  itemTitleText: {
    fontSize: 26,
    marginVertical: 10,
    textDecorationLine: "underline",
    color: "#333333",
  },
});
