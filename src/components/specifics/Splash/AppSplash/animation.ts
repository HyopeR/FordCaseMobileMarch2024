import {Animated, Easing} from 'react-native';

const getValues = () => {
  return {
    opacityValue: new Animated.Value(0),
  };
};

const getState = () => {
  const values = getValues();
  const interpolates = {
    opacity: values.opacityValue.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  };

  return {values, interpolates};
};

export const getAnimation = () => {
  const {values, interpolates} = getState();

  return {
    interpolates,
    values,
    animation: {
      parallel: Animated.parallel([
        Animated.timing(values.opacityValue, {
          toValue: 1,
          duration: 2000,
          easing: Easing.linear,
          useNativeDriver: false,
        }),
      ]),
    },
  };
};
