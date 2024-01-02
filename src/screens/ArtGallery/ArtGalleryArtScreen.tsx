import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../hooks/useAppSelector";
import json from "../../api/jsons/Main.json";
import { useQuery } from "react-query";
import { getGalleries } from "../../api/react-query/MinTheinKha";
import ArtList from "../../components/ArtGallery/ArtList";

const ArtGalleryArtScreen = () => {
  const { ArtistId } = useAppSelector((state) => state.artGallery);
  const [dataServer, setDataServer] = useState<Gallery[]>();
  const {
    data: GalleryData,
    status: GalleryStatus,
    error: GalleryError,
  } = useQuery("galleries", getGalleries);

  useEffect(() => {
    if (GalleryError) console.log(GalleryError);
    if (GalleryStatus === "loading") {
      const data = json.Tbl_Gallery;
      const filteredData = data.filter((data) => {
        if (data.ArtistId === ArtistId) {
          return data;
        }
      });
      setDataServer(filteredData as Gallery[]);
    }
    if (GalleryStatus === "success") {
      const responseData = GalleryData.data;
      const filteredData = responseData.filter((data: Gallery) => {
        if (data.ArtistId === ArtistId) {
          return data;
        }
      });
      setDataServer(filteredData);
    }
  }, [GalleryData, GalleryStatus, GalleryError]);

  return (
    <View>
      {dataServer ? (
        <ArtList propsData={dataServer} />
      ) : (
        <Text>Loading... error in ArtGalleryArtScreen ..fetching error</Text>
      )}
    </View>
  );
};

export default ArtGalleryArtScreen;

const styles = StyleSheet.create({});
