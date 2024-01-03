import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { RootStackScreenProps } from "../../navigator/type";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { data } from "../../features/birdsSlice";
import { useNavigation } from "@react-navigation/native";

interface dataType {
  propsData: Birds[];
}

type Props = RootStackScreenProps<"BirdsHomeScreen">;

const BirdsList = ({ propsData }: dataType) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigation<Props["navigation"]>();

  const handleClick = (item: Birds) => {
    dispatch(data(item));
    navigate.navigate("BirdsDetailScreen");
  };

  let imagePath: any = null;

  return (
    <ScrollView>
      {propsData.map((item) => (
        <TouchableOpacity onPress={() => handleClick(item)} key={item.Id}>
          <View style={styles.itemContainer}>
            <View>
              <Text style={{ display: "none" }}>
                {item.ImagePath === "1_Orange-belliedLeafbird.jpg"
                  ? (imagePath = require("../../assets/images/Birds/1_Orange-belliedLeafbird.jpg"))
                  : item.ImagePath === "2_StorkbilledKingfisher.png"
                  ? (imagePath = require("../../assets/images/Birds/2_StorkbilledKingfisher.png"))
                  : item.ImagePath === "3_BlacknappedFruitDove.png"
                  ? (imagePath = require("../../assets/images/Birds/3_BlacknappedFruitDove.png"))
                  : item.ImagePath === "4_BaliMyna.png"
                  ? (imagePath = require("../../assets/images/Birds/4_BaliMyna.png"))
                  : item.ImagePath === "5_SavannaNightjar.png"
                  ? (imagePath = require("../../assets/images/Birds/5_SavannaNightjar.png"))
                  : item.ImagePath === "6_Kingfisher.png"
                  ? (imagePath = require("../../assets/images/Birds/6_Kingfisher.png"))
                  : item.ImagePath === "7_BluethroatedFlycatcher.jpg"
                  ? (imagePath = require("../../assets/images/Birds/7_BluethroatedFlycatcher.jpg"))
                  : item.ImagePath === "8_HaircrestedDrongo.jpg"
                  ? (imagePath = require("../../assets/images/Birds/8_HaircrestedDrongo.jpg"))
                  : item.ImagePath === "9_Black-hoodedOriole.jpg"
                  ? (imagePath = require("../../assets/images/Birds/9_Black-hoodedOriole.jpg"))
                  : item.ImagePath === "10_LineatedBarbet.jpg"
                  ? (imagePath = require("../../assets/images/Birds/10_LineatedBarbet.jpg"))
                  : item.ImagePath === "11_Ashy-headedGreenPigeon.jpg"
                  ? (imagePath = require("../../assets/images/Birds/11_Ashy-headedGreenPigeon.jpg"))
                  : item.ImagePath === "12_Chestnut-cappedlaughingthrush.jpg"
                  ? (imagePath = require("../../assets/images/Birds/12_Chestnut-cappedlaughingthrush.jpg"))
                  : item.ImagePath === "13_Olive-backedSunbird.jpg"
                  ? (imagePath = require("../../assets/images/Birds/13_Olive-backedSunbird.jpg"))
                  : item.ImagePath === "14_Black-napedMonarch.jpg"
                  ? (imagePath = require("../../assets/images/Birds/14_Black-napedMonarch.jpg"))
                  : item.ImagePath === "15_White-rumpedShama.jpg"
                  ? (imagePath = require("../../assets/images/Birds/15_White-rumpedShama.jpg"))
                  : item.ImagePath === "16_Chestnut-tailedStarling.jpg"
                  ? (imagePath = require("../../assets/images/Birds/16_Chestnut-tailedStarling.jpg"))
                  : item.ImagePath === "17_HoodedTreepie.jpg"
                  ? (imagePath = require("../../assets/images/Birds/17_HoodedTreepie.jpg"))
                  : item.ImagePath === "18_BurmeseYuhina.jpg"
                  ? (imagePath = require("../../assets/images/Birds/18_BurmeseYuhina.jpg"))
                  : item.ImagePath === "19_Scaly-breastedMunia.jpg"
                  ? (imagePath = require("../../assets/images/Birds/19_Scaly-breastedMunia.jpg"))
                  : item.ImagePath === "20_EurasianTreeSparrow.jpg"
                  ? (imagePath = require("../../assets/images/Birds/20_EurasianTreeSparrow.jpg"))
                  : (imagePath = null)}
              </Text>
            </View>
            <Image
              source={imagePath}
              style={{ width: "100%", height: 200, backgroundColor: "black" }}
            />
            <Text style={styles.itemText}>{item.BirdMyanmarName}</Text>
            <Text style={styles.itemText}>{item.BirdEnglishName}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

export default BirdsList;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
    marginHorizontal: 30,
  },
  itemText: {
    fontSize: 16,
    paddingVertical: 5,
    color: "#333333",
    textAlign: "center",
  },
});
