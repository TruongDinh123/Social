import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";
import Share from "../Share/Share";

const Posts = ({ userId }) => {
  const { isLoading, error, data } = useQuery(["post"], () =>
    makeRequest.get("/posts?userId=" + userId).then((res) => {
      return res.data;
    })
  );

  return (
    <div className="mainContent post">
      
      <Share></Share>
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data?.map((post) => <Post post={post} key={post.id} />)}
      {/* <Activity></Activity> */}
    </div>
  );
};

export default Posts;