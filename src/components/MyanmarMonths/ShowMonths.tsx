import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { RootStackScreenProps } from "../../navigator/type";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { data } from "../../features/myanmarMonthsSlice";
import { useAppSelector } from "../../hooks/useAppSelector";

interface MonthData {
  propsData: Months[];
}

type Props = RootStackScreenProps<"MyanmarMonthsHomeScreen">;

const ShowMonths = ({ propsData }: MonthData) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigation<Props["navigation"]>();

  const handleClick = (item: Months) => {
    dispatch(data(item));
    return navigate.navigate("MyanmarMonthScreen");
  };

  return (
    <>
      <ScrollView>
        <View style={{marginTop: 10}}>
          {propsData.length > 0 ? (
            propsData.map((item) => (
              <TouchableOpacity onPress={() => handleClick(item)}>
                <View style={styles.itemContainer}>
                  <Text style={styles.itemText}>{item.MonthMm}</Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text>Loading.. in ShowMonths components</Text>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default ShowMonths;

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
    color: "#333333",
  },
});
