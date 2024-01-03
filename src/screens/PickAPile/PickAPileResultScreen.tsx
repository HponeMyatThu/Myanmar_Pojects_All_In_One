import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useAppSelector } from "../../hooks/useAppSelector";

const PickAPileResultScreen = () => {
  const { Result } = useAppSelector((state) => state.pickAPile);
  let imagePath:any = null;

  Result.AnswerImageUrl === "articles/2/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/2/1.jpg"))
                    : Result.AnswerImageUrl === "articles/2/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/2/2.jpg"))
                    : Result.AnswerImageUrl === "articles/2/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/2/3.jpg"))
                    : Result.AnswerImageUrl === "articles/2/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/2/4.jpg"))
                    : Result.AnswerImageUrl === "articles/1/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/1/1.jpg"))
                    : Result.AnswerImageUrl === "articles/1/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/1/2.jpg"))
                    : Result.AnswerImageUrl === "articles/1/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/1/3.jpg"))
                    : Result.AnswerImageUrl === "articles/1/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/1/4.jpg"))
                    : Result.AnswerImageUrl === "articles/3/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/3/1.jpg"))
                    : Result.AnswerImageUrl === "articles/3/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/3/2.jpg"))
                    : Result.AnswerImageUrl === "articles/3/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/3/3.jpg"))
                    : Result.AnswerImageUrl === "articles/3/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/3/4.jpg"))
                    : Result.AnswerImageUrl === "articles/4/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/4/1.jpg"))
                    : Result.AnswerImageUrl === "articles/4/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/4/2.jpg"))
                    : Result.AnswerImageUrl === "articles/4/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/4/3.jpg"))
                    : Result.AnswerImageUrl === "articles/4/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/4/4.jpg"))
                    : Result.AnswerImageUrl === "articles/5/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/5/1.jpg"))
                    : Result.AnswerImageUrl === "articles/5/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/5/2.jpg"))
                    : Result.AnswerImageUrl === "articles/5/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/5/3.jpg"))
                    : Result.AnswerImageUrl === "articles/5/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/5/4.jpg"))
                    : Result.AnswerImageUrl === "articles/6/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/6/1.jpg"))
                    : Result.AnswerImageUrl === "articles/6/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/6/2.jpg"))
                    : Result.AnswerImageUrl === "articles/6/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/6/3.jpg"))
                    : Result.AnswerImageUrl === "articles/6/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/6/4.jpg"))
                    : Result.AnswerImageUrl === "articles/7/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/7/1.jpg"))
                    : Result.AnswerImageUrl === "articles/7/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/7/2.jpg"))
                    : Result.AnswerImageUrl === "articles/7/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/7/3.jpg"))
                    : Result.AnswerImageUrl === "articles/7/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/7/4.jpg"))
                    : Result.AnswerImageUrl === "articles/8/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/8/1.jpg"))
                    : Result.AnswerImageUrl === "articles/8/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/8/2.jpg"))
                    : Result.AnswerImageUrl === "articles/8/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/8/3.jpg"))
                    : Result.AnswerImageUrl === "articles/8/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/8/4.jpg"))
                    : Result.AnswerImageUrl === "articles/9/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/9/1.jpg"))
                    : Result.AnswerImageUrl === "articles/9/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/9/2.jpg"))
                    : Result.AnswerImageUrl === "articles/9/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/9/3.jpg"))
                    : Result.AnswerImageUrl === "articles/9/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/9/4.jpg"))
                    : Result.AnswerImageUrl === "articles/10/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/10/1.jpg"))
                    : Result.AnswerImageUrl === "articles/10/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/10/2.jpg"))
                    : Result.AnswerImageUrl === "articles/10/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/10/3.jpg"))
                    : Result.AnswerImageUrl === "articles/10/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/10/4.jpg"))
                    : Result.AnswerImageUrl === "articles/11/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/11/1.jpg"))
                    : Result.AnswerImageUrl === "articles/11/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/11/2.jpg"))
                    : Result.AnswerImageUrl === "articles/11/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/11/3.jpg"))
                    : Result.AnswerImageUrl === "articles/11/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/11/4.jpg"))
                    : Result.AnswerImageUrl === "articles/12/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/12/1.jpg"))
                    : Result.AnswerImageUrl === "articles/12/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/12/2.jpg"))
                    : Result.AnswerImageUrl === "articles/12/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/12/3.jpg"))
                    : Result.AnswerImageUrl === "articles/12/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/12/4.jpg"))
                    : Result.AnswerImageUrl === "articles/13/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/13/1.jpg"))
                    : Result.AnswerImageUrl === "articles/13/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/13/2.jpg"))
                    : Result.AnswerImageUrl === "articles/13/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/13/3.jpg"))
                    : Result.AnswerImageUrl === "articles/13/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/13/4.jpg"))
                    : Result.AnswerImageUrl === "articles/14/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/14/1.jpg"))
                    : Result.AnswerImageUrl === "articles/14/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/14/2.jpg"))
                    : Result.AnswerImageUrl === "articles/14/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/14/3.jpg"))
                    : Result.AnswerImageUrl === "articles/14/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/14/4.jpg"))
                    : Result.AnswerImageUrl === "articles/15/1.jpg"
                    ? (imagePath = require("../../assets/images/articles/15/1.jpg"))
                    : Result.AnswerImageUrl === "articles/15/2.jpg"
                    ? (imagePath = require("../../assets/images/articles/15/2.jpg"))
                    : Result.AnswerImageUrl === "articles/15/3.jpg"
                    ? (imagePath = require("../../assets/images/articles/15/3.jpg"))
                    : Result.AnswerImageUrl === "articles/15/4.jpg"
                    ? (imagePath = require("../../assets/images/articles/15/4.jpg"))
                    : (imagePath = null)

  return (
    <>
      <View style={{margin: 20}}>
        <Image style={{width: '100%', height: 300,backgroundColor: 'black'}} source={imagePath}></Image>
        <Text style={{textAlign: 'center', margin: 10, color: 'black'}}>{Result.AnswerName}</Text>
        <Text style={{color: 'black', fontSize: 15}}>{Result.AnswerDesp}</Text>
      </View>
    </>
  );
};

export default PickAPileResultScreen;

const styles = StyleSheet.create({});
