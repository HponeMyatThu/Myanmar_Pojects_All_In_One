import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import BirdsList from "../../components/Birds/BirdsList";
import json from "../../api/jsons/Main.json";
import { useQuery } from "react-query";
import { getBirds } from "../../api/react-query/MinTheinKha";

const BirdsHomeScreen = () => {
  const [dataServer, setDataServer] = useState<Birds[] | null>();
  const { data, status, error } = useQuery("birds", getBirds);

  useEffect(() => {
    if (status === "loading") setDataServer(json.Tbl_Bird);
    if (status === "success") setDataServer(data.data);
    if (error) console.log(error);
  }, [data, status, error]);

  return (
    <>
      <View>{dataServer ? <BirdsList propsData={dataServer} /> : null}</View>
    </>
  );
};

export default BirdsHomeScreen;

const styles = StyleSheet.create({});
