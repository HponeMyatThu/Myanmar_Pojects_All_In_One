import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { RootStackScreenProps } from "../../navigator/type";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import {
  dataClear,
  dataReadMore,
  datawhole,
} from "../../features/pickAPileSlice";
import json from "../../api/jsons/Main.json";
import { useQuery } from "react-query";
import { getPickAPile_Answers } from "../../api/react-query/MinTheinKha";
import { useAppSelector } from "../../hooks/useAppSelector";

interface dataType {
  propsData: PickAPile_Questions[];
}

type Props = RootStackScreenProps<"PickAPileHomeScreen">;

const PickAPileQuestion = ({ propsData }: dataType) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigation<Props["navigation"]>();
  const [dataServer, setDataServer] = useState<PickAPile_Answers[] | null>();
  const { data, status, error } = useQuery("answers", getPickAPile_Answers);

  useEffect(() => {
    if (status === "loading") {
      setDataServer(json.PickAPile_Answers);
    }
    if (status === "success") {
      setDataServer(data.data);
    }
    if (error) console.log(error);
  }, [data, status, error]);

  // useEffect(() => {
  //   dispatch(dataClear());
  // }, []);

  const handleClickReadMore = (item: PickAPile_Questions) => {
    const id = item.QuestionId;

    dispatch(dataReadMore(item as never));
    console.log(id);
    const filtered = dataServer?.filter((item) =>
      item ? item.QuestionId === id : null
    );

    filtered ? dispatch(datawhole(filtered)) : null;
    console.log("length", filtered?.length);

    navigate.navigate("PickAPileReadMoreScreen");
  };
  return (
    <>
      <ScrollView>
        <View style={{ marginTop: 10 }}>
          {propsData && propsData.length > 0 ? (
            propsData.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => handleClickReadMore(item)}
              >
                <View key={item.QuestionId} style={styles.itemContainer}>
                  <Text style={styles.itemText}>{item.QuestionName}</Text>
                  {/* <TouchableOpacity
                    style={{
                      backgroundColor: "lightblue",
                      width: 100,
                      marginVertical: 10,
                      paddingHorizontal: 10,
                      paddingVertical: 5,
                    }}
                    // onPress={() => handleClickReadMore(item)}
                  >
                    <Text>Read More</Text>
                  </TouchableOpacity> */}
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text>Data not found in components</Text>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default PickAPileQuestion;

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
