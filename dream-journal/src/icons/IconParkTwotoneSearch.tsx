import { SVGProps } from "react";

export function IconParkTwotoneSearch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <defs>
        <mask id="ipTSearch0">
          <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
            <path
              fill="#555"
              d="M21 38c9.389 0 17-7.611 17-17S30.389 4 21 4S4 11.611 4 21s7.611 17 17 17Z"
            ></path>
            <path
              strokeLinecap="round"
              d="M26.657 14.343A7.98 7.98 0 0 0 21 12a7.98 7.98 0 0 0-5.657 2.343m17.879 18.879l8.485 8.485"
            ></path>
          </g>
        </mask>
      </defs>
      <path
        fill="currentColor"
        d="M0 0h48v48H0z"
        mask="url(#ipTSearch0)"
      ></path>
    </svg>
  );
}
export default IconParkTwotoneSearch;
