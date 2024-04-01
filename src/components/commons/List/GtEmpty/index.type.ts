import {GtViewProps} from '@components/commons/View/GtView';
import {GtTextProps} from '@components/commons/Text/GtText';

export type GtEmptyProps = {
  text?: string;
  textColor?: any;
  textProps?: Omit<GtTextProps, 'color' | 'children'>;
} & GtViewProps;
