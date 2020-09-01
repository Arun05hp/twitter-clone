import React, { useState, useEffect } from "react";
import TweetBox from "./TweetBox";
import Post from "../common/Post";
import FlipMove from "react-flip-move";
import db from "../../firebase.js";
import "./Feed.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);

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
      <FlipMove>
        {posts.map((post, index) => (
          <Post
            key={index}
            avatarSrc={post.avatarSrc}
            name={post.name}
            username={post.username}
            imageSrc={post.imageSrc}
            timestap=""
            text={post.text}
            verified={post.verified}
          />
        ))}
      </FlipMove>
    </div>
  );
};

export default Feed;
