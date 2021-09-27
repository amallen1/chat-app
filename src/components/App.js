import React from "react";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { AuthProvider } from "../contexts/AuthContext";
import styled from "styled-components";

import Chats from "./Chats";
import Login from "./Login";

const Container = styled.div`
  font-family: "Avenir";
`;

function App() {
  return (
    <Container>
      <Router>
        <AuthProvider>
          <Switch>
            <Route path="/chats" component={Chats} />
            <Route path="/" component={Login} />
          </Switch>
        </AuthProvider>
      </Router>
    </Container>
  );
}

export default App;
