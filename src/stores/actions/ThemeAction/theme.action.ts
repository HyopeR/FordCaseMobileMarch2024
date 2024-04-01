import {AppThunk, AppDispatch} from '@stores';
import {SET_THEME_MODE} from './theme.constant';

export const toggleThemeMode = (): AppThunk => {
  return async (dispatch: AppDispatch, getState) => {
    const {mode} = getState().themeSto;
    const newMode = mode === 'light' ? 'dark' : 'light';

    dispatch({
      type: SET_THEME_MODE,
      payload: newMode,
    });
  };
};
