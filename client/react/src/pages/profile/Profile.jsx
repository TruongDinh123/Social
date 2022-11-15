// import "./profile.scss";
// import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import PinterestIcon from "@mui/icons-material/Pinterest";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import PlaceIcon from "@mui/icons-material/Place";
// import LanguageIcon from "@mui/icons-material/Language";
// import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// import MoreVertIcon from "@mui/icons-material/MoreVert";
// import Posts from "../../components/posts/Posts";
// import Update from "../../components/update/Update";

// import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
// import { makeRequest } from "../../axios";
// import { AuthContext } from "../../context/authContext";
// import { useLocation } from "react-router-dom";
// import { useContext, useState } from "react";

// const Profile = () => {
//   const [openUpdate, setOpenUpdate] = useState(false);
//   const { currentUser } = useContext(AuthContext);
//   const userId = parseInt(useLocation().pathname.split("/")[2]);

//   const { isLoading, error, data } = useQuery(["user"], () =>
//     makeRequest.get("/users/find/" + userId).then((res) => {
//       return res.data;
//     })
//   );

//   const { isLoading: rIsLoading, data: relationshipData } = useQuery(
//     ["relationship"],
//     () =>
//       makeRequest.get("/relationships?followedUserId" + userId).then((res) => {
//         return res.data;
//       })
//   );
//   const queryClient = useQueryClient();
//   const mutation = useMutation(
//     (following) => {
//       if (following)
//         return makeRequest.delete("/relationships?userId=" + userId);
//       return makeRequest.post("/relationships", { userId });
//     },
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries("[relationship]");
//       },
//     }
//   );

//   const handleFollow = () => {
//     mutation.mutate(relationshipData??.includes(currentUser.id));
//   };
//   return (
//     <div className="profilesss">
//       {isLoading ? (
//         "loading"
//       ) : (
//         <>
//           <div className="imagesProfile">
//             <img
//               src={"../upload/" + data?.coverPic}
//               alt=""
//               className="coverPic"
//             />
//             <img
//               src={"../upload/" + data?.profilePic}
//               alt=""
//               className="profilePic"
//             />
//           </div>
//           <div className="profileContainer">
//             <div className="uInfo">
//               <div className="left">
//                 <a href="http://facebook.com">
//                   <FacebookTwoToneIcon fontSize="large" />
//                 </a>
//                 <a href="http://facebook.com">
//                   <InstagramIcon fontSize="large" />
//                 </a>
//                 <a href="http://facebook.com">
//                   <TwitterIcon fontSize="large" />
//                 </a>
//                 <a href="http://facebook.com">
//                   <LinkedInIcon fontSize="large" />
//                 </a>
//                 <a href="http://facebook.com">
//                   <PinterestIcon fontSize="large" />
//                 </a>
//               </div>
//               <div className="center">
//                 <span>{data?.name}</span>
//                 <div className="info">
//                   <div className="item">
//                     <PlaceIcon />
//                     <span>{data?.city}</span>
//                   </div>
//                   <div className="item">
//                     <LanguageIcon />
//                     <span>lama.dev</span>
//                   </div>
//                 </div>
//                 {rIsLoading ? (
//                   "loading"
//                 ) : userId === currentUser.id ? (
//                   <button onClick={() => setOpenUpdate(true)}>
//                     Chỉnh sửa trang cá nhân
//                   </button>
//                 ) : (
//                   <button onClick={handleFollow}>
//                     {relationshipData??.includes(currentUser.id)
//                       ? "Following"
//                       : "Follow"}
//                   </button>
//                 )}
//               </div>
//               <div className="right">
//                 <EmailOutlinedIcon />
//                 <MoreVertIcon />
//               </div>
//             </div>
//             <Posts userId={userId} />
//           </div>
//         </>
//       )}
//       {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
//     </div>
//   );
// };

// export default Profile;

// /////////////////////////////////////////////////////////////////////////////////////

// // import "./profile.scss";
// // import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
// // import LinkedInIcon from "@mui/icons-material/LinkedIn";
// // import InstagramIcon from "@mui/icons-material/Instagram";
// // import PinterestIcon from "@mui/icons-material/Pinterest";
// // import TwitterIcon from "@mui/icons-material/Twitter";
// // import PlaceIcon from "@mui/icons-material/Place";
// // import LanguageIcon from "@mui/icons-material/Language";
// // import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
// // import MoreVertIcon from "@mui/icons-material/MoreVert";
// // // import Posts from "../../components/posts/Posts";

// // const Profile = () => {
// //   return (
// //     <div className="profilesss">
// //       <div className="imagesProfile">
// //         <img
// //           src="https://images.pexels.com/photos/13440765/pexels-photo-13440765.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
// //           alt=""
// //           className="coverPic"
// //         />
// //         <img
// //           src="https://images.pexels.com/photos/14028501/pexels-photo-14028501.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
// //           alt=""
// //           className="profilePic"
// //         />
// //       </div>
// //       <div className="profileContainer">
// //         <div className="uInfo">
// //           <div className="left">
// //             <a href="http://facebook.com">
// //               <FacebookTwoToneIcon fontSize="large" />
// //             </a>
// //             <a href="http://facebook.com">
// //               <InstagramIcon fontSize="large" />
// //             </a>
// //             <a href="http://facebook.com">
// //               <TwitterIcon fontSize="large" />
// //             </a>
// //             <a href="http://facebook.com">
// //               <LinkedInIcon fontSize="large" />
// //             </a>
// //             <a href="http://facebook.com">
// //               <PinterestIcon fontSize="large" />
// //             </a>
// //           </div>
// //           <div className="center">
// //             <span>Jane Doe</span>
// //             <div className="info">
// //               <div className="item">
// //                 <PlaceIcon />
// //                 <span>USA</span>
// //               </div>
// //               <div className="item">
// //                 <LanguageIcon />
// //                 <span>lama.dev</span>
// //               </div>
// //             </div>
// //             <button>follow</button>
// //           </div>
// //           <div className="right">
// //             <EmailOutlinedIcon />
// //             <MoreVertIcon />
// //           </div>
// //         </div>
// //         {/* <Posts /> */}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Profile;

import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";
import { useQuery, useQueryClient, useMutation } from "@tanstack/react-query";
import { makeRequest } from "../../axios";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/authContext";
import Update from "../../components/update/Update";
import { useState } from "react";

const Profile = () => {
  const [openUpdate, setOpenUpdate] = useState(false);
  const { currentUser } = useContext(AuthContext);

  const userId = parseInt(useLocation().pathname.split("/")[2]);

  const { isLoading, error, data } = useQuery(["user"], () =>
    makeRequest.get("/users/find/" + userId).then((res) => {
      return res.data;
    })
  );

  const { isLoading: rIsLoading, data: relationshipData } = useQuery(
    ["relationship"],
    () =>
      makeRequest.get("/relationships?followedUserId=" + userId).then((res) => {
        return res.data;
      })
  );

  const queryClient = useQueryClient();

  const mutation = useMutation(
    (following) => {
      if (following)
        return makeRequest.delete("/relationships?userId=" + userId);
      return makeRequest.post("/relationships", { userId });
    },
    {
      onSuccess: () => {
        // Invalidate and refetch
        queryClient.invalidateQueries(["relationship"]);
      },
    }
  );

  const handleFollow = () => {
    mutation.mutate(relationshipData?.includes(currentUser.id));
  };

  return (
    <div className="profilesss">
      {isLoading ? (
        "loading"
      ) : (
        <>
          <div className="imagesProfile">
            <img src={"/upload/" + data.coverPic} alt="" className="cover" />
            <img
              src={"/upload/" + data.profilePic}
              alt=""
              className="profilePic"
            />
          </div>
          <div className="profileContainer">
            <div className="uInfo">
              <div className="left">
                <a href="http://facebook.com">
                  <FacebookTwoToneIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <InstagramIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <TwitterIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <LinkedInIcon fontSize="large" />
                </a>
                <a href="http://facebook.com">
                  <PinterestIcon fontSize="large" />
                </a>
              </div>
              <div className="center">
                <span>{data.name}</span>
                <div className="info">
                  <div className="item">
                    <PlaceIcon />
                    <span>{data.city}</span>
                  </div>
                  <div className="item">
                    <LanguageIcon />
                    <span>{data.website}</span>
                  </div>
                </div>
                {rIsLoading ? (
                  "loading"
                ) : userId === currentUser.id ? (
                  <button onClick={() => setOpenUpdate(true)}>
                    Cập nhật trang cá nhân
                  </button>
                ) : (
                  <button onClick={handleFollow}>
                    {relationshipData?.includes(currentUser.id)
                      ? "Following"
                      : "Follow"}
                  </button>
                )}
              </div>
              <div className="right">
                <EmailOutlinedIcon />
                <MoreVertIcon />
              </div>
            </div>
            <Posts userId={userId} />
          </div>
        </>
      )}
      {openUpdate && <Update setOpenUpdate={setOpenUpdate} user={data} />}
    </div>
  );
};

export default Profile;
