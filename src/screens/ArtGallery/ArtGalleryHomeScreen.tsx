import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import ArtistsList from "../../components/ArtGallery/ArtistsList";
import { useQuery } from "react-query";
import { getArtists } from "../../api/react-query/MinTheinKha";
import json from "../../api/jsons/Main.json";

const ArtGalleryHomeScreen = () => {
  const [dataServer, setDataServer] = useState<Artist[]>();

  const {
    data: ArtistsData,
    error: ArtistsError,
    status: ArtistsStatus,
  } = useQuery("artists", getArtists);

  useEffect(() => {
    if (ArtistsError) console.log(ArtistsError);
    if (ArtistsStatus === "success") setDataServer(ArtistsData.data);
    if (ArtistsStatus === "loading") setDataServer(json.Tbl_Artist as Artist[]);
  }, [ArtistsData, ArtistsError, ArtistsStatus]);

  return (
    <View>
      {dataServer ? (
        <ArtistsList propsData={dataServer} />
      ) : (
        <Text>Loading.. data not found in ArtGalleryHomeScreen</Text>
      )}
    </View>
  );
};

export default ArtGalleryHomeScreen;

const styles = StyleSheet.create({});
