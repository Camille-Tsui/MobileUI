import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';

export function MenuBar() {
    return (
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
    );
};

const styles = StyleSheet.create({
menuBar: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingInline: 20,
},
flexrow: {
    flexDirection: 'row',
    gap: 10,
  },
});
