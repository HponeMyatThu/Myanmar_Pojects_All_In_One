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
  import { RootStackScreenProps } from "../../navigator/type";
  import { useNavigation } from "@react-navigation/native";
  import { useDispatch } from "react-redux";
  import { data } from "../../features/zodiacSlice";
  
  type dataTypes = {
    propsData: ZodiacSignsDetail[];
  };
  
  let imagePath: any = null;
  
  type Props = RootStackScreenProps<"ZodiacHomeScreen">;
  
  const ZodiacList = ({ propsData }: dataTypes) => {
    const navigate = useNavigation<Props["navigation"]>();
    const dispatch = useDispatch();
  
    const handleClick = (param: ZodiacSignsDetail) => {
      dispatch(data(param));
      navigate.navigate("ZodiacDetailScreen");
    };
  
    return (
      <>
        <ScrollView>
          {propsData.map((item) => (
            <TouchableOpacity
              key={item.Id}
              onPress={() => handleClick(item as ZodiacSignsDetail)}
            >
              <View style={styles.itemContainer}>
                <Text style={{ display: "none" }}>
                  {item.Id === 1
                    ? (imagePath = require("../../assets/images/Zodiac/zodiac-signs-3/1.jpg"))
                    : item.Id === 2
                    ? (imagePath = require("../../assets/images/Zodiac/zodiac-signs-3/2.jpg"))
                    : item.Id === 3
                    ? (imagePath = require("../../assets/images/Zodiac/zodiac-signs-3/3.jpg"))
                    : item.Id === 4
                    ? (imagePath = require("../../assets/images/Zodiac/zodiac-signs-3/4.jpg"))
                    : item.Id === 5
                    ? (imagePath = require("../../assets/images/Zodiac/zodiac-signs-3/5.jpg"))
                    : item.Id === 6
                    ? (imagePath = require("../../assets/images/Zodiac/zodiac-signs-3/6.jpg"))
                    : item.Id === 7
                    ? (imagePath = require("../../assets/images/Zodiac/zodiac-signs-3/7.jpg"))
                    : item.Id === 8
                    ? (imagePath = require("../../assets/images/Zodiac/zodiac-signs-3/8.jpg"))
                    : item.Id === 9
                    ? (imagePath = require("../../assets/images/Zodiac/zodiac-signs-3/9.jpg"))
                    : item.Id === 10
                    ? (imagePath = require("../../assets/images/Zodiac/zodiac-signs-3/10.jpg"))
                    : item.Id === 11
                    ? (imagePath = require("../../assets/images/Zodiac/zodiac-signs-3/11.jpg"))
                    : item.Id === 12
                    ? (imagePath = require("../../assets/images/Zodiac/zodiac-signs-3/12.jpg"))
                    : null}
                </Text>
                <Image
                  style={{ width: "100%", height: 300 }}
                  source={imagePath}
                ></Image>
                <Text style={styles.itemText}>
                  {item.Name} ({item.MyanmarMonth})
                </Text>
                <Text style={{ textAlign: "center" }}>{item.Dates}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </>
    );
  };
  
  export default ZodiacList;
  
  const styles = StyleSheet.create({
    itemContainer: {
      backgroundColor: "#ffffff",
      padding: 16,
      marginBottom: 8,
      borderRadius: 8,
      elevation: 2,
      margin: 10,
    },
    itemText: {
      marginVertical: 10,
      textAlign: "center",
      fontSize: 16,
      paddingVertical: 5,
      color: "#333333",
    },
  });