// @flow

import {createStackNavigator} from 'react-navigation';

import MapScene from './MapScene';
import ConfirmationScene from './ConfirmationScene';
import ResultsScene from './ResultsScene';

export default createStackNavigator(
  {
    MapView: MapScene,
    Confirmation: ConfirmationScene,
    Results: ResultsScene,
  },
  {
    initialRouteName: 'MapView',
    headerMode: 'none',
  },
);
