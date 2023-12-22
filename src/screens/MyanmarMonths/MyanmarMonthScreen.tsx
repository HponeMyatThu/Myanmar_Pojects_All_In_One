import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";

const MyanmarMonthScreen = () => {
  const globaleData = useAppSelector((state) => state.myanmarMonths);
  const numberPhotoId = globaleData.Id;
  const stringPhotoId = String(numberPhotoId);
  
  return (
    <>
      <View style={{ flexDirection: "column" }}>
        <View style={{ margin: 5, padding: 5 }}>
          <Text style={{ textAlign: "center", fontSize: 20 }}>
            {globaleData.MonthMm}({globaleData.MonthEn})
          </Text>
        </View>
        <View style={{ margin: 5, padding: 5 }}>
          <Text style={{ textAlign: "center", fontSize: 20 }}>
            {globaleData.FestivalMm}({globaleData.FestivalEn})
          </Text>
        </View>
      </View>
        <Image
          style={styles.tinylogo}
          source={{
            uri: `../../assets/images/Myanmar_Months/1.jpg`,
          }}
        />
      <ScrollView>
        <View style={{paddingHorizontal:10, margin:10}}>
          <Text>{globaleData.Detail}</Text>
        </View>
      </ScrollView>
    </>
  );
};

export default MyanmarMonthScreen;

const styles = StyleSheet.create({
  maintitle: {
    textAlign: "center",
  },
  tinylogo: {
    marginHorizontal: '5%',
    width: "90%",
    height: 200,
    backgroundColor: "black",
  },
});
