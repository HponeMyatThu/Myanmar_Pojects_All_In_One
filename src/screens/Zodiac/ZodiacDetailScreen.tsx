import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";

const ZodiacDetailScreen = () => {
  const globalData = useAppSelector((state) => state.zodiac);

  return (
    <>
      <ScrollView>
        <View style={styles.itemContainer}>
          <Text style={styles.itemTitleText}>
            {globalData.Name}({globalData.MyanmarMonth}) {globalData.Dates}
          </Text>

          <Text
            style={{ width: "100%", height: 400, backgroundColor: "black" }}
          ></Text>

          <Text style={styles.itemText}>Life Propose</Text>
          <Text>{globalData.LifePurpose}</Text>

          <Text style={styles.itemText}>Loyal</Text>
          <Text>{globalData.Loyal}</Text>

          <Text style={styles.itemText}>RepresentativeFlower</Text>
          <Text>{globalData.RepresentativeFlower}</Text>

          <Text style={styles.itemText}>Angry</Text>
          <Text>{globalData.Angry}</Text>

          <Text style={styles.itemText}>PrettyFeatures</Text>
          <Text>{globalData.PrettyFeatures}</Text>

          <Text style={styles.itemText}> Character</Text>
          <Text>{globalData.Character}</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default ZodiacDetailScreen;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
    margin: 10,
  },
  itemTitleText: {
    marginVertical: 10,
    fontSize: 20,
    paddingVertical: 5,
    color: "#333333",
  },
  itemText: {
    marginVertical: 10,
    fontSize: 16,
    paddingVertical: 5,
    color: "#333333",
  },
});
