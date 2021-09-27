import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthProvider } from "../contexts/AuthContext";
import styled from "styled-components";

import Chats from "./Chats";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";

const Container = styled.div``;

function App() {
  return (
    <Container>
      <Router>
        <AuthProvider>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/chats" component={Chats} />
          </Switch>
        </AuthProvider>
      </Router>
    </Container>
  );
}

export default App;
