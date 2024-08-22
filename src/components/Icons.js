import * as React from "react";

export const GithubIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 512 512"
    {...rest}
    className={`w-full h-auto ${className} `}
  >
    <path fill="none" d="M0 0h512v512H0z" />
    <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 0 0 3.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 0 1-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0 0 25.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 0 1 5-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 0 1 112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 0 1 5 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 0 0 4-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32Z" />
  </svg>
);

export const TwitterIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 209"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v209H0z" />
    <path
      fill="#55acee"
      d="M256 25.45a105.04 105.04 0 0 1-30.166 8.27c10.845-6.5 19.172-16.793 23.093-29.057a105.183 105.183 0 0 1-33.351 12.745C205.995 7.201 192.346.822 177.239.822c-29.006 0-52.523 23.516-52.523 52.52 0 4.117.465 8.125 1.36 11.97-43.65-2.191-82.35-23.1-108.255-54.876-4.52 7.757-7.11 16.78-7.11 26.404 0 18.222 9.273 34.297 23.365 43.716a52.312 52.312 0 0 1-23.79-6.57c-.003.22-.003.44-.003.661 0 25.447 18.104 46.675 42.13 51.5a52.592 52.592 0 0 1-23.718.9c6.683 20.866 26.08 36.05 49.062 36.475-17.975 14.086-40.622 22.483-65.228 22.483-4.24 0-8.42-.249-12.529-.734 23.243 14.902 50.85 23.597 80.51 23.597 96.607 0 149.434-80.031 149.434-149.435 0-2.278-.05-4.543-.152-6.795A106.748 106.748 0 0 0 256 25.45"
    />
  </svg>
);
// #0A66C2
export const LinkedInIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <g fill="none">
      <rect width={256} height={256} fill="#fff" rx={60} />
      <rect width={256} height={256} fill="#0A66C2" rx={60} />
      <path
        fill="#fff"
        d="M184.715 217.685h29.27a4 4 0 0 0 4-3.999l.015-61.842c0-32.323-6.965-57.168-44.738-57.168-14.359-.534-27.9 6.868-35.207 19.228a.32.32 0 0 1-.595-.161V101.66a4 4 0 0 0-4-4h-27.777a4 4 0 0 0-4 4v112.02a4 4 0 0 0 4 4h29.268a4 4 0 0 0 4-4v-55.373c0-15.657 2.97-30.82 22.381-30.82 19.135 0 19.383 17.916 19.383 31.834v54.364a4 4 0 0 0 4 4ZM38 59.627c0 11.865 9.767 21.627 21.632 21.627 11.862-.001 21.623-9.769 21.623-21.631C81.253 47.761 71.491 38 59.628 38 47.762 38 38 47.763 38 59.627Zm6.959 158.058h29.307a4 4 0 0 0 4-4V101.66a4 4 0 0 0-4-4H44.959a4 4 0 0 0-4 4v112.025a4 4 0 0 0 4 4Z"
      />
    </g>
  </svg>
);

export const LogoIcon = ({ className, ...rest }) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="300.000000pt"
    height="167.000000pt"
    viewBox="0 0 300.000000 167.000000"
    preserveAspectRatio="xMidYMid meet"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <metadata>
      Created by potrace 1.10, written by Peter Selinger 2001-2011
    </metadata>
    <g
      transform="translate(0.000000,167.000000) scale(0.100000,-0.100000)"
      fill="#fff"
      stroke="none"
    >
      <path
        d="M1339 1273 c-337 -339 -346 -349 -336 -375 6 -16 14 -28 17 -28 3 0
142 136 308 303 l302 303 0 -363 0 -363 30 0 30 0 0 435 c0 239 -1 435 -3 435
-1 0 -158 -156 -348 -347z"
      />
      <path
        d="M2041 1564 c-125 -33 -236 -129 -294 -251 -27 -58 -32 -82 -35 -164
-9 -202 80 -354 257 -437 73 -35 78 -36 230 -42 182 -6 211 -16 249 -90 37
-73 17 -149 -51 -190 -30 -19 -52 -20 -326 -20 l-293 0 6 -22 c3 -13 6 -29 6
-36 0 -11 54 -13 293 -10 l294 3 49 30 c59 36 104 114 104 179 -1 75 -53 156
-125 194 -22 12 -73 18 -190 22 -148 6 -164 9 -220 35 -76 36 -153 113 -191
190 -27 55 -29 69 -29 170 0 101 2 115 28 168 40 80 112 151 194 190 l68 32
223 3 222 4 15 29 16 29 -223 -1 c-162 0 -238 -4 -277 -15z"
      />
      <path
        d="M160 913 l0 -508 35 -28 35 -28 0 511 0 511 -27 24 c-16 13 -31 25
-35 25 -5 0 -8 -228 -8 -507z"
      />
      <path
        d="M2097 1327 c-148 -46 -196 -237 -89 -350 52 -55 75 -61 248 -67 156
-6 164 -7 226 -38 79 -39 159 -120 196 -199 24 -51 27 -70 27 -158 0 -93 -2
-105 -33 -167 -41 -84 -128 -167 -209 -200 -58 -23 -62 -23 -535 -26 l-478 -3
0 459 0 458 -260 -260 -260 -261 -262 262 -263 263 2 -413 3 -412 30 -24 31
-24 -3 361 c-2 199 -3 362 -2 362 0 0 103 -104 229 -230 l230 -230 232 232
233 233 0 -418 0 -418 513 3 c465 3 517 5 562 21 116 42 234 156 276 267 31
78 37 203 14 286 -30 111 -112 216 -216 277 -70 41 -149 57 -283 57 -101 0
-126 3 -163 21 -78 38 -107 140 -60 209 46 69 64 75 214 76 132 2 137 3 149
25 7 13 13 27 14 32 0 12 -271 7 -313 -6z"
      />
    </g>
  </svg>
);

export const DribbbleIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    viewBox="0 0 256 256"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <path fill="none" d="M0 0h256v256H0z" />
    <path
      fill="#E74D89"
      d="M128 8.5c66 0 119.4 53.4 119.4 119.3S194 247.2 128 247.2 8.6 193.8 8.6 127.9 62 8.5 128 8.5Z"
    />
    <path
      fill="#B2215A"
      d="M128 255.7c-70.6 0-128-57.3-128-127.8C0 57.3 57.4 0 128 0s128 57.3 128 127.8-57.4 127.9-128 127.9Zm107.9-110.4c-3.7-1.2-33.8-10.1-68.1-4.7 14.3 39.2 20.1 71.2 21.2 77.8 24.6-16.5 42.1-42.7 46.9-73.1Zm-65.2 83.2c-1.6-9.6-8-43-23.3-82.8-.2.1-.5.2-.7.2-61.7 21.5-83.8 64.2-85.8 68.2 18.5 14.4 41.8 23 67.1 23 15.1.1 29.6-3 42.7-8.6ZM46.8 201c2.5-4.2 32.5-53.8 88.9-72.1 1.4-.5 2.9-.9 4.3-1.3-2.7-6.2-5.7-12.4-8.9-18.5-54.6 16.3-107.6 15.6-112.4 15.5 0 1.1-.1 2.2-.1 3.3.1 28.1 10.7 53.7 28.2 73.1ZM21 105.6c4.9.1 49.9.3 101.1-13.3C104 60.1 84.4 33.1 81.6 29.2 50.9 43.6 28.1 71.8 21 105.6Zm81.4-83.8c3 4 22.9 31 40.8 63.9 38.9-14.6 55.3-36.6 57.3-39.4-19.3-17.1-44.7-27.5-72.5-27.5-8.8 0-17.4 1.1-25.6 3Zm110.2 37.1c-2.3 3.1-20.6 26.6-61 43.1 2.5 5.2 5 10.5 7.3 15.8.8 1.9 1.6 3.8 2.4 5.6 36.4-4.6 72.5 2.8 76.1 3.5-.3-25.7-9.5-49.4-24.8-68Z"
    />
  </svg>
);

export const SunIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <g strokeDasharray="2">
        <path d="M12 21v1M21 12h1M12 3v-1M3 12h-1">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            dur="0.2s"
            values="4;2"
          />
        </path>
        <path d="M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5">
          <animate
            fill="freeze"
            attributeName="stroke-dashoffset"
            begin="0.2s"
            dur="0.2s"
            values="4;2"
          />
        </path>
      </g>
      <path
        fill="currentColor"
        d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z"
        opacity="0"
      >
        <set attributeName="opacity" begin="0.5s" to="1" />
      </path>
    </g>
    <g fill="currentColor" fillOpacity="0">
      <path d="m15.22 6.03l2.53-1.94L14.56 4L13.5 1l-1.06 3l-3.19.09l2.53 1.94l-.91 3.06l2.63-1.81l2.63 1.81z">
        <animate
          id="lineMdSunnyFilledLoopToMoonFilledLoopTransition0"
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.6s;lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+6s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M13.61 5.25L15.25 4l-2.06-.05L12.5 2l-.69 1.95L9.75 4l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11l-2.06-.05L18.5 9l-.69 1.95l-2.06.05l1.64 1.25l-.59 1.98l1.7-1.17l1.7 1.17z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+0.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+2.8s"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="m20.828 9.731l1.876-1.439l-2.366-.067L19.552 6l-.786 2.225l-2.366.067l1.876 1.439L17.601 12l1.951-1.342L21.503 12z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+3.4s"
          dur="0.4s"
          values="0;1"
        />
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="lineMdSunnyFilledLoopToMoonFilledLoopTransition0.begin+5.6s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <mask id="lineMdSunnyFilledLoopToMoonFilledLoopTransition1">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="22" cy="2" r="3" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="3;12"
        />
      </circle>
      <circle cx="22" cy="2" r="1">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.1s"
          dur="0.4s"
          values="22;18"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.1s"
          dur="0.4s"
          values="2;6"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.1s"
          dur="0.4s"
          values="1;10"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="6"
      fill="currentColor"
      mask="url(#lineMdSunnyFilledLoopToMoonFilledLoopTransition1)"
    >
      <set attributeName="opacity" begin="0.5s" to="0" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.1s"
        dur="0.4s"
        values="6;10"
      />
    </circle>
  </svg>
);

export const MoonIcon = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <rect x="0" y="0" width="24" height="24" fill="rgba(255, 255, 255, 0)" />
    <g
      fill="none"
      stroke="currentColor"
      strokeDasharray="2"
      strokeDashoffset="2"
      strokeLinecap="round"
      strokeWidth="2"
    >
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.2s"
          dur="0.2s"
          values="M12 19v1M19 12h1M12 5v-1M5 12h-1;M12 21v1M21 12h1M12 3v-1M3 12h-1"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.2s"
          dur="0.2s"
          values="2;0"
        />
      </path>
      <path d="M0 0">
        <animate
          fill="freeze"
          attributeName="d"
          begin="1.5s"
          dur="0.2s"
          values="M17 17l0.5 0.5M17 7l0.5 -0.5M7 7l-0.5 -0.5M7 17l-0.5 0.5;M18.5 18.5l0.5 0.5M18.5 5.5l0.5 -0.5M5.5 5.5l-0.5 -0.5M5.5 18.5l-0.5 0.5"
        />
        <animate
          fill="freeze"
          attributeName="stroke-dashoffset"
          begin="1.5s"
          dur="1.2s"
          values="2;0"
        />
      </path>
      <animateTransform
        attributeName="transform"
        dur="30s"
        repeatCount="indefinite"
        type="rotate"
        values="0 12 12;360 12 12"
      />
    </g>
    <g fill="currentColor">
      <path d="M15.22 6.03L17.75 4.09L14.56 4L13.5 1L12.44 4L9.25 4.09L11.78 6.03L10.87 9.09L13.5 7.28L16.13 9.09L15.22 6.03Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          dur="0.4s"
          values="1;0"
        />
      </path>
      <path d="M19.61 12.25L21.25 11L19.19 10.95L18.5 9L17.81 10.95L15.75 11L17.39 12.25L16.8 14.23L18.5 13.06L20.2 14.23L19.61 12.25Z">
        <animate
          fill="freeze"
          attributeName="fill-opacity"
          begin="0.2s"
          dur="0.4s"
          values="1;0"
        />
      </path>
    </g>
    <g
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    >
      <path d="M7 6 C7 12.08 11.92 17 18 17 C18.53 17 19.05 16.96 19.56 16.89 C17.95 19.36 15.17 21 12 21 C7.03 21 3 16.97 3 12 C3 8.83 4.64 6.05 7.11 4.44 C7.04 4.95 7 5.47 7 6 Z" />
      <set attributeName="opacity" begin="0.6s" to="0" />
    </g>
    <mask id="lineMdMoonFilledToSunnyFilledLoopTransition0">
      <circle cx="12" cy="12" r="12" fill="#fff" />
      <circle cx="18" cy="6" r="12" fill="#fff">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="12;3"
        />
      </circle>
      <circle cx="18" cy="6" r="10">
        <animate
          fill="freeze"
          attributeName="cx"
          begin="0.6s"
          dur="0.4s"
          values="18;22"
        />
        <animate
          fill="freeze"
          attributeName="cy"
          begin="0.6s"
          dur="0.4s"
          values="6;2"
        />
        <animate
          fill="freeze"
          attributeName="r"
          begin="0.6s"
          dur="0.4s"
          values="10;1"
        />
      </circle>
    </mask>
    <circle
      cx="12"
      cy="12"
      r="10"
      fill="currentColor"
      mask="url(#lineMdMoonFilledToSunnyFilledLoopTransition0)"
      opacity="0"
    >
      <set attributeName="opacity" begin="0.6s" to="1" />
      <animate
        fill="freeze"
        attributeName="r"
        begin="0.6s"
        dur="0.4s"
        values="10;6"
      />
    </circle>
  </svg>
);

export const CircularText = ({ className, ...rest }) => (
  <svg
    version="1.0"
    xmlns="http://www.w3.org/2000/svg"
    width="300.000000pt"
    height="300.000000pt"
    viewBox="0 0 300.000000 300.000000"
    preserveAspectRatio="xMidYMid meet"
    {...rest}
    className={`w-full h-auto ${className}`}
  >
    <metadata>
      Created by potrace 1.10, written by Peter Selinger 2001-2011
    </metadata>
    <g
      transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
      stroke="none"
    >
      <path
        d="M1601 2812 c-7 -42 -23 -129 -36 -192 -12 -63 -22 -116 -21 -116 0
-1 18 -4 39 -8 30 -6 37 -4 37 9 0 13 6 12 31 -9 23 -20 42 -26 77 -26 93 0
149 65 139 163 -6 69 -46 108 -116 115 -30 3 -56 0 -64 -7 -22 -18 -24 -4 -9
59 16 67 13 74 -34 83 l-30 6 -13 -77z m171 -139 c27 -25 24 -88 -7 -118 -31
-32 -69 -32 -102 1 -21 21 -24 32 -20 61 4 20 14 44 23 54 21 24 81 25 106 2z"
      />
      <path
        d="M1052 2809 c-17 -12 -32 -22 -32 -24 0 -1 11 -57 25 -125 14 -68 25
-127 25 -132 0 -6 -45 31 -100 82 -102 94 -111 98 -152 67 -15 -12 -15 -23 11
-145 15 -73 24 -132 21 -132 -4 0 -50 41 -102 90 l-97 90 -35 -17 c-20 -9 -36
-19 -36 -22 0 -3 63 -64 140 -134 l140 -128 27 15 c56 31 55 23 28 156 -14 68
-24 124 -22 126 1 2 45 -35 96 -82 51 -46 96 -84 98 -84 11 0 73 42 73 48 0 4
-17 89 -38 189 l-37 182 -33 -20z m-165 -185 c6 -16 -15 -37 -29 -28 -4 3 -8
14 -8 25 0 23 28 26 37 3z m223 -133 c0 -11 -4 -22 -8 -25 -14 -9 -35 12 -29
28 9 23 37 20 37 -3z m-225 -141 c-8 -14 -32 -13 -41 2 -4 6 1 17 12 25 15 11
19 11 27 -2 4 -8 5 -20 2 -25z"
      />
      <path
        d="M1303 2754 c-52 -26 -76 -74 -71 -140 4 -42 11 -61 32 -83 49 -51
156 -60 221 -17 31 20 31 30 3 50 -18 13 -24 13 -42 1 -31 -22 -99 -19 -121 5
-10 11 -16 22 -13 25 2 3 50 10 106 17 97 11 102 13 102 35 0 37 -28 82 -63
103 -39 24 -109 26 -154 4z m129 -66 c21 -21 21 -22 2 -28 -10 -4 -45 -10 -76
-14 -48 -5 -58 -4 -58 9 0 50 91 74 132 33z"
      />
      <path
        d="M2078 2541 c-60 -77 -108 -143 -108 -148 1 -15 172 -133 210 -144
126 -38 259 95 221 222 -15 50 -55 95 -140 158 -38 28 -70 51 -72 51 -2 0 -52
-63 -111 -139z m185 3 c68 -57 83 -104 52 -164 -37 -71 -110 -80 -192 -24 -32
22 -50 41 -46 48 17 26 135 176 140 176 2 0 24 -16 46 -36z"
      />
      <path
        d="M2385 2266 c-42 -18 -83 -69 -91 -112 -9 -51 38 -142 88 -169 41 -22
44 -21 53 16 5 21 2 27 -19 37 -33 15 -61 71 -52 106 3 14 10 26 15 26 5 0 33
-38 63 -85 29 -46 58 -84 64 -85 17 0 73 66 80 96 4 14 2 43 -5 64 -28 96
-114 142 -196 106z m104 -66 c28 -15 44 -61 32 -93 -6 -15 -14 -27 -18 -27
-11 0 -82 117 -75 124 8 9 41 7 61 -4z"
      />
      <path
        d="M450 2230 l-20 -40 19 -77 c11 -43 18 -79 16 -82 -3 -2 -46 21 -97
52 l-93 55 -18 -35 c-10 -19 -17 -36 -15 -37 14 -11 326 -186 331 -186 4 0 14
14 23 32 16 30 16 33 -1 43 -32 18 -55 45 -55 64 0 15 13 21 70 32 68 13 72
16 97 58 14 24 22 41 16 38 -5 -3 -52 -13 -103 -21 -72 -12 -96 -12 -102 -3
-4 6 -14 42 -24 79 -9 38 -18 68 -20 68 -2 0 -13 -18 -24 -40z m59 -240 c11
-34 5 -37 -27 -14 -18 13 -21 19 -11 30 17 21 26 17 38 -16z"
      />
      <path
        d="M2560 1959 c-142 -121 -134 -110 -120 -156 l12 -40 102 -7 c55 -3
124 -9 152 -12 l52 -7 -11 36 c-11 34 -14 36 -67 42 -30 3 -75 6 -100 7 -25 0
-48 3 -53 5 -4 2 29 34 73 70 76 62 81 68 74 97 -3 17 -9 34 -13 38 -3 4 -49
-29 -101 -73z"
      />
      <path
        d="M311 1894 c-52 -44 -65 -141 -26 -201 40 -60 131 -81 192 -43 64 38
92 144 57 212 l-16 31 -24 -24 c-22 -22 -23 -27 -12 -57 30 -80 -68 -140 -131
-81 -30 28 -28 83 3 112 18 17 23 30 19 50 -7 34 -23 34 -62 1z"
      />
      <path
        d="M2560 1672 c-42 -20 -80 -89 -80 -142 0 -19 9 -55 20 -79 l20 -44 24
22 c23 22 24 24 10 58 -9 20 -12 47 -9 63 6 29 41 68 51 57 3 -3 8 -52 11
-109 3 -56 6 -104 8 -106 2 -2 20 0 41 4 134 25 154 228 28 280 -45 19 -82 18
-124 -4z m134 -84 c21 -29 20 -77 -1 -100 -30 -33 -43 -23 -43 36 0 30 -3 61
-6 70 -10 25 32 20 50 -6z"
      />
      <path
        d="M353 1581 c-50 -5 -68 -11 -90 -34 -25 -24 -28 -35 -28 -90 0 -64 19
-127 39 -127 6 0 20 7 30 15 14 11 16 18 8 28 -6 7 -14 31 -18 54 -5 34 -2 45
15 62 30 30 41 26 41 -15 0 -132 71 -194 142 -124 28 28 30 35 26 81 -3 28
-13 58 -23 69 -16 18 -16 20 -2 20 13 0 17 9 17 35 l0 35 -47 -2 c-27 0 -76
-4 -110 -7z m106 -102 c21 -37 8 -79 -24 -79 -28 0 -45 30 -45 81 0 27 3 30
27 27 17 -2 33 -13 42 -29z"
      />
      <path
        d="M2476 1358 c-3 -7 -7 -24 -10 -38 l-5 -26 177 -33 c97 -18 184 -35
193 -37 12 -3 18 5 22 33 4 20 5 38 4 39 -1 2 -77 17 -167 33 -91 17 -175 33
-188 36 -13 3 -24 0 -26 -7z"
      />
      <path
        d="M489 1317 c-11 -8 -14 -23 -11 -49 l4 -36 -68 -21 c-37 -11 -71 -18
-76 -15 -4 3 -8 15 -8 28 0 12 -3 25 -6 28 -8 9 -59 -8 -57 -18 1 -5 4 -21 8
-36 6 -23 3 -27 -25 -33 -29 -6 -31 -9 -24 -38 8 -41 13 -49 28 -44 49 19 56
18 56 -2 0 -13 6 -21 18 -21 29 0 45 16 38 37 -6 18 2 23 65 39 112 29 141 72
105 159 -16 38 -23 41 -47 22z m-150 -161 c8 -10 8 -16 -2 -24 -17 -14 -42 2
-34 22 8 20 21 20 36 2z"
      />
      <path
        d="M2480 1208 c-79 -41 -113 -145 -70 -216 61 -100 199 -94 253 12 69
133 -54 271 -183 204z m93 -70 c47 -25 61 -74 32 -115 -45 -64 -161 -11 -146
67 5 26 44 60 68 60 14 0 34 -5 46 -12z"
      />
      <path
        d="M478 1095 c-50 -28 -59 -72 -33 -159 21 -70 20 -103 -6 -111 -37 -12
-89 58 -89 120 0 22 -4 25 -36 25 l-37 0 7 -42 c9 -53 45 -117 87 -152 58 -49
149 -25 164 44 4 18 -2 59 -15 106 -16 58 -18 80 -9 90 38 46 109 -33 109
-122 0 -34 1 -35 33 -32 31 3 32 5 31 44 -1 53 -46 147 -85 174 -38 28 -87 34
-121 15z"
      />
      <path
        d="M2240 1018 l-23 -31 47 -40 47 -40 -38 -21 c-102 -57 -92 -194 19
-252 76 -40 188 19 188 98 0 24 3 28 18 24 12 -4 26 2 41 18 l22 23 -149 126
-149 126 -23 -31z m151 -181 c28 -19 35 -30 37 -64 3 -34 -1 -44 -24 -62 -15
-11 -36 -21 -46 -21 -25 0 -88 62 -88 87 0 34 43 78 81 82 3 1 21 -9 40 -22z"
      />
      <path
        d="M623 788 l-21 -23 49 -55 49 -54 21 21 22 21 -49 56 c-26 31 -48 56
-49 56 -1 0 -11 -10 -22 -22z"
      />
      <path
        d="M738 598 l-117 -151 23 -18 c12 -10 28 -19 34 -21 5 -2 62 64 126
146 l116 150 -22 23 c-12 13 -26 23 -32 22 -6 0 -64 -68 -128 -151z"
      />
      <path
        d="M2080 701 c-14 -5 -39 -15 -57 -24 -53 -28 -97 -107 -59 -107 8 0 21
-3 30 -6 10 -4 16 -1 16 8 0 20 40 55 72 63 29 7 68 -1 68 -15 0 -5 -38 -33
-85 -62 -46 -29 -85 -58 -85 -65 0 -22 61 -72 95 -79 97 -18 198 77 181 171
-9 47 -59 102 -104 115 -41 11 -38 11 -72 1z m110 -156 c0 -34 -56 -78 -89
-70 -36 9 -50 24 -31 35 8 5 35 22 60 38 50 32 60 32 60 -3z"
      />
      <path
        d="M960 663 c0 -5 -41 -77 -90 -162 -50 -85 -90 -157 -90 -160 0 -10 64
-43 67 -34 2 4 46 80 97 168 l94 160 -26 17 c-28 19 -52 23 -52 11z"
      />
      <path
        d="M1065 598 c-41 -123 -75 -252 -68 -258 4 -4 22 -11 38 -14 30 -7 30
-6 48 63 29 110 69 144 125 105 29 -20 28 -52 -2 -142 -14 -39 -22 -73 -18
-76 4 -2 21 -7 38 -10 l31 -7 27 84 c30 97 33 143 10 175 -31 45 -101 65 -146
41 -17 -9 -19 -8 -14 9 5 16 0 22 -25 31 -40 14 -39 14 -44 -1z"
      />
      <path
        d="M1850 587 c-14 -6 -27 -12 -29 -13 -1 -2 9 -39 24 -84 31 -93 26
-124 -21 -136 -23 -6 -25 -10 -20 -38 10 -48 21 -50 59 -12 30 29 38 33 45 21
7 -13 14 -13 40 -4 37 13 39 -2 -20 167 -22 61 -43 112 -47 111 -3 0 -17 -5
-31 -12z"
      />
      <path
        d="M1516 515 c-22 -22 -20 -62 4 -77 11 -7 20 -23 20 -35 0 -22 -3 -23
-87 -21 l-88 3 -3 -32 -3 -33 90 0 91 0 0 -50 0 -50 -100 0 -100 0 0 -35 0
-35 140 0 140 0 0 185 0 185 -22 0 c-13 0 -32 3 -44 6 -13 3 -28 -1 -38 -11z
m64 -166 c0 -24 -23 -21 -28 4 -2 10 3 17 12 17 10 0 16 -9 16 -21z"
      />
    </g>
  </svg>
);

export const LinkArrow = ({ className, ...rest }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    className={`w-full h-auto ${className}`}
    {...rest}
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
    />
  </svg>
);
