import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { useAppSelector } from "../../hooks/useAppSelector";

interface DreamResult {
  propsData: Dreamdetail[];
}

const DreamResult = ({ propsData }: DreamResult) => {
  const { BlogId, BlogTitle } = useAppSelector((state) => state.dreamDictonary);
  const data = propsData.filter((item) => item.BlogId === BlogId);

  return (
    <>
      <View
        style={{
          borderWidth: 1,
          marginVertical: 10,
          marginHorizontal: 20,
          padding: 10,
        }}
      >
        <Text style={{ fontSize: 32, textAlign: "center", marginVertical: 10 }}>
          {BlogTitle.slice(0, 6)}
        </Text>
        <Text style={{ fontSize: 24, textAlign: "center" }}>
          {BlogTitle.slice(6)}
        </Text>
      </View>
      <ScrollView style={{ marginBottom: 10 }}>
        <View style={{ marginVertical: 10, marginBottom: 150 }}>
          {data
            ? data.map((item) => {
                return (
                  <View key={item.BlogDetailId} style={styles.itemContainer}>
                    <Text style={styles.itemText}>{item.BlogContent}</Text>
                  </View>
                );
              })
            : null}
        </View>
      </ScrollView>
    </>
  );
};

export default DreamResult;

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
    color: "#333333",
  },
});
