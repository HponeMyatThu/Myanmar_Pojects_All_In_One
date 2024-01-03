import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import DatePicker from 'react-native-datepicker';
import { useQuery } from "react-query";
import { getZodiac } from "../../api/react-query/MinTheinKha";
import json from "../../api/jsons/Main.json";
import ZodiacList from "../../components/Zodiac/ZodiacList";

const ZodiacHomeScreen = () => {
  const [dataServer, setDataServer] = useState<any>();
  
  const {data, status, error} = useQuery('zodiac', getZodiac);

  useEffect(() => {
    if(error) console.log(error)
    if(status === 'loading') setDataServer(json.ZodiacSignsDetail as any)
    if(status === 'success') setDataServer(data.data)
  },[data,status,error]);
  
  return (
    <>
      {dataServer ? <ZodiacList propsData={dataServer} /> : <Text>Loading ... error in ZodiacHomeScreen</Text>}
    </>
  );
};

export default ZodiacHomeScreen;

const styles = StyleSheet.create({});

