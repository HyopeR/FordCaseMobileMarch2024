import 'react-native-gesture-handler';

import './src/core/extensions/promise';
import './src/core/extensions/string';

import './src/core/interceptor';
import './src/helpers/Errors';

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
