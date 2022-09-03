import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import SearchBar from 'react-native-dynamic-search-bar';

const Tab = createBottomTabNavigator();
export default function Home({navigation}) {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <Ionicons
          name="menu"
          color="black"
          size={20}
          onPress={() => navigation.navigate('Drawer')}
        />
        {/* <SearchBar
          placeholder=""
          onPress={() => alert('onPress')}
          onChangeText={text => console.log(text)}
        /> */}
        <Ionicons
          name="search"
          color="black"
          size={20}
          onPress={() => console.log(' Search itmes')}
        />
      </View>
      <View style={styles.textcontainer}>
        <Text> Dummy Data</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    margin: 5,
  },

  textcontainer: {
    flex: 1,
    borderWidth: 1,
  },
});
