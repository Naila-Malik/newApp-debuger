import {
  Alert,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchBar from 'react-native-dynamic-search-bar';
import {FlatList} from 'react-native-gesture-handler';
import DatePicker from 'react-native-date-picker';
import Foundation from 'react-native-vector-icons/Foundation';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import axios from 'axios';

export default function DailyTasks() {
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);

  const [taskTitle, setTaskTitle] = useState('');
  const [taskDetail, setTaskDetail] = useState('');

  const [time, setTime] = useState(null);

  const taskSubmitHandler = text => {
    // console.log(' Task details', taskTitle);
  };

  return (
    <SafeAreaView>
      {/* Start of Modal */}
      <View style={styles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitleText}>Add Task</Text>
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
                    borderColor: '#CCD1D1',
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
                    borderColor: '#CCD1D1',
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
                    borderColor: '#CCD1D1',
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
                  Hide Modal/ Save Data
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
        <Text> Date</Text>
        <Text> {date.toUTCString()} </Text>
        <Text> Tasks </Text>
        <Text> Start Time </Text>
        <Text> End Time </Text>
        <Text> Details </Text>
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
});
