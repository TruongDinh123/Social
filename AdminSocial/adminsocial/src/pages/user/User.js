import React, { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import { Link, useLocation } from "react-router-dom";
import Header from "../Header";

const User = () => {
  const [Users, setUsers] = useState([]);
  const [onEdit, setOnEdit] = useState(null);
  const [searchApiData, setSearchApiData] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800/api/users");
      setUsers(res.data.sort((a, b) => (a.id > b.id ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  const handleDelete = async (id) => {
    await axios
      .delete("http://localhost:8800/api/users/delete/" + id)
      .then(({ data }) => {
        const newArray = Users.filter((user) => user.id !== id);

        setUsers(newArray);
        toast.success(data);
      })
      .catch(({ data }) => toast.error(data));

    // Tours(null);
  };
  return (
    <>
      <Header></Header>

      <div className="form">
        <div>
          <input
            className="search-input"
            type="text"
            placeholder="Search"
            onChange={(event) => {
              setSearchApiData(event.target.value);
            }}
          />
        </div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>User Name</th>
              <th>profile Pic</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          {Users.filter((val) => {
            if (searchApiData == "") {
              return val;
            } else if (
              val.username.toLowerCase().includes(searchApiData.toLowerCase())
            ) {
              return val;
            }
          }).map((user) => (
            <tbody>
              <tr className="user" key={user.id}>
                <td>
                  <p>{user.username}</p>
                </td>
                <td>{user.coverPic && <img src={user.profilePic}></img>}</td>
                <td>
                  <p className="textDesc">{user.city}</p>
                </td>
                <td>
                  <span>{user.website}</span>
                </td>
                <td>
                  <button onClick={() => handleDelete(user.id)}>Delete</button>
                </td>
              </tr>
            </tbody>
          ))}
        </Table>
      </div>
    </>
  );
};

export default User;
