import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";

const BirdsDetailScreen = () => {
  const { Id, BirdEnglishName, BirdMyanmarName, Description, ImagePath } =
    useAppSelector((state) => state.birds);

  console.log(useAppSelector((state) => state.birds));

  return (
    <>
      <ScrollView>
        <View style={styles.itemContainer}>
          <Text style={styles.pic}>{ImagePath}</Text>
          <Text style={styles.itemTitleText}>{BirdEnglishName}</Text>
          <Text style={styles.itemTitleText}>{BirdMyanmarName}</Text>
          <Text style={styles.itemText}>{Description}</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default BirdsDetailScreen;

const styles = StyleSheet.create({
  pic: {
    width: "100%",
    height: 300,
    backgroundColor: "black",
    color: 'white',
  },
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
    fontSize: 16,
    color: "#333333",
  },
  itemTitleText: {
    fontSize: 26,
    marginVertical: 10,
    textDecorationLine: "underline",
    color: "#333333",
  },
});
