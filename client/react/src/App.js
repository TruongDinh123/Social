import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import 'bootstrap/dist/css/bootstrap.min.css';

// import Posts from "./pages/posts/Posts";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import LeftBar from "./components/leftBar/LeftBar";
import RightBar from "./components/rightBar/RightBar";
import Home from "./pages/home/Home";
import Profile from "./pages/profile/Profile";
import Tour from "../src/components/tour/Tour";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import { AuthContext } from "./context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Sidebar from "./components/SideBar Section/Sidebar";
import Top from "../src/components/Body Section/Top Section/Top";
import Activity from "../src/components/Body Section/Activity Section/Activity";
import Body from "./components/Body Section/Body";
// import Post from "./components/post/Post";
import Posts from "../src/components/posts/Posts";
import Sivdeos from "./pages/videoShorts/Svideos";
import Tourdetail from "./components/Tourdetail/Tourdetail";
import Listing from "./components/Body Section/Listing Section/Listing";
import Update from "./components/update/Update";

import Admin from "./pages/Admin/Admin";
import Booking from "./components/booking/Booking";
function App() {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);
  const queryClient = new QueryClient();
  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="container">
          <Sidebar />
          <Outlet />
        </div>
      </QueryClientProvider>
    );
  };
  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }
    return children;
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
        {
          path: "/tour/regions/:region_id",
          element: <Tour />,
        },
        
        {
          path: "/tour/",
          element: <Listing />,
        },
        {
          path: "/posts/",
          element: <Posts />,
        },
        {
          path: "/reels/",
          element: <Sivdeos />,
        },
        {
          path: "/tourdetail/:tour_id",
          element: <Tourdetail />,
        },
        {
          path: "/tours/:tour_id/booking",
          element: <Booking />,
        },
        
        
      ],
    }, //tới trang user
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/Admin",
      element: <Admin />,
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );

  ////////////////////////////////////////
  // return (
  //   <div className="container">
  //     <Sidebar></Sidebar>
  //     <Body></Body>
  //   </div>
  // );
}

export default App;
