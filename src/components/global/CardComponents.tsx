import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {dashboardView} from '../../config/dashboardView';
import {useNavigation} from '@react-navigation/native';
import {RootStackParametersList} from '../../navigator/type';

const CardComponents = () => {
  const navigation = useNavigation();

  const handleClick = (title: keyof RootStackParametersList) => {
    navigation.navigate(title as never);
  };

  return (
    <View style={styles.main}>
      <ScrollView style={styles.card}>
        {dashboardView.map(view => {
          return (
            <TouchableOpacity
              style={styles.inCard}
              key={view.id}
              onPress={() => handleClick(view.screen)}>
              <Image
                style={styles.pic}
                source={{
                  uri: view.img,
                }}
              />
              <Text key={view.id} style={styles.txt}>
                {view.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CardComponents;

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
  },
  txt: {
    paddingVertical: 10,
  },
  inCard: {
    flexDirection: 'row',
    textAlign: 'center',
    gap: 20,
    marginVertical: 10,
    padding: 10,
    borderWidth: 1,
  },
  card: {
    marginHorizontal: 5,
    padding: 10,
    textAlign: 'left',
  },
  pic: {
    width: 50,
    height: 50,
    backgroundColor: 'black',
  },
});
