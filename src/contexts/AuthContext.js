import React, { useContext, useState, useEffect, createContext } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../Firebase";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext); //function that exports our entire context

//returns the current context value for that context

export const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState({});
  const history = useHistory();

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        history.push("/chats");
      }
    });
  }, [user, history]);

  const value = { user };

  return (
    <AuthContext.Provider value={value}>
      {/* if not loading then show the children */}
      {!loading && children} 
    </AuthContext.Provider>
  );
};
