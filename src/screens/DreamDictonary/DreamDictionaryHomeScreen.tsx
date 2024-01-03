import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import {
  getBlogDetail,
  getBlogHeader,
} from "../../api/react-query/MinTheinKha";
import SearchBar from "../../components/global/SearchBar";
import DreamQuestion from "../../components/DreamDictonary/DreamQuestion";
import data from "../../api/jsons/DreamDictionary.json";
import { RootStackScreenProps } from "../../navigator/type";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { deleteData } from "../../features/dreamDictonarySlice";
import { useAppSelector } from "../../hooks/useAppSelector";
import DreamResult from "../../components/DreamDictonary/DreamResult";
import DreamSearch from "../../components/DreamDictonary/DreamSearch";

const DreamDictionaryHomeScreen = () => {
  const dispatch = useAppDispatch();
  const [headerDataServer, setHeaderDataServer] = useState<
    DreamHeader[] | null
  >();
  const [detailDataServer, setDetailDataServer] = useState<
    Dreamdetail[] | null
  >();
  const [search, setSearch] = useState<string>("");

  const {
    data: BlogHeaderData,
    status: BlogHeaderStatus,
    error: BlogHeaderError,
  } = useQuery("blogHeaders", getBlogHeader);
  const {
    data: BlogDetailData,
    status: BlogDetailStatus,
    error: BlogDtailError,
  } = useQuery("blogDetails", getBlogDetail);

  useEffect(() => {
    dispatch(deleteData());
  }, [search]);

  useEffect(() => {
    console.log(BlogDetailStatus);

    setDetailDataServer(data.BlogDetail);
    if (BlogDetailStatus === "success") {
      const data = BlogDetailData.data;
      setDetailDataServer(data);
    }
    BlogDtailError ? console.log(BlogDtailError) : null;
  }, [BlogDetailData, BlogDetailStatus, BlogDtailError]);

  useEffect(() => {
    console.log(BlogHeaderStatus);

    //need to commend
    setHeaderDataServer(data.BlogHeader);

    if (BlogHeaderStatus === "success") {
      const data = BlogHeaderData.data;
      setHeaderDataServer(data);
    }
    if (BlogHeaderError) {
      console.log(BlogHeaderError);
    }
  }, [BlogHeaderData, BlogHeaderError, BlogHeaderStatus, headerDataServer]);

  // useEffect(() => {
  //   console.log(status);
  //   if (status === "success") {
  //     const res = data.data;
  //     console.log(res.length);
  //   }
  //   if (error) console.log(error);
  // }, [data, status, error]);

  // const filteredDreamQuestions: DreamQuestion[] | [] = dataServer
  //   ? dataServer.filter((item) =>
  //       item.BlogTitle
  //         ? item.BlogTitle.toLowerCase().includes(search?.toLocaleLowerCase())
  //         : null
  //     )
  //   : [];

  return (
    <>
      <View>
        <SearchBar onChangeText={(text: string) => setSearch(text)} />
      </View>
      {search === "" || search === undefined || search === null ? (
        headerDataServer ? (
          <View style={{ flex: 1 }}>
            <DreamQuestion headerData={headerDataServer} />
          </View>
        ) : (
          <Text style={styles.messageContainer}>
            Data Does not exist (or) Loading
          </Text>
        )
      ) : (
        <View style={{ flex: 1 }}>
          {detailDataServer ? (
            <DreamSearch propsData={search} fetchData={detailDataServer} />
          ) : (
            <Text>Not Data Found (or) Loading</Text>
          )}
        </View>
      )}
    </>
  );
};

export default DreamDictionaryHomeScreen;

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
