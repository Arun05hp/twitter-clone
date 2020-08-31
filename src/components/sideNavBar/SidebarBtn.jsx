import React from "react";
import "./SidebarBtn.css";

const SidebarBtn = ({ btnText, Icon }) => {
  return (
    <div className="sideBtn">
      <Icon />
      <h2>{btnText}</h2>
    </div>
  );
};

export default SidebarBtn;
