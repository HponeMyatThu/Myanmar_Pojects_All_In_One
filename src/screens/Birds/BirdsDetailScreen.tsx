import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";

const BirdsDetailScreen = () => {
  const { Id, BirdEnglishName, BirdMyanmarName, Description, ImagePath } =
    useAppSelector((state) => state.birds);
  let imagePath: any = null;
  ImagePath === "1_Orange-belliedLeafbird.jpg"
    ? (imagePath = require("../../assets/images/Birds/1_Orange-belliedLeafbird.jpg"))
    : ImagePath === "2_StorkbilledKingfisher.png"
    ? (imagePath = require("../../assets/images/Birds/2_StorkbilledKingfisher.png"))
    : ImagePath === "3_BlacknappedFruitDove.png"
    ? (imagePath = require("../../assets/images/Birds/3_BlacknappedFruitDove.png"))
    : ImagePath === "4_BaliMyna.png"
    ? (imagePath = require("../../assets/images/Birds/4_BaliMyna.png"))
    : ImagePath === "5_SavannaNightjar.png"
    ? (imagePath = require("../../assets/images/Birds/5_SavannaNightjar.png"))
    : ImagePath === "6_Kingfisher.png"
    ? (imagePath = require("../../assets/images/Birds/6_Kingfisher.png"))
    : ImagePath === "7_BluethroatedFlycatcher.jpg"
    ? (imagePath = require("../../assets/images/Birds/7_BluethroatedFlycatcher.jpg"))
    : ImagePath === "8_HaircrestedDrongo.jpg"
    ? (imagePath = require("../../assets/images/Birds/8_HaircrestedDrongo.jpg"))
    : ImagePath === "9_Black-hoodedOriole.jpg"
    ? (imagePath = require("../../assets/images/Birds/9_Black-hoodedOriole.jpg"))
    : ImagePath === "10_LineatedBarbet.jpg"
    ? (imagePath = require("../../assets/images/Birds/10_LineatedBarbet.jpg"))
    : ImagePath === "11_Ashy-headedGreenPigeon.jpg"
    ? (imagePath = require("../../assets/images/Birds/11_Ashy-headedGreenPigeon.jpg"))
    : ImagePath === "12_Chestnut-cappedlaughingthrush.jpg"
    ? (imagePath = require("../../assets/images/Birds/12_Chestnut-cappedlaughingthrush.jpg"))
    : ImagePath === "13_Olive-backedSunbird.jpg"
    ? (imagePath = require("../../assets/images/Birds/13_Olive-backedSunbird.jpg"))
    : ImagePath === "14_Black-napedMonarch.jpg"
    ? (imagePath = require("../../assets/images/Birds/14_Black-napedMonarch.jpg"))
    : ImagePath === "15_White-rumpedShama.jpg"
    ? (imagePath = require("../../assets/images/Birds/15_White-rumpedShama.jpg"))
    : ImagePath === "16_Chestnut-tailedStarling.jpg"
    ? (imagePath = require("../../assets/images/Birds/16_Chestnut-tailedStarling.jpg"))
    : ImagePath === "17_HoodedTreepie.jpg"
    ? (imagePath = require("../../assets/images/Birds/17_HoodedTreepie.jpg"))
    : ImagePath === "18_BurmeseYuhina.jpg"
    ? (imagePath = require("../../assets/images/Birds/18_BurmeseYuhina.jpg"))
    : ImagePath === "19_Scaly-breastedMunia.jpg"
    ? (imagePath = require("../../assets/images/Birds/19_Scaly-breastedMunia.jpg"))
    : ImagePath === "20_EurasianTreeSparrow.jpg"
    ? (imagePath = require("../../assets/images/Birds/20_EurasianTreeSparrow.jpg"))
    : (imagePath = null);

  console.log(useAppSelector((state) => state.birds));

  return (
    <>
      <ScrollView>
        <View style={styles.itemContainer}>
          <Image style={styles.pic} source={imagePath}></Image>
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
    color: "white",
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
