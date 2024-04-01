import {GtViewProps} from '@components/commons/View/GtView';

export type GtPaginationProps = {
  onChange?: (page: number) => void;
  style?: GtViewProps['style'];
} & UsePaginationProps;

export type UsePaginationProps = {
  page: number;
  count: number;
  boundaryCount?: number;
  siblingCount?: number;
};
