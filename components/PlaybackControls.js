import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';

export function PlayackContols ({currentTime, endTime}) {
    return (
        <>
              <View style={styles.timeBar}>
                <Text style={styles.timestamp}>{currentTime}</Text>
                <View style={styles.line} />
                <Text style={styles.timestamp}>{endTime}</Text>
              </View>
              <View style={styles.playBar}>
                <Ionicons name="volume-low" size={25} color={'white'}/>
                <Ionicons name="play-skip-back" size={38} color={'white'}/>
                <Ionicons name="play" size={45} color={'white'}/>
                <Ionicons name="play-skip-forward" size={38} color={'white'}/>
                <Ionicons name="stats-chart" size={25} color={'white'}/>
              </View>
        </>
    );
};

const styles = StyleSheet.create({
  timestamp: {
    color: 'white',
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
  },
    line: { // this is for the time bar
    height: 5,               // Thickness of the line
    backgroundColor: 'white',  // Line color
    width: '70%',           // Spans across the container
    marginVertical: 10,      // Optional spacing above and below
  },
})