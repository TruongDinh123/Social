import Stories from "../../components/stories/Stories";
import Posts from "../../components/posts/Posts";
import Share from "../../components/share/Share";
import Sidebar from "../../components/SideBar Section/Sidebar";
import Body from "../../components/Body Section/Body";
import Top from "../../../src/components/Body Section/Top Section/Top";
import Listing from "../../../src/components/Body Section/Listing Section/Listing";
import Activity from "../../../src/components/Body Section/Activity Section/Activity";
import "./home.scss";

const Home = () => {
  return (
    <div className="mainContent">
      {/* <Stories /> */}
      {/* <Share />
      <Posts /> */}
      {/* <Body></Body> */}
      <Top></Top>
      <div className="bottom flex">
        <Listing></Listing>
        <Activity> </Activity>
      </div>
    </div>
  );
};

export default Home;
