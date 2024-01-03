import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { data } from "../../features/snakesSlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import {
  RootStackParametersList,
  RootStackScreenProps,
} from "../../navigator/type";
import { useNavigation } from "@react-navigation/native";

interface dataType {
  propsData: Snakes[];
}

type Porps = RootStackScreenProps<"SnakesHomeScreen">;

const SnakesList = ({ propsData }: dataType) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigation<Porps["navigation"]>();

  const handleClick = (prop: Snakes) => {
    dispatch(data(prop));
    navigate.navigate("SnakesDetailScreen");
  };

  return (
    <>
      <ScrollView>
        {propsData.map((prop) => (
          <TouchableOpacity
            key={prop.Id}
            onPress={() => handleClick(prop as Snakes)}
          >
            <View key={prop.Id} style={styles.itemContainer}>
              <Text style={styles.itemText}>{prop.MMName}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </>
  );
};

export default SnakesList;

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#ffffff",
    padding: 16,
    marginBottom: 8,
    borderRadius: 8,
    elevation: 2,
  },
  itemText: {
    fontSize: 16,
    paddingVertical: 5,
    color: "#333333",
  },
});
