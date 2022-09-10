import {ImageBackground, StyleSheet, Text, View} from 'react-native';
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
const image = require('./images/background.jpg');
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
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
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
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    opacity: 0.6,
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
    height: '40%',
    width: '50%',
    justifyContent: 'center',
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
    borderWidth: 1,
  },
});
