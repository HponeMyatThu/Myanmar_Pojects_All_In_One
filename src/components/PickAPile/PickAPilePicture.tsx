import {
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

type Props = RootStackScreenProps<'PickAPilePictureScreen'>;

const PickAPilePicture = () => {
  const { Answer } = useAppSelector((state) => state.pickAPile);
  const navigate = useNavigation<Props['navigation']>();
  const dispatch = useAppDispatch();

  const handleClick = (ans: PickAPile_Answers) => {
    dispatch(dataPicture(ans));
    navigate.navigate('PickAPileResultScreen');
  }

  return (
    <>
      <View style={styles.main}>
        {Answer.map((ans) => (
          <TouchableOpacity onPress={() => handleClick(ans)}>
            <View
              style={{ width: 150, marginVertical: 10, alignItems: "center" , }}
            >
              <Text>{ans.AnswerId}</Text>
              <Text
                style={{
                  width: 130,
                  height: 180,
                  backgroundColor: "black",
                  color: "white",
                }}
              >
                {ans.AnswerImageUrl}
              </Text>
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
