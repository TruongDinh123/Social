import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tour from "./pages/Tour";
import AddTour from "./pages/Addtour";
import UpdateTour from "./pages/Updatetour";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./pages/Header";
import User from "./pages/user/User";
import Login from "./pages/login/Login";
function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/tour" element={<Tour></Tour>}></Route>
          <Route path="/add" element={<AddTour></AddTour>}></Route>
          <Route
            path="/update/:tour_id"
            element={<UpdateTour></UpdateTour>}
          ></Route>
          <Route path="/user" element={<User></User>}></Route>
        </Routes>
      </BrowserRouter>
      <ToastContainer autoClose={3000} position={toast.POSITION.BOTTOM_LEFT} />
    </div>
  );
}

export default App;
