import React from "react";
import { GoogleOutlined } from "@ant-design/icons";
import "firebase/app";
import firebase from "firebase/compat/app";
import styled from "styled-components";

import { auth } from "../../Firebase";

const LoginPage = styled.div`
  background-image: linear-gradient(#40a9ff, #096dd9);
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginCard = styled.div`
  background-color: #fff;
  width: 90%;
  height: auto;
  padding: 2em;
  border-radius: 20px;
  text-align: center;
  max-width: 500px;
`;

const GoogleLogin = styled.div`
  background-color: #4285f4;
  color: white;
  cursor: pointer;
  padding: 0.75em;
  border-radius: 8px;
  display: inline-block;
  margin: 1em 0;
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  margin: 2em 0;
`;

const Label = styled.label`
  text-align: left;
  font-weight: bold;
`;

const Input = styled.input`
  margin: 0.25em 0 1.25em;
  border: 1px solid #cecece;
  padding: 0.5em;
  border-radius: 5px;
`;

const LoginButton = styled.button`
  width: 50%;
  margin: 2em auto 0;
`;

const Login = () => {
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
        <LoginForm action="">
          <Label htmlFor="email">Email</Label>
          <Input type="email" />

          <Label htmlFor="password">Password</Label>
          <Input type="password" />

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
