/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import Activity_IncomingCallScreen from './src/activities/IncomingCallScreen';

AppRegistry.registerComponent(appName, () => App);

AppRegistry.registerComponent(
  'incoming-call-activity',
  () => Activity_IncomingCallScreen,
);
