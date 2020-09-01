import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "../common/Post";
import "./Feed.css";

import db from "../../firebase.js";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  console.log(posts);
  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) => {
      setPosts(snapshot.docs.map((doc) => doc.data()));
    });
  }, []);

  return (
    <div className="feed">
      <header className="feed__header">
        <h3>Home</h3>
      </header>
      <TweetBox />

      {posts.map((post) => (
        <Post
          avatarSrc={post.avatarSrc}
          name={post.name}
          username={post.username}
          imageSrc={post.imageSrc}
          timestap=""
          text={post.text}
          verified={post.verified}
        />
      ))}
    </div>
  );
};

export default Feed;
