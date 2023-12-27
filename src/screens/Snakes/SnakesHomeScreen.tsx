
import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import SnakesList from "../../components/Snakes/SnakesList";
import { useQuery } from "react-query";
import { getSnakes } from "../../api/react-query/MinTheinKha";
import json from "../../api/jsons/Main.json";

const SnakesHomeScreen = () => {
  const [dataServer, setDataServer] = useState<Snakes[] | undefined>();
  const { data, status, error } = useQuery("snakes", getSnakes);

  useEffect(() => {
    if (status === "loading") setDataServer(json.Snakes as Snakes[]);
    if (status === "success") setDataServer(data.data);
    if (error) console.log(error);
  }, [data, status, error]);

  return (
    <>
      <View>{dataServer ? <SnakesList propsData={dataServer} /> : null}</View>
    </>
  );
};

export default SnakesHomeScreen;

const styles = StyleSheet.create({});
