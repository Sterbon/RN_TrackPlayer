import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Player from './src/player';

export default class App extends Component{
  render(){
    return(
      <Player/>
    );
  }
}
