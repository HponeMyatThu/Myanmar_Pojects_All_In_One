import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import DreamResult from "../../components/DreamDictonary/DreamResult";
import { useQueries, useQuery } from "react-query";
import { getBlogDetail } from "../../api/react-query/MinTheinKha";
import json from "../../api/jsons/DreamDictionary.json";

const DreamDictonaryResultScreen = () => {
  const globalData = useAppSelector((state) => state.dreamDictonary);
  const [dataServer, setDataServer] = useState<Dreamdetail[] | null>();
  const { data, status, error } = useQuery("blogContant", getBlogDetail);

  useEffect(() => {
    console.log(status);

    //need to commend
    setDataServer(json.BlogDetail);

    if (status === "success") {
      setDataServer(data.data);
    }
    if (error) {
      console.log(error);
    }
  }, [data, status, error]);

  return (
    <View>
      {dataServer ? (
        <DreamResult propsData={dataServer} />
      ) : (
        <Text style={styles.messageContainer}>
          Data Does not exist (or) Loading
        </Text>
      )}
    </View>
  );
};

export default DreamDictonaryResultScreen;

const styles = StyleSheet.create({
  messageContainer: {
    marginHorizontal: 30,
    textAlign: "center",
    marginTop: 10,
    padding: 10,
    paddingVertical: 50,
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    alignItems: "center",
  },
});
