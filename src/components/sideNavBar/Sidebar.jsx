import React from "react";
import SidebarBtn from "./SidebarBtn";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import Home from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <TwitterIcon />
      <SidebarBtn btnText="Home" Icon={Home} />
      <SidebarBtn btnText="Explore" Icon={SearchIcon} />
      <SidebarBtn btnText="Notifications" Icon={NotificationsNoneIcon} />
      <SidebarBtn btnText="Messages" Icon={MailOutlineIcon} />
      <SidebarBtn btnText="Bookmarks" Icon={BookmarkBorderIcon} />
      <SidebarBtn btnText="Lists" Icon={ListAltIcon} />
      <SidebarBtn btnText="Profile" Icon={PermIdentityIcon} />
      <SidebarBtn btnText="More" Icon={MoreHorizIcon} />
    </div>
  );
};

export default Sidebar;
