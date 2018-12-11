// @flow

import React, {Component} from 'react';
import {View, Image, StyleSheet, Platform} from 'react-native';
import {MapView as MapViewBase} from 'expo';

import binImage from '../assets/images/bin.png';

import type {LatLng, Marker as MarkerShape} from '../types/Maps';

type Props = {
  isSelected?: boolean,
  id: string,
  coordinate: LatLng,
  title: string,
  description?: string,
  onPress: (MarkerShape) => void,
};

export default class Marker extends Component<Props> {
  render() {
    let {isSelected, ...otherProps} = this.props;
    return (
      <MapViewBase.Marker
        {...otherProps}
        onPress={this._onMarkerPress}
        image={Platform.OS === 'android' ? binImage : null}
      >
        <View style={[styles.root, isSelected && styles.rootSelected]}>
          {Platform.OS === 'ios' && (
            <Image source={binImage} style={styles.markerImage} />
          )}
        </View>
      </MapViewBase.Marker>
    );
  }

  _onMarkerPress = () => {
    let {id, title, coordinate, onPress} = this.props;
    onPress({
      id,
      title,
      coordinate,
    });
  };
}

let styles = StyleSheet.create({
  markerImage: {
    width: 32,
    height: 32,
  },
  root: {
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  rootSelected: {
    backgroundColor: 'pink',
  },
});
