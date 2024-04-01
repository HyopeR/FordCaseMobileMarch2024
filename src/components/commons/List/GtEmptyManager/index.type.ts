import {GtEmptyProps} from '@components/commons/List/GtEmpty';
import {GtSpinnerProps} from '@components/commons/Spinner/GtSpinner';

export type GtEmptyManagerProps = {
  loaded?: boolean;
  loading?: boolean;
  loadingProps?: GtSpinnerProps;
  emptyProps?: GtEmptyProps;
};
