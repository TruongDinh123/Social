import { useContext, useState } from "react";
import "./comments.scss";
import { AuthContext } from "../../../Auth/authContext";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";
import moment from "moment";

const Comments = ({ postId }) => {
  const [desc, setDesc] = useState("");
  const { currentUser } = useContext(AuthContext);

  const { isLoading, error, data } = useQuery(["comments"], () =>
    makeRequest.get("/comments?postId=" + postId).then((res) => {
      return res.data;
    })
  );

  console.log(currentUser)

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (newComment) => {
      return makeRequest.post("/comments", newComment);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries("[comments]");
      },
    }
  );

  const handleClick = async (e) => {
    e.preventDefault();
    let imgUrl = "";
    mutation.mutate({ desc, postId });
    setDesc("");
  };

  return (
    <div className="comments">
      <div className="write">
        <img src={`/upload/` + currentUser.profilePic} alt="" />
        <input
          type="text"
          placeholder="Viết bình luận..."
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className="" onClick={handleClick}>Gửi</button>
      </div>
      {error
        ? "Something went wrong!"
        : isLoading
        ? "Loading..."
        : data?.map((comment) => (
            <div className="comment">
              <img src={`/upload/` + comment.profilePic} alt="" />
              <div className="info">
                <span>{comment.name}</span>
                <p>{comment.desc}</p>
              </div>
              <span className="date">{moment(comment.createAt).fromNow()}</span>
            </div>
          ))}
    </div>
  );
};

export default Comments;
