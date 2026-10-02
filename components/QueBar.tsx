import { StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';

export function QueBar() {
    return (
        <View style={styles.container}>
            <Ionicons name="play" size={24} color={'white'}/>
            <Ionicons name="funnel" size={24} color={'white'}/>
            <View style={styles.textContainer}>
                <Text style={styles.text}>41 / 109</Text>
                <Text style={styles.text}>6:00:09</Text>
            </View>
            <Ionicons name="save" size={24} color={'white'}/>
            <Ionicons name="ellipsis-horizontal" size={24} color={'white'}/>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 5,
    alignItems: 'center',
  },
  textContainer: {
    alignItems: 'center',
    width: '35%'
  },
  text: {
    color: 'white',
  }
});
