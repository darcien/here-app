// @flow
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Card, Divider, Icon, Toolbar} from 'react-native-material-ui';
import {statusBarHeight} from '../../constants/sizes';

type Props = {
  navigation: *,
};
export default class MapScene extends Component<Props, {}> {
  render() {
    return (
      <View style={styles.container}>
        <Toolbar
          leftElement="menu"
          onLeftElementPress={this.props.navigation.toggleDrawer}
          centerElement={'My Profile'}
        />
        <Card>
          <View style={styles.avatarContainer}>
            <View style={styles.avatar}>
              <Text style={styles.textAvatar}>S</Text>
            </View>
            <Text style={styles.textName}>Sampah</Text>
          </View>
          <Card>
            <View style={styles.pointContainer}>
              <Text style={styles.pointDesc}>Points</Text>
              <View style={styles.point}>
                <Icon name="copyright" iconSet="MaterialIcons" size={25} />
                <Text style={styles.pointNum}>10000</Text>
              </View>
            </View>
          </Card>
          <Divider />
          <TouchableOpacity>
            <View style={styles.exchangeRewardContainer}>
              <Text style={styles.descExchange}>
                Exchange Your Reward Here !
              </Text>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.divider} />
                <Icon
                  name="keyboard-arrow-right"
                  iconSet="MaterialIcons"
                  size={35}
                  color="white"
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.pointExchangeContainer}>
              <Text style={styles.descExchange}>Qui for Points !</Text>
              <View style={{flexDirection: 'row'}}>
                <View style={styles.divider} />
                <Icon
                  name="keyboard-arrow-right"
                  iconSet="MaterialIcons"
                  size={35}
                  color="white"
                />
              </View>
            </View>
          </TouchableOpacity>
        </Card>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  divider: {
    height: 40,
    paddingVertical: 20,
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
  },
  exchangeRewardContainer: {
    height: 100,
    margin: 10,
    backgroundColor: '#5284bd',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pointExchangeContainer: {
    height: 100,
    margin: 10,
    backgroundColor: '#9ecb77',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  descExchange: {
    fontSize: 20,
    marginHorizontal: 10,
    color: 'white',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: statusBarHeight,
  },
  textName: {
    fontSize: 25,
    color: 'white',
    fontFamily: 'Roboto-Bold',
  },
  textAvatar: {
    fontSize: 30,
    color: '#12af92',
    fontFamily: 'Roboto-Bold',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 85,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    padding: 10,
  },
  avatarContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#12af92',
  },
  point: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  pointContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingVertical: 10,
  },
  pointDesc: {
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
  },
  pointNum: {
    fontSize: 17,
    paddingLeft: 5,
  },
});
