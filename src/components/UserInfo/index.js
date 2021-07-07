import React from "react";

import styles from "./UserInfo.module.css";

function UserInfo({ details }) {
  return (
    <div className={styles.infoWrapper}>
      <img src={details.avatar_url} alt="avatar" />
      <h1>{details.login}</h1>
      {details.bio && <p>{details.bio}</p>}
      <h3>Followers</h3>
      {details.followers}
      <h3>Following</h3>
      {details.following}
    </div>
  );
}

export default UserInfo;
