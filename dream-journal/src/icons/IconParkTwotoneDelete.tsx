import { SVGProps } from "react";

export function IconParkTwotoneDelete(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 48 48"
      {...props}
    >
      <defs>
        <mask id="ipTDelete0">
          <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth="4">
            <path fill="#555" d="M9 10v34h30V10z"></path>
            <path strokeLinecap="round" d="M20 20v13m8-13v13M4 10h40"></path>
            <path fill="#555" d="m16 10l3.289-6h9.488L32 10z"></path>
          </g>
        </mask>
      </defs>
      <path
        fill="currentColor"
        d="M0 0h48v48H0z"
        mask="url(#ipTDelete0)"
      ></path>
    </svg>
  );
}
export default IconParkTwotoneDelete;
