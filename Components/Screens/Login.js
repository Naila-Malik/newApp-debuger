import {
  Button,
  ImageBackground,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {ContextValue} from '../ContextAPI/ContextCreate';
import axios from 'axios';
import COLORS from './constants/Colors';

const image = require('./images/drawerUI.jpg');
export default function Login({navigation}) {
  // const usernameRef = useRef();
  // const passwordRef = useRef();

  const [username, setName] = useState('');
  const [password, setPassword] = useState('');

  const [nameError, setNameError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const {dispatch, user} = useContext(ContextValue);

  const postdata = {
    username,
    password,
  };

  const UserLogin = async () => {
    setName('');
    setPassword('');
    dispatch({type: 'LOGIN_START'});
    try {
      const response = await axios.post(
        'http://192.168.5.5:5000/auth/login',
        postdata,
      );
      dispatch({type: 'LOGIN_SUCCESS', payload: response.data});
      // console.log(' Data received in payload', response.data);
      response && navigation.navigate('Home');
    } catch (error) {
      dispatch({type: 'LOGIN_FAILURE'});
    }
  };

  // const UserLogout = () => {
  //   dispatch({type: 'LOGOUT'});
  //   console.log(' User Log Out');
  // };
  const nameValidator = () => {
    let rjxName = /^[0-9]+$/;
    let isValidate = rjxName.test(username);
    if (username == '') {
      setNameError('Please enter your name');
    } else if (isValidate) {
      setNameError('Please enter valid name');
    } else {
      setNameError('');
    }
  };
  const passwordValidate = () => {
    if (password == '') {
      setPasswordError('Please enter your password');
    } else if (password == '' || password.length < 4) {
      setPasswordError('Please enter at least 4 digits');
    } else {
      setPasswordError('');
    }
  };

  return (
    <ImageBackground
      source={image}
      style={{resizeMode: 'cover', height: '100%'}}>
      <View style={{flex: 1}}>
        <Text style={styles.header}> TimeSheet</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.textheader}> Login</Text>
        <View style={styles.textcontainer}>
          <Text style={styles.textbottom}>Username </Text>
          <TextInput
            style={styles.input}
            onBlur={nameValidator}
            // ref={usernameRef}
            value={username}
            placeholder="Enter username"
            onChangeText={text => setName(text)}
          />
          <Text style={{color: 'red'}}> {nameError} </Text>
          <Text style={styles.textbottom}>Password </Text>
          <TextInput
            style={styles.input}
            placeholder="Enter password"
            value={password}
            minlength={4}
            onBlur={passwordValidate}
            secureTextEntry={true}
            // ref={passwordRef}
            onChangeText={text => setPassword(text)}
          />
          <Text style={{color: 'red'}}> {passwordError} </Text>
        </View>
        <View style={{marginTop: 50, width: '50%'}}>
          <Button
            color={COLORS.buttoncolor}
            title="Login"
            onPress={UserLogin}
          />
        </View>
        {/* <View style={{marginTop: 10, width: '50%'}}>
          <Button
            color={COLORS.buttoncolor}
            title="Logout"
            onPress={UserLogout}
          />
        </View> */}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 5,
    alignItems: 'center',
    alignContent: 'center',
    marginTop: '10%',
    backgroundColor: COLORS.textcolor,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderTopColor: COLORS.buttoncolor,
  },
  header: {
    color: COLORS.buttoncolor,
    textAlign: 'center',
    marginTop: 60,
    fontFamily: 'sans-serif-medium',
    fontSize: 25,
  },
  textheader: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: '10%',
  },
  textcontainer: {
    borderTopColor: '#CCD1D1',
    borderTopWidth: 1,
    marginTop: 20,
    paddingHorizontal: 15,
    width: '80%',
  },
  textbottom: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  input: {
    borderColor: '#CCD1D1',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    // color: '#ebab64',
    // color="#f194ff",
    // marginTop: 20,
  },
});
