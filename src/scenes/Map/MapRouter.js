// @flow

import {createStackNavigator} from 'react-navigation';

import MapScene from './MapScene';
import ConfirmationScene from './ConfirmationScene';

export default createStackNavigator(
  {
    MapView: MapScene,
    Confirmation: ConfirmationScene,
  },
  {
    initialRouteName: 'MapView',
    headerMode: 'none',
  },
);
