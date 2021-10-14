import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../Firebase";

import { useAuth } from "../contexts/AuthContext";
import axios from "axios";

const Chats = () => {
  const history = useHistory();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    await auth.signOut();
    history.push("/");
  };

  useEffect(() => {
    if (!user) {
      history.push("/");
      //if there is no user, redirect them to the login page
      return;
    }

    //if we do have the user

    const authObject = {
      "Project-ID": "b375bca0-9a0b-4efa-8bb6-a4ad3a963b4e",
      "User-Name": user.email,
      "User-Secret": user.uid,
    };

    axios
      .get("https://api.chatengine.io/chats", {
        headers: authObject,
      })
      .then(() => {
        setLoading(false);
      });

    // axios.get("https://api.chatengine.io/users/me", {
    //   headers: {
    //     "project-id": "b375bca0-9a0b-4efa-8bb6-a4ad3a963b4e",
    //     "user-name": user.email,
    //     "user-secret": user.uid,
    //   },
    // });
  }, [user, history]);

  // useEffect(() => {
  //   let axios = require("axios");

  //   let config = {
  //     method: "get",
  //     url: "https://api.chatengine.io/users/chats/",
  //     headers: {
  //       "Project-ID": "b375bca0-9a0b-4efa-8bb6-a4ad3a963b4e",
  //       "User-Name": user.email,
  //       "User-Secret": localStorage.getItem("password"),
  //     },
  //   };

  //   axios(config)
  //     .then(function (response) {
  //       console.log(JSON.stringify(response.data));
  //       setLoading(false);
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //       console.log("DOGGGGGG"); //axios is having an error here
  //     });
  // }, [user]);

  console.log("IS THIS TRUE?");
  console.log(loading);
  if (!user || loading) return "Loading ...";

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Unichat</div>

        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>

      <ChatEngine
        height="calc(100vh - 66px)"
        projectID="b375bca0-9a0b-4efa-8bb6-a4ad3a963b4e"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
