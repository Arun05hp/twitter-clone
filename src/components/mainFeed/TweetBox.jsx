import React, { useState } from "react";
import { Avatar, Button } from "@material-ui/core";
import BtnWithHover from "../common/BtnWithHover";
import CropOriginalIcon from "@material-ui/icons/CropOriginal";
import GifIcon from "@material-ui/icons/Gif";
import BarChartIcon from "@material-ui/icons/BarChart";
import MoodIcon from "@material-ui/icons/Mood";
import EventIcon from "@material-ui/icons/Event";
import "./TweetBox.css";

import db from "../../firebase.js";
const TweetBox = () => {
  const [tweetMessage, setTweetMessage] = useState("");

  const sendTweet = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      avatarSrc:
        "https://w0.pngwave.com/png/613/636/computer-icons-user-profile-male-avatar-avatar-png-clip-art.png",
      imageSrc: "",
      name: "Arun Kumar",
      text: tweetMessage,
      username: "@ARUN962013",
      timestamp: new Date(),
      verified: true,
    });
    console.log(new Date());
    setTweetMessage("");
  };

  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__wrapper d-flex">
          <Avatar src="https://w0.pngwave.com/png/613/636/computer-icons-user-profile-male-avatar-avatar-png-clip-art.png" />
          <div className="tweetBox__input">
            <textarea
              type="text"
              value={tweetMessage}
              onChange={(e) => setTweetMessage(e.target.value)}
              placeholder="What's happening?"
            />

            <div className="tweetBox__btnContainer d-flex">
              <div className="tweetBox_linkBtn">
                <BtnWithHover Icon={CropOriginalIcon} />
                <BtnWithHover Icon={GifIcon} />
                <BtnWithHover className="md-d-none" Icon={BarChartIcon} />
                <BtnWithHover Icon={MoodIcon} />
                <BtnWithHover className="md-d-none" Icon={EventIcon} />
              </div>
              <Button onClick={sendTweet} className="tweetBox_tweetBtn">
                Tweet
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TweetBox;
