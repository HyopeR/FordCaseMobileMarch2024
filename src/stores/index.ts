import {
  legacy_createStore as createStore,
  applyMiddleware,
  AnyAction,
} from 'redux';
import {thunk, ThunkAction, ThunkDispatch} from 'redux-thunk';
import {persistStore} from 'redux-persist';
import {persistedReducer} from './store';

export const store = createStore(
  persistedReducer,
  {} as any,
  applyMiddleware(thunk),
);
export const persistor = persistStore(store);

export type AppState = ReturnType<typeof store.getState>;
export type AppDispatch = ThunkDispatch<AppState, any, AnyAction>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  AnyAction
>;
