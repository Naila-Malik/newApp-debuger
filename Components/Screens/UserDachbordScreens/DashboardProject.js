import {StyleSheet, Text, View} from 'react-native';
import React, {useContext, useEffect, useState} from 'react';
import COLORS from '../constants/Colors';
import baseURL from '../BaseUrl';
import axios from 'axios';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ContextValue} from '../../ContextAPI/ContextCreate';

export default function DashboardProject() {
  const [projects, setProjects] = useState([]);

  const {dispatch, user} = useContext(ContextValue);

  const getProjectDetails = async () => {
    try {
      const res = await axios.get(`${baseURL}/projects/allprojects`);

      res && setProjects(res.data.get);
    } catch (error) {
      console.log('Errors while getting projects', error);
    }
  };

  const findValue = id => {
    return id._id == user.details._id;
  };
  useEffect(() => {
    getProjectDetails();
  }, []);

  // console.log(' User', user.details._id);
  // console.log(' User', assingTo);
  // console.log('projects', projects);

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
          List of projects{' '}
        </Text>
      </View>
      {projects &&
        projects.map((d, i) => {
          // console.log(' Data in map', d.assignTo);
          d.assignTo.filter(findValue);

          return findValue ? (
            <Text style={styles.textStyle}>{d.projectname.toUpperCase()} </Text>
          ) : null;
        })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
    marginLeft: 50,
  },
});
