import {AnyAction, Reducer} from 'redux';
import {MemoryReducerState} from './memory.type';
import {MemoryConst} from '@actions/MemoryAction';

const initialState = {
  isSplash: true,
  isReady: false,
} as MemoryReducerState;

export const memoryReducer: Reducer<MemoryReducerState> = (
  state = initialState,
  action: AnyAction,
) => {
  switch (action.type) {
    case MemoryConst.SET_SPLASH:
      return {
        ...state,
        isSplash: action.payload,
      };

    case MemoryConst.SET_READY:
      return {
        ...state,
        isReady: action.payload,
      };

    default:
      return state;
  }
};
