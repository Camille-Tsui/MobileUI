import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';

export function NavBar() {
    return (
        <View style={styles.navBar}>
            <Ionicons name="musical-note" size={32} color={'white'}/>
            <Ionicons name="play-circle" size={32} color={'white'}/>
            <Ionicons name="disc" size={32} color={'white'}/>
            <Ionicons name="person" size={32} color={'white'}/>
        </View>
    );
};

const styles = StyleSheet.create({
    navBar: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        backgroundColor: '#00000070',
        padding: 10,
    },
})
