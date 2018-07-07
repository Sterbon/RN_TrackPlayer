import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import TrackPlayer from 'react-native-track-player';
import Button from './components/Button';
import ProgressBar from './components/progress';

export default class Player extends Component{
  
componentDidMount(){
  TrackPlayer.setupPlayer();
    TrackPlayer.add([
    {
        id: '1',
        url: require('./raw/Crossfade_Cold.mp3'),
        title: 'Lights',
        artist: 'Artist',
        duration: 2342,
        artwork: require('./raw/albumart.jpg')
    },
    {
      id: '2',
      url: require('./raw/surface.mp3'),
      title: 'Surface',
      duration: 232,
      artist: 'AeroCord',
      artwork: require('./raw/albumart.jpg')
    }]);
  }

toggleSong(){
  console.log('pauseSong');

  TrackPlayer.getState().then((playBackState)=> {
    if (playBackState === TrackPlayer.STATE_PLAYING || playBackState == 3){
      TrackPlayer.pause();    
    }
    else{
      TrackPlayer.play();
    }
  });
}
render() {
    return (
      <View style={styles.container}>
        <Button onPress = {()=>this.toggleSong()}>
          PLAY
        </Button>
        <Button onPress = {()=>TrackPlayer.skipToNext()}>
          NEXT
        </Button>
        <Button onPress = {()=>TrackPlayer.skipToPrevious()}>
          PREVIOUS
        </Button>
        <ProgressBar />
      </View>
        
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
