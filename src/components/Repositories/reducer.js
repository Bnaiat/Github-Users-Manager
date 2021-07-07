import ACTIONS from "./constants";

const initialState = {
  loading: false,
  error: "",
  repositories: [],
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

    case ACTIONS.SET_REPOSITORIES:
      return {
        ...state,
        repositories: payload,
        loading: false,
      };

    default:
      return state;
  }
}

export { initialState, reducer };
