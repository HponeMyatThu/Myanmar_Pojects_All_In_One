import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { ArtistId } from "../../features/artGallery";
import { useAppSelector } from "../../hooks/useAppSelector";
import { RootStackScreenProps } from "../../navigator/type";
import { useNavigation } from "@react-navigation/native";

type dataType = {
  propsData: Artist[];
};

let imagePath: any = null;

type Props = RootStackScreenProps<"ArtGalleryHomeScreen">;

const ArtistsList = ({ propsData }: dataType) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigation<Props["navigation"]>();

  const handleClick = (item: number) => {
    dispatch(ArtistId(item));
    navigate.navigate("ArtGalleryArtScreen");
  };

  return (
    <>
      <ScrollView>
        {propsData.map((item) => (
          <TouchableOpacity
            onPress={() => handleClick(item.ArtistId as number)}
            key={item.ArtistId}
          >
            <View style={styles.itemContainer}>
              <Text style={{ display: "none" }}>
                {item.ArtistId === 1
                  ? (imagePath = require("../../assets/images/art-gallery/profile/1.jpg"))
                  : item.ArtistId === 2
                  ? (imagePath = require("../../assets/images/art-gallery/profile/2.jpg"))
                  : item.ArtistId === 3
                  ? (imagePath = require("../../assets/images/art-gallery/profile/3.jpg"))
                  : item.ArtistId === 4
                  ? (imagePath = require("../../assets/images/art-gallery/profile/4.jpg"))
                  : item.ArtistId === 5
                  ? (imagePath = require("../../assets/images/art-gallery/profile/5.jpg"))
                  : item.ArtistId === 6
                  ? (imagePath = require("../../assets/images/art-gallery/profile/6.jpg"))
                  : item.ArtistId === 7
                  ? (imagePath = require("../../assets/images/art-gallery/profile/7.jpg"))
                  : item.ArtistId === 8
                  ? (imagePath = require("../../assets/images/art-gallery/profile/8.jpg"))
                  : null}
              </Text>
              <Image
                style={{ width: "100%", height: 500 }}
                source={imagePath}
              ></Image>
              <Text style={styles.itemText}>{item.ArtistName}</Text>
              {item.Social.map((social: SocialDataTypes) => (
                <View>
                  <Text>{social.Name}</Text>
                  <Text>{social.Link}</Text>
                </View>
              ))}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default ArtistsList;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    marginHorizontal: 10,
    marginVertical: 10,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    paddingVertical: 5,
    color: "#333333",
  },
});
