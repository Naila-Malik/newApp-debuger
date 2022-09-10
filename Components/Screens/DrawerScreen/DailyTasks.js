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
import DatePicker from 'react-native-date-picker';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Picker} from '@react-native-picker/picker';
import axios from 'axios';
import COLORS from '../constants/Colors';

export default function DailyTasks({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState([]);
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDetail, setTaskDetail] = useState('');
  const [tasks, setTasks] = useState([]);

  const [valuePicker, setValuePicker] = useState('Timesheet');

  const [isVisible, setVisible] = useState(false);

  var taskData = {
    title: taskTitle,
    description: taskDetail,
    // selectProject: valuePicker,
    date: date,
  };
  const taskSubmitHandler = async () => {
    try {
      const res = await axios.post(
        'http://192.168.5.5:5000/tasks/addtask',
        taskData,
      );
      // console.log(' responce of tasks', res);

      res && setModalVisible(!modalVisible);
      navigation.navigate('DailyTasks');
    } catch (error) {
      console.log(' Errors while adding tasks', error);
    }
  };

  const getTasksDetails = async () => {
    try {
      const res = await axios.get('http://192.168.5.5:5000/tasks/alltasks');

      // console.log(' Getting tasks', res.data.get);
      res && setTasks(res.data.get);
      // console.log(' List of tasks ', res.data.get);
    } catch (error) {
      console.log('Errors while getting tasks', error);
    }
  };

  const toggleModal = () => {
    setVisible(!isVisible);
  };

  useEffect(() => {
    getTasksDetails();
  }, []);

  return (
    <SafeAreaView>
      {/* Start of Modal add task */}
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
              <Text style={styles.modalTitleText}>Add Task</Text>
              <View style={{flexDirection: 'row'}}>
                <Text style={{fontWeight: 'bold'}}>Select Project</Text>
                <Picker
                  style={styles.picker}
                  selectedValue={valuePicker}
                  onValueChange={value => setValuePicker(value)}>
                  <Picker.Item label="Timesheet" value="Timesheet" />
                  <Picker.Item label="Task" value="Task" />
                  <Picker.Item label="Attendance" value="Attendance" />
                </Picker>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={[
                    styles.modalText,
                    {fontWeight: 'bold', marginRight: 10},
                  ]}>
                  Date :
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    borderColor: COLORS.grey,
                    borderWidth: 1,
                    borderRadius: 2,
                    paddingHorizontal: 10,
                  }}>
                  <Text style={styles.modalText}>
                    {' '}
                    {date.toLocaleDateString()}
                    {'     '}
                  </Text>
                  <Foundation
                    name="calendar"
                    size={18}
                    onPress={() => setOpen(true)}
                  />
                </View>
              </View>
              <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={date => {
                  setOpen(false);
                  setDate(date);
                  // console.log(' date picker', date);
                }}
                onCancel={() => {
                  setOpen(false);
                }}
              />

              <TextInput
                style={styles.input}
                value={taskTitle}
                placeholder="Task Title"
                onChangeText={text => setTaskTitle(text)}
              />
              <TextInput
                style={styles.inputText}
                value={taskDetail}
                placeholder="Task Description"
                onChangeText={text => setTaskDetail(text)}
              />
              {/* <View style={{marginBottom: 10}}> */}
              <View style={{flexDirection: 'row', marginBottom: 10}}>
                <Text
                  style={[
                    styles.modalText,
                    {fontWeight: 'bold', marginRight: 10, marginBottom: 10},
                  ]}>
                  Start Time :
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    borderColor: COLORS.grey,
                    borderWidth: 1,
                    borderRadius: 2,
                    paddingHorizontal: 10,
                  }}>
                  <Text style={styles.modalText}>
                    {' '}
                    {date.toLocaleTimeString()}
                    {'     '}
                  </Text>
                  <MaterialCommunityIcons
                    name="clock-outline"
                    onPress={() => setOpen(true)}
                  />
                </View>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginLeft: 10,
                  marginBottom: 10,
                }}>
                <Text
                  style={[
                    styles.modalText,
                    {fontWeight: 'bold', marginRight: 10, marginBottom: 10},
                  ]}>
                  End Time :
                </Text>
                <View
                  style={{
                    flexDirection: 'row',
                    borderColor: COLORS.grey,
                    borderWidth: 1,
                    borderRadius: 2,
                    paddingHorizontal: 10,
                  }}>
                  <Text style={styles.modalText}>
                    {' '}
                    {date.toLocaleTimeString()}
                    {'     '}
                  </Text>
                  <MaterialCommunityIcons
                    name="clock-outline"
                    onPress={() => setOpen(true)}
                  />
                </View>
              </View>
              {/* </View> */}
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle} onPress={taskSubmitHandler}>
                  Save
                </Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
      {/* End of Modal */}

      {/* Start of Component Daily Task's UI */}

      <View style={styles.headingContainer}>
        <Text style={{fontWeight: 'bold', fontSize: 20, textAlign: 'center'}}>
          Daily Tasks
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
        <Text> Add User's Tasks </Text>
      </Pressable>

      <View>
        {tasks.map((d, i) => {
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
      {/* Modal View for task details */}
      {isVisible && (
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            isVisible={modalVisible}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <Text style={styles.modalTitleText}>Task Details</Text>
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
    backgroundColor: COLORS.buttoncolor,
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
    borderRadius: 10,
    marginBottom: 10,
  },
  inputText: {
    marginTop: 2,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: COLORS.grey,
    borderRadius: 5,
    paddingHorizontal: '20%',
    padding: 20,
  },
  picker: {
    width: 200,
    height: 30,
    borderColor: COLORS.grey,
    borderWidth: 1,
    marginTop: -15,
  },
});
