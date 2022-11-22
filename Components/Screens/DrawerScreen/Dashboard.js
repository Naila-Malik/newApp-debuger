import {StyleSheet, Text, View, Pressable, Modal} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import React, {useContext} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import COLORS from '../constants/Colors';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {ContextValue} from '../../ContextAPI/ContextCreate';
import PushNotification from 'react-native-push-notification';

export default function Dashboard({navigation}) {
  const {dispatch, user} = useContext(ContextValue);

  const handleNotifications = () => {
    PushNotification.localNotification({
      channelId: 'test1',
      title: 'Notification Alert',
      message: 'Details of notifications will be dispalyed here',
    });
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flexDirection: 'row', margin: 10}}>
        <View style={styles.iconStyle}>
          <FontAwesome
            name="user"
            size={35}
            color={COLORS.buttoncolor}
            style={{marginLeft: 10, marginTop: 5}}
          />
        </View>
        <View style={{marginLeft: 20}}>
          <Text style={styles.userName}>{user && user.details.username} </Text>
          <Text>{user && user.details.role}</Text>
        </View>
      </View>
      <View style={styles.uiContainer}>
        <View style={styles.uiOuterContainer}>
          <Pressable
            style={styles.uiInnerContainer}
            onPress={() => navigation.navigate('DashboardTasks')}>
            <FontAwesome
              name="pencil-square-o"
              size={60}
              color={COLORS.buttoncolor}
              style={styles.iconstyle}
            />
            <Text style={styles.iconText}>Current Task</Text>
          </Pressable>
          <Pressable
            style={styles.uiInnerContainer}
            onPress={() => navigation.navigate('DashboardProject')}>
            <FontAwesome
              name="clipboard"
              size={50}
              style={styles.iconstyle}
              color={COLORS.buttoncolor}
            />
            <Text style={styles.iconText}>Current Project</Text>
          </Pressable>
        </View>
        {/* <View style={styles.uiOuterContainer}>
          <Pressable
            style={styles.uiInnerContainer}
            onPress={() => console.log(' MSg HEre')}>
            <FontAwesome
              name="tasks"
              size={60}
              color={COLORS.buttoncolor}
              style={styles.iconstyle}
            />
            <Text style={styles.iconText}>Task in queue</Text>
            <Text style={{marginLeft: 20}}>Under Process</Text>
          </Pressable>
          <Pressable
            style={styles.uiInnerContainer}
            onPress={() => console.log(' MSg HEre')}>
            <MaterialCommunityIcons
              name="clipboard-list-outline"
              size={50}
              style={styles.iconstyle}
              color={COLORS.buttoncolor}
            />
            <Text style={styles.iconText}>Task Completed</Text>
            <Text style={{marginLeft: 20}}>Under Process</Text>
          </Pressable>
        </View> */}
        <View style={styles.uiOuterContainer}>
          <Pressable
            style={styles.uiInnerContainer}
            onPress={() => navigation.navigate('Calendar')}>
            <FontAwesome
              name="calendar"
              size={60}
              color={COLORS.buttoncolor}
              style={styles.iconstyle}
            />
            <Text style={styles.iconText}>Calendar</Text>
          </Pressable>
          <Pressable
            style={styles.uiInnerContainer}
            // onPress={() => navigation.navigate('Notifications')}
            onPress={handleNotifications}>
            <MaterialCommunityIcons
              name="bell-check-outline"
              size={50}
              style={styles.iconstyle}
              color={COLORS.buttoncolor}
            />
            <Text style={styles.iconText}>Notifications</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  uiContainer: {
    flex: 4,
    margin: 4,
    padding: 20,
  },
  iconStyle: {
    height: 50,
    width: 50,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: COLORS.grey,
  },
  userName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.buttoncolor,
  },
  uiInnerContainer: {
    height: '70%',
    width: '45%',
    padding: 10,
    justifyContent: 'center',
    borderWidth: 1,
    borderRadius: 6,
    margin: 10,
    borderColor: COLORS.buttoncolor,
    // opacity: 0.3,
  },
  uiOuterContainer: {
    flex: 1,
    flexDirection: 'row',
    // height: 40,
  },
  iconText: {
    color: COLORS.buttoncolor,
    textAlign: 'center',
  },
  iconstyle: {
    marginLeft: 40,
  },
  iconText: {
    color: COLORS.buttoncolor,
    textAlign: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
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
  modalTitleText: {
    marginBottom: 15,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    marginTop: -20,
  },
  modalText: {
    fontSize: 12,
  },
  inputData: {
    borderColor: COLORS.grey,
    borderWidth: 1,
    marginTop: 10,
    paddingHorizontal: '20%',
    borderRadius: 5,
    marginBottom: 6,
    width: '30%',
    textAlign: 'center',
  },
  buttonClose: {
    backgroundColor: COLORS.buttoncolor,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
