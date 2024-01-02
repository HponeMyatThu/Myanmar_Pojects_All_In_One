import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import json from "../../api/jsons/Main.json";
import { useQuery } from "react-query";
import { getArts } from "../../api/react-query/MinTheinKha";

type dataTypes = {
  propsData: Gallery[];
};

const ArtList = ({ propsData }: dataTypes) => {
  const [dataServer, setDataServer] = useState<Art>();
  console.log("🚀 ~ file: ArtList.tsx:19 ~ ArtList ~ dataServer:", dataServer);
  const {
    data: ArtData,
    status: ArtStatus,
    error: ArtError,
  } = useQuery("art", getArts);

  useEffect(() => {
    if (ArtError) console.log(ArtError);
    if (ArtStatus === "success") {
      const responseData = ArtData.data;
      const filteredData = responseData.filter((data: Art) => {
        propsData.map((props: Gallery) => {
          if (data.ArtId === props.ArtId) {
            console.log(data.ArtId);

            return data;
          }
        });
      });
    }
    if (ArtStatus === "loading") {
      const responseData = json.Tbl_Art;
      let array: any = [];
      const filteredData = responseData.filter((data: any) => {
        propsData.map((props: Gallery) => {
          if (data.ArtId === props.ArtId) {
            array.push(data);
            return data;
          }
        });
      });
      setDataServer(array);
    }
  }, [ArtData, ArtStatus, ArtError]);

  let imagePath: any = null;

  return (
    <>
      <ScrollView>
        {dataServer ? (
          dataServer.map((item: Gallery) => (
            <TouchableOpacity key={item.ArtId}>
              <View style={styles.itemContainer}>
                <View>
                  <Text style={{ display: "none" }}>
                    {item.ArtId === 1
                      ? (imagePath = require("../../assets/images/art-gallery/1.jpg"))
                      : item.ArtId === 2
                      ? (imagePath = require("../../assets/images/art-gallery/2.jpg"))
                      : item.ArtId === 3
                      ? (imagePath = require("../../assets/images/art-gallery/3.jpg"))
                      : item.ArtId === 4
                      ? (imagePath = require("../../assets/images/art-gallery/4.jpg"))
                      : item.ArtId === 5
                      ? (imagePath = require("../../assets/images/art-gallery/5.jpg"))
                      : item.ArtId === 6
                      ? (imagePath = require("../../assets/images/art-gallery/6.jpg"))

                      : item.ArtId === 7
                      ? (imagePath = require("../../assets/images/art-gallery/7.jpg"))
                      : item.ArtId === 8
                      ? (imagePath = require("../../assets/images/art-gallery/8.jpg"))
                      : item.ArtId === 9
                      ? (imagePath = require("../../assets/images/art-gallery/9.jpg"))
                      : item.ArtId === 10
                      ? (imagePath = require("../../assets/images/art-gallery/10.jpg"))
                      : item.ArtId === 11
                      ? (imagePath = require("../../assets/images/art-gallery/11.jpg"))
                      : item.ArtId === 12
                      ? (imagePath = require("../../assets/images/art-gallery/12.jpg"))
                      : item.ArtId === 13
                      ? (imagePath = require("../../assets/images/art-gallery/13.jpg"))
                      : item.ArtId === 14
                      ? (imagePath = require("../../assets/images/art-gallery/14.jpg"))
                      : item.ArtId === 15
                      ? (imagePath = require("../../assets/images/art-gallery/15.jpg"))
                      : item.ArtId === 16
                      ? (imagePath = require("../../assets/images/art-gallery/16.jpg"))
                      : item.ArtId === 17
                      ? (imagePath = require("../../assets/images/art-gallery/17.jpg"))
                      : item.ArtId === 18
                      ? (imagePath = require("../../assets/images/art-gallery/18.jpg"))
                      : item.ArtId === 19
                      ? (imagePath = require("../../assets/images/art-gallery/19.jpg"))
                      : item.ArtId === 20
                      ? (imagePath = require("../../assets/images/art-gallery/20.jpg"))
                      : item.ArtId === 21
                      ? (imagePath = require("../../assets/images/art-gallery/21.jpg"))
                      : item.ArtId === 22
                      ? (imagePath = require("../../assets/images/art-gallery/22.jpg"))
                      : item.ArtId === 23
                      ? (imagePath = require("../../assets/images/art-gallery/23.jpg"))
                      : item.ArtId === 24
                      ? (imagePath = require("../../assets/images/art-gallery/24.jpg"))

                      : null}
                  </Text>
                </View>
                <View>
                  <Image
                    style={{
                      width: "100%",
                      height: 300,
                      backgroundColor: "black",
                    }}
                    source={imagePath}
                  ></Image>
                </View>
                <View>
                  <Text style={styles.itemText}>Art name : {item.ArtName}</Text>
                  <Text style={styles.itemText}>{item.ArtDescription}</Text>
                </View>
              </View>
            </TouchableOpacity>
          ))
        ) : (
          <Text>Loading .... fetching ... ArtList Error</Text>
        )}
      </ScrollView>
    </>
  );
};

export default ArtList;

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
