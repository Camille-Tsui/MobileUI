// this is kinda unessassary with how simple it is in the screen shot but whatever
import { StyleSheet, Text } from 'react-native'

interface ArtistProps {
    artist: string;
}

export function Artist({artist}: ArtistProps) {
    return (
        <Text style={styles.artist}>{artist}</Text>
    )
}

const styles = StyleSheet.create({
    artist: {
        color: 'white',
        padding: 10,
        fontSize: 16,
    }
})