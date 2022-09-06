import 'react-native-gesture-handler';

import SplashScreen from 'react-native-splash-screen';
import React, {useContext, useEffect, useState} from 'react';
import {StyleSheet, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Components/Screens/Login';
// import Home from './Components/Screens/Home';
import BottomTab from './Components/Screens/BottomTab';
import Contact from './Components/Screens/Contact';
import SideBar from './Components/Screens/SideBar';
import {
  ContextProvider,
  ContextValue,
} from './Components/ContextAPI/ContextCreate';

const Stack = createStackNavigator();

const App = () => {
  const {user} = useContext(ContextValue);
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  // console.log('Routes Component', ContextValue.user);
  return (
    <ContextProvider>
      <NavigationContainer>
        {user ? (
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{headerShown: false}}>
            <Stack.Screen name="Home" component={BottomTab} />
            <Stack.Screen name="Contact" component={Contact} />
            <Stack.Screen name="Drawer" component={SideBar} />
          </Stack.Navigator>
        ) : (
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{headerShown: false}}>
            <Stack.Screen
              name="Login"
              component={Login}
              options={{title: 'Login'}}
            />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </ContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
