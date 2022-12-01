import { BrowserRouter, Route, Routes } from "react-router-dom";
import Tour from "./pages/Tour";
import AddTour from "./pages/Addtour";
import UpdateTour from "./pages/Updatetour";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Header from "./pages/Header";
import User from "./pages/user/User";
import Login from "./pages/login/Login";
function App() {
  const queryClient = new QueryClient();

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/" element={<Tour></Tour>}></Route>
          <Route path="/add" element={<AddTour></AddTour>}></Route>
          <Route
            path="/update/:tour_id"
            element={<UpdateTour></UpdateTour>}
          ></Route>
          <Route path="/user" element={<User></User>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
