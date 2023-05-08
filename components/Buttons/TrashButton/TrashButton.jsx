import * as React from "react";
import Svg, { G, Rect, Path, Defs, ClipPath } from "react-native-svg";

function TrashButton(props) {
  return (
    <Svg
      width={70}
      height={40}
      viewBox="0 0 70 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#clip0_38_39)">
        <Rect width={70} height={40} rx={20} fill="#F6F6F6" />
        <Path
          d="M26 14h18"
          stroke="#BDBDBD"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <Path
          d="M42.5 14a.5.5 0 00-1 0h1zm-14 0a.5.5 0 00-1 0h1zm2 0a.5.5 0 001 0h-1zm8 0a.5.5 0 001 0h-1zm3 0v14h1V14h-1zm0 14a1.5 1.5 0 01-1.5 1.5v1a2.5 2.5 0 002.5-2.5h-1zM40 29.5H30v1h10v-1zm-10 0a1.5 1.5 0 01-1.5-1.5h-1a2.5 2.5 0 002.5 2.5v-1zM28.5 28V14h-1v14h1zm3-14v-2h-1v2h1zm0-2a1.5 1.5 0 011.5-1.5v-1a2.5 2.5 0 00-2.5 2.5h1zm1.5-1.5h4v-1h-4v1zm4 0a1.5 1.5 0 011.5 1.5h1A2.5 2.5 0 0037 9.5v1zm1.5 1.5v2h1v-2h-1z"
          fill="#BDBDBD"
        />
        <Path
          d="M33 19v6M37 19v6"
          stroke="#BDBDBD"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0_38_39">
          <Path fill="#fff" d="M0 0H70V40H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default TrashButton;
