// @flow

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {MapView as MapViewBase} from 'expo';

import Marker from './Marker';

import type {Marker as MarkerShape, Region} from '../types/Maps';

type Props = {
  onMarkerPress?: () => void,
};

export default class MapView extends Component<Props> {
  render() {
    return (
      <View style={styles.root}>
        <MapViewBase style={styles.mapBase} initialRegion={initialRegion}>
          {markers.map(({id, ...otherProps}) => (
            <Marker
              key={id}
              {...otherProps}
              onPress={this.props.onMarkerPress}
            />
          ))}
        </MapViewBase>
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

let initialRegion: Region = {
  latitude: -6.221965,
  longitude: 106.632696,
  latitudeDelta: 0.0022,
  longitudeDelta: 0.0021,
};

let markers: MarkerShape[] = [
  {
    id: '1',
    coordinate: {
      latitude: -6.221965,
      longitude: 106.632696,
    },
    title: '1',
    description: '1',
  },
  {
    id: '2',
    coordinate: {
      latitude: -6.221964,
      longitude: 106.632698,
    },
    title: '2',
    description: '1',
  },
  {
    id: '3',
    coordinate: {
      latitude: -6.221963,
      longitude: 106.632693,
    },
    title: '3',
    description: '1',
  },
  {
    id: '4',
    coordinate: {
      latitude: -6.221967,
      longitude: 106.63269,
    },
    title: '4',
    description: '1',
  },
];
