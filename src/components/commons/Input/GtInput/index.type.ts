import {RefObject} from 'react';
import {TextInput, TextInputProps} from 'react-native';

export namespace GtInputNs {
  export type Props = {
    color?: string;
    width?: string | number;
    height?: string | number;
    error?: any;
  } & TextInputProps;
  export type Ref = RefObject<TextInput>;
}
