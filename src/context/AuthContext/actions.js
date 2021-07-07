import ACTIONS from "./constants";

function authInitialized(isAuthenticated, user) {
  return {
    type: ACTIONS.AUTH_INIT,
    payload: {
      isAuthenticated,
      user,
    },
  };
}

function authLogin(user) {
  return {
    type: ACTIONS.AUTH_LOG_IN,
    payload: {
      user,
    },
  };
}

function authLogout() {
  return {
    type: ACTIONS.AUTH_LOG_OUT,
  };
}

export { authInitialized, authLogin, authLogout };
