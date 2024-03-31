import React from 'react';
import {RootStackRoute} from '@routes';
import {GtLayout} from '@components/layouts';
import {GtButton, GtText} from '@components/commons';
import {useCurrentRoute} from '@helpers/navigation';

const RootHomeScreen = ({navigation}: RootStackRoute<'root.home'>) => {
  const currentRoute = useCurrentRoute();

  return (
    <GtLayout>
      <GtText>Home Screen</GtText>
      <GtText>{currentRoute.name}</GtText>
      <GtButton
        text={'Go to Detail Screen'}
        onPress={() => navigation.navigate('root.detail')}
      />
    </GtLayout>
  );
};

export default RootHomeScreen;
