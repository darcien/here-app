// @flow
import React, {Component} from 'react';
import {createDrawerNavigator} from 'react-navigation';
import {AppLoading} from 'expo';

import AboutScene from './scenes/About/AboutScene';
import MapRouter from './scenes/Map/MapRouter';
import RewardsScene from './scenes/Rewards/RewardsScene';
import MyProfileScene from './scenes/MyProfile/MyProfileScene';

import cacheFonts from './helpers/cacheFonts';

type State = {
  isAssetsLoaded: boolean,
};

let Router = createDrawerNavigator(
  {
    Map: {
      screen: MapRouter,
    },
    Rewards: {
      screen: RewardsScene,
    },
    About: {
      screen: AboutScene,
    },
    MyProfile: {
      screen: MyProfileScene,
    },
  },
  {
    initialRouteName: 'Map',
  },
);

export default class App extends Component<{}, State> {
  state = {
    isAssetsLoaded: false,
  };

  render() {
    if (!this.state.isAssetsLoaded) {
      return (
        <AppLoading
          startAsync={this._loadAssets}
          onFinish={this._onLoadAssetsDone}
        />
      );
    }
    return <Router />;
  }

  _loadAssets = async () => {
    let openSans = {
      'Roboto-Bold': require('./assets/fonts/roboto-bold.ttf'),
      'Roboto-Light': require('./assets/fonts/roboto-light.ttf'),
      'Roboto-LightItalic': require('./assets/fonts/roboto-lightItalic.ttf'),
      'Roboto-Medium': require('./assets/fonts/roboto-medium.ttf'),
      Roboto: require('./assets/fonts/roboto-regular.ttf'),
    };

    let fontAssets = cacheFonts([openSans]);
    await Promise.all([...fontAssets]);
  };

  _onLoadAssetsDone = () => {
    this.setState({
      isAssetsLoaded: true,
    });
  };
}
