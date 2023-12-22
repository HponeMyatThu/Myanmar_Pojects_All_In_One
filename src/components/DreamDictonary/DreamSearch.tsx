import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

interface DreamSearch{
    propsData: string,
    fetchData: Dreamdetail[],
}

const DreamSearch = ({propsData, fetchData}:DreamSearch) => {
  const data = fetchData.filter(item => item.BlogContent.toLowerCase().includes(propsData?.toLocaleLowerCase()))
  console.log("🚀 ~ file: DreamSearch.tsx:11 ~ DreamSearch ~ data:", data)

  return (
    <ScrollView style={{ marginBottom: 10 }}>
        <View style={{ marginVertical: 10, marginBottom: 150 }}>
          {data
            ? data.map((item) => {
                return (
                  <View key={item.BlogDetailId} style={styles.itemContainer}>
                    <Text style={styles.itemText}>{item.BlogContent}</Text>
                  </View>
                );
              })
            : null}
        </View>
      </ScrollView>
  )
}

export default DreamSearch

const styles = StyleSheet.create({
    itemContainer: {
        backgroundColor: "#ffffff",
        padding: 16,
        marginBottom: 8,
        borderRadius: 8,
        elevation: 2,
      },
      itemText: {
        fontSize: 16,
        color: "#333333",
      },
})