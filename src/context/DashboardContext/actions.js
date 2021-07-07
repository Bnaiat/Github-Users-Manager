import ACTIONS from "./constants";

function setLoading(status) {
  return {
    type: ACTIONS.SET_LOADING,
    payload: status,
  };
}

function setError(errorMessage) {
  return {
    type: ACTIONS.SET_ERROR,
    payload: errorMessage,
  };
}

function setUsers(users) {
  return {
    type: ACTIONS.SET_DATA,
    payload: users,
  };
}

function setUserDetails(userDetails) {
  return {
    type: ACTIONS.SET_USER_DETAILS,
    payload: userDetails,
  };
}

function resetUserDetails() {
  return {
    type: ACTIONS.RESET_USER_DETAILS,
  };
}

export { setLoading, setError, setUsers, setUserDetails, resetUserDetails };
