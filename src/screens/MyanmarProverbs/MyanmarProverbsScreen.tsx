import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import { getMyanmarProverbsBody } from "../../api/react-query/MinTheinKha";
import json from "../../api/jsons/Main.json";
import { useQuery } from "react-query";
import MyanmarProverbsResultScreen from "./MyanmarProverbsResultScreen";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { dataBody } from "../../features/myanmarProverbsSlice";
import { useNavigation } from "@react-navigation/native";
import { RootStackScreenProps } from "../../navigator/type";

type Props = RootStackScreenProps<"MyanmarProverbsScreen">;

const MyanmarProverbsScreen = () => {
  const { TitleId, TitleName } = useAppSelector(
    (state) => state.myanmarProverbs
  );
  const dispatch = useAppDispatch();
  const navigator = useNavigation<Props["navigation"]>();
  const [bodyDataServer, setBodyDataServer] = useState<ProverbsBody[] | null>();

  const {
    data: BodyData,
    status: BodyStatus,
    error: BodyError,
  } = useQuery("proverbdBody", getMyanmarProverbsBody);

  useEffect(() => {
    if (BodyStatus === "loading") {
      setBodyDataServer(json.Tbl_MMProverbs as ProverbsBody[]);
    }
    if (BodyStatus === "success") {
      setBodyDataServer(BodyData.data);
    }
    if (BodyError) {
      console.log(BodyError);
    }
  }, [BodyData, BodyStatus, BodyError]);

  const formattedData = bodyDataServer?.filter((item) =>
    item.ProverbName.toLowerCase().startsWith(TitleName?.toLowerCase())
  );
  console.log(useAppSelector((state) => state.myanmarProverbs));

  const onhandleCLicked = (id: number, name: string, des: string) => {
    navigator.navigate("MyanmarProverbsResultScreen");
    dispatch(dataBody({ id, name, des }));
  };

  return (
    <>
      <ScrollView>
        <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
          {formattedData ? (
            formattedData?.map((item) => (
              <TouchableOpacity
                key={item.ProverbId}
                onPress={() =>
                  onhandleCLicked(
                    item.ProverbId,
                    item.ProverbName,
                    item.ProverbDesp
                  )
                }
              >
                <View style={styles.itemContainer}>
                  <Text style={styles.itemText}>{item.ProverbName}</Text>
                </View>
              </TouchableOpacity>
            ))
          ) : (
            <Text>Loading...</Text>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default MyanmarProverbsScreen;

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
