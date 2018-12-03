// @flow
import React, {Component} from 'react';
import {createDrawerNavigator} from 'react-navigation';
import {AppLoading} from 'expo';

import AboutScene from './scenes/About/AboutScene';
import MapScene from './scenes/Map/MapScene';
import RewardScene from './scenes/Reward/RewardScene';

import cacheFonts from './helpers/cacheFonts';

type State = {
  isAssetsLoaded: boolean,
};

let Router = createDrawerNavigator(
  {
    Map: {
      screen: MapScene,
    },
    About: {
      screen: AboutScene,
    },
    Reward: {
      screen: RewardScene,
    },
  },
  {
    initialRouteName: 'Reward',
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
