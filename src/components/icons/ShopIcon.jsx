import React from "react";

function ShopIcon({ className = "" }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
    >
      <g fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M3 10v9a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-9" />
        <path
          stroke-miterlimit="16"
          d="M14.833 21v-6a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v6"
        />
        <path d="m21.818 9.364l-1.694-5.929A.6.6 0 0 0 19.547 3H15.5l.475 5.704a.58.58 0 0 0 .278.45c.39.233 1.152.663 1.747.846c1.016.313 2.5.2 3.346.096a.57.57 0 0 0 .472-.732Z" />
        <path d="M14 10c.568-.175 1.288-.574 1.69-.812a.58.58 0 0 0 .28-.549L15.5 3h-7l-.47 5.639a.58.58 0 0 0 .28.55c.402.237 1.122.636 1.69.811c1.493.46 2.507.46 4 0Z" />
        <path d="m3.876 3.435l-1.694 5.93a.57.57 0 0 0 .472.73c.845.105 2.33.217 3.346-.095c.595-.183 1.358-.613 1.747-.845a.58.58 0 0 0 .278-.451L8.5 3H4.453a.6.6 0 0 0-.577.435Z" />
      </g>
    </svg>
  );
}

export default ShopIcon;