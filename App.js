import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { Ionicons } from '@react-native-vector-icons/ionicons';
// import { MaterialIcons } from '@react-native-vector-icons/material-icons';


export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/IN_MY_HEAD.png')} 
        style={styles.coverImage} 
      />
      <View style= {styles.songInfo}>
        <Text style={styles.title}>IN_MY_HEAD</Text>
        <Text style={styles.artist}>なとり</Text>
        <Text style={styles.folder}>Music</Text>
      </View>

      <View style={styles.menuBar}>
        <View style={styles.flexrow}>
          <Ionicons name="heart-outline" size={32} color={'white'}/>
          <Ionicons name="information-circle-outline" size={32} color={'white'}/>
          <Ionicons name="menu" size={32} color={'white'}/>
          <Ionicons name="ellipsis-horizontal" size={32} color={'white'}/>
        </View>
        <View style={styles.flexrow}>
          <Ionicons name="arrow-forward" size={32} color={'white'}/>
          <Ionicons name="shuffle" size={32} color={'white'}/>
        </View>
      </View>

      <View style={styles.timeBar}>
        <Text style={styles.timestamp}>0:55</Text>
        <View style={styles.line} />
        <Text style={styles.timestamp}>3:26</Text>
      </View>
      <View style={styles.playBar}>
        <Ionicons name="volume-low" size={25} color={'white'}/>
        <Ionicons name="play-skip-back" size={38} color={'white'}/>
        <Ionicons name="play" size={45} color={'white'}/>
        <Ionicons name="play-skip-forward" size={38} color={'white'}/>
        <Ionicons name="stats-chart" size={25} color={'white'}/>
      </View>
      {/* <MaterialIcons name="setting" size={32} /> */}
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
  },
  coverImage: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  artist: {
    color: 'white',
  },
  folder: {
    color: 'white',
  },
  timestamp: {
    color: 'white',
  },
  songInfo:{
    alignItems: 'center',
  },
  menuBar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingInline: 20,
  },
    timeBar: {
    flexDirection: 'row',
    gap: 10,

  },
  playBar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 50,
  },
  flexrow: {
    flexDirection: 'row',
    gap: 10,
  },
    line: { // this is for the time bar
    height: 5,               // Thickness of the line
    backgroundColor: 'white',  // Line color
    width: '70%',           // Spans across the container
    marginVertical: 10,      // Optional spacing above and below
  },
});
