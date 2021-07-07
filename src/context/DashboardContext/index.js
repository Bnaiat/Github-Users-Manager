import React, {
  createContext,
  useEffect,
  useContext,
  useState,
  useReducer,
} from "react";
import PropTypes from "prop-types";

import { getInitialData, getUser } from "../../api/fetch";
import { initialState, reducer } from "./reducer";
import { initialDataFetching, userDetailsFetching } from "./effects";
import { resetUserDetails } from "./actions";
import CONST from "./constants";

const DashboardContext = createContext();

function DashboardContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [numberUsers, setNumberUsers] = useState(CONST.INITIAL_USERS_COUNT);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    initialDataFetching(dispatch, getInitialData, numberUsers);
  }, [numberUsers]);

  useEffect(() => {
    dispatch(resetUserDetails());
    state.users.map((user) =>
      userDetailsFetching(dispatch, getUser, user.login)
    );
  }, [state.users]);

  useEffect(() => {
    localStorage.setItem("userDetails", JSON.stringify(state.userDetails));
  }, [state.userDetails]);

  useEffect(() => {
    const favs = localStorage.getItem("favorites");
    if (favs) {
      setFavorites(JSON.parse(favs));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  });

  return (
    <DashboardContext.Provider
      value={{ ...state, setNumberUsers, setFavorites, favorites }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

DashboardContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

function useDashboardContext() {
  const context = useContext(DashboardContext);

  if (!context) {
    return new Error("Something Went Wrong");
  }

  return context;
}

export { useDashboardContext, DashboardContextProvider };
