import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
// import 'react-native-gesture-handler';
import DailyTasks from './DrawerScreen/DailyTasks';
import Dashboard from './DrawerScreen/Dashboard';
import Projects from './DrawerScreen/Projects';
import Users from './DrawerScreen/Users';

const Drawer = createDrawerNavigator();

export default function SideBar() {
  return (
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{drawerLabel: 'Dashboard', headerShown: false}}
      />
      <Drawer.Screen
        name="DailyTasks"
        component={DailyTasks}
        options={{drawerLabel: 'Daily Tasks', headerShown: false}}
      />
      <Drawer.Screen
        name="Projects"
        component={Projects}
        options={{drawerLabel: 'Projects', headerShown: false}}
      />
      <Drawer.Screen
        name="Users"
        component={Users}
        options={{drawerLabel: 'Users', headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
