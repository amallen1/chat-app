import React, { useState, useEffect } from "react";
import { auth } from "../../Firebase";
import "firebase/app";
import firebase from "firebase/compat/app";
import axios from "axios";
import { useAuth } from "../../contexts/AuthContext";
import { StyledLink } from "./LoginStyles";
import { useHistory } from "react-router-dom";

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
  ErrorMessage,
} from "./LoginStyles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const { user } = useAuth();
  const history = useHistory();

  useEffect(() => {
    if (user) {
      try {
        //authenticating the user before going to chat page
        axios.get("https://api.chatengine.io/users/me", {
          headers: {
            "Project-ID": process.env.REACT_APP_PROJECT_ID,
            "User-Name": email,
            "User-Secret": user.uid,
          },
        });
      } catch (error) {
        console.log(error);
      }
      history.push("/chats");
    }
  }, [user]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      await firebaseLogin();
    } catch (error) {
      console.log("Login to site method failed! " + error);
    }
  };

  const firebaseLogin = async () => {
    await auth
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setError(false);
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
        console.log("ERROR IN FIREBASELOGIN");
        setError(true);
      });
  };

  return (
    <LoginPage>
      <LoginCard>
        <h2>Welcome to Chat.io!</h2>

        <GoogleLogin
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          Sign in with Google
        </GoogleLogin>

        {error ? (
          <ErrorMessage>Invalid email or password</ErrorMessage>
        ) : (
          <Detail>Or</Detail>
        )}

        <Form onSubmit={handleLogin}>
          <Label htmlFor="email">Email</Label>

          <Input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <Links>
            <StyledLink to={"/signup"}>Don't have an account? </StyledLink>
            {/* <StyledLink to={"#"}>Forgot Password?</StyledLink> */}
          </Links>

          <LoginButton>Log In</LoginButton>
        </Form>
      </LoginCard>
    </LoginPage>
  );
};

export default Login;
