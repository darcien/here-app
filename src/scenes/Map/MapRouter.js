// @flow

import {createStackNavigator} from 'react-navigation';

import MapScene from './MapScene';

export default createStackNavigator(
  {
    MapView: MapScene,
  },
  {
    initialRouteName: 'MapView',
    headerMode: 'none',
  },
);
