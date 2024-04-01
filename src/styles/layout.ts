import {Dimensions} from 'react-native';
import {initialWindowMetrics} from 'react-native-safe-area-context';

const initialInsets = {top: 0, bottom: 0, left: 0, right: 0};

const Window = initialWindowMetrics?.frame || {
  ...Dimensions.get('window'),
  x: 0,
  y: 0,
};

const Frame = {
  width: Math.floor(Window.width + Window.x),
  height: Math.floor(Window.height + Window.y),
};

const {top, right, bottom, left} =
  initialWindowMetrics?.insets || initialInsets;

const Insets = {
  top: top,
  bottom: bottom,
  left: left,
  right: right,
};

export default {
  insets: Insets,
  screenWidth: Frame.width,
  screenHeight: Frame.height,
};
