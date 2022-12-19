import "./update.scss"
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { makeRequest } from "../../../axios";
import { AuthContext } from "../../../context/authContext";
import { useLocation } from "react-router-dom";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";

const Update = ({ setOpenUpdate, user }) => {
    const { currentUser } = useContext(AuthContext);

    const queryClient = useQueryClient();

    const handleClick = async (e) => {

    };
    return (
        <div className="requiredLogin">
            Vui lòng đăng nhập !
            <Link to="/login">
                <button className="btn">
                    Đăng nhập</button>
            </Link>
            <button className="btn-delete" onClick={handleClick}>X</button>

        </div>
    )
}

export default Update