import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import type {SvgProps} from 'react-native-svg';
const SvgCol3 = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}>
    <Path
      fill="currentColor"
      d="M16.675 11.5q-.425 0-.712-.288t-.288-.712v-4q0-.425.288-.712t.712-.288H20q.425 0 .713.288T21 6.5v4q0 .425-.288.713T20 11.5zm-6.325 0q-.425 0-.712-.288T9.35 10.5v-4q0-.425.288-.712t.712-.288h3.325q.425 0 .713.288t.287.712v4q0 .425-.288.713t-.712.287zm-6.325 0q-.425 0-.712-.288t-.288-.712v-4q0-.425.288-.712t.712-.288H7.35q.425 0 .713.288t.287.712v4q0 .425-.288.713t-.712.287zm0 7q-.425 0-.712-.288t-.288-.712v-4q0-.425.288-.712t.712-.288H7.35q.425 0 .713.288t.287.712v4q0 .425-.288.713t-.712.287zm6.325 0q-.425 0-.712-.288T9.35 17.5v-4q0-.425.288-.712t.712-.288h3.325q.425 0 .713.288t.287.712v4q0 .425-.288.713t-.712.287zm6.325 0q-.425 0-.712-.288t-.288-.712v-4q0-.425.288-.712t.712-.288H20q.425 0 .713.288T21 13.5v4q0 .425-.288.713T20 18.5z"
    />
  </Svg>
);
export default SvgCol3;