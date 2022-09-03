import {StyleSheet} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Home from './Home';
import Contact from './Contact';

const Tab = createBottomTabNavigator();
export default function BottomTab({navigation}) {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {
          height: 40,
          //   borderTopWidth: 0,
          //   borderColor: '#ebab64',
          elevation: 0,
        },
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#ebab64',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={Home}
        options={{
          tabBarIcon: () => <AntDesign name="home" size={28} color="#ebab64" />,
        }}></Tab.Screen>
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: () => (
            <AntDesign name="contacts" size={28} color="#ebab64" />
          ),
        }}></Tab.Screen>
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
