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
    //FIXME: giving an error when a new user signs up and has 0 chats
    const authObject = {
      "Project-ID": process.env.REACT_APP_PROJECT_ID,
      "User-Name": user.email,
      "User-Secret": user.uid,
    };

    axios
      .get("https://api.chatengine.io/chats", {
        headers: authObject,
      })
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.log("i messed up");
        console.log(error);
      });
  }, [user, history]);

  if (!user || loading) return "Loading ...";

  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Chat.io</div>

        <div onClick={handleLogout} className="logout-tab">
          Logout
        </div>
      </div>

      <ChatEngine
        height="calc(100vh - 66px)"
        projectID={process.env.REACT_APP_PROJECT_ID}
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
