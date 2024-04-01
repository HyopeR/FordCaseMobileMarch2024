import {Edge} from 'react-native-safe-area-context';
import {GtViewProps} from '@components/commons';

export type GtLayoutProps = {
  edges?: Edge[];
} & GtViewProps;
