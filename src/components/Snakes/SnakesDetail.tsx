import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "react-native";
import { useAppSelector } from "../../hooks/useAppSelector";

type dataType = {
  propsData: Snakes;
};

let imagePath: any = null;

const SnakesDetail = ({ propsData }: dataType) => {
  console.log(useAppSelector((state) => state.snake.Id));

  return (
    <ScrollView>
      <View style={styles.itemContainer}>
        <Text style={{ display: "none" }}>
          {propsData.Id === 1
            ? (imagePath = require("../../assets/images/Snakes/1.jpg"))
            : propsData.Id === 2
            ? (imagePath = require("../../assets/images/Snakes/2.jpg"))
            : propsData.Id === 3
            ? (imagePath = require("../../assets/images/Snakes/3.jpg"))
            : propsData.Id === 4
            ? (imagePath = require("../../assets/images/Snakes/4.jpg"))
            : propsData.Id === 5
            ? (imagePath = require("../../assets/images/Snakes/5.jpg"))
            : propsData.Id === 6
            ? (imagePath = require("../../assets/images/Snakes/6.jpg"))
            : propsData.Id === 7
            ? (imagePath = require("../../assets/images/Snakes/7.jpg"))
            : propsData.Id === 8
            ? (imagePath = require("../../assets/images/Snakes/8.jpg"))
            : propsData.Id === 9
            ? (imagePath = require("../../assets/images/Snakes/9.jpg"))
            : propsData.Id === 10
            ? (imagePath = require("../../assets/images/Snakes/10.jpg"))
            : propsData.Id === 11
            ? (imagePath = require("../../assets/images/Snakes/11.jpg"))
            : propsData.Id === 12
            ? (imagePath = require("../../assets/images/Snakes/12.jpg"))
            : propsData.Id === 13
            ? (imagePath = require("../../assets/images/Snakes/13.jpg"))
            : propsData.Id === 14
            ? (imagePath = require("../../assets/images/Snakes/14.jpg"))
            : propsData.Id === 15
            ? (imagePath = require("../../assets/images/Snakes/15.jpg"))
            : propsData.Id === 16
            ? (imagePath = require("../../assets/images/Snakes/16.jpg"))
            : propsData.Id === 17
            ? (imagePath = require("../../assets/images/Snakes/17.jpg"))
            : propsData.Id === 18
            ? (imagePath = require("../../assets/images/Snakes/18.jpg"))
            : propsData.Id === 19
            ? (imagePath = require("../../assets/images/Snakes/19.jpg"))
            : propsData.Id === 20
            ? (imagePath = require("../../assets/images/Snakes/20.jpg"))
            : propsData.Id === 21
            ? (imagePath = require("../../assets/images/Snakes/21.jpg"))
            : propsData.Id === 22
            ? (imagePath = require("../../assets/images/Snakes/22.jpg"))
            : propsData.Id === 23
            ? (imagePath = require("../../assets/images/Snakes/23.jpg"))
            : propsData.Id === 24
            ? (imagePath = require("../../assets/images/Snakes/24.jpg"))
            : propsData.Id === 25
            ? (imagePath = require("../../assets/images/Snakes/25.jpg"))
            : propsData.Id === 26
            ? (imagePath = require("../../assets/images/Snakes/26.jpg"))
            : propsData.Id === 27
            ? (imagePath = require("../../assets/images/Snakes/27.jpg"))
            : propsData.Id === 28
            ? (imagePath = require("../../assets/images/Snakes/28.jpg"))
            : propsData.Id === 29
            ? (imagePath = require("../../assets/images/Snakes/29.jpg"))
            : propsData.Id === 30
            ? (imagePath = require("../../assets/images/Snakes/30.jpg"))
            : null}
        </Text>
        <Image
          style={{ width: "100%", height: 180 }}
          source={imagePath}
        ></Image>
        <View>
          <Text style={styles.itemTitleText}>{propsData.EngName} </Text>
          <Text style={styles.itemTitleText}>{propsData.MMName}</Text>
          <Text style={styles.itemTitleText}>{propsData.IsPoison === "Yes" ? "(အဆိပ် ရှိ)": "(အဆိပ်မရှိ)"} {propsData.IsDanger === "Yes" ? "(အန္တာရာယ်ရှိ)" : "(အန္တာရာယ်မရှိ)"}</Text>
        </View>
        <Text style={styles.itemText}>{propsData.Detail}</Text>
      </View>
    </ScrollView>
  );
};

export default SnakesDetail;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
    marginHorizontal: 10,
    marginVertical: 10,
  },
  itemTitleText: {
    fontSize: 18,
    paddingVertical: 5,
    color: "#333333",
  },
  itemText: {
    fontSize: 14,
    paddingVertical: 5,
    color: "#333333",
  },
});
