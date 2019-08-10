import React, { useEffect, useState } from "react";

import api from "../../serves/api";

import "./Main.css";

import logo from "../../assets/logo.svg";
import dislike from "../../assets/dislike.svg";
import like from "../../assets/like.svg";

export default function Main({ match }) {
  const [users, setUsers] = useState([]);
  console.log("TCL: Main -> users", users);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get("/devs", {
        headers: {
          user: match.params.id
        }
      });
      setUsers(response.data);
    }
    loadUsers();
  }, [match.params.id]);
  return (
    <div className="main-container">
      <img src={logo} alt="TinDev" />
      <ul>
        {users.map((user, index) => (
          <li key={index}>
            <img src={user.avatar} alt={user.name} />
            <footer>
              <strong>{user.name}</strong>
              <p>{user.bio}</p>
            </footer>
            <div className="buttons">
              <button type="button">
                <img src={like} alt="like" />
              </button>
              <button>
                <img src={dislike} alt="dislike" />
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
