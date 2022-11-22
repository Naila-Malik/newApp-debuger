import {FlatList, Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Dropdown} from 'react-native-element-dropdown';
import SearchBar from 'react-native-dynamic-search-bar';
import COLORS from './constants/Colors';
import axios from 'axios';
import baseURL from './BaseUrl';

export default function UserDetails({route, navigation}) {
  const {getdata} = route.params;

  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

  const [projectsList, setProjectsList] = useState({});
  const [projectsId, setProjectsId] = useState({});
  const [projectAssigned, setProjectAssigned] = useState({});
  const [listOfUserProj, setListofUserProj] = useState({});

  const [modalVisible, setModalVisible] = useState(false);
  const [timesheetModalVisible, setTimesheetModalVisible] = useState(false);
  const [assignProjectModalVisible, setassignProjectModalVisible] =
    useState(false);

  const renderDropdownLabel = () => {
    if (value || isFocus) {
      return (
        <Text style={[styles.label, isFocus && {color: COLORS.buttoncolor}]}>
          Projects List
        </Text>
      );
    }
    return null;
  };

  const getProjectDetails = async () => {
    try {
      const res = await axios.get(`${baseURL}/projects/allprojects`);

      // get data from projects and extract project name only by map method
      //new array will be generated that have only name of projects
      var dummydata = [];
      const projdata = res.data.get.map(d => {
        dummydata.push({
          label: d.projectname,
          value: d.projectname,
          projId: d._id,
        });
      });
      projdata && setProjectsList(dummydata);
    } catch (error) {
      console.log('Errors while getting projects', error);
    }
  };

  const assignProject = async () => {
    // console.log('Get user id', getdata);
    // console.log('Get project id', projectsId);
    try {
      const res = await axios.put(
        `${baseURL}/projects/assignproject/${projectsId}`,
        {assignTo: getdata},
      );
      // console.log('set assigned value to user', res.data.result);
      // console.log('list of users for a project', res.data.result.assignTo);
      res && setProjectAssigned(res.data.result.assignTo);
    } catch (error) {
      console.log(' Error while assigning project', error);
    }
  };

  const getAssignTo = async () => {
    try {
      const res = await axios.get(`${baseURL}/projects/${getdata}`);
      var dummyProj = [];
      const data = res.data.finduser.map(d => {
        dummyProj.push({projectname: d.projectname});
      });
      data && setListofUserProj(dummyProj);
    } catch (error) {
      console.log(' Errors while get list of users projects', error);
    }
  };

  useEffect(() => {
    getProjectDetails();
    getAssignTo();
    return () => {
      setListofUserProj(null);
    };
  }, []);

  // console.log('dropdown value', value);
  // console.log('Get user id', getdata);
  // console.log('Get project id', projectsId);
  // console.log('List of Assigned Projects', projectAssigned);
  // console.log(' List of users project', listOfUserProj);
  return (
    <SafeAreaView>
      {/* actual UI of user details page */}
      <View style={styles.headingContainer}>
        <Text
          style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}
          onPressOut={() => {
            setTimesheetModalVisible(false);
          }}>
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
        onPress={() => setModalVisible(!modalVisible)}>
        <Text
          style={{
            fontWeight: 'bold',
            color: COLORS.textcolor,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          {' '}
          Assigned Projects{' '}
        </Text>
      </Pressable>
      <FlatList
        data={listOfUserProj}
        // key={listOfUserProj._id}
        renderItem={({item}) => (
          <Text style={styles.item}>{item.projectname}</Text>
        )}
        keyExtractor={item => item.id}
      />
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setTimesheetModalVisible(!timesheetModalVisible)}>
        <Text
          style={{
            fontWeight: 'bold',
            color: COLORS.textcolor,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          {' '}
          Employee's Timesheet{' '}
        </Text>
      </Pressable>

      {/* Modal for view details of assigned projects to employee */}

      <View style={styles.centeredView}>
        <Modal animationType="slide" transparent={true} visible={modalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitleText}> Project Description</Text>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                  }}>
                  Project Name :{' '}
                </Text>
                <Text
                  style={{
                    textAlign: 'center',
                  }}>
                  {value}
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Pressable style={[styles.button, styles.buttonClose]}>
                  <Text
                    style={styles.textStyle}
                    onPress={() => {
                      navigation.navigate('Users');
                      setModalVisible(!modalVisible);
                    }}>
                    Close
                  </Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    setassignProjectModalVisible(!assignProjectModalVisible);
                    setModalVisible(!modalVisible);
                  }}>
                  <Text style={styles.textStyle}>Add new Project</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>

      {/* modal to assign project  */}

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={assignProjectModalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitleText}> Assign New Project</Text>
              <Text style={{marginBottom: 5}}>
                Select the project from the dropdown below:{' '}
              </Text>
              <View style={styles.container}>
                {renderDropdownLabel()}
                <Dropdown
                  style={[
                    styles.dropdown,
                    isFocus && {borderColor: COLORS.buttoncolor},
                  ]}
                  placeholderStyle={styles.placeholderStyle}
                  selectedTextStyle={styles.selectedTextStyle}
                  inputSearchStyle={styles.inputSearchStyle}
                  data={projectsList}
                  search
                  maxHeight={300}
                  labelField="label"
                  valueField="value"
                  placeholder={!isFocus ? 'Select project' : '...'}
                  searchPlaceholder="Search..."
                  value={value}
                  onFocus={() => setIsFocus(true)}
                  onBlur={() => setIsFocus(false)}
                  onChange={item => {
                    setValue(item.value);
                    setIsFocus(false);
                    setProjectsId(item.projId);
                  }}
                />
              </View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setassignProjectModalVisible(!assignProjectModalVisible);
                  navigation.navigate('Users');
                  assignProject();
                }}>
                <Text style={styles.textStyle}>Save</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>

      {/* Modal to check timesheet of user */}

      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={timesheetModalVisible}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitleText}> Employee Timesheet </Text>
              <View style={{marginLeft: 2}}>
                <Text>Date : ---- </Text>
                <Text>Task: ---- </Text>
                <Text>Start Date: -- </Text>
                <Text>End Date: -- </Text>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() =>
                    setTimesheetModalVisible(!timesheetModalVisible)
                  }>
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
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
    marginBottom: 10,
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
    color: COLORS.textcolor,
    fontWeight: 'bold',
    textAlign: 'center',
    marginLeft: 5,
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
    paddingHorizontal: '40%',
    borderRadius: 5,
    marginBottom: 10,
  },
  container: {
    backgroundColor: 'white',
    padding: 26,
  },
  dropdown: {
    height: 50,
    width: 200,
    borderColor: 'gray',
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: 'absolute',
    backgroundColor: 'white',
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
  item: {
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 16,
  },
});
