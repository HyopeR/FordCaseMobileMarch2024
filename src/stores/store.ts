import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';

import {themeReducer} from '@reducers/ThemeReducer/theme.reducer';
import {memoryReducer} from '@reducers/MemoryReducer/memory.reducer';
import {preferenceReducer} from '@reducers/PreferenceReducer/preference.reducer';

const rootConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['themeSto'],
};

const memoryConfig = {
  key: 'memorySto',
  storage: AsyncStorage,
  blacklist: ['isSplash', 'isReady'],
};

const preferenceConfig = {
  key: 'preferenceSto',
  storage: AsyncStorage,
  blacklist: [],
};

const combinedReducers = combineReducers({
  themeSto: themeReducer,
  memorySto: persistReducer(memoryConfig, memoryReducer),
  preferenceSto: persistReducer(preferenceConfig, preferenceReducer),
});

export const persistedReducer = persistReducer(rootConfig, combinedReducers);
