// @flow

import {createStackNavigator} from 'react-navigation';

import ScannerScene from './ScannerScene';
import SuccessScene from './SuccessScene';

export default createStackNavigator(
  {
    Scanner: ScannerScene,
    Success: SuccessScene,
  },
  {
    initialRouteName: 'Scanner',
    headerMode: 'none',
  },
);
