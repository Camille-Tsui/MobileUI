import { StyleSheet, Text, View } from 'react-native'

interface ArtistTagProps {
    tag: string;
}

export function ArtistTag({tag}: ArtistTagProps) {
    return (
        <View style={styles.tagContainer}>
            <Text style={styles.tag}>{tag}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    tagContainer: {
        padding: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 30,
    },
    tag: {
        color: 'gray',
    }
})