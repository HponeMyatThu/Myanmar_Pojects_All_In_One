import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";

const MyanmarProverbsResultScreen = () => {
  const { ProverbDesp, ProverbId, ProverbName, TitleId, TitleName } =
    useAppSelector((state) => state.myanmarProverbs);
  return (
    <>
      <View style={styles.itemContainer}>
        <Text style={styles.itemTitleText}>{ProverbName}</Text>
        <Text style={styles.itemText}>{ProverbDesp}</Text>
      </View>
    </>
  );
};

export default MyanmarProverbsResultScreen;

const styles = StyleSheet.create({
    itemContainer: {
        marginVertical: 34,
        marginHorizontal: 5,
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
        marginVertical:10,
        textDecorationLine: "underline",
        color: "#333333",
      },
});
