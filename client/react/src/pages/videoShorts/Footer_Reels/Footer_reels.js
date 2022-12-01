import React from "react";
import footer_reels from "../Footer_Reels/footer_reels.scss";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
const Footer_reels = ({ channel, song, likes, comment, shares }) => {
  return (
    <div className="video_footer">
      <div className="video-text">
        <h3>
          {channel} . ({song})
          <button className="video-btn">
            <h4 style={{ color: "white" }}>Follow</h4>
          </button>
        </h3>
      </div>
      {/*  */}
      <div className="footer-buttons">
        <div className="flex-box">
          <FavoriteBorderIcon className="icon"></FavoriteBorderIcon>
          {likes}
        </div>
        {/*  */}
        <div className="flex-box">
          <ChatBubbleOutlineIcon className="icon"></ChatBubbleOutlineIcon>
          {comment}
        </div>
        {/*  */}
        <div className="flex-box">
          <ShareIcon className="icon"></ShareIcon>
          {shares}
        </div>
      </div>
    </div>
  );
};

export default Footer_reels;
