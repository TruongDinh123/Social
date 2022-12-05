import "./share.scss";
import Image from "../../assets/img.png";
import Map from "../../assets/map.png";
import Friend from "../../assets/friend.png";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { FcAddImage } from "react-icons/fc";
import { BiMap } from "react-icons/bi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
const Share = (user) => {
  const [file, setFile] = useState(null);
  const [desc, setDesc] = useState("");

  const upload = async () => {
    try {
      const formData = new FormData();
      formData.append("file", file);
      const res = await makeRequest.post("/upload", formData);
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newPost) => {
      return makeRequest.post("/posts", newPost);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("[posts]");
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    if (file) imgUrl = await upload();
    mutation.mutate({ desc, img: imgUrl });
    setDesc("");
    setFile(null);
  };
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="share">
      <div className="containerss">
        <div className="top">
          <div className="left">
            <img
              src={"/upload/" + currentUser.profilePic}
              alt=""
              className="img"
            />
            <input
              type="text"
              placeholder={`Chia sẻ cảm nghĩ của bạn ?`}
              onChange={(e) => setDesc(e.target.value)}
              value={desc}
            />
          </div>
          <div className="right">
            {file && (
              <img className="file" alt="" src={URL.createObjectURL(file)} />
            )}
          </div>
        </div>
        <hr />
        <div className="bottom">
          <div className="left">
            <input
              type="file"
              id="file"
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="file">
              <div className="item">
                <FcAddImage className="img"></FcAddImage>
                {/* <img src={Image} alt="" /> */}
                <span>Thêm ảnh</span>
              </div>
            </label>
            <div className="item">
              <BiMap className="img"></BiMap>
              <span>Thêm vị trí</span>
            </div>
            <div className="item">
              <AiOutlineUsergroupAdd className="img"></AiOutlineUsergroupAdd>
              <span>Tag bạn bè</span>
            </div>
          </div>
          <div className="right">
            <button onClick={handleClick}>Đăng bài</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Share;
