import {GtTextProps, GtTouchProps, GtViewProps} from '@components/commons';

export type AppDrawerRowProps = {
  title: string;
  text?: any;
  titleProps?: Omit<GtTextProps, 'children'>;
  textProps?: Omit<GtTextProps, 'children'>;
  viewProps?: Omit<GtViewProps, 'children'>;
} & GtTouchProps;
