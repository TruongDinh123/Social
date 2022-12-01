import Stories from "../../components/stories/Stories";
import Posts from "../../components/posts/Posts";
import Share from "../../components/share/Share";
import Sidebar from "../../components/SideBar Section/Sidebar";
import Body from "../../components/Body Section/Body";
import Top from "../../components/Body Section/Top Section/Top";
import Listing from "../../components/Body Section/Listing Section/Listing";
import Activity from "../../components/Body Section/Activity Section/Activity";
import "./home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home-img">
        <img  src="../upload/MPL.jpg" alt="" />
      </div>

      <div className="buttons flex">
        <Link to={Listing} >
            <a href="" className="btn">Đặt Tour</a>
        </Link>
       
        <Link to={`/posts} `}>
            <a href="#" className="btn transparent">Mạng xã hội</a>
        </Link>
      </div>
     
      {/* <Stories /> */}
      {/* <Share />
      <Posts /> */}
      {/* <Body></Body> */}
      {/* <Top></Top>
      <div className="bottom flex">
        <Listing></Listing>
        <Activity> </Activity>
      </div> */}
    </div>
  );
};

export default Home;
