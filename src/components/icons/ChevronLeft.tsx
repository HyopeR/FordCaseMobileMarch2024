import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgChevronLeft = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 512 512"
    {...props}>
    <Path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={48}
      d="M328 112 184 256l144 144"
    />
  </Svg>
);
export default SvgChevronLeft;
