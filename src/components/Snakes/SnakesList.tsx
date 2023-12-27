import { StyleSheet, Text, View } from "react-native";
import React from "react";

interface dataType {
  propsData: Snakes[];
}

const SnakesList = ({ propsData }: dataType) => {
  return (
    <>
      {propsData.map((prop) => (
        <View key={prop.Id}>
          <Text>{prop.MMName }</Text>
        </View>
      ))}
    </>
  );
};

export default SnakesList;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    paddingVertical: 5,
    color: "#333333",
  },
});
