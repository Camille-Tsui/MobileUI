import { StyleSheet, Text, View, Image } from 'react-native';

import { Album } from '../../components/Album';
import { SearchBar } from '../../components/SearchBar';

export default function Albums() {  
    return (
        <View style={styles.container}> 
            <SearchBar
            text={"Search an album..."}
            />
            
            <Album
             name={"Brand Music"}
             />
             <Album
             name={"Brand Music"}
             />
            <Album
             name={"Download"}
             />
             <Album
             name={"Funny RingTone"}
             />
             <Album
             name={"Music"}
             />
             <Album
             name={"Playlist"}
             />
             <Album
             name={"Unwanted"}
             />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    alignItems: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    height: '100%',
    padding: 5,
  },
});
