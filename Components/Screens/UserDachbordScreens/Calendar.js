import {StyleSheet, Text, View} from 'react-native';
import {Calendar} from 'react-native-calendars';
import React, {useState} from 'react';
import COLORS from '../constants/Colors';

export default function CalendarComponent() {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Upcomming Events</Text>
      </View>
      <View style={styles.data}>
        <Text> Dummy Data</Text>
        <Text> Dummy Data</Text>
        <Text> Dummy Data</Text>
        <Text> Dummy Data</Text>
        <Text> Dummy Data</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.textStyle}>Calendar</Text>
      </View>
      <Calendar
        style={styles.calendar}
        onDayPress={date => console.log('Date', date)}
        markedDates={{
          '2022-8-27': {
            marked: true,
            // dotColor: 'red',
            selected: true,
            selectedColor: 'orange',
            selectedTextColor: 'white',
          },
          '2022-9-24': {
            marked: true,
            // dotColor: 'red',
            selected: true,
            selectedColor: 'orange',
            selectedTextColor: 'white',
          },
          '2022-10-29': {
            marked: true,
            // dotColor: 'red',
            selected: true,
            selectedColor: 'orange',
            selectedTextColor: 'white',
          },
          '2022-11-26': {
            marked: true,
            selected: true,
            selectedColor: 'orange',
            selectedTextColor: 'white',
          },
          '2022-12-31': {
            marked: true,
            selected: true,
            selectedColor: 'orange',
            selectedTextColor: 'white',
          },
          '2023-1-28': {
            marked: true,
            selected: true,
            selectedColor: 'orange',
            selectedTextColor: 'white',
          },
          '2023-2-25': {
            marked: true,
            selected: true,
            selectedColor: 'orange',
            selectedTextColor: 'white',
          },
          '2023-3-25': {
            marked: true,
            selected: true,
            selectedColor: 'orange',
            selectedTextColor: 'white',
          },
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.buttoncolor,
    borderRadius: 10,
    marginTop: 2,
    padding: 10,
    width: 200,
    alignItems: 'center',
  },
  data: {
    marginLeft: 20,
  },
  textStyle: {
    color: COLORS.textcolor,
    fontSize: 20,
    fontWeight: 'bold',
  },
  calendar: {
    borderRadius: 10,
    borderColor: COLORS.grey,
    elevation: 4,
    marginTop: '10%',
    marginLeft: 40,
    marginRight: 40,
  },
});
