import {LogBox} from 'react-native';
import {ignoreErrorRegex, ignoreWarningRegex} from '@utils/regex.utils';

LogBox.ignoreLogs(['Sending `onAnimatedValueUpdate`']);

const originalError = console.error;
console.error = (message, ...optionalParams) => {
  if (typeof message === 'string') {
    if (ignoreErrorRegex.test(message)) {
      return;
    }
  }

  originalError(message, ...optionalParams);
};

const originalWarn = console.warn;
console.warn = (message, ...optionalParams) => {
  if (typeof message === 'string') {
    if (ignoreWarningRegex.test(message)) {
      return;
    }
  }

  originalWarn(message, ...optionalParams);
};
