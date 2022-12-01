import React from "react";
import headerReels from "../Header_Reels/headerReels.scss";

////imort icont//
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import PhotoCameraIcon from "@mui/icons-material/PhotoCamera";
const HeaderReels = () => {
  return (
    <div className="video_header">
      <ArrowBackIcon></ArrowBackIcon>
      <h3>Reels</h3>
      <PhotoCameraIcon></PhotoCameraIcon>
    </div>
  );
};

export default HeaderReels;
