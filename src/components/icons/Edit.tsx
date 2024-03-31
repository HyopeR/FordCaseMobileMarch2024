import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgEdit = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}>
    <Path
      fill="currentColor"
      d="m163 439.573-90.569-90.569L322.78 98.656l90.57 90.569zM471.723 88.393l-48.115-48.114c-11.723-11.724-31.558-10.896-44.304 1.85l-45.202 45.203 90.569 90.568 45.202-45.202c12.743-12.746 13.572-32.582 1.85-44.305M64.021 363.252 32 480l116.737-32.021z"
    />
  </Svg>
);
export default SvgEdit;
