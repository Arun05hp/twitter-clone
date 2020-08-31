import React from "react";
import "./SidebarBtn.css";

const SidebarBtn = ({ btnText, Icon }) => {
  return (
    <div className="sideBtn">
      <Icon />
      <h3>{btnText}</h3>
    </div>
  );
};

export default SidebarBtn;
