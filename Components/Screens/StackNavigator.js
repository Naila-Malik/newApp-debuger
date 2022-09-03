import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login';
import BottomTab from './BottomTab';
import Contact from './Contact';
import SideBar from './SideBar';

const Stack = createStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Login" component={Login} options={{title: 'Login'}} />
      <Stack.Screen name="Home" component={BottomTab} />
      <Stack.Screen name="Contact" component={Contact} />
      <Stack.Screen name="Drawer" component={SideBar} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({});
