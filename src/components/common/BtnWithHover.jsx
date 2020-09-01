import React from "react";
import "./BtnWithHover.css";
const BtnWithHover = ({ Icon, className }) => {
  return (
    <div className={`btnWithHover ${className ? className : ""}`}>
      <Icon />
    </div>
  );
};

export default BtnWithHover;
