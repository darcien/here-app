// @flow

import React, {Component} from 'react';
import {StyleSheet, View, Text, ScrollView} from 'react-native';
import {Button, Toolbar, Subheader, ListItem} from 'react-native-material-ui';

import {statusBarHeight} from '../../constants/sizes';

import type {Marker as MarkerShape} from '../../types/Maps';

type Props = {
  navigation: *,
};

type State = {};

export default class ResultsScene extends Component<Props, State> {
  render() {
    let {navigation} = this.props;

    let selectedQui: ?MarkerShape = navigation.getParam('selectedQui');

    return (
      <View style={styles.root}>
        <Toolbar
          leftElement="menu"
          onLeftElementPress={this.props.navigation.toggleDrawer}
          centerElement={`Results`}
        />
        <View style={styles.content}>
          <Subheader
            text={`Trash thrown to ${selectedQui ? selectedQui.title : 'Qui'}:`}
            lines={2}
            style={{
              text: {
                fontSize: 20,
              },
            }}
          />
          <ScrollView>
            {data.map((datum) => (
              <ListItem
                key={datum.id}
                divider
                centerElement={`${datum.name} ${datum.amount}x`}
              />
            ))}
          </ScrollView>
          <Button raised primary text="DONE" onPress={this._onPress} />
        </View>
      </View>
    );
  }

  _onPress = () => {
    this.props.navigation.popToTop();
  };
}

let data = [
  {
    id: '1',
    name: 'PET Bottle',
    amount: 2,
  },
];

let styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: statusBarHeight,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    // alignItems: 'center',
    paddingTop: 15,
  },
  titleText: {
    fontFamily: 'Roboto-Medium',
    fontSize: 24,
  },
});
