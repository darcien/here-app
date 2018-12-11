// @flow

import React, {Component} from 'react';
import {StyleSheet, View} from 'react-native';
import {Toolbar} from 'react-native-material-ui';

import {statusBarHeight} from '../../constants/sizes';

type Props = {
  navigation: *,
};

type State = {
};

export default class MapScene extends Component<Props, State> {
  state = {
  };

  render() {
    return (
      <View style={styles.root}>
        <Toolbar
          leftElement="menu"
          onLeftElementPress={this.props.navigation.toggleDrawer}
          centerElement="Scan a QR"
        />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: statusBarHeight,
  },
});
