// @flow

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {MapView as MapViewBase} from 'expo';

import {screenWidth} from '../constants/sizes';

type Props = {};

export default class MapView extends Component<Props> {
  render() {
    return (
      <View style={styles.root}>
        <MapViewBase
          style={styles.mapBase}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  root: {
    height: screenWidth,
    width: screenWidth,
  },
  mapBase: {
    flex: 1,
  },
});
