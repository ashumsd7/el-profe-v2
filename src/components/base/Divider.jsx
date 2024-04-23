import React from "react";

function Divider({ className }) {
  const classes = `border border-t-4 border-yellow-500 ${className}`;
  return <div className={classes}></div>;
}

export default Divider;
