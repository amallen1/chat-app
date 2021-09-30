import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../Firebase";

import { useAuth } from "../contexts/AuthContext";
// import axios from "axios";

const Chats = () => {
  const history = useHistory();
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);

  const handleLogout = async () => {
    await auth.signOut();
    history.push("/");
  };

  // const getFile = async (url) => {
  //   const response = await fetch(url);
  //   const data = await response.blob(); //contains our image

  //   return new File([data], "userPhoto.jpeg", { type: "image/jpeg" });
  // };

  // useEffect(() => {
  //   //if there is no user
  //   if (!user) {
  //     history.push("/");
  //     return;
  //   }

  //   //if we do have a user, make a get call to the chat engine
  //   //we want to see if a user has already been created
  //   axios
  //     .get("https://api.chatengine.io/users/me", {
  //       headers: {
  //         "project-id": "b375bca0-9a0b-4efa-8bb6-a4ad3a963b4e",
  //         "user-name": user.email,
  //         "user-secret": user.uid,
  //       },
  //     })
  //     .then(() => {
  //       setLoading(false);
  //       console.log("LOADING IS SET TO FALSE");
  //     })
  //     .catch(() => {
  //       let formdata = new FormData();
  //       formdata.append("email", user.email);
  //       formdata.append("username", user.email);
  //       formdata.append("secret", user.uid);

  //       getFile(user.photoURL).then((avatar) => {
  //         formdata.append("avatar", avatar, avatar.name);

  //         axios
  //           .post("https://api.chatengine.io/users", formdata, {
  //             headers: {
  //               "private-key": "ae4eb860-1f12-4aa3-b312-66611960f055",
  //             },
  //           })
  //           .then(() => setLoading(false))
  //           .catch((error) => console.log(error));
  //         console.log("IT WAS AN ERROR");
  //       });
  //     });
  // }, [user, history]);

  if (!user) return "Loading...";

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
