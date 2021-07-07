import React, { useEffect, useReducer } from "react";
import { DotLoader } from "react-spinners";

import { getData } from "../../api/fetch";
import {
  organisatinDetailsFetching,
  userOrganisationsFetching,
} from "./effects";
import { initialState, reducer } from "./reducer";
import styles from "./Organisations.module.css";

function Organisations({ url }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    userOrganisationsFetching(dispatch, getData, url);
  }, []);

  useEffect(() => {
    state.organisations.map((org) => {
      organisatinDetailsFetching(dispatch, getData, org.url);
    });
  }, [state.organisations]);

  return (
    <div className={styles.fullWrapper}>
      <h1>Organisations</h1>
      {state.loading ? (
        <div className={styles.loadingWrapper}>
          <DotLoader color="white" />
        </div>
      ) : state.error ? (
        <h1>{state.error}</h1>
      ) : (
        <>
          {state.organisationDetails.length === 0 && (
            <h3>No Organisations for this user</h3>
          )}
          <div className={styles.gridWrapper}>
            {state.organisationDetails.map((org) => (
              <div key={org.id}>
                <a
                  href={org.html_url}
                  rel="noreferrer"
                  target="_blank"
                  className={styles.customLink}
                >
                  <div className={styles.organisationsWrapper}>
                    <img src={org.avatar_url} alt="organisation_avatar" />
                  </div>
                </a>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Organisations;
