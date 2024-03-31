import {AppThunk, AppDispatch} from '@stores';
import {SET_SPLASH, SET_READY} from './memory.constant';

export const setSplash = (splash: boolean): AppThunk => {
  return async (dispatch: AppDispatch) => {
    dispatch({
      type: SET_SPLASH,
      payload: splash,
    });
  };
};

export const setReady = (ready: boolean): AppThunk => {
  return async (dispatch: AppDispatch) => {
    dispatch({
      type: SET_READY,
      payload: ready,
    });
  };
};
