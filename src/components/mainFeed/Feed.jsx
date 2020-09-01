import React from "react";
import TweetBox from "./TweetBox";
import "./Feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <header className="feed__header">
        <h3>Home</h3>
      </header>
      <TweetBox />
    </div>
  );
};

export default Feed;
