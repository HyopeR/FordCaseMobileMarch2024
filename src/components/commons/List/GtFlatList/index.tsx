import React, {ForwardedRef} from 'react';
import {FlatList} from 'react-native';
import {SCROLL_LIST_PROPS} from '@styles/scroll';
import {GtFlatListNs} from './index.type';

const GtFlatList = <ItemT,>(
  props: GtFlatListNs.Props<ItemT>,
  ref: ForwardedRef<FlatList>,
) => {
  return <FlatList ref={ref} {...SCROLL_LIST_PROPS} {...props} />;
};

export default React.forwardRef<FlatList, GtFlatListNs.Props<any>>(GtFlatList);
export type {GtFlatListNs};
