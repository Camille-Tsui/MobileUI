import { StyleSheet, View } from 'react-native';
import { Song } from '../../components/Song';
import { QueBar } from '../../components/QueBar';

export default function Playlist() {
    return (
        <View style={styles.container}>
            <QueBar/>
            <Song
                title={"Dive Back in Time"}
                artist={"JAWS"}
                folder={"Music"}
                duration={"2:53"}
            />
            <Song
                title={"No. 1"}
                artist={"Obey Me"}
                folder={"Music"}
                duration={"4:11"}
            />
            <Song
                title={"Young Girl A"}
                artist={"Will Steston"}
                folder={"Music"}
                duration={"4:02"}
            />
            <Song
                title={"Terminal"}
                artist={"JAWS"}
                folder={"Music"}
                duration={"4:24"}
            />
            <Song
                title={"Lost in the Phythm"}
                artist={"Jamie Berry"}
                folder={"Music"}
                duration={"4:56"}
            />
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
});
