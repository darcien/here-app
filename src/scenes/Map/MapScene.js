// @flow

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Toolbar} from 'react-native-material-ui';

import MapView from '../../components/MapView';

import {statusBarHeight} from '../../constants/sizes';
import type {Marker as MarkerShape} from '../../types/Maps';

type Props = {
  navigation: *,
};

type State = {
  selectedMarker: ?MarkerShape,
};

export default class MapScene extends Component<Props, State> {
  state = {
    selectedMarker: null,
  };

  render() {
    let {selectedMarker} = this.state;
    return (
      <View style={styles.root}>
        <Toolbar
          leftElement="menu"
          onLeftElementPress={this.props.navigation.toggleDrawer}
          centerElement="Select nearby Qui"
          rightElement={selectedMarker ? 'done' : null}
          onRightElementPress={this._onDonePress}
        />
        <MapView
          selectedMarker={selectedMarker}
          onMarkerPress={this._onMarkerPress}
        />
      </View>
    );
  }

  _onMarkerPress = (marker: MarkerShape) => {
    this.setState({
      selectedMarker: marker,
    });
  };

  _onDonePress = () => {
    // Navigate
  };
}

let styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: statusBarHeight,
  },
});
