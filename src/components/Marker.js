// @flow

import React, {Component} from 'react';
import {Image, StyleSheet} from 'react-native';
import {MapView as MapViewBase} from 'expo';

import binImage from '../assets/images/bin.png';

import type {LatLng} from '../types/Maps';

type Props = {
  coordinate: LatLng,
  title: string,
  description: string,
  onPress?: () => void,
};

export default class Marker extends Component<Props> {
  render() {
    return (
      <MapViewBase.Marker {...this.props}>
        <Image source={binImage} style={styles.markerImage} />
      </MapViewBase.Marker>
    );
  }
}

let styles = StyleSheet.create({
  markerImage: {
    width: 32,
    height: 32,
  },
});
