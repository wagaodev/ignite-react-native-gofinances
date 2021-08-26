import * as React from 'react';

import Svg, { SvgProps, G, Path, Defs, ClipPath } from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={25}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M23.987 12.474c0-1.003-.081-1.736-.258-2.495h-11.49v4.529h6.744c-.136 1.125-.87 2.82-2.502 3.959l-.022.152 3.633 2.806.251.025c2.312-2.129 3.644-5.261 3.644-8.976z"
          fill="#4285F4"
        />
        <Path
          d="M12.24 24.406c3.303 0 6.077-1.085 8.103-2.956l-3.861-2.983c-1.034.719-2.42 1.22-4.243 1.22-3.236 0-5.983-2.128-6.962-5.07l-.143.011-3.778 2.916-.05.137a12.233 12.233 0 0010.933 6.725z"
          fill="#34A853"
        />
        <Path
          d="M5.277 14.616a7.493 7.493 0 01-.408-2.413c0-.84.15-1.654.394-2.414l-.006-.161-3.825-2.962-.125.06A12.186 12.186 0 000 12.202c0 1.966.476 3.823 1.306 5.477l3.97-3.064z"
          fill="#FBBC05"
        />
        <Path
          d="M12.24 4.718c2.297 0 3.847.99 4.731 1.817l3.454-3.362C18.304 1.207 15.543 0 12.239 0 7.453 0 3.32 2.739 1.307 6.725L5.263 9.79c.993-2.942 3.74-5.07 6.976-5.07z"
          fill="#EB4335"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" d="M0 0h24v24.49H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

const MemoSvgComponent = React.memo(SvgComponent);
export default MemoSvgComponent;
