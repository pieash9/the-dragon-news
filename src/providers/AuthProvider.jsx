import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { app } from "../firebase/firebase.config";
export const AuthContext = createContext(null);



const AuthProvider = ({ children }) => {
  const auth = getAuth(app);

  const  [user, setUser]  = useState(null);
  const [loading,setLoading] = useState(true)
  // console.log(user)

  const createUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const singIn = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true)
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
        // console.log("logged User on auth state", loggedUser);
        setLoading(false)
        setUser(loggedUser);
    });
    return () => {
      unsubscribe();
    };
  }, []);
// console.log(user)
  const authInfo = {
    user,
    createUser,
    singIn,
    logOut,
    loading
  };
//   console.log(user);
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
