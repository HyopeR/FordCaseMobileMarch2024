import {AnyAction, Reducer} from 'redux';
import {ThemeReducerState} from './theme.type';
import {ThemeConst} from '@actions/ThemeAction';

const initialState = {
  mode: 'light',
} as ThemeReducerState;

export const themeReducer: Reducer<ThemeReducerState> = (
  state = initialState,
  action: AnyAction,
) => {
  switch (action.type) {
    case ThemeConst.SET_THEME_MODE:
      return {
        ...state,
        mode: action.payload,
      };

    default:
      return state;
  }
};
