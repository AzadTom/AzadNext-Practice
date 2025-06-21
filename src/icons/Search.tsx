import { SVGProps } from "react";
export function SearchIcon(props:SVGProps<SVGSVGElement>) {
  return (
    <svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 3a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12 6 6 0 010-12z"
        fill="#fff"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.293 15.297a1 1 0 011.32-.084l.094.083 4 3.997a1 1 0 01-1.32 1.498l-.094-.084-4-3.996a1 1 0 010-1.414z"
        fill="#fff"
      />
    </svg>
  )
}

