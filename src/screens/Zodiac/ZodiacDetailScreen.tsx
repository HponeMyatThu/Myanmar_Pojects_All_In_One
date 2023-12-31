import {Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";

const ZodiacDetailScreen = () => {
  const globalData = useAppSelector((state) => state.zodiac);

  let imagePath:any = null;

  return (
    <>
      <ScrollView>
        <View style={styles.itemContainer}>
          <Text style={{display:"none"}}>
            {
              globalData.Name === "Aries"
              ? imagePath = (require("../../assets/images/Zodiac/zodiac-signs-2/aries.jpg"))
              : globalData.Name === "Aquarius"
              ? imagePath = (require("../../assets/images/Zodiac/zodiac-signs-2/aquarius.jpg")) 
              : globalData.Name === "Cancer"
              ? imagePath = (require("../../assets/images/Zodiac/zodiac-signs-2/cancer.jpg")) 
              : globalData.Name === "Capricorn"
              ? imagePath = (require("../../assets/images/Zodiac/zodiac-signs-2/capricorn.jpg")) 
              : globalData.Name === "Gemini"
              ? imagePath = (require("../../assets/images/Zodiac/zodiac-signs-2/gemini.jpg")) 
              : globalData.Name === "Leo"
              ? imagePath = (require("../../assets/images/Zodiac/zodiac-signs-2/leo.jpg")) 
              : globalData.Name === "Libra"
              ? imagePath = (require("../../assets/images/Zodiac/zodiac-signs-2/libra.jpg")) 
              : globalData.Name === "Pisces"
              ? imagePath = (require("../../assets/images/Zodiac/zodiac-signs-2/pisces.jpg")) 
              : globalData.Name === "Saggittarius"
              ? imagePath = (require("../../assets/images/Zodiac/zodiac-signs-2/saggittarius.jpg")) 
              : globalData.Name === "Scorpio"
              ? imagePath = (require("../../assets/images/Zodiac/zodiac-signs-2/scorpio.jpg")) 
              : globalData.Name === "Taurus"
              ? imagePath = (require("../../assets/images/Zodiac/zodiac-signs-2/taurus.jpg")) 
              : globalData.Name === "Virgo"
              ? imagePath = (require("../../assets/images/Zodiac/zodiac-signs-2/virgo.jpg")) 
              :null
            }
          </Text>

          <Text style={styles.itemTitleText}>
            {globalData.Name}({globalData.MyanmarMonth}) {globalData.Dates}
          </Text>

          <Image
            style={{ width: "100%", height: 400, backgroundColor: "black" }}
            source={imagePath}
          ></Image>

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

