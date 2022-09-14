import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from './constants/Colors';

const Tab = createBottomTabNavigator();
// const image = require('./images/background.jpg');
const image = require('./images/avatar.png');
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
        <Ionicons
          name="search"
          color="black"
          size={20}
          onPress={() => console.log(' Search itmes')}
        />
      </View>
      {/* <ImageBackground source={image} resizeMode="cover" style={styles.image}> */}
      <View style={styles.textcontainer}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 30,
            color: COLORS.buttoncolor,
          }}>
          {' '}
          Services
        </Text>
        <View style={styles.avatarContainer}>
          <Image source={image} style={styles.avatar} />
        </View>
      </View>
      <View style={styles.uiOuterContainer}>
        <View style={styles.uiInnerContainer}>
          <AntDesign
            name="dashboard"
            size={60}
            color={COLORS.buttoncolor}
            style={styles.iconstyle}
          />
          <Text style={styles.iconText}>Set Timesheet</Text>
        </View>
        <View style={styles.uiInnerContainer}>
          <FontAwesome
            name="group"
            size={50}
            style={styles.iconstyle}
            color={COLORS.buttoncolor}
          />
          <Text style={styles.iconText}>Add new user</Text>
        </View>
      </View>
      <View style={styles.uiOuterContainer}>
        <View style={styles.uiInnerContainer}>
          <FontAwesome5
            name="tasks"
            size={60}
            color={COLORS.buttoncolor}
            style={styles.iconstyle}
          />
          <Text style={styles.iconText}>New Task</Text>
        </View>
        <View style={styles.uiInnerContainer}>
          <AntDesign
            name="profile"
            size={50}
            style={styles.iconstyle}
            color={COLORS.buttoncolor}
          />
          <Text style={styles.iconText}>New Project</Text>
        </View>
      </View>
      <View style={styles.uiOuterContainer}>
        <View style={styles.uiInnerContainer}>
          <Feather
            name="file-text"
            size={60}
            color={COLORS.buttoncolor}
            style={styles.iconstyle}
          />
          <Text style={styles.iconText}>Leave Types</Text>
        </View>
        <View style={styles.uiInnerContainer}>
          <MaterialCommunityIcons
            name="bell-check-outline"
            size={50}
            style={styles.iconstyle}
            color={COLORS.buttoncolor}
          />
          <Text style={styles.iconText}>Notifications</Text>
        </View>
      </View>
      {/* </ImageBackground> */}
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
  uiOuterContainer: {
    flex: 3,
    flexDirection: 'row',
  },
  uiInnerContainer: {
    height: '50%',
    width: '45%',
    padding: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 20,
    margin: 6,
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
});
