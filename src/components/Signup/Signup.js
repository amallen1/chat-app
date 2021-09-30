import React, { useState, useEffect } from "react";
import { auth } from "../../Firebase";
import "firebase/app";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";
import axios from "axios";

import {
  SignupPage,
  SignupCard,
  SignUpForm,
  Label,
  Input,
  SignUpButton,
} from "./SignupStyles";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useAuth();
  const [loading, setLoading] = useState(true);
  const history = useHistory();

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob(); //contains our image

    return new File([data], "userPhoto.jpeg", { type: "image/jpeg" });
  };

  useEffect(() => {
    createUser2(); 
  }, [user, history]);

  // Creates an account for the user on firebase
  const login = async () => {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const userCred = userCredential.user;
        //console.log("THIS IS THE UID IM PASSING" + userCred.uid);
        // createUser(userCred.uid);

        //creates an account for user on chat engine
        //createUser2();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  const createUser2 = async () => {
    //we want to see if a user has already been created
    if (!user) return;
    const axios = require("axios");
    let data = {
      username: user.email,
      secret: user.uid,
      email: user.email,
    };

    let config = {
      method: "post",
      url: "https://api.chatengine.io/users/",
      headers: {
        "PRIVATE-KEY": "{ae4eb860-1f12-4aa3-b312-66611960f055}",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  //post request to create a new user on chat engine
  const createUser = async (userCred) => {
    let axios = require("axios");
    let data = {
      username: email,
      secret: userCred,
      email: email,
    };

    let config = {
      method: "post",
      url: "https://api.chatengine.io/users/",
      headers: {
        "PRIVATE-KEY": "{{ae4eb860-1f12-4aa3-b312-66611960f055}}",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login();
    } catch (error) {
      console.log("Login after signup failed " + error);
    }
  };

  return (
    <SignupPage>
      <SignupCard>
        <h2>Sign Up</h2>
        <SignUpForm onSubmit={handleSubmit}>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            name="name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />

          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            name="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />

          <Label htmlFor="password">Password</Label>
          <Input
            type="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />

          <SignUpButton>Sign In</SignUpButton>
        </SignUpForm>
        <p>Already have an account?</p>

        <a href="/">Login</a>
      </SignupCard>
    </SignupPage>
  );
};

export default Signup;
