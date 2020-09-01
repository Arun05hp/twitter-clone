import React from "react";
import TweetBox from "./TweetBox";
import "./Feed.css";
import Post from "../common/Post";

const Feed = () => {
  return (
    <div className="feed">
      <header className="feed__header">
        <h3>Home</h3>
      </header>
      <TweetBox />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
