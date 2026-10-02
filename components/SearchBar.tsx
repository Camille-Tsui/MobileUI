import { StyleSheet, Text, View, Image } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';

interface SearchBarProps {
    text: string;
}

export function SearchBar({text}: SearchBarProps) {
    return (
        <View style={styles.searchBar}>
            <Ionicons name="search" size={32} color={'lightgray'}/>
            <Text style={styles.text}>{text}</Text>
            <Ionicons name="menu" size={32} color={'lightgray'}/>
            <Ionicons name="settings" size={32} color={'lightgray'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    searchBar: {
        padding: 10,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    text: {
        color:'lightgray',
        width: '60%',
    }
})