import AsyncStorage from '@react-native-async-storage/async-storage';
import {combineReducers} from 'redux';
import {persistReducer} from 'redux-persist';

import {themeReducer} from '@reducers/ThemeReducer/theme.reducer';
import {memoryReducer} from '@reducers/MemoryReducer/memory.reducer';

const rootConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['themeRepo'],
};

const memoryConfig = {
  key: 'memoryRepo',
  storage: AsyncStorage,
  blacklist: ['isSplash', 'isReady'],
};

const combinedReducers = combineReducers({
  memoryRepo: persistReducer(memoryConfig, memoryReducer),
  themeRepo: themeReducer,
});

export const persistedReducer = persistReducer(rootConfig, combinedReducers);
