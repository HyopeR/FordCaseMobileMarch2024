import React from 'react';
import {RootStackRoute} from '@routes';
import {GtLayout} from '@components/layouts';
import {GtText} from '@components/commons';
import {useCurrentRoute} from '@helpers/navigation';

const RootDetailScreen = ({}: RootStackRoute<'root.detail'>) => {
  const currentRoute = useCurrentRoute();

  return (
    <GtLayout>
      <GtText>Detail Screen</GtText>
      <GtText>{currentRoute.name}</GtText>
    </GtLayout>
  );
};

export default RootDetailScreen;
