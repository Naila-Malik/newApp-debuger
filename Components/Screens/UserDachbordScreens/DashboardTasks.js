import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import COLORS from '../constants/Colors';
import baseURL from '../BaseUrl';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {ContextValue} from '../../ContextAPI/ContextCreate';

export default function DashboardTasks() {
  const [tasks, setTasks] = useState([]);

  //   const {dispatch, user} = useContext(ContextValue);

  const getTasksDetails = async () => {
    try {
      const res = await axios.get(`${baseURL}/tasks/alltasks`);

      // console.log(' Getting tasks', res.data.get);
      res && setTasks(res.data.get);
      // console.log(' List of tasks ', res.data.get);
    } catch (error) {
      console.log('Errors while getting tasks', error);
    }
  };

  useEffect(() => {
    getTasksDetails();
  }, []);

  //   console.log('Tasks', tasks);

  return (
    <SafeAreaView>
      <View style={styles.button}>
        <Text
          style={{
            color: COLORS.textcolor,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          {' '}
          Current Tasks{' '}
        </Text>
      </View>
      {tasks &&
        tasks.map((d, i) => {
          return (
            <View>
              <View style={styles.Container}>
                <Text style={styles.textStyle}>Title:</Text>
                <Text style={styles.textTitle}>{d.title.toUpperCase()} </Text>
              </View>
              <View style={styles.detail}>
                <Text style={styles.textStyle}>Description:</Text>
                <Text style={styles.detailsText}>{d.description} </Text>
              </View>
            </View>
          );
        })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
  },
  detail: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: COLORS.grey,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    elevation: 2,
    marginTop: 10,
    width: '40%',
    backgroundColor: COLORS.buttoncolor,
  },

  textStyle: {
    fontWeight: 'bold',
    textAlign: 'left',
    margin: 10,
    marginLeft: 20,
  },
  detailsText: {
    textAlign: 'left',
    margin: 10,
    marginLeft: 50,
  },
  textTitle: {
    fontWeight: 'bold',
    textAlign: 'left',
    margin: 10,
    marginLeft: 80,
  },
});
