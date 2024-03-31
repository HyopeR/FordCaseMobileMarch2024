declare global {
  interface Promise<T> {
    delay(ms?: number): Promise<T>;
    toPromiseArray(): Promise<[any | null, T | undefined]>;
  }
}

Promise.prototype.delay = function (ms = 500) {
  return new Promise(resolve => {
    setTimeout(() => resolve(this), ms);
  });
};

Promise.prototype.toPromiseArray = function <T>() {
  return this.then<[null, T]>((data: T) => {
    return [null, data];
  }).catch<[Error, undefined]>((err: Error) => {
    return [err, undefined];
  });
};

export {};
