
import "./home.scss";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../../Auth/authContext";

const Home = () => {
    const { currentUser } = useContext(AuthContext);
    console.log(currentUser.id)
  return (
    <div className="home">
      <div className="home-img">
        <img  src="/upload/MPL.jpg" alt="" />
      </div>

      <div className="buttons flex">
        <Link to={`/login`} >
            <div href="" className="btn">ĐĂNG NHẬP</div>
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
