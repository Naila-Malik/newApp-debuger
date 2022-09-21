import {StyleSheet, Text, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../constants/Colors';
import {ScrollView} from 'react-native-gesture-handler';

const image = require('../images/background.jpg');
export default function Dashboard() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flexDirection: 'row', margin: 5}}>
        <View style={styles.iconStyle}>
          <FontAwesome
            name="user"
            size={35}
            color={COLORS.buttoncolor}
            style={{marginLeft: 10, marginTop: 5}}
          />
        </View>
        <View style={{marginLeft: 20}}>
          <Text style={styles.userName}>User Name </Text>
          <Text>
            Details of user's leaves and projects will be dispalyed here
          </Text>
        </View>
      </View>
      <ScrollView style={{flexDirection: 'column'}}>
        <View style={{flexDirection: 'row'}}>
          <View
            style={[styles.cardContainer, {backgroundColor: '#d4f2d3'}]}></View>
          <View
            style={[styles.cardContainer, {backgroundColor: '#d4f2d3'}]}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text>Assigned Project </Text>
          <Text>current Task </Text>
        </View>

        <View style={{flexDirection: 'row'}}>
          <View
            style={[styles.cardContainer, {backgroundColor: '#aae5a8'}]}></View>
          <View
            style={[styles.cardContainer, {backgroundColor: '#aae5a8'}]}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text>Timesheet for task </Text>
          <Text>Progress </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={[styles.cardContainer, {backgroundColor: '#6ad266'}]}></View>
          <View
            style={[styles.cardContainer, {backgroundColor: '#6ad266'}]}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text>No of Leaves </Text>
          <Text>Notifications </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <View
            style={[styles.cardContainer, {backgroundColor: '#55cb51'}]}></View>
          <View
            style={[styles.cardContainer, {backgroundColor: '#55cb51'}]}></View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text>Upcomming Events </Text>
          <Text>Calender </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    height: '30%',
    width: '40%',
    margin: 20,
    padding: 50,
    borderRadius: 20,
  },
  iconStyle: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: COLORS.grey,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.buttoncolor,
  },
});
