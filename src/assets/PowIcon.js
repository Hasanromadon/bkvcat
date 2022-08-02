import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

const PowIcon = (props) => (
  <Svg
    width={19}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect x={0.091} width={18} height={18} rx={2} fill="#F7D716" />
    <Path
      d="M4.795 8.755a1.432 1.432 0 1 0 0-2.864 1.432 1.432 0 0 0 0 2.864ZM7.373 6.464a1.432 1.432 0 1 0 0-2.864 1.432 1.432 0 0 0 0 2.864ZM10.81 6.464a1.432 1.432 0 1 0 0-2.864 1.432 1.432 0 0 0 0 2.864ZM13.386 8.755a1.432 1.432 0 1 0 0-2.864 1.432 1.432 0 0 0 0 2.864ZM12.15 10.393c-.499-.585-.917-1.083-1.421-1.667-.263-.31-.601-.619-1.002-.756a1.16 1.16 0 0 0-.19-.052c-.143-.023-.297-.023-.446-.023-.149 0-.304 0-.453.03a1.16 1.16 0 0 0-.189.05c-.4.138-.733.447-1.002.757-.498.584-.916 1.082-1.42 1.666-.75.75-1.673 1.581-1.5 2.744.165.584.583 1.162 1.334 1.328.418.086 1.752-.252 3.173-.252h.103c1.42 0 2.755.332 3.173.252.75-.166 1.168-.75 1.334-1.328.178-1.169-.745-2-1.495-2.75Z"
      fill="#100720"
    />
  </Svg>
);

export default PowIcon;
