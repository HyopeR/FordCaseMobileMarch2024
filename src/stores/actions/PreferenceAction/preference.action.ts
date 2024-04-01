import {AppThunk} from '@stores';
import {SET_NUM_COLUMNS} from './preference.constant';

export const setNumColumns = (numColumns: number): AppThunk => {
  return async dispatch => {
    dispatch({
      type: SET_NUM_COLUMNS,
      payload: numColumns,
    });
  };
};
