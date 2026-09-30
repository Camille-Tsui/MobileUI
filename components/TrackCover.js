import { StyleSheet, Text, View, Image } from 'react-native';

export function TrackCover({ source, title, artist, folder }) {
    return (
            <View style= {styles.songInfo}>
            <Image 
              source={source} 
              style={styles.coverImage} 
            />
              <Text style={styles.title}>{title}</Text>
              <Text style={styles.artist}>{artist}</Text>
              <Text style={styles.folder}>{folder}</Text>
            </View>
    );
};

const styles = StyleSheet.create({
  songInfo:{
    alignItems: 'center',
  },
  coverImage: {
    width: 350,
    height: 350,
    marginBottom: 20,
  },
  title: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  artist: {
    color: 'white',
  },
    folder: {
    color: 'white',
  },
});