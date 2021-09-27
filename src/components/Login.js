import React from "react";
import { GoogleOutlined } from "@ant-design/icons";
import "firebase/app";
import firebase from "firebase/app";
import styled from "styled-components";

import { auth } from "../Firebase";

const LoginPage = styled.div`
  background-image: linear-gradient(#40a9ff, #096dd9);
  height: 100vh;
`;

const LoginCard = styled.div`
  position: relative;
  top: calc(50vh - 144px);
  left: calc(50vw - 210px);
  padding-top: 36px;
  padding-bottom: 66px;
  width: 420px;
  text-align: center;
  background-color: white;
  border-radius: 22px;
`;

/* Login Page */

// #login-page {
// background-image: linear-gradient(#40a9ff, #096dd9);
// position: absolute;
// top: 0px;
// bottom: 0px;
// left: 0px;
// right: 0px;
// }

// #login-card {

// }

// .login-button {
//   cursor: pointer;
//   color: white;
//   padding: 12px;
//   border-radius: 8px;
//   display: inline-block;
// }

const Login = () => {
  return (
    <LoginPage>
      <LoginCard>
        <h2>Login</h2>
        <div
          className="login-button google"
          onClick={() =>
            auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())
          }
        >
          <GoogleOutlined /> Log in with Google
        </div>
        <form action="">
          <label htmlFor="email">Email</label>
          <input type="email" />

          <label htmlFor="password">Password</label>
          <input type="password" />

          <label htmlFor="remember">Remember me</label>
          <input type="checkbox" />

          <button>Log In</button>
        </form>
        <a href="#">Forgot Password?</a>
        <hr />
        Don't have an account?
        <a href="#">Sign up</a>`
      </LoginCard>
    </LoginPage>
  );
};

export default Login;
