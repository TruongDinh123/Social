import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import Top from "../../../src/components/Body Section/Top Section/Top";
import Share from "../../../src/components/share/Share";
import Activity from "../../../src/components/Body Section/Activity Section/Activity";

const Posts = ({ userId }) => {
  const { isLoading, error, data } = useQuery(["post"], () =>
    makeRequest.get("/posts?userId=" + userId).then((res) => {
      return res.data;
    })
  );

  console.log(data);
  return (
    <div className="mainContent post">
      <Top></Top>
      <Share></Share>
      {error
        ? "Something went wrong!"
        : isLoading
        ? "loading"
        : data.map((post) => <Post post={post} key={post.id} />)}
      {/* <Activity></Activity> */}
    </div>
  );
};

export default Posts;
