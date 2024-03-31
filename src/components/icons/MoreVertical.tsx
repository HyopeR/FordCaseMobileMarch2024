import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgMoreVertical = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}>
    <Path
      fill="currentColor"
      d="M12 20q-.825 0-1.412-.587T10 18q0-.825.588-1.412T12 16q.825 0 1.413.588T14 18q0 .825-.587 1.413T12 20m0-6q-.825 0-1.412-.587T10 12q0-.825.588-1.412T12 10q.825 0 1.413.588T14 12q0 .825-.587 1.413T12 14m0-6q-.825 0-1.412-.587T10 6q0-.825.588-1.412T12 4q.825 0 1.413.588T14 6q0 .825-.587 1.413T12 8"
    />
  </Svg>
);
export default SvgMoreVertical;
