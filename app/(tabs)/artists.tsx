import { StyleSheet, View } from 'react-native';
import { SearchBar } from '../../components/SearchBar';
import { Artist } from '../../components/Artist';
import { ArtistTag } from '../../components/ArtistTag';

export default function Artists() {
    return (
        <View style={styles.container}>
            <View style={styles.tagsContainer}>
                <ArtistTag tag="Artists"/>
                <ArtistTag tag="Album-Artists"/>
                <ArtistTag tag="Composers"/>
            </View>
            <SearchBar 
            text="Search an artist.."/>

            <View style={styles.artistContainer}>
                <Artist artist="Creepy Nuts"/>
                <Artist artist='<unknown>'/>
                <Artist artist='Ado'/>
                <Artist artist='なとり'/>
                <Artist artist='Carvan Place'/>
                <Artist artist='DECO*27'/>
                <Artist artist='Eve'/>
                <Artist artist='HUNTR/X'/>
                <Artist artist='imase'/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    height: '100%',
    padding: 5,
  },
  artistContainer: {
    justifyContent: 'flex-start',
    width: '100%',
  },
  tagsContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 10,
    padding: 10
  }
});