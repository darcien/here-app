// @flow

import React, {Component} from 'react';
import {MapView as MapViewBase} from 'expo';

import type {LatLng} from '../types/Maps';

type Props = {
  coordinate: LatLng,
  title: string,
  description: string,
};

export default class Marker extends Component<Props> {
  render() {
    return <MapViewBase.Marker {...this.props} />;
  }
}
