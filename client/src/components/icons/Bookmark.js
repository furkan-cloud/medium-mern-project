import * as React from "react"

function Bookmark(props) {
  return (
    <svg width={25} height={25}  viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <path
        d="M19 6a2 2 0 00-2-2H8a2 2 0 00-2 2v14.66h.01c.01.1.05.2.12.28a.5.5 0 00.7.03l5.67-4.12 5.66 4.13a.5.5 0 00.71-.03.5.5 0 00.12-.29H19V6zm-6.84 9.97L7 19.64V6a1 1 0 011-1h9a1 1 0 011 1v13.64l-5.16-3.67a.49.49 0 00-.68 0z"
        fillRule="evenodd" fill="currentColor"
      />
    </svg>
  )
}

export default Bookmark