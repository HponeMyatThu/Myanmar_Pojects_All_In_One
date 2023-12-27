import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";

const MyanmarMonthScreen = () => {
  const globaleData = useAppSelector((state) => state.myanmarMonths);
  const numberPhotoId = globaleData.Id;
  const stringPhotoId = String(numberPhotoId);
  let imagePath: any = null;

  switch (true) {
    case stringPhotoId === "1":
      imagePath = require(`../../assets/images/Myanmar_Months/month_1.jpg`);
      break;
    case stringPhotoId === "2":
      imagePath = require(`../../assets/images/Myanmar_Months/month_2.jpg`);
      break;
    case stringPhotoId === "3":
      imagePath = require(`../../assets/images/Myanmar_Months/month_3.jpg`);
      break;
    case stringPhotoId === "4":
      imagePath = require(`../../assets/images/Myanmar_Months/month_4.jpg`);
      break;
    case stringPhotoId === "5":
      imagePath = require(`../../assets/images/Myanmar_Months/month_5.jpg`);
      break;
    case stringPhotoId === "6":
      imagePath = require(`../../assets/images/Myanmar_Months/month_6.jpg`);
      break;
    case stringPhotoId === "7":
      imagePath = require(`../../assets/images/Myanmar_Months/month_7.jpg`);
      break;
    case stringPhotoId === "8":
      imagePath = require(`../../assets/images/Myanmar_Months/month_8.jpg`);
      break;
    case stringPhotoId === "9":
      imagePath = require(`../../assets/images/Myanmar_Months/month_9.jpg`);
      break;
    case stringPhotoId === "10":
      imagePath = require(`../../assets/images/Myanmar_Months/month_10.jpg`);
      break;
    case stringPhotoId === "11":
      imagePath = require(`../../assets/images/Myanmar_Months/month_11.jpg`);
      break;
    case stringPhotoId === "12":
      imagePath = require(`../../assets/images/Myanmar_Months/month_12.jpg`);
      break;
    default:
      imagePath = null;
      break;
  }
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
      <Image style={styles.tinylogo} source={imagePath} />
      <ScrollView>
        <View style={{ paddingHorizontal: 10, margin: 10 }}>
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
    marginHorizontal: "5%",
    width: "90%",
    height: 200,
    backgroundColor: "black",
  },
});
