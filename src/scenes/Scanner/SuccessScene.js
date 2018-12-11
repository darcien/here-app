// @flow

import React, {Component} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {Toolbar, IconToggle} from 'react-native-material-ui';

import {statusBarHeight} from '../../constants/sizes';

type Props = {
  navigation: *,
};

type State = {};

export default class SuccessScene extends Component<Props, State> {
  render() {
    return (
      <View style={styles.root}>
        <Toolbar
          leftElement="menu"
          onLeftElementPress={this.props.navigation.toggleDrawer}
        />
        <View style={styles.content}>
          <Text style={styles.titleText}>Payment Success</Text>
          <View style={styles.circle}>
            <IconToggle name="check" size={44} onPress={this._onPress} />
          </View>
        </View>
      </View>
    );
  }

  _onPress = () => {
    this.props.navigation.popToTop();
  };
}

let styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: statusBarHeight,
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 36,
    color: 'grey',
    marginBottom: 20,
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: 'rgb(144,238,144)',
  },
});
