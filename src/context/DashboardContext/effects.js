import { setError, setLoading, setUsers, setUserDetails } from "./actions";

async function initialDataFetching(dispatch, fetchData, number) {
  try {
    dispatch(setLoading(true));
    const data = await fetchData(number);
    if (Array.isArray(data.items)) {
      dispatch(setUsers(data.items));
    }
  } catch (error) {
    dispatch(setError(error.message));
  }
}

async function userDetailsFetching(dispatch, fetchUser, username) {
  try {
    dispatch(setLoading(true));
    const data = await fetchUser(username);
    dispatch(setUserDetails(data));
  } catch (error) {
    dispatch(setError(error.message));
  }
}

export { initialDataFetching, userDetailsFetching };
