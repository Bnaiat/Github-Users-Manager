import React, { useEffect, useState } from "react";

import { useDashboardContext } from "../../context/DashboardContext";
import { ADD_USER, REMOVE_USER } from "./constants";
import styles from "./AddRemoveFavorites.module.css";

function AddRemoveFavorite({ username, url }) {
  const { favorites, setFavorites } = useDashboardContext();
  const [buttontext, SetButtonText] = useState(ADD_USER);
  const filtered = favorites.filter((user) => user.username === username);

  useEffect(() => {
    if (filtered.length != 0) {
      SetButtonText(REMOVE_USER);
    }
  }, []);

  function toggleFavorites() {
    if (filtered.length === 0) {
      setFavorites((prev) => [...prev, { username, url }]);
      SetButtonText(REMOVE_USER);
    } else {
      const favs = [...favorites];
      const index = favs.indexOf(filtered[0]);
      if (index != -1) {
        favs.splice(index, 1);
        setFavorites(favs);
      }
      SetButtonText(ADD_USER);
    }
  }

  return (
    <div className={styles.wrapper}>
      <button className={styles.customButton} onClick={toggleFavorites}>
        {buttontext}
      </button>
    </div>
  );
}

export default AddRemoveFavorite;
