import "./post.scss";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteOutlinedIcon from "@mui/icons-material/FavoriteOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Link } from "react-router-dom";
import Comments from "../comments/Comments";
import { useState } from "react";
import moment from "moment";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";
import { useContext } from "react";
import { AuthContext } from "../../../context/authContext";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPinLock } from "@fortawesome/free-solid-svg-icons";
import { FcClearFilters, FcFilledFilter } from "react-icons/fc";
const Post = ({ post }) => {
  const [commentOpen, setCommentOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["likes", post.id], () =>
    makeRequest.get("/likes?postId=" + post.id).then((res) => {
      return res.data;
    })
  );


  const queryClient = useQueryClient();

  const mutation = useMutation(
    (liked) => {
      if (liked) return makeRequest.delete("/likes?postId=" + post.id);
      return makeRequest.post("/likes", { postId: post.id });
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["likes"]);
      },
    }
  );
  const deleteMutation = useMutation(
    (postId) => {
      return makeRequest.delete("/posts/" + postId);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(["posts"]);
        toast.success(post);

      },
    }
  );

  const handleLike = () => {
    mutation.mutate(data.includes(currentUser.id));
  };

  const handleDelete = () => {
    deleteMutation.mutate(post.id);
  };

  return (
    <div className="mainContain">
      <div className="post row">
        <div className="post-info ">
          <div className="user">
            <div className="userInfo">
              <img src={"/upload/" + post.profilePic} alt="" />
              <div className="user-details">
                <Link
                  to={`/profile/${post.userId}`}
                  style={{ textDecoration: "none", color: "inherit" }}
                >
                  <span className="name">{post.name}</span>
                </Link>
                <span className="date">{moment(post.createAt).fromNow()}</span>
              </div>
            </div>
            <MoreHorizIcon className="post-action" onClick={() => setMenuOpen(!menuOpen)} />
            {menuOpen && post.userId === currentUser.id && (
              <button className="btn" onClick={handleDelete}>Xóa</button>
            )}
          </div>
          <div className="content">
            <p>{post.desc}</p>
            <span className="location">
              <FontAwesomeIcon icon={faLocationPinLock}></FontAwesomeIcon>
              {post.city}
            </span>
            <img src={"/upload/" + post.img} alt="" />
          </div>
          <div className="info">
            <div className="lst_icon">
              <div className="item">
                {isLoading ? (
                  "loading"
                ) : data.includes(currentUser.id) ? (
                  <FavoriteOutlinedIcon
                    style={{ color: "red" }}
                    onClick={handleLike}
                  />
                ) : (
                  <FavoriteBorderOutlinedIcon onClick={handleLike} />
                )}
                {data?.length} lượt thích
              </div>
              <div className="item" onClick={() => setCommentOpen(!commentOpen)}>
                <TextsmsOutlinedIcon />
                Bình luận
              </div>
              <div className="item">
                <ShareOutlinedIcon />
                Chia sẻ
              </div>
            </div>
          </div>
          {commentOpen && <Comments postId={post.id} />}
        </div>

      </div>

    </div>
  );
};

export default Post;

///////////////////////////////////////////////////////////////////////////////////
