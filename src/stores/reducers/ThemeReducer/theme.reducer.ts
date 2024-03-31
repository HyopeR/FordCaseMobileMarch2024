import {AnyAction, Reducer} from 'redux';
import {ThemeReducerState} from './theme.type';
import {SET_THEME_MODE} from '@actions/ThemeAction/theme.constant';

const initialState = {
  mode: 'light',
} as ThemeReducerState;

export const themeReducer: Reducer<ThemeReducerState> = (
  state = initialState,
  action: AnyAction,
) => {
  switch (action.type) {
    case SET_THEME_MODE:
      return {
        ...state,
        mode: action.payload,
      };

    default:
      return state;
  }
};
