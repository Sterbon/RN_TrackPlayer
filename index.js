import { AppRegistry } from 'react-native';
import App from './App';

AppRegistry.registerComponent('cfa', () => App);
AppRegistry.registerHeadlessTask('TrackPlayer', require('./src/event_handler'));
