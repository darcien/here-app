// @flow

import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {MapView as MapViewBase} from 'expo';

import Marker from './Marker';

import type {Marker as MarkerShape, Region} from '../types/Maps';

type Props = {
  onMarkerPress?: (MarkerShape) => void,
  selectedMarker?: ?MarkerShape,
};

export default class MapView extends Component<Props> {
  render() {
    let {selectedMarker} = this.props;
    return (
      <View style={styles.root}>
        <MapViewBase style={styles.mapBase} initialRegion={initialRegion}>
          {markers.map(({id, ...otherProps}) => (
            <Marker
              key={id}
              id={id}
              {...otherProps}
              isSelected={!!selectedMarker && selectedMarker.id === id}
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
      latitude: -6.221995,
      longitude: 106.632796,
    },
    title: 'Qui 1',
  },
  {
    id: '2',
    coordinate: {
      latitude: -6.221074,
      longitude: 106.632698,
    },
    title: 'Qui 2',
  },
  {
    id: '3',
    coordinate: {
      latitude: -6.221953,
      longitude: 106.6324,
    },
    title: 'Qui SU',
  },
  {
    id: '4',
    coordinate: {
      latitude: -6.221967,
      longitude: 106.6339,
    },
    title: 'Qui Halte',
  },
];
