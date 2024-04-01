import {
  GtIconKey,
  GtIconProps,
  GtTextProps,
  GtViewProps,
} from '@components/commons';

export type UserRepoRowProps = {
  icon: GtIconKey;
  title: string;
  text?: any;
  iconProps?: Omit<GtIconProps, 'name'>;
  titleProps?: Omit<GtTextProps, 'children'>;
  textProps?: Omit<GtTextProps, 'children'>;
} & GtViewProps;
