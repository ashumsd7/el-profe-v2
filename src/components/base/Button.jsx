import React from "react";

function Button({ children, className = "", disabled }) {
  const classes = `bg-primary-500 flex gap-1 items-center justify-center text-white px-4 py-1 rounded-md ${className}`;
  return (
    <button disabled={disabled} className={classes}>
      {children || "Button"}
    </button>
  );
}

export default Button;
