import {StyleSheet} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DailyTasks from './DrawerScreen/DailyTasks';
import Dashboard from './DrawerScreen/Dashboard';
import Projects from './DrawerScreen/Projects';
import Users from './DrawerScreen/Users';
import UserDetails from './UserDetails';
import CustomDrawer from './DrawerScreen/CustomDrawer';
import COLORS from './constants/Colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const Drawer = createDrawerNavigator();

export default function SideBar() {
  return (
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={{
        headerShown: false,
        drawerActiveBackgroundColor: COLORS.buttoncolor,
        drawerActiveTintColor: COLORS.textcolor,
        drawerLabelStyle: {
          marginLeft: -20,
          color: COLORS.textcolor,
        },
      }}>
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          drawerIcon: ({color}) => (
            <MaterialIcons name="dashboard-customize" size={28} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="DailyTasks"
        component={DailyTasks}
        options={{
          drawerIcon: ({color}) => (
            <MaterialCommunityIcons
              name="facebook-workplace"
              size={28}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Projects"
        component={Projects}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome name="cloud-upload" size={28} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Users"
        component={Users}
        options={{
          drawerIcon: ({color}) => (
            <FontAwesome name="user" size={28} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="UserDetails"
        component={UserDetails}
        options={{drawerLabel: ''}}
      />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({});
