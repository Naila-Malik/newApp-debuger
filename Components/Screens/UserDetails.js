import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Dropdown} from 'react-native-element-dropdown';
import SearchBar from 'react-native-dynamic-search-bar';
import COLORS from './constants/Colors';

export default function UserDetails({navigation}) {
  const data = [
    {label: 'Item 1', value: '1'},
    {label: 'Item 2', value: '2'},
    {label: 'Item 3', value: '3'},
    {label: 'Item 4', value: '4'},
    {label: 'Item 5', value: '5'},
    {label: 'Item 6', value: '6'},
    {label: 'Item 7', value: '7'},
    {label: 'Item 8', value: '8'},
  ];
  const [value, setValue] = useState(null);
  const [isFocus, setIsFocus] = useState(false);

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
  return (
    <SafeAreaView>
      {/* actual UI of user details page */}
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
        onPress={() => setModalVisible(!modalVisible)}>
        <Text style={{fontWeight: 'bold'}}> Assigned Projects </Text>
      </Pressable>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setTimesheetModalVisible(!timesheetModalVisible)}>
        <Text style={{fontWeight: 'bold'}}> Employee's Timesheet </Text>
      </Pressable>

      {/* Modal for view details of assigned projects to employee */}

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
              <Text style={styles.modalTitleText}> Project Description</Text>
              <Text>Project Name </Text>
              <Text>Description </Text>
              <View style={{flexDirection: 'row'}}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}>
                  <Text
                    style={styles.textStyle}
                    onPress={() => {
                      console.log(' Close');
                      navigation.navigate('Users');
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
          visible={assignProjectModalVisible}
          onRequestClose={() => {
            setassignProjectModalVisible(!assignProjectModalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitleText}> Assign Project</Text>
              <Text>select the project from the dropdown below: </Text>
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
                  data={data}
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
                  }}
                />
              </View>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => navigation.navigate('Users')}>
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
          visible={timesheetModalVisible}
          onRequestClose={() => {
            setTimesheetModalVisible(!timesheetModalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalTitleText}> Employee Timesheet </Text>
              <View style={{marginLeft: 2}}>
                <Text>Date : ---- </Text>
                <Text>Task: ---- </Text>
                <Text>Start Date: -- </Text>
                <Text>End Date: -- </Text>
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
    color: 'white',
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
    // width: '50%',
    // marginTop: 10,
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
});
