import React from "react";
import { Link } from "react-router-dom";

import styles from "./FavoriteUserCard.module.css";

function FavoriteUserCard({ user, setModal, setFavoriteUser }) {
  function removeUser() {
    setModal((prev) => !prev);
    setFavoriteUser(user);
  }

  return (
    <div className={styles.cardWrapper}>
      <img src={user.url} alt="avatar" />
      <Link className={styles.customLink} to={`/user/${user.username}`}>
        <h2>{user.username}</h2>
      </Link>
      <button className={styles.customButton} onClick={removeUser}>
        Remove From Favorites
      </button>
    </div>
  );
}

export default FavoriteUserCard;
