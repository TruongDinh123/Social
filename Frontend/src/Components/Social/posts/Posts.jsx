import Post from "../post/Post";
import "./posts.scss";
import { useQuery } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";
import Share from "../Share/Share";
import { FcFilledFilter } from "react-icons/fc";

const Posts = ({ userId }) => {
  const { isLoading, error, data } = useQuery(["post"], () =>
    makeRequest.get("/posts?userId=" + userId).then((res) => {
      return res.data;
    })
  );

  return (
    <div id="scroll" className="mainContent posts ">

      <Share></Share>
      <div className=" row">

        <div className="content col-9">
          {error
            ? "Something went wrong!"
            : isLoading
              ? "loading"
              : data?.map((post) => <Post post={post} key={post.id} />)}
        </div>
        <div className="filter col-3">
          <h2 className="filter-title">
            <FcFilledFilter></FcFilledFilter>
            Bộ lọc</h2>
          <ul className="filter-wrapper">
            <li className="filter-item">
              <span> Tỉnh thành</span>
              <select name="gender" id="">
                <option value={''}>Sapa</option>
                <option value={''}>Đà Lạt</option>
                <option value={''}>Đà Nẵng</option>
                <option value={''}>Tp Hồ Chí Minh</option>
                <option value={''}>Kiên Giang</option>
              </select>
            </li>
            <li className="filter-item">
              <span>Loại hình</span>
              <select name="gender" id="">
                <option value={''}>Khám phá</option>
                <option value={''}>Tham quan</option>
                <option value={''}>Ăn uống</option>
              </select>
            </li>
            <li></li>
          </ul>
        </div>
      </div>

      <div data-spy="scroll" data-target="#scroll" data-offset="0">

      </div>
    </div>
  );
};

export default Posts;