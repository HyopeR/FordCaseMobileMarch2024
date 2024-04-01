import {GtTextProps, GtViewProps} from '@components/commons';

export type UserRepoDetailRowProps = {
  title?: string;
  text?: any;
  titleProps?: Omit<GtTextProps, 'children'>;
  textProps?: Omit<GtTextProps, 'children'>;
} & GtViewProps;
