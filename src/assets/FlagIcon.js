import * as React from 'react';
import Svg, { Rect, Path } from 'react-native-svg';

const FlagIcon = (props) => (
  <Svg
    width={19}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Rect x={0.636} width={18} height={18} rx={2} fill="#F7D716" />
    <Path
      d="M14.132 4.745H6.624V3.6H5.469v10.31H4.89v1.145h2.31v-1.146h-.577v-2.864h7.508a.57.57 0 0 0 .577-.573V5.319a.57.57 0 0 0-.169-.405.58.58 0 0 0-.408-.168ZM13.554 9.9h-6.93V5.89h6.93V9.9Z"
      fill="#100720"
    />
  </Svg>
);

export default FlagIcon;
