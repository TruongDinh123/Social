import "./svideo.css";

//////////////////////////////////
import React from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/authContext";
import { useContext } from "react";
const Svideo = () => {
  const { currentUser } = useContext(AuthContext);
  return <div className="Svideo"></div>;
};

export default Svideo;
