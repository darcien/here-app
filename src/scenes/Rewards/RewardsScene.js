// @flow
import React, {Component} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {Button, Card, Divider, Toolbar} from 'react-native-material-ui';

import {dummyData} from './DummyData';
import {statusBarHeight} from '../../constants/sizes';

export default class RewardsScene extends Component<*> {
  _keyExtractor = (item) => item.id;

  _renderItem = ({item}) => (
    <Card>
      <View style={styles.itemContainer}>
        <Image style={styles.image} source={item.source} resizeMethod="scale" />
        <View style={styles.separatorVertical} />
        <View style={styles.itemDesc}>
          <Text style={styles.textName}>{item.name}</Text>
          <Text style={styles.textDesc}>{item.description}</Text>
        </View>
        <View style={styles.button}>
          <Button raised primary text="Exchange" />
        </View>
      </View>
    </Card>
  );

  render() {
    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="menu"
          onLeftElementPress={this.props.navigation.toggleDrawer}
          centerElement="Exchange Rewards"
        />

        <FlatList
          data={dummyData}
          renderItem={this._renderItem}
          keyExtractor={this._keyExtractor}
          ItemSeparatorComponent={Divider}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: statusBarHeight,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: 10,
  },
  image: {
    height: 110,
    width: 110,
    margin: 5,
  },
  itemDesc: {
    flex: 1,
    paddingLeft: 3,
  },
  button: {
    position: 'absolute',
    right: 5,
    bottom: 10,
  },
  textName: {
    fontFamily: 'Roboto-Bold',
  },
  textDesc: {
    fontFamily: 'Roboto-Light',
  },
  separatorVertical: {
    height: 60,
    marginVertical: 20,
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'grey',
    borderLeftWidth: StyleSheet.hairlineWidth,
  },
});
