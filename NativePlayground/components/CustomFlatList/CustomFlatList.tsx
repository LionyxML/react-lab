import React from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

const data = [
  {key: 'Booba'},
  {key: 'Boobe'},
  {key: 'Foo'},
  {key: 'Bar'},
  {key: 'Fuu'},
];

const CustomFlatList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

export default CustomFlatList;
