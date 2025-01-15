import React, { SVGProps } from "react";

export function IconParkTwotoneAdd(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <defs>
        <mask id="ipTAdd0">
          <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
            <rect width="36" height="36" x="6" y="6" fill="#555" rx="3"></rect>
            <path strokeLinecap="round" d="M24 16v16m-8-8h16"></path>
          </g>
        </mask>
      </defs>
      <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTAdd0)"></path>
    </svg>
  );
}
export default IconParkTwotoneAdd;
