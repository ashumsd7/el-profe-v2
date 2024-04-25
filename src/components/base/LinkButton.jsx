import React from "react";

function LinkButton({ className, onClick, children }) {
  return (
    <button
      onClick={onClick}
      className={className}
      class="font-extrabold text-xl cursor-pointer tracking-wider   text-center hover:text-primary-50 text-primary-100 "
    >
      {children}
    </button>
  );
}

export default LinkButton;
