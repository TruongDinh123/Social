import "./share.scss";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Auth/authContext";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";
import { FcAddImage } from "react-icons/fc";
import { BiMap } from "react-icons/bi";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import { toast } from "react-toastify";

const Share = (post) => {
  const [file, setFile] = useState(null);
  const [texts, setDesc] = useState({
    desc: post.desc,
    city: post.city,
  });

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

  const handleChange = (e) => {
        setDesc((prev) => ({...prev, [e.target.name]: [e.target.value]}))
    }
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
    mutation.mutate({ ...texts, img: imgUrl });
    setFile(null);
    toast.success(post)
  };
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="mainContain">
    <div className="share">
        <div className="top">
          <div className="left">
            <img
              src={"/upload/" + currentUser.profilePic}
              alt=""
              className="img"
            />
            <input
              className="input"
              type="text"
              placeholder={`Chia sẻ cảm nghĩ của bạn ?`}
onChange={handleChange}              name="desc"
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
            <div>
                <BiMap className="img"></BiMap>
              <input
                className="input"
                type="text"
                name="city"
                placeholder={`Thêm vị trí`}
onChange={handleChange}              />
            </div>
            
            <div className="item">
              <AiOutlineUsergroupAdd className="img"></AiOutlineUsergroupAdd>
              <span>Tag bạn bè</span>
            </div>
          </div>
          <div className="right">
            <button className="btn" onClick={handleClick}>Đăng bài</button>
          </div>
        </div>
      
    </div>
    </div>
  );
};

export default Share;
