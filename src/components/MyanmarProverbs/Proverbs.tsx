import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { data } from "../../features/myanmarProverbsSlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import { RootStackScreenProps } from "../../navigator/type";
import { useNavigation } from "@react-navigation/native";

interface dataType {
  propsData: ProverbsTitle[];
}

type Props = RootStackScreenProps<"MyanmarProverbsHomeScreen">;

const Proverbs = ({ propsData }: dataType) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigation<Props["navigation"]>();

  const onhandleCLick = (item: ProverbsTitle) => {
    dispatch(data(item as any));
    navigate.navigate("MyanmarProverbsScreen");
  };

  return (
    <>
      <View>
        <Text style={{ color: "red", opacity: 1, margin: 5, padding: 5 }}>
          မြန်မာစကားပုံအက္ခရာစဉ်ဇယား
        </Text>
        <Text
          style={{ textAlign: "center", fontSize: 12, margin: 5, padding: 5 }}
        >
          မိမိကြည့်ရှုလိုသောသက်ဆိုင်ရာ အက္ခရာကိုနှိပ်၍ ရှာဖွေ ဖတ်ရှုနိုင်ပါသည်။
        </Text>
        <ScrollView>
          <View style={{ borderWidth: 1, margin: 10 }}>
            <Text
              style={{
                textAlign: "center",
                margin: 5,
                padding: 10,
                borderWidth: 1,
                fontSize: 32,
              }}
            >
              မြန်မာအက္ခရာစဉ်ဇယား
            </Text>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              {propsData.map((item) => (
                <TouchableOpacity onPress={() => onhandleCLick(item)}>
                  <View
                    key={item.TitleId}
                    style={{ margin: 5, borderWidth: 1 }}
                  >
                    <Text
                      style={{
                        fontSize: 28,
                        margin: 5,
                        width: 70,
                        textAlign: "center",
                        justifyContent: "center",
                      }}
                    >
                      {item.TitleName}
                    </Text>
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

export default Proverbs;

const styles = StyleSheet.create({});
