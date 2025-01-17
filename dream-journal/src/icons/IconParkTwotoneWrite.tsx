import { SVGProps } from "react";

export function IconParkTwotoneWrite(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <defs>
        <mask id="ipTWrite0">
          <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
            <path
              fill="#555"
              d="M5.325 43.5h8.485l31.113-31.113l-8.486-8.485L5.325 35.015z"
            ></path>
            <path strokeLinecap="round" d="m27.952 12.387l8.485 8.485"></path>
          </g>
        </mask>
      </defs>
      <path fill="currentColor" d="M0 0h48v48H0z" mask="url(#ipTWrite0)"></path>
    </svg>
  );
}
export default IconParkTwotoneWrite;
