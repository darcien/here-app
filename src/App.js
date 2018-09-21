// @flow
import {createBottomTabNavigator} from 'react-navigation';

import FeedScene from './components/scenes/FeedScene/FeedScene';

export default createBottomTabNavigator(
  {
    Feed: {
      screen: FeedScene,
    },
  },
  {
    initialRouteName: 'Feed',
  },
);
