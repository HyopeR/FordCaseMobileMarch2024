import {DependencyList, useEffect, useState} from 'react';
import Searcher from './Searcher';

export const useSearcher = (searcher: Searcher, deps: DependencyList = []) => {
  const [state, setState] = useState(searcher.text);

  useEffect(() => {
    const subscriber = searcher.pipe.subscribe(data => {
      setState(data);
    });

    return () => {
      subscriber.unsubscribe();
      searcher.reset();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);

  return state;
};

// import {DependencyList, useEffect, useState} from 'react';
// import {Observable} from 'rxjs';
//
// type UseSearchEffectProps<S> = {
//   observable: Observable<S>;
//   callback?: (value: S) => void;
// };
//
// export const useSearchEffect = <S>(
//   props: UseSearchEffectProps<S>,
//   deps: DependencyList = [],
// ) => {
//   const {observable, callback} = props;
//
//   useEffect(() => {
//     const subscriber = observable.subscribe(value => {
//       callback && callback(value);
//     });
//
//     return () => {
//       subscriber.unsubscribe();
//     };
//
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [...deps]);
// };
//
// type UseSearchProps<S> = {
//   state: S;
//   subject: Observable<S>;
// };
//
// export const useSearch = <S>(
//   props: UseSearchProps<S>,
//   deps: DependencyList = [],
// ) => {
//   const {state, subject} = props;
//
//   const [_state, _setState] = useState(state);
//
//   useEffect(() => {
//     const subscriber = subject.subscribe(data => {
//       _setState(data);
//     });
//
//     return () => {
//       subscriber.unsubscribe();
//     };
//
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [...deps]);
//
//   return _state;
// };
