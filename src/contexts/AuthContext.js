import React, { useContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../Firebase";

const AuthContext = React.createContext(); //auth context is our context object

export const useAuth = () => useContext(AuthContext); //function that exports our entire context

//returns the current context value for that context

//this replaces AuthContext.Provider
export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    if (user) {
      auth.onAuthStateChanged((user) => {
        setUser(user);
        setLoading(false);
        if (user) {
          history.push("/chats");
        }
      });
    }
  }, [user, history]);

  const value = { user };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
