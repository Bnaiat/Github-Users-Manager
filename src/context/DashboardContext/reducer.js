import ACTIONS from "./constants";

const initialState = {
  loading: false,
  error: "",
  users: [],
  userDetails: [],
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ACTIONS.SET_LOADING:
      return {
        ...state,
        loading: payload,
      };

    case ACTIONS.SET_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    case ACTIONS.SET_DATA:
      return {
        ...state,
        users: payload,
        loading: false,
      };
    case ACTIONS.SET_USER_DETAILS:
      return {
        ...state,
        userDetails: [...state.userDetails, payload],
        loading: false,
      };
    case ACTIONS.RESET_USER_DETAILS:
      return {
        ...state,
        userDetails: [],
      };
    default:
      return state;
  }
}

export { initialState, reducer };
