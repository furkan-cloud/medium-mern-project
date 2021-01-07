import * as React from "react"

function DoubleBookmark(props) {
  return (
    <svg
      width={25}
      height={25}
      viewBox="0 0 25 25"
      className="prefix__hf"
      {...props}
    >
      <path d="M16 6a2 2 0 012 2v13.66h-.01a.5.5 0 01-.12.29.5.5 0 01-.7.03l-5.67-4.13-5.66 4.13a.5.5 0 01-.7-.03.48.48 0 01-.13-.29H5V8c0-1.1.9-2 2-2h9zM6 8v12.64l5.16-3.67a.49.49 0 01.68 0L17 20.64V8a1 1 0 00-1-1H7a1 1 0 00-1 1z" fill="currentColor"/>
      <path d="M21 5v13.66h-.01a.5.5 0 01-.12.29.5.5 0 01-.7.03l-.17-.12V5a1 1 0 00-1-1h-9a1 1 0 00-1 1H8c0-1.1.9-2 2-2h9a2 2 0 012 2z" fill="currentColor"/>
    </svg>
  )
}

export default DoubleBookmark