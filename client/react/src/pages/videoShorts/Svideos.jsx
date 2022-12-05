import "./Svideos.scss";
import Comments from "../../components/comments/Comments";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import Video from "../../../src/pages/Video/Video";
import video1 from "../../assets/video1.mp4";
import video2 from "../../assets/video2.mp4";
import video3 from "../../assets/video3.mp4";
const Sivdeos = () => {
  const [desc, setDesc] = useState("");
  const { currentUser } = useContext(AuthContext);
  const data = [
    {
      channel: "aaa",
      song: "song-1",
      url: video1,
      likes: "32",
      comment: "2",
      shares: "23",
      desc: "hii nhac hay qua",
    },
    {
      channel: "bbb",
      song: "song-2",
      url: video2,
      likes: "3",
      comment: "22",
      shares: "23",
      desc: "hii cung binh thuong",
    },
    {
      channel: "ccc",
      song: "song-3",
      url: video3,
      likes: "89",
      comment: "23",
      shares: "29",
    },
  ];
  return (
    <div className="videoTour">
      <center>
        <div className="logo">
          {/* <img alt="logo" className="insta-logo" /> */}
        </div>
        <h3>Reel</h3>
        {/*  */}

        <div className="video-container" id="video-container">
          {/*  */}

          {data.map((list, i) => (
            <Video
              key={i}
              channel={list.channel}
              song={list.song}
              url={list.url}
              likes={list.likes}
              comment={list.comment}
              shares={list.shares}
            />
          ))}

          {/*  */}
        </div>
      </center>
    </div>
  );
};

export default Sivdeos;
