// @flow

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {MapView as MapViewBase} from 'expo';

let initialRegion = {
  latitude: -6.221965,
  longitude: 106.632696,
  latitudeDelta: 0.0022,
  longitudeDelta: 0.0021,
};

export default class MapView extends Component<{}> {
  render() {
    return (
      <View style={styles.root}>
        <MapViewBase style={styles.mapBase} initialRegion={initialRegion} />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  mapBase: {
    flex: 1,
  },
});
