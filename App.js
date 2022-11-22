import 'react-native-gesture-handler';

import SplashScreen from 'react-native-splash-screen';
import {Provider as PaperProvider} from 'react-native-paper';
import React, {useContext, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Components/Screens/Login';
import BottomTab from './Components/Screens/BottomTab';
import Contact from './Components/Screens/Contact';
import SideBar from './Components/Screens/SideBar';
import {
  ContextProvider,
  ContextValue,
} from './Components/ContextAPI/ContextCreate';
import DashboardProject from './Components/Screens/UserDachbordScreens/DashboardProject';
import DashboardTasks from './Components/Screens/UserDachbordScreens/DashboardTasks';
import CalendarComponent from './Components/Screens/UserDachbordScreens/Calendar';
import Notifications from './Components/Screens/UserDachbordScreens/Notifications';

const Stack = createStackNavigator();

const App = () => {
  const {user} = useContext(ContextValue);
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <ContextProvider>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Login"
            screenOptions={{headerShown: false}}>
            {/* <Stack.Screen name="Home" component={BottomTab} /> */}
            <Stack.Screen
              name="DashboardProject"
              component={DashboardProject}
            />
            <Stack.Screen name="DashboardTasks" component={DashboardTasks} />
            <Stack.Screen name="Calendar" component={CalendarComponent} />
            <Stack.Screen name="Notifications" component={Notifications} />
            <Stack.Screen name="Contact" component={Contact} />
            <Stack.Screen name="Drawer" component={SideBar} />
            <Stack.Screen
              name="Login"
              component={Login}
              options={{title: 'Login'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
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
