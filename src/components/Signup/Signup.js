import React, { useState, useEffect } from "react";
import { auth } from "../../Firebase";
import "firebase/app";
import { useAuth } from "../../contexts/AuthContext";
import { useHistory } from "react-router-dom";

// import axios from "axios";

import {
  SignupPage,
  SignupCard,
  SignUpForm,
  Label,
  Input,
  SignUpButton,
  Message,
  StyledLink,
} from "./SignupStyles";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useAuth();
  const history = useHistory();

  //seems like errors happen when a new user signs up and doesn't have any chats
  useEffect(() => {
    if (user) {
      createUser();
    }
  }, [user]);

  // Creates an account for the user on firebase
  const createFirebaseUser = async () => {
    await auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const userCred = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });
  };

  //posting correctly to the chat api
  //Creates a user on chatengine io backend
  const createUser = async () => {
    if (!user) return;
    //we want to see if a user has already been created
    // if (!user) return; //if user is null don't create
    const axios = require("axios");
    let data = {
      username: user.email,
      email: user.email,
      secret: user.uid,
    };

    let config = {
      method: "post",
      url: "https://api.chatengine.io/users/",
      headers: {
        "PRIVATE-KEY": "ae4eb860-1f12-4aa3-b312-66611960f055",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log("what is the error -->" + error);
      });

    console.log("successfully created a user on chatengine io");
    history.push("/chats");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createFirebaseUser();
    } catch (error) {
      console.log("createFirebaseUser after signup failed " + error);
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
        <Message>Already have an account?</Message>

        <StyledLink to={"/"}>createFirebaseUser</StyledLink>
      </SignupCard>
    </SignupPage>
  );
};

export default Signup;
