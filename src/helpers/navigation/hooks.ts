import {useEffect, useState} from 'react';
import Navigation from './Navigation';

export const useCurrentRoute = () => {
  const [route, setRoute] = useState(Navigation.subject.value);

  useEffect(() => {
    const subscribe = Navigation.subject.subscribe({
      next: payload => {
        setRoute(payload);
      },
    });

    return () => {
      subscribe.unsubscribe();
    };
  }, []);

  return route;
};
