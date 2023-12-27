import {
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { RootStackScreenProps } from "../../navigator/type";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { dataPicture } from "../../features/pickAPileSlice";

type Props = RootStackScreenProps<"PickAPilePictureScreen">;

const PickAPilePicture = () => {
  const { Answer } = useAppSelector((state) => state.pickAPile);
  const navigate = useNavigation<Props["navigation"]>();
  const dispatch = useAppDispatch();

  const handleClick = (ans: PickAPile_Answers) => {
    dispatch(dataPicture(ans));
    navigate.navigate("PickAPileResultScreen");
  };

  let imagePath: any = null;

  return (
    <>
      <View style={styles.main}>
        {Answer.map((ans) => (
          <TouchableOpacity onPress={() => handleClick(ans)}>
            <View
              style={{ width: 150, marginVertical: 10, alignItems: "center" }}
            >
              <View>
                <Text style={{ display: "none" }}>
                  {ans.AnswerImageUrl === "articles/2/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/2/1.jpg"))
                    : ans.AnswerImageUrl === "articles/2/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/2/2.jpg"))
                    : ans.AnswerImageUrl === "articles/2/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/2/3.jpg"))
                    : ans.AnswerImageUrl === "articles/2/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/2/4.jpg"))
                    : ans.AnswerImageUrl === "articles/1/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/1/1.jpg"))
                    : ans.AnswerImageUrl === "articles/1/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/1/2.jpg"))
                    : ans.AnswerImageUrl === "articles/1/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/1/3.jpg"))
                    : ans.AnswerImageUrl === "articles/1/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/1/4.jpg"))
                    : ans.AnswerImageUrl === "articles/3/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/3/1.jpg"))
                    : ans.AnswerImageUrl === "articles/3/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/3/2.jpg"))
                    : ans.AnswerImageUrl === "articles/3/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/3/3.jpg"))
                    : ans.AnswerImageUrl === "articles/3/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/3/4.jpg"))
                    : ans.AnswerImageUrl === "articles/4/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/4/1.jpg"))
                    : ans.AnswerImageUrl === "articles/4/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/4/2.jpg"))
                    : ans.AnswerImageUrl === "articles/4/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/4/3.jpg"))
                    : ans.AnswerImageUrl === "articles/4/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/4/4.jpg"))
                    : ans.AnswerImageUrl === "articles/5/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/5/1.jpg"))
                    : ans.AnswerImageUrl === "articles/5/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/5/2.jpg"))
                    : ans.AnswerImageUrl === "articles/5/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/5/3.jpg"))
                    : ans.AnswerImageUrl === "articles/5/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/5/4.jpg"))
                    : ans.AnswerImageUrl === "articles/6/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/6/1.jpg"))
                    : ans.AnswerImageUrl === "articles/6/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/6/2.jpg"))
                    : ans.AnswerImageUrl === "articles/6/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/6/3.jpg"))
                    : ans.AnswerImageUrl === "articles/6/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/6/4.jpg"))
                    : ans.AnswerImageUrl === "articles/7/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/7/1.jpg"))
                    : ans.AnswerImageUrl === "articles/7/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/7/2.jpg"))
                    : ans.AnswerImageUrl === "articles/7/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/7/3.jpg"))
                    : ans.AnswerImageUrl === "articles/7/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/7/4.jpg"))
                    : ans.AnswerImageUrl === "articles/8/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/8/1.jpg"))
                    : ans.AnswerImageUrl === "articles/8/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/8/2.jpg"))
                    : ans.AnswerImageUrl === "articles/8/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/8/3.jpg"))
                    : ans.AnswerImageUrl === "articles/8/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/8/4.jpg"))
                    : ans.AnswerImageUrl === "articles/9/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/9/1.jpg"))
                    : ans.AnswerImageUrl === "articles/9/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/9/2.jpg"))
                    : ans.AnswerImageUrl === "articles/9/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/9/3.jpg"))
                    : ans.AnswerImageUrl === "articles/9/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/9/4.jpg"))
                    : ans.AnswerImageUrl === "articles/10/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/10/1.jpg"))
                    : ans.AnswerImageUrl === "articles/10/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/10/2.jpg"))
                    : ans.AnswerImageUrl === "articles/10/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/10/3.jpg"))
                    : ans.AnswerImageUrl === "articles/10/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/10/4.jpg"))
                    : ans.AnswerImageUrl === "articles/11/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/11/1.jpg"))
                    : ans.AnswerImageUrl === "articles/11/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/11/2.jpg"))
                    : ans.AnswerImageUrl === "articles/11/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/11/3.jpg"))
                    : ans.AnswerImageUrl === "articles/11/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/11/4.jpg"))
                    : ans.AnswerImageUrl === "articles/12/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/12/1.jpg"))
                    : ans.AnswerImageUrl === "articles/12/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/12/2.jpg"))
                    : ans.AnswerImageUrl === "articles/12/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/12/3.jpg"))
                    : ans.AnswerImageUrl === "articles/12/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/12/4.jpg"))
                    : ans.AnswerImageUrl === "articles/13/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/13/1.jpg"))
                    : ans.AnswerImageUrl === "articles/13/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/13/2.jpg"))
                    : ans.AnswerImageUrl === "articles/13/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/13/3.jpg"))
                    : ans.AnswerImageUrl === "articles/13/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/13/4.jpg"))
                    : ans.AnswerImageUrl === "articles/14/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/14/1.jpg"))
                    : ans.AnswerImageUrl === "articles/14/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/14/2.jpg"))
                    : ans.AnswerImageUrl === "articles/14/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/14/3.jpg"))
                    : ans.AnswerImageUrl === "articles/14/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/14/4.jpg"))
                    : ans.AnswerImageUrl === "articles/15/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/15/1.jpg"))
                    : ans.AnswerImageUrl === "articles/15/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/15/2.jpg"))
                    : ans.AnswerImageUrl === "articles/15/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/15/3.jpg"))
                    : ans.AnswerImageUrl === "articles/15/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/15/4.jpg"))
                    : (imagePath = null)}
                </Text>
              </View>
              <Image
                style={{
                  width: 130,
                  height: 180,
                  backgroundColor: "black",
                }}
                source={imagePath}
              ></Image>
              <Text>{ans.AnswerName}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default PickAPilePicture;

const styles = StyleSheet.create({
  main: {
    flex: 1,
    marginTop: 40,
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 40,
  },
});
