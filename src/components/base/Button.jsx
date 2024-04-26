import React from "react";

function Button({ children, className = "" }) {
  const classes = `bg-secondary-700 flex gap-1 items-center justify-center text-white px-4 py-1 rounded-md ${className}`;
  return <button className={classes}>{children || "Button"}</button>;
}

export default Button;
