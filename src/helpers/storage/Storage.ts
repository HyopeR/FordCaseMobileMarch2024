import * as Adapter from './adapters/storage.adapter';

class StorageService {
  get = async (key: string) => {
    return Adapter.get(key);
  };

  set = async (key: string, value: any) => {
    return Adapter.set(key, value);
  };

  remove = async (key: string) => {
    return Adapter.remove(key);
  };

  clear = async () => {
    return Adapter.clear();
  };
}

export default new StorageService();
