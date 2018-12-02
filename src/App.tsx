import {createDrawerNavigator} from 'react-navigation';

import AboutScreen from './screens/About/AboutScreen';
import MapScreen from './screens/Map/MapScreen';

export default createDrawerNavigator({
  Map: MapScreen,
  About: AboutScreen,
});
