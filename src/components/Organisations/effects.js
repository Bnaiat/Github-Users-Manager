import {
  setError,
  setLoading,
  setOrganisationDetails,
  setOrganisations,
} from "./actions";

async function userOrganisationsFetching(dispatch, fetchFunction, URL) {
  try {
    dispatch(setLoading(true));
    const data = await fetchFunction(URL);
    if (Array.isArray(data)) {
      dispatch(setOrganisations(data));
    }
  } catch (error) {
    dispatch(setError(error.message));
  }
}
async function organisatinDetailsFetching(dispatch, fetchFunction, URL) {
  try {
    dispatch(setLoading(true));
    const data = await fetchFunction(URL);
    dispatch(setOrganisationDetails(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
}

export { userOrganisationsFetching, organisatinDetailsFetching };
