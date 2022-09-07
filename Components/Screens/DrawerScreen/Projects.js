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
import {FlatList} from 'react-native-gesture-handler';
import {Picker} from '@react-native-picker/picker';
import DropDownPicker from 'react-native-dropdown-picker';

export default function Projects({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [details, setDetails] = useState([]);
  const [projectName, setProjectName] = useState('');
  const [projectDetail, setProjectDetail] = useState('');
  const [projects, setProjects] = useState([]);
  const [users, setUsers] = useState([]);

  const [valuePicker, setValuePicker] = useState();
  const [userId, setuserId] = useState();

  const [isVisible, setVisible] = useState(false);

  var projectData = {
    projectname: projectName,
    description: projectDetail,
    assignTo: userId,
  };
  const projectSubmitHandler = async () => {
    try {
      const res = await axios.post(
        'http://192.168.5.24:5000/projects/addproject',
        projectData,
      );
      console.log(' responce of projects', res);
      res && setModalVisible(!modalVisible);
      navigation.navigate('Projects');
    } catch (error) {
      console.log(' Errors while adding projects', error);
    }
  };

  const getProjectDetails = async () => {
    try {
      const res = await axios.get(
        'http://192.168.5.24:5000/projects/allprojects',
      );

      res && setProjects(res.data.get);
    } catch (error) {
      console.log('Errors while getting projects', error);
    }
  };

  const toggleModal = () => {
    setVisible(!isVisible);
  };

  useEffect(() => {
    getProjectDetails();
    getUsers();
  }, []);

  // for User data
  const getUsers = async () => {
    try {
      const res = await axios.get('http://192.168.5.24:5000/users/allusers');
      // console.log(' Data from users', res.data.users);
      res && setUsers(res.data.users);
    } catch (error) {
      console.log(' Errors while getting data of users', error);
    }
  };
  console.log(' User data will be as', users);
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
              <Text style={styles.modalTitleText}>Add another Project</Text>
              <TextInput
                style={styles.input}
                value={projectName}
                placeholder="Project name"
                onChangeText={text => setProjectName(text)}
              />
              <TextInput
                style={styles.inputText}
                value={projectDetail}
                placeholder="Project Description"
                onChangeText={text => setProjectDetail(text)}
              />
              <View>
                <View style={{flexDirection: 'row'}}>
                  <Text>Select User</Text>
                  <Picker
                    style={styles.picker}
                    selectedValue={valuePicker}
                    onValueChange={value => setValuePicker(value)}>
                    {users.map((d, i) => {
                      return (
                        <View key={i}>
                          {/* {console.log(' Msg will be')} */}
                          <Picker.Item label={d.username} value={d.username} />
                          {/* {setuserId(d)} */}
                          {/* {console.log(' Msg Here', d.username)} */}
                        </View>
                      );
                    })}
                  </Picker>
                </View>
              </View>

              {/* <FlatList
                      data={users}
                      keyExtractor={d => d._id}
                      renderItem={({item}) => {
                        <Text>{item.username} </Text>;
                        console.log(' data in item', item.username);
                      }}
                    /> */}
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle} onPress={projectSubmitHandler}>
                  Save
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      {/* End of Modal */}

      {/* Start of Component Daily Project's UI */}

      <View style={styles.headingContainer}>
        <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>
          Projects
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
        <Text> Add new project </Text>
      </Pressable>

      <View>
        {projects.map((d, i) => {
          return (
            <View key={i}>
              <View style={{marginBottom: 10, marginLeft: 10}}>
                <Pressable
                  onPress={() => {
                    setDetails(d);
                    setVisible(true);
                  }}>
                  <Text style={{fontWeight: 'bold'}}>{d.title} </Text>
                  <Text>{d.description} </Text>
                  <Text>{d.date} </Text>
                </Pressable>
              </View>
            </View>
          );
        })}
      </View>
      {/* Modal View for project details */}
      {isVisible && (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            isVisible={modalVisible}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalTitleText}>Project Details</Text>
                <View style={{marginBottom: 10, marginLeft: 10}}>
                  <Text style={{fontWeight: 'bold'}}>{details.title} </Text>
                  <Text>{details.description} </Text>
                  <Text>{details.date} </Text>
                </View>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setVisible(!isVisible)}>
                  <Text style={styles.textStyle} onPress={toggleModal}>
                    Close
                  </Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
      )}
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
    backgroundColor: '#ebab64',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
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
    backgroundColor: '#ebab64',
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
    borderColor: '#CCD1D1',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 70,
    borderRadius: 10,
    marginBottom: 10,
  },
  inputText: {
    marginTop: 2,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#CCD1D1',
    borderRadius: 5,
    paddingHorizontal: '20%',
    padding: 20,
  },
  picker: {
    width: 200,
    height: 30,
    borderColor: '#CCD1D1',
    borderWidth: 1,
    marginTop: -15,
  },
  picker: {
    width: 200,
    height: 30,
    borderColor: '#CCD1D1',
    borderWidth: 1,
    marginTop: -15,
  },
});
