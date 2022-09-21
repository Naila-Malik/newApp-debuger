import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import COLORS from './constants/Colors';

const image = require('./images/avatar.png');
const iconImage = require('./images/icon.jpg');
export default function Contact({navigation}) {
  return (
    <View style={styles.maincontainer}>
      <View style={styles.container}>
        <Ionicons
          name="menu"
          color="black"
          size={20}
          onPress={() => navigation.navigate('Drawer')}
        />
        <Ionicons
          name="search"
          color="black"
          size={20}
          onPress={() => console.log(' Search itmes')}
        />
      </View>
      <View style={styles.textcontainer}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 30,
            color: COLORS.buttoncolor,
          }}>
          {' '}
          Users
        </Text>
        <View style={styles.avatarContainer}>
          <Image source={image} style={styles.avatar} />
        </View>
      </View>
      <View style={styles.body}>
        <FlatList
          data={[
            {key: 'Android'},
            {key: 'iOS'},
            {key: 'Java'},
            {key: 'Swift'},
            {key: 'Php'},
            {key: 'Hadoop'},
            {key: 'Sap'},
            {key: 'Python'},
          ]}
          renderItem={({item}) => (
            <View style={{flexDirection: 'row'}}>
              <Image source={iconImage} style={styles.bodyUi} />
              <Text style={styles.item}>{item.key}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    flexDirection: 'column',
  },
  avatar: {
    height: 30,
    width: 30,
    borderRadius: 30,
    marginLeft: '10%',
  },
  avatarContainer: {
    height: 40,
    width: 40,
    borderRadius: 30,
    borderWidth: 1,
    marginLeft: '50%',
  },
  container: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'space-between',
    margin: 5,
  },

  iconstyle: {
    marginLeft: 40,
  },
  iconText: {
    color: COLORS.buttoncolor,
    textAlign: 'center',
  },
  textcontainer: {
    flex: 1,
    flexDirection: 'row',
  },
  body: {
    flex: 6,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    borderBottomColor: COLORS.grey,
    borderBottomWidth: 1,
  },
  bodyUi: {
    height: 50,
    width: 50,
    borderWidth: 1,
  },
});
