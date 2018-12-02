// @flow
import {createDrawerNavigator} from 'react-navigation';

import AboutScene from './scenes/About/AboutScene';
import MapScene from './scenes/Map/MapScene';

export default createDrawerNavigator(
  {
    Map: {
      screen: MapScene,
    },
    About: {
      screen: AboutScene,
    },
  },
  {
    initialRouteName: 'Map',
  },
);
