import { setError, setLoading, setRepositories } from "./actions";

async function userRepositoriesFetching(dispatch, fetchFunction, URL) {
  try {
    dispatch(setLoading(true));
    const data = await fetchFunction(URL);
    if (Array.isArray(data)) {
      dispatch(setRepositories(data));
    }
  } catch (error) {
    dispatch(setError(error.message));
  }
}

export { userRepositoriesFetching };
