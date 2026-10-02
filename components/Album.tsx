import { StyleSheet, Text, View, ImageSourcePropType, Image} from 'react-native';

interface AlbumProps {
    name: string;
    source?: ImageSourcePropType;
}

export function Album({name, source = require('../assets/default_icon.png')}: AlbumProps) {
    return (
        <View style={styles.wrapper}>
            <Image
            source={source}
            style={styles.image}
            />
            <Text style={styles.title}>{name}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: 115,
        height: 140,
        alignItems: 'center',
        backgroundColor: 'black',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#ffffff50'
    },
    image:{
        width: 110,
        height: 110,
        resizeMode: 'cover',
    },
    title: {
        color:'white',
    }
})