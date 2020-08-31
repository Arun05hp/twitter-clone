import React from "react";
import "./SidebarBtn.css";

const SidebarBtn = ({ active, btnText, Icon }) => {
  return (
    <div className={`sideBtn ${active && "sideBtn--active"}`}>
      <Icon />
      <h3>{btnText}</h3>
    </div>
  );
};

export default SidebarBtn;
