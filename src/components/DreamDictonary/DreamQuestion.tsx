import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { data } from "../../features/dreamDictonarySlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import { useNavigation } from "@react-navigation/native";
import { RootStackScreenProps } from "../../navigator/type";

interface HeaderQuestions {
  headerData: DreamHeader[];
}

type Props = RootStackScreenProps<'DreamDictionaryHomeScreen'>;

const DreamQuestion = ({ headerData }: HeaderQuestions) => {
  const navigate = useNavigation<Props['navigation']>();
  const dispatch = useAppDispatch();
  
  const handleClick = (id:number, title:string) => {
    dispatch(data({id, title}))
    return navigate.navigate('DreamDictonaryResultScreen')
  }

  return (
    <>
      <ScrollView>
        <View style={styles.mainDiv}>
          {headerData.map((item) => (
            <TouchableOpacity onPress={() => handleClick(item.BlogId, item.BlogTitle)} key={item.BlogId}>
              <View style={styles.viewDiv}>
                <Text style={styles.txt} key={item.BlogId}>
                  {item.BlogTitle.slice(0, 6)}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </>
  );
};

export default DreamQuestion;

const styles = StyleSheet.create({
  mainDiv: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginHorizontal: 10,
  },
  txt: {
    textAlign: "center",
    fontSize: 28,
    color: "black",
  },
  viewDiv: {
    alignContent: "center",
    justifyContent: "center",
    borderWidth: 1,
    width: 100,
    height: 70,
    padding: 15,
    margin: 10,
  },
});
