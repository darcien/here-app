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

export default class ConfirmationScene extends Component<Props, State> {
  state: State = {
    showContent: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        showContent: true,
      });
    }, 3000);

    let selectedQui: ?MarkerShape = this.props.navigation.getParam(
      'selectedQui',
    );
    if (selectedQui) {
      this.props.navigation.navigate('Results', {selectedQui});
    }
  }

  render() {
    let {navigation} = this.props;

    let selectedQui: ?MarkerShape = navigation.getParam('selectedQui');
    let quiTitle = selectedQui ? selectedQui.title : 'Qui';

    // TODO: Add indicator to wait and automatically proceed after success.
    return (
      <View style={styles.root}>
        <Toolbar
          leftElement="menu"
          onLeftElementPress={this.props.navigation.toggleDrawer}
          centerElement={`Throw trash to ${quiTitle}`}
        />
        <View style={styles.content}>
          {this.state.showContent ? (
            this._renderContent()
          ) : (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <ActivityIndicator animating={true} size="large" color="black" />
              <Text style={{fontFamily: 'Roboto-LightItalic', fontSize: 20}}>
                {`Waiting for trash in ${quiTitle}...`}
              </Text>
            </View>
          )}
        </View>
      </View>
    );
  }

  _renderContent() {
    return <Text>redirect to result scene</Text>;
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
