import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import PickAPileQuestion from "../../components/PickAPile/PickAPileQuestion";
import { useQuery } from "react-query";
import json from "../../api/jsons/Main.json";
import { getPickAPile_Questions } from "../../api/react-query/MinTheinKha";

const PickAPileHomeScreen = () => {
  const [dataServer, setDataServer] = useState<PickAPile_Questions[] | null>();
  // console.log("🚀 ~ file: PickAPileHomeScreen.tsx:10 ~ PickAPileHomeScreen ~ dataServer:", dataServer)

  const {
    data: PileQuestionData,
    status: PileQuestionStatus,
    error: PileQuestionError,
  } = useQuery("questions", getPickAPile_Questions);

  useEffect(() => {
    if (PileQuestionStatus === "loading") {
      setDataServer(json.PickAPile_Questions);
    }
    if (PileQuestionStatus === "success") {
      setDataServer(PileQuestionData.data);
    }
    if (PileQuestionError) {
      console.log(PileQuestionError);
    }
  }, [PileQuestionData, PileQuestionStatus, PileQuestionError]);

  return (
    <>
      <View>
        {dataServer ? (
          <PickAPileQuestion propsData={dataServer} />
        ) : (
          <Text>Data Not found in screen</Text>
        )}
      </View>
    </>
  );
};

export default PickAPileHomeScreen;

const styles = StyleSheet.create({});
