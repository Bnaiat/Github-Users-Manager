import React from "react";
import { Link } from "react-router-dom";

import styles from "./UserCard.module.css";

function UserCard({ user }) {
  return (
    <Link className={styles.customLink} to={`/user/${user.login}`}>
      <div className={styles.cardWrapper}>
        <img src={user.avatar_url} alt="avatar" />
        <h2>{user.login}</h2>
        <h4>Repositories</h4>
        {user.public_repos}
        <h4>Followers</h4>
        {user.followers}
        <h4>Following</h4>
        {user.following}
      </div>
    </Link>
  );
}

export default UserCard;
