// @flow

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Toolbar} from 'react-native-material-ui';

import MapView from '../../components/MapView';

type Props = {
  navigation: *,
};

export default class MapScene extends Component<Props> {
  render() {
    return (
      <View style={styles.root}>
        <Toolbar
          leftElement="menu"
          onLeftElementPress={this.props.navigation.toggleDrawer}
          centerElement="Select a Qui"
        />
        <MapView />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
