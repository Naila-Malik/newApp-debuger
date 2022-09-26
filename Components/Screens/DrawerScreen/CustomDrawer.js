import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useContext} from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../constants/Colors';
import {ContextValue} from '../../ContextAPI/ContextCreate';

imgURL = require('../images/avatar.png');

export default function CustomDrawer(props) {
  const {dispatch, user} = useContext(ContextValue);

  const UserLogout = () => {
    dispatch({type: 'LOGOUT'});
    props.navigation.navigate('Login');
  };

  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{backgroundColor: COLORS.drawerColor, flex: 1}}>
        <View style={styles.iconContainer}>
          <Image source={imgURL} style={styles.image} />
          <Text style={styles.textStyle}> User Name </Text>
        </View>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <Pressable
        style={[styles.button, styles.buttonStyle]}
        onPress={UserLogout}>
        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <MaterialIcons
            name="exit-to-app"
            size={28}
            color={COLORS.textcolor}
          />
          <Text style={[styles.textStyle, {marginTop: 1}]}>SignOut</Text>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    padding: 20,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 30,
    marginBottom: 10,
  },
  buttonStyle: {
    backgroundColor: COLORS.buttoncolor,
  },
  textStyle: {
    color: COLORS.textcolor,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
    fontSize: 20,
    fontFamily: 'Roboto-Medium',
  },
});
