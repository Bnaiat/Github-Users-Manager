import React, { createContext, useContext, useReducer, useEffect } from "react";

import { userSignIn } from "../../api/auth";
import { parseToken, toggleSession } from "../../utils/jwt";
import { authLogin, authLogout } from "./actions";
import { initAuthEffect } from "./effects";
import { reducer, initialState } from "./reducer";

const AuthContext = createContext();

function AuthContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  async function logIn(username, password) {
    const response = await userSignIn(username, password);
    const { token } = response;
    toggleSession(token);
    const { payload } = parseToken(token);
    dispatch(authLogin(payload));
  }

  function logOut() {
    toggleSession(null);
    localStorage.clear();
    dispatch(authLogout());
  }

  useEffect(() => {
    initAuthEffect(dispatch);
  }, []);

  if (!state.isInitialized) {
    return <h1>Loading</h1>;
  }

  return (
    <AuthContext.Provider value={{ ...state, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("There is no Context");
  }

  return context;
}

export { AuthContextProvider, useAuth };
