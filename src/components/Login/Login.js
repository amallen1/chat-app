import React, { useState, useEffect } from "react";
import { auth } from "../../Firebase";
import "firebase/app";
import firebase from "firebase/compat/app";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import { StyledLink } from "./LoginStyles";

import {
  LoginPage,
  LoginCard,
  GoogleLogin,
  Label,
  Input,
  Form,
  LoginButton,
  Detail,
  Links,
} from "./LoginStyles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      console.log("hi");
      console.log(user.uid);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();

    // const authObject = {
    //   "Project-ID": "b375bca0-9a0b-4efa-8bb6-a4ad3a963b4e",
    //   "User-Name": email,
    //   "User-Secret": user.uid,
    // };

    try {
      await loginToSite();

      //console.log(user.uid);

      //i think this is getting the chats
      // await axios.get("https://api.chatengine.io/chats", {
      //   headers: authObject,
      // });
      // console.log("SUCCESSFULLY GOT CHATS FOR THIS USER");

      console.log("THIS IS THE UID");
      console.log(user.uid);

      //i think this is authenticating the user
      axios.get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "b375bca0-9a0b-4efa-8bb6-a4ad3a963b4e",
          "user-name": email,
          "user-secret": user.uid,
        },
      });
      console.log("USER AUTHENTICATED");
    } catch (error) {
      console.log("Login failed! " + error);
    }
  };

  const loginToSite = async () => {
    await auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <LoginPage>
      <LoginCard>
        <h2>Welcome to Unichat</h2>

        <GoogleLogin
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          Sign in with Google
        </GoogleLogin>

        <Detail>Or</Detail>

        <Form onSubmit={handleLogin}>
          <Label htmlFor="email">Email</Label>

          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <Links>
            <StyledLink to={"/signup"}>Don't have an account?</StyledLink>
            <StyledLink to={"#"}>Forgot Password?</StyledLink>
          </Links>

          <LoginButton>Log In</LoginButton>
        </Form>
      </LoginCard>
    </LoginPage>
  );
};

export default Login;
