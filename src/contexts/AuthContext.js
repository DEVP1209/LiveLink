import React, { createContext,useContext, useState, useEffect } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  sendPasswordResetEmail
} from "firebase/auth";

const AuthContext = createContext();

export function UserAuth() {
  return useContext(AuthContext);
}
export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading,setLoading] = useState(true)
  function signup(email, password) {
    return createUserWithEmailAndPassword(auth,email, password);
  }
  function login(email, password) {
    return signInWithEmailAndPassword(auth,email, password);
  }

  function logout() {
    return signOut(auth);
  }
  function resetPassword(email) {
    return sendPasswordResetEmail(auth,email);
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth,(user) => {
        setCurrentUser(user);
        setLoading(false);
    });
    return ()=>{
      unsubscribe();
    };
  }, []);


  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
  };
  return <AuthContext.Provider value={value}>
  {!loading && children}
  </AuthContext.Provider>;
}
