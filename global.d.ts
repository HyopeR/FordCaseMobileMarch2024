import 'react-native-config';
declare module 'react-native-config' {
  export interface NativeConfig {
    GITHUB_API_KEY?: string;
  }

  export const Config: NativeConfig;
  export default Config;
}

import 'react-native-svg';
declare module 'react-native-svg' {
  export interface SvgProps {
    xmlns?: string;
    xmlnsXlink?: string;
  }
}
