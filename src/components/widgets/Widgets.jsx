import React from "react";
import { TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
import "./Widgets.css";
const Widgets = () => {
  return (
    <div className="widgets md-d-none">
      <div className="widgets__inputWrapper">
        <div className="widgets__input d-flex">
          <SearchIcon className="widgets__searchIcon" />
          <input type="text" placeholder="Search Twitter" />
        </div>
      </div>

      <div className="widgets__container">
        <h3>What’s happening</h3>
        <TwitterTweetEmbed tweetId={"1298097183904817152"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="AltCampus"
          options={{ height: 400 }}
          noScrollbar
        />
      </div>
    </div>
  );
};

export default Widgets;
