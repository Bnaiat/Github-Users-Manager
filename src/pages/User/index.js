import React, { useRef, useState } from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/Header";
import UserInfo from "../../components/UserInfo";
import Organisations from "../../components/Organisations";
import Repositories from "../../components/Repositories";
import AddRemoveFavorite from "../../components/AddRemoveFavorites";
import styles from "./User.module.css";

function User() {
  const { id } = useParams();
  const userDetails = useRef();

  userDetails.current = localStorage.getItem("userDetails");
  const filteredUser = JSON.parse(userDetails.current).filter(
    (user) => user.login === id
  );

  const [details] = useState(filteredUser[0]);

  return (
    <>
      <Header />
      <div className={styles.pageWrapper}>
        <div>
          <UserInfo details={details} />
          <AddRemoveFavorite
            username={details.login}
            url={details.avatar_url}
          />
          <Organisations url={details.organizations_url} />
        </div>
        <Repositories url={details.repos_url} />
      </div>
    </>
  );
}

export default User;
