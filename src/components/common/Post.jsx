import React, { forwardRef } from "react";
import BtnWithHover from "../common/BtnWithHover";
import { Avatar } from "@material-ui/core";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

import "./Post.css";

const Post = forwardRef(
  ({ avatarSrc, name, username, imageSrc, timestap, text, verified }, ref) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatarSrc} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {name}
                <span className="post_headerName">
                  {verified && <CheckCircleIcon className="post__badge" />}{" "}
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
          </div>
          {imageSrc && (
            <div className="img-wrapper">
              <img className="img-fluid" src={imageSrc} alt="" />
            </div>
          )}
          <div className="post__footer">
            <BtnWithHover
              Icon={() => <ChatBubbleOutlineIcon fontSize="small" />}
            />
            <BtnWithHover Icon={() => <RepeatIcon fontSize="small" />} />
            <BtnWithHover
              Icon={() => <FavoriteBorderIcon fontSize="small" />}
            />
            <BtnWithHover Icon={() => <PublishIcon fontSize="small" />} />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;
