import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchBar from 'react-native-dynamic-search-bar';
import axios from 'axios';
import COLORS from '../constants/Colors';
import baseURL from '../BaseUrl';

export default function Users({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');

  const [reload, setReload] = useState(false);

  const [users, setUsers] = useState([]);

  const [isVisible, setVisible] = useState(false);

  var userData = {
    username: userName,
    password,
    role,
  };

  const userSubmitHandler = async () => {
    try {
      const res = await axios.post(`${baseURL}/auth/register`, userData);
      // console.log(' responce of projects', res.data.newUser);
      res && setModalVisible(!modalVisible);
      setReload(!reload);
      navigation.navigate('Users');
    } catch (error) {
      console.log(' Errors while adding projects', error);
    }
  };

  const getUsers = async () => {
    try {
      const res = await axios.get(`${baseURL}/users/allusers`);
      // console.log(' Data from users', res.data.users);
      res && setUsers(res.data.users);
    } catch (error) {
      console.log(' Errors while getting data of users', error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [reload]);

  // console.log(' Users data will be ', users);

  return (
    <SafeAreaView>
      {/* Start of Modal add project */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitleText}>Add User</Text>
              <TextInput
                style={styles.inputData}
                value={userName}
                placeholder="User name"
                onChangeText={text => setUserName(text)}
              />
              <TextInput
                style={styles.inputData}
                value={password}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={text => setPassword(text)}
              />

              <TextInput
                style={styles.inputData}
                value={role}
                placeholder="Designation of user"
                onChangeText={text => setRole(text)}
              />

              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle} onPress={userSubmitHandler}>
                  Save
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      {/* End of Modal */}

      {/* Start of Component Project's UI */}

      <View style={styles.headingContainer}>
        <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>
          Users
        </Text>
      </View>
      <SearchBar
        style={styles.input}
        placeholder="Search here"
        onPress={() => alert('onPress')}
        onChangeText={text => console.log(text)}
      />
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text
          style={{
            color: COLORS.textcolor,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          {' '}
          Add new user{' '}
        </Text>
      </Pressable>
      {users.map((d, i) => {
        return (
          <View key={i}>
            <View
              style={{
                marginBottom: 10,
                marginLeft: 10,
                borderBottomColor: COLORS.grey,
                borderBottomWidth: 1,
              }}>
              <Pressable
                onPress={async () => {
                  setVisible(true);
                  await navigation.navigate('UserDetails', {
                    getdata: d._id,
                  });
                  // console.log(' i am in map func', d._id);
                }}>
                <Text style={{fontWeight: 'bold'}}> {d.username}</Text>
                <Text>Role : {d.role}</Text>
              </Pressable>
            </View>
          </View>
        );
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headingContainer: {
    marginBottom: 20,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: COLORS.buttoncolor,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 30,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonClose: {
    backgroundColor: COLORS.buttoncolor,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalTitleText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: -20,
  },
  modalText: {
    fontSize: 10,
  },
  input: {
    borderColor: COLORS.grey,
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 70,
    borderRadius: 5,
    marginBottom: 10,
  },
  inputData: {
    borderColor: COLORS.grey,
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: '20%',
    borderRadius: 5,
    marginBottom: 5,
    width: '30%',
    textAlign: 'center',
    marginLeft: 5,
  },
  picker: {
    width: 200,
    height: 30,
    borderColor: COLORS.grey,
    borderWidth: 1,
    marginTop: -15,
  },
  picker: {
    width: 200,
    height: 30,
    borderColor: COLORS.grey,
    borderWidth: 1,
    marginTop: -15,
  },
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
