import React from "react";
import "./SidebarBtn.css";

const SidebarBtn = ({ active, btnText, Icon }) => {
  return (
    <div>
      <div className={`sideBtn ${active ? "sideBtn--active" : ""}`}>
        <Icon />
        <h3 className="md-d-none">{btnText}</h3>
      </div>
    </div>
  );
};

export default SidebarBtn;
