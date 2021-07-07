import React from "react";

import { useDashboardContext } from "../../context/DashboardContext";
import styles from "./RemoveFavoriteUser.module.css";

function RemoveFavoriteUser({ user, setModal }) {
  const { favorites, setFavorites } = useDashboardContext();

  function cancel() {
    setModal((prev) => !prev);
  }
  function deleteUser() {
    const favs = [...favorites];
    const index = favs.indexOf(user);
    if (index != -1) {
      favs.splice(index, 1);
      setFavorites(favs);
    }
    setModal((prev) => !prev);
  }

  return (
    <div className={styles.modal}>
      <h3>Remove {user.username} from Favorites?</h3>
      <button className={styles.customButton} onClick={cancel}>
        CANCEL
      </button>
      <button className={styles.customButton} onClick={deleteUser}>
        YES
      </button>
    </div>
  );
}

export default RemoveFavoriteUser;
