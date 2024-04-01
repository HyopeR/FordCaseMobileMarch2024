import {DependencyList, useEffect, useState} from 'react';
import Paginator from './Paginator';

export const usePaginator = (
  paginator: Paginator,
  deps: DependencyList = [],
) => {
  const [state, setState] = useState(paginator.state);

  useEffect(() => {
    const subscriber = paginator.subject.subscribe(data => {
      setState(data);
    });

    return () => {
      subscriber.unsubscribe();
      paginator.reset();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);

  return state;
};
