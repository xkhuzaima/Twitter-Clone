import {
  BookmarkBorderRounded,
  HomeRounded,
  ListAltOutlined,
  MailOutlineRounded,
  MoreHoriz,
  MoreHorizOutlined,
  NotificationsNoneRounded,
  PersonOutlineOutlined,
  TagRounded,
  Twitter,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import React, { useState } from "react";
import Home from "../../pages/Home/Home";
import Profile from "../../pages/Profile/Profile";
import "./styles.css";

function Sidebar() {
  const [active, setActive] = useState("Home");
  return (
    <div className="appContainer">
      <div className="sideBar">
        <h1>
          <Twitter className="sidebarIcon" />
        </h1>
        <ul className="sideBarList">
          <li
            className="sideBarListItem"
            onClick={() => setActive("Home")}
            style={{ fontWeight: active === "Home" ? "bolder" : "" }}
          >
            <HomeRounded className="sidebarIcon" />
            Home
          </li>
          <li className="sideBarListItem">
            <TagRounded className="sidebarIcon" />
            Explore
          </li>
          <li className="sideBarListItem">
            <NotificationsNoneRounded className="sidebarIcon" />
            Notifications
          </li>
          <li className="sideBarListItem">
            <MailOutlineRounded className="sidebarIcon" />
            Messages
          </li>
          <li className="sideBarListItem">
            <BookmarkBorderRounded className="sidebarIcon" />
            Bookmarks
          </li>
          <li className="sideBarListItem">
            <ListAltOutlined className="sidebarIcon" />
            Lists
          </li>
          <li
            className="sideBarListItem"
            onClick={() => setActive("Profile")}
            style={{ fontWeight: active === "Profile" ? "bolder" : "" }}
          >
            <PersonOutlineOutlined className="sidebarIcon" />
            Profile
          </li>
          <li className="sideBarListItem">
            <MoreHorizOutlined className="sidebarIcon" />
            More
          </li>
        </ul>
        <button className="sideBarTweetButton">Tweet</button>
        <div className="profileSetting">
          <div className="row-nospace">
            <Avatar src="https://yt3.ggpht.com/jdzNjnfkJayS5QpVHzluOt4EjGlvajabT3IOFYY8mSaCiQf5QYDLMQlv72qmuX1hlVQguLckew=s176-c-k-c0x00ffffff-no-rj-mo" />
            <div className="profileSettingInfo">
              <h5>ChillnCode529</h5>
              <p>@ChillnCode529</p>
            </div>
          </div>
          <MoreHoriz />
        </div>
      </div>
      <div>
        {active === "Home" ? <Home /> : null}
        {active === "Profile" ? <Profile /> : null}
      </div>
    </div>
  );
}

export default Sidebar;
