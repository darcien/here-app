// @flow
import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class MapScene extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Text>About.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
