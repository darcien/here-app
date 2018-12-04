// @flow

import React, {Component} from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {Toolbar} from 'react-native-material-ui';

import {statusBarHeight} from '../../constants/sizes';
import type {Marker as MarkerShape} from '../../types/Maps';

type Props = {
  navigation: *,
};

type State = {
  showContent: boolean,
};

export default class MapScene extends Component<Props, State> {
  state: State = {
    showContent: false,
  };
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showContent: true,
      });
    }, 3000);
  }
  _renderContent() {
    return <Text>redirect to result scene</Text>;
  }

  _renderLoading() {
    return (
      <View style={{justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator animating={true} size="large" color="black" />
        <Text style={{fontFamily: 'Roboto-LightItalic', fontSize: 20}}>
          Waiting you to put trash to Qui bin .....
        </Text>
      </View>
    );
  }
  render() {
    let {navigation} = this.props;

    let selectedQui: ?MarkerShape = navigation.getParam('selectedQui');

    // TODO: Add indicator to wait and automatically proceed after success.
    return (
      <View style={styles.root}>
        <Toolbar
          leftElement="menu"
          onLeftElementPress={this.props.navigation.toggleDrawer}
          centerElement={`Throw trash to ${
            selectedQui ? selectedQui.title : 'Qui'
          }`}
        />
        <View style={styles.content}>
          {/* <ActivityIndicator animating={true} size="large" color="black" /> */}
          {this.state.showContent
            ? this._renderContent()
            : this._renderLoading()}
        </View>
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
  content: {
    flex: 1,
    justifyContent: 'center',
  },
});
