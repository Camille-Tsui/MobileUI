import { StyleSheet, Text, View, Image, ImageSourcePropType } from 'react-native';
import { Ionicons } from '@react-native-vector-icons/ionicons';

interface SongProps {
    title: string;
    source?: ImageSourcePropType;
    artist: string;
    folder: string;
    duration: string;
}

export function Song({title, source = require('../assets/default_icon.png'), artist, folder, duration}: SongProps) {
    return (
        <View style={styles.song}>
            <Ionicons name="reorder-two" size={32} color={'white'}/>
            <Image source={source} style={styles.image}/>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.text}>{artist}</Text>
                <Text style={styles.text}>{folder}</Text>
            </View> 
            <Text style={styles.text}>{duration}</Text>
            <Ionicons name="ellipsis-horizontal-circle" size={32} color={'white'}/>
        </View>
    );
}

const styles = StyleSheet.create({
    song: {
        marginTop: 30,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 1,
        alignItems: 'center',
    },
    image: {
        width: 55,
        height: 55,
    },
    textContainer: {
        width: '45%',
    },
    title: {
        fontWeight: 'bold',
        color: 'white'
    },
    text: {
        color: 'white'
    }
})
