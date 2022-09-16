import {Button, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {ContextValue} from '../ContextAPI/ContextCreate';
import axios from 'axios';

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

  const postData = async e => {
    e.preventDefault();
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

  const nameValidator = () => {
    let rjxName = /^[a-zA-Z]+$/;
    let isValidate = rjxName.test(username);
    // console.warn(isValidate);
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
  // console.log('User will be ', user);
  return (
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
        <Button color="#ebab64" title="Login" onPress={postData} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    // paddingTop: 50,
    marginTop: '40%',
  },
  textheader: {
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
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
