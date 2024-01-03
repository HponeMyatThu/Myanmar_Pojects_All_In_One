import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import json from "../../api/jsons/Main.json";
import ShowMonths from "../../components/MyanmarMonths/ShowMonths";
import { useQueries, useQuery } from "react-query";
import { getMyanmarMonths } from "../../api/react-query/MinTheinKha";

const MyanmarMonthsHomeScreen = () => {
  const [dataServer, setDataServer] = useState<Months[] | null>();

  const { data, status, error } = useQuery("months", getMyanmarMonths);

  useEffect(() => {
    if (status === "loading") setDataServer(json.Tbl_Months as Months[]);
    if (status === "success") setDataServer(data.data);
    if (error) console.log(error);
  }, []);

  return (
    <View>{dataServer ? <ShowMonths propsData={dataServer} /> : <Text>Loading...</Text>}</View>
  );
};

export default MyanmarMonthsHomeScreen;

const styles = StyleSheet.create({});
