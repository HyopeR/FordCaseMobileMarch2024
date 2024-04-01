import {AnyAction, Reducer} from 'redux';
import {PreferenceReducerState} from './preference.type';
import {PreferenceConst} from '@actions/PreferenceAction';

const initialState = {
  numColumns: 1,
} as PreferenceReducerState;

export const preferenceReducer: Reducer<PreferenceReducerState> = (
  state = initialState,
  action: AnyAction,
) => {
  switch (action.type) {
    case PreferenceConst.SET_NUM_COLUMNS:
      return {
        ...state,
        numColumns: action.payload,
      };

    default:
      return state;
  }
};
