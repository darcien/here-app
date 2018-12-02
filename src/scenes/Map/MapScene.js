import React, {Component} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import MapView from '../../components/MapView';

export default class MapScene extends Component {
  render() {
    return (
      <View style={styles.root}>
        <Text>Select a Trash Bin</Text>
        <MapView />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
