import React from 'react';
import {Flatlist, StyleSheet, Text, View} from 'react-native';
import {Card} from 'react-native-material-ui';
import DummyData from './DummyData';

export default class RewardScene extends React.Component {
  renderItem = ({datum}) => (
    <Card>
      <Text>{datum.id}</Text>
    </Card>
  );

  render() {
    return (
      <View style={styles.container}>
        <Text>Reward.</Text>
        <Flatlist data={DummyData} renderItem={this.renderItem} />
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
