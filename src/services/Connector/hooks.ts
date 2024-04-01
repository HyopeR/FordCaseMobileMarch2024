import {DependencyList, useEffect, useState} from 'react';
import Connector from './Connector';

export const useConnector = (deps: DependencyList = []) => {
  const [connected, setConnected] = useState(Connector.connection.value);

  useEffect(() => {
    const subscribe = Connector.connection.subscribe(value => {
      setConnected(value);
    });

    return () => {
      subscribe.unsubscribe();
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);

  return connected;
};
