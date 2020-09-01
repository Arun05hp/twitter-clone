import React from "react";
import { Avatar, Button } from "@material-ui/core";
import BtnWithHover from "../common/BtnWithHover";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import GifIcon from "@material-ui/icons/Gif";
import BarChartIcon from "@material-ui/icons/BarChart";
import MoodIcon from "@material-ui/icons/Mood";
import EventIcon from "@material-ui/icons/Event";

import "./TweetBox.css";
const TweetBox = () => {
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__wrapper d-flex">
          <Avatar src="https://w0.pngwave.com/png/613/636/computer-icons-user-profile-male-avatar-avatar-png-clip-art.png" />
          <div className="tweetBox__input">
            <input type="text" placeholder="What's happening?" />

            <div className="tweetBox__btnContainer d-flex">
              <div className="tweetBox_linkBtn">
                <BtnWithHover Icon={CropOriginalIcon} />
                <BtnWithHover Icon={GifIcon} />
                <BtnWithHover className="md-d-none" Icon={BarChartIcon} />
                <BtnWithHover Icon={MoodIcon} />
                <BtnWithHover className="md-d-none" Icon={EventIcon} />
              </div>
              <Button className="tweetBox_tweetBtn">Tweet</Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
