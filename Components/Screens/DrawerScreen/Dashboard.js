import {ImageBackground, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const image = require('../images/background.jpg');
export default function Dashboard() {
  return (
    <View style={styles.maincontainer}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <Text>Dashboard</Text>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    opacity: 0.6,
  },
});
