import Login from "../src/Auth/login/Login";
import Register from "../src/Auth/register/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "../src/Components/Container/Home/Home";
import Profile from "../src/Auth/profile/Profile";
import Tour from "../src/Components/Travel/Tour/Tour";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "../src/Components/Others/darkModeContext";
import { AuthContext } from "../src/Auth/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Sidebar from "../src/Components/Container/SideBar/Sidebar";
// import Post from "./components/post/Post";
import Posts from "../src/Components/Social/posts/Posts";
import Sivdeos from "../src/Components/Others/videoShorts/Svideos";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";

import Tourdetail from "../src/Components/Travel/Tourdetail/Tourdetail";
import Listing from "../src/Components/Travel/ListTour/Listing";
import Booking from "../src/Components/Travel/Booking/Booking";
import Bookingsubmit from "../src/Components/Travel/Bookingsubmit/Bookingsubmit";
function App() {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);
  const queryClient = new QueryClient();
  const User = false;
  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
        <div className="container" id="container">
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
        // {
        //   path: "/tour/regions/:region_id",
        //   element: <Tour />,
        // },
        
        {
          path: "/tour/",
          element: <Listing />,
        },
         {
          path: "/regions/:region_id",
          element: <Tour />,
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
        {
          path: "/booking-submit/",
          element: <Bookingsubmit />,
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
    // {
    //   path: "/Admin",
    //   element: <Admin />,
    // },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
      {/* <ToastContainer autoClose={3000} position={toast.POSITION.TOP_RIGHT}></ToastContainer> */}
      {/* <Login></Login> */}
    </div>
  );
}

export default App;
