import React from 'react';
import { View, Text, StyleSheet, TouchableNativeFeedback, ToastAndroid, Slider} from 'react-native';
import TrackPlayer, { ProgressComponent } from 'react-native-track-player';

import { formatTime } from './utils';

export default class ProgressBar extends ProgressComponent {
    state = {info: null, buffered: null, progress: null,SliderValue: 0, audioDuration: null };

    render() {
        const position = formatTime(Math.floor(this.state.position));
        const audioDuration = formatTime(Math.floor(this.state.duration));
        console.log(this.state.duration);
        const info = position + ' / ' + audioDuration;
        const progress = this.getProgress() * 100;
        let buffered = this.getBufferedProgress() * 100;
        buffered -= progress;
        if(buffered < 0) {
            buffered = 0;
        }
                return (
                    <View style={styles.view}>
                    <Text style={styles.info}>{info}</Text>
                    <Slider
                        step = {1}
                        minimumValue = { 0 }
                        maximumValue = { buffered }
                        minimumTrackTintColor = "#009688"
                        onValueChange={(progress) => this.setState({ SliderValue: progress })}
                        style = {{ width: '100%' }} 
                    />
                    </View>
            );
    }

}

const styles = StyleSheet.create({
    view: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        width: '100%'
    },
    info: {
        color: '#c0c0c0',
        fontSize: 16,
        fontWeight: '300',
        margin: 10
    },
    bar: {
        backgroundColor: '#575757',
        height: 5,
        width: '100%',
        margin: 10,
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    played: {
        backgroundColor: '#34fd33',
        height: 5
    },
    buffered: {
        backgroundColor: '#797979',
        height: 5
    }
});
