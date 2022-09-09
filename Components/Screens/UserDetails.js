import {Modal, Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchBar from 'react-native-dynamic-search-bar';

export default function UserDetails({navigation}) {
  const [modalVisible, setModalVisible] = useState(false);
  const [assignProjectModalVisible, setassignProjectModalVisible] =
    useState(false);
  return (
    <SafeAreaView>
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
        onPress={() => console.log(' Msg')}>
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
                      navigation.navigate('UserDetails');
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
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => console.log(' Close the project')}>
                <Text style={styles.textStyle}>Save</Text>
              </Pressable>
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
    backgroundColor: '#ebab64',
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
    backgroundColor: '#ebab64',
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
    borderColor: '#CCD1D1',
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: 70,
    borderRadius: 5,
    marginBottom: 10,
  },
  inputData: {
    borderColor: '#CCD1D1',
    borderWidth: 1,
    // width: '50%',
    // marginTop: 10,
    paddingHorizontal: '40%',
    borderRadius: 5,
    marginBottom: 10,
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
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
});
