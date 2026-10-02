import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native';
import React from 'react';
import { Ionicons } from '@react-native-vector-icons/ionicons';

import { TrackCover } from '../../components/TrackCover';
import { MenuBar } from '../../components/MenuBar';
import { PlaybackContols } from '../../components/PlaybackControls';
import { NavBar } from '../../components/NavBar';
// import { MaterialIcons } from '@react-native-vector-icons/material-icons';


export default function Cover() {
  return (
    <View style={styles.container}>

      <TrackCover 
      source={require("../../assets/IN_MY_HEAD.png")} 
      title={"IN_MY_HEAD"} 
      artist={"なとり"} 
      folder={"Music"}/>

      <MenuBar/>

      <PlaybackContols 
      currentTime={"0:55"} 
      endTime={"3:26"}/>

      <NavBar/>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#412b20',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    paddingBlock: 50,
    paddingBottom: 0,
  },
});
