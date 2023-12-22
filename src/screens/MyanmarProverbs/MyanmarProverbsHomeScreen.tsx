import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import Proverbs from "../../components/MyanmarProverbs/Proverbs";
import { getMyanmarProverbsTitle } from "../../api/react-query/MinTheinKha";
import json from "../../api/jsons/Main.json";
import { useQuery } from "react-query";

const MyanmarProverbsHomeScreen = () => {
  const [dataServer, setDataServer] = useState<ProverbsTitle[] | null>();

  const {
    data: ProverbsData,
    status: ProverbsStatus,
    error: ProverbsError,
  } = useQuery("proverbsTitle", getMyanmarProverbsTitle);

  useEffect(() => {
    if (ProverbsStatus === "loading") {
      setDataServer(json.Tbl_MMProverbsTitle);
    }
    if (ProverbsStatus === "success") {
      setDataServer(ProverbsData.data);
    }
    if (ProverbsError) console.log(ProverbsError);
  }, [ProverbsData, ProverbsStatus, ProverbsError]);

  return (
    <View>
      {dataServer ? (
        <Proverbs propsData={dataServer} />
      ) : (
        <Text>Loading...</Text>
      )}
    </View>
  );
};

export default MyanmarProverbsHomeScreen;

const styles = StyleSheet.create({});
