import {AnyAction, Reducer} from 'redux';
import {MemoryReducerState} from './memory.type';
import {SET_SPLASH, SET_READY} from '@actions/MemoryAction/memory.constant';

const initialState = {
  isSplash: true,
  isReady: false,
} as MemoryReducerState;

export const memoryReducer: Reducer<MemoryReducerState> = (
  state = initialState,
  action: AnyAction,
) => {
  switch (action.type) {
    case SET_SPLASH:
      return {
        ...state,
        isSplash: action.payload,
      };

    case SET_READY:
      return {
        ...state,
        isReady: action.payload,
      };

    default:
      return state;
  }
};
