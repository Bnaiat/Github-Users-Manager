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

function setRepositories(repos) {
  return {
    type: ACTIONS.SET_REPOSITORIES,
    payload: repos,
  };
}

export { setLoading, setError, setRepositories };
