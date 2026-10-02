import { StyleSheet, Text, View, Image } from 'react-native';

import { Album } from '../../components/Album';

export default function Albums() {  
    return (
        <View style={styles.container}> 
            <Album
             name={"Brand Music"}
             />
            <Album
             name={"Brand Music"}
             />
             <Album
             name={"Brand Music"}
             />
             <Album
             name={"Brand Music"}
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
    gap: 5,
    height: '100%',
    padding: 5,
  },
});
