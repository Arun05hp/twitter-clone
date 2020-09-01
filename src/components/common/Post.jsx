import React from "react";
import BtnWithHover from "../common/BtnWithHover";
import { Avatar } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

import "./Post.css";

const Post = ({ avatar, name, username, image, timestap, text, verified }) => {
  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar src="https://w0.pngwave.com/png/613/636/computer-icons-user-profile-male-avatar-avatar-png-clip-art.png" />
      </div>
      <div className="post__body">
        <div className="post__header">
          <div className="post__headerText">
            <h3>
              Arun Kumar
              <span>
                <CheckCircleIcon className="post__badge" /> @arun0596
              </span>
            </h3>
          </div>
          <div className="post__headerDescription">
            <p>Twitter Clone</p>
          </div>
        </div>
        <img
          src="https://ipglab.com/wp-content/uploads/2016/02/Twitter-Gifs.gif"
          alt=""
        />
        <div className="post__footer">
          <BtnWithHover
            Icon={() => <ChatBubbleOutlineIcon fontSize="small" />}
          />
          <BtnWithHover Icon={() => <RepeatIcon fontSize="small" />} />
          <BtnWithHover Icon={() => <FavoriteBorderIcon fontSize="small" />} />
          <BtnWithHover Icon={() => <PublishIcon fontSize="small" />} />
        </div>
      </div>
    </div>
  );
};

export default Post;
