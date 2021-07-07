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

function setOrganisations(orgs) {
  return {
    type: ACTIONS.SET_ORGANISATIONS,
    payload: orgs,
  };
}

function setOrganisationDetails(details) {
  return {
    type: ACTIONS.SET_ORGANISATION_DETAILS,
    payload: details,
  };
}

export { setLoading, setError, setOrganisations, setOrganisationDetails };
