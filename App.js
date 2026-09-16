import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        source={require('./assets/IN_MY_HEAD.png')} 
        style={styles.coverImage} 
      />
      <Text>IN_MY_HEAD!</Text>
      <Text>なとり</Text>
      <Text>Music</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  coverImage: {
    width: 300,
    height: 300,
  },
});
