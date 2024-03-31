import AsyncStorage from '@react-native-async-storage/async-storage';
import {tryParse} from '../utils';

export const get = async (key: string) => {
  const [err, data] = await AsyncStorage.getItem(key).toPromiseArray();

  if (err || !data) {
    return null;
  } else {
    return tryParse(data) ? JSON.parse(data) : data;
  }
};

export const set = async (key: string, value: any) => {
  const data = typeof value === 'object' ? JSON.stringify(value) : value;
  const [err] = await AsyncStorage.setItem(key, data).toPromiseArray();
  return !err;
};

export const remove = async (key: string) => {
  const [err] = await AsyncStorage.removeItem(key).toPromiseArray();
  return !err;
};

export const clear = async (): Promise<boolean> => {
  const [err] = await AsyncStorage.clear().toPromiseArray();
  return !err;
};
