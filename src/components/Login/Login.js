import React, { useState } from "react";
import { GoogleOutlined } from "@ant-design/icons";
import { auth } from "../../Firebase";
import "firebase/app";
import firebase from "firebase/compat/app";

import {
  LoginPage,
  LoginCard,
  GoogleLogin,
  Label,
  Input,
  LoginForm,
  LoginButton,
} from "./LoginStyles";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    auth
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
        <h2>Login</h2>
        <GoogleLogin
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Log in with Google
        </GoogleLogin>
        <hr />
        <LoginForm onSubmit={handleLogin}>
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

          <div>
            <input type="checkbox" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <LoginButton>Log In</LoginButton>
        </LoginForm>
        <a href="#">Forgot Password?</a>
        <hr />

        {/* redirect to sign up component */}
        <p>Don't have an account?</p>
        <a href="/signup">Sign up</a>
      </LoginCard>
    </LoginPage>
  );
};

export default Login;
