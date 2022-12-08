import React, { useRef, useState, useEffect } from "react";
import "../Video/Video.scss";
import HeaderReels from "../videoShorts/Header_Reels/HeaderReels";
import Footer_reels from "../videoShorts/Footer_Reels/Footer_reels";
const Video = ({ channel, song, url, likes, comment, shares }) => {
  const [isVideoPlaying, setisVideoPlaying] = useState(true);
  const videoRef = useRef();

  const onVideoClick = () => {
    if (isVideoPlaying) {
      videoRef.current.pause();
      setisVideoPlaying(false);
    } else {
      videoRef.current.play();
      setisVideoPlaying(true);
    }
  };
  useEffect(() => {
    const scroll = document.getElementById("video-container");

    if (scroll) {
      scroll.addEventListener("scroll", () => {
        videoRef.current.pause();
      });
    }
  }, []);

  return (
    <div className="video-cards">
      <HeaderReels></HeaderReels>
      <video
        onClick={onVideoClick}
        className="video-player"
        ref={videoRef}
        src={url}
        loop
        autoPlay={true}
      ></video>
      <Footer_reels
        channel={channel}
        song={song}
        likes={likes}
        comment={comment}
        shares={shares}
      ></Footer_reels>
    </div>
  );
};

export default Video;
