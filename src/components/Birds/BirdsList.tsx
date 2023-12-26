import {
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
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

type Props = RootStackScreenProps<'BirdsHomeScreen'>;

const BirdsList = ({ propsData }: dataType) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigation<Props['navigation']>();

    const handleClick = (item:Birds) => {
        dispatch(data(item));
        navigate.navigate('BirdsDetailScreen');
    }   

  return (
    <>
      <ScrollView>
        {propsData.map((item) => (
          <TouchableOpacity onPress={() => handleClick(item)}>
            <View style={styles.itemContainer}>
              <Text
                style={{
                  width: "80%",
                  height: 200,
                  backgroundColor: "black",
                  color: "white",
                  marginHorizontal: 30,
                }}
              >
                {item.ImagePath}
              </Text>
              <Text style={styles.itemText}>{item.BirdMyanmarName}</Text>
              <Text style={styles.itemText}>{item.BirdEnglishName}</Text>
              {/* <Text>{item.Description}</Text> */}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
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
