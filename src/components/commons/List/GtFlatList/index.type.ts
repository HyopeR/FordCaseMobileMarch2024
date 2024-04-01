import {RefObject} from 'react';
import {FlatList, FlatListProps} from 'react-native';

export namespace GtFlatListNs {
  export type Props<ItemT> = FlatListProps<ItemT>;
  export type Ref = RefObject<FlatList>;
}
