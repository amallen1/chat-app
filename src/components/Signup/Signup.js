import React, { useState } from "react";
import { auth } from "../../Firebase";
import "firebase/app";
import firebase from "firebase/compat/app";

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

  // Creates an account for the user
  const login = async () => {
    console.log("Email: " + email);
    console.log("Password: " + password);

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log("User: " + user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
      });

    alert("Account created");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name: " + name);
    console.log("Email: " + email);
    console.log("Password: " + password);
    login();
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
