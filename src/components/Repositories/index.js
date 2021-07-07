import React, { useReducer, useEffect } from "react";
import { DotLoader } from "react-spinners";

import { reducer, initialState } from "./reducer";
import { userRepositoriesFetching } from "./effects";
import { getData } from "../../api/fetch";
import RepositoryCard from "../RepositoryCard";
import styles from "./Repositories.module.css";

function Repositories({ url }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    userRepositoriesFetching(dispatch, getData, url);
  }, []);

  return (
    <div className={styles.repositories}>
      <h1>Repositories</h1>
      {state.loading ? (
        <div className={styles.loadingWrapper}>
          <DotLoader color="white" />
        </div>
      ) : state.error ? (
        <h1>{state.error}</h1>
      ) : (
        <>
          {state.repositories.length === 0 && (
            <h2>No public repositories to display</h2>
          )}
          <div>
            {state.repositories.map((repo) => (
              <RepositoryCard key={repo.id} repo={repo} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Repositories;
