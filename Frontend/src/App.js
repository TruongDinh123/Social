import Login from "../src/Auth/login/Login";
import Profile from "../src/Auth/profile/Profile";
import Register from "../src/Auth/register/Register";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
  Navigate,
} from "react-router-dom";
import Home from "../src/components/Container/Home/Home";
import Tour from "../src/components/Travel/Tour/Tour";
import "./style.scss";
import { useContext } from "react";
import { DarkModeContext } from "../src/context/darkModeContext";
import { AuthContext } from "../src/context/authContext";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Sidebar from "../src/components/Container/SideBar/Sidebar";
// import Post from "./components/post/Post";
import Posts from "../src/components/Social/posts/Posts";
import Sivdeos from "../src/components/Others/videoShorts/Svideos";
import { gapi } from "gapi-script";
import GoogleLogin from "react-google-login";
import Top from "./components/Container/Navbar/Navbar"
import Tourdetail from "../src/components/Travel/Tourdetail/Tourdetail";
import Listing from "../src/components/Travel/ListTour/Listing";
import Booking from "../src/components/Travel/Booking/Booking";
import Activities from "../src/components/Travel/Activities/Activities";
import Bookingsubmit from "../src/components/Travel/BookingList/BookingList";
import Key from "../src/components/Others/Key/Key";
function App() {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);
  const queryClient = new QueryClient();
  const User = false;
  const Layout = () => {
    return (
      <QueryClientProvider client={queryClient}>
          <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <div className="VieTripSocial" >
          <Top />
          <div style={{ display: "flex" }}>
              <Sidebar />
            <div style={{ width: '83.33%' }}>
              <Outlet />
            </div>
          </div>
                  </div>

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
          path: "/tours/",
          element: <Listing />,
        },
        {
          path: "/activities/",
          element: <Activities />,
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
          path: "/booking-list/",
          element: <Bookingsubmit />,
        },
        {
          path: "/key/",
          element: <Key />,
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
