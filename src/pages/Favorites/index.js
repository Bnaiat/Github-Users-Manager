import React, { useState } from "react";

import Header from "../../components/Header";
import { useDashboardContext } from "../../context/DashboardContext";
import Modal from "../../components/Modal";
import FavoriteUserCard from "../../components/FavoriteUserCard";
import RemoveFavoriteUser from "../../components/RemoveFavoriteUser";
import styles from "./Favorites.module.css";

function Favorites() {
  const { favorites } = useDashboardContext();
  const [showModal, setShowModal] = useState(false);
  const [favoriteUser, setFavoriteUser] = useState([]);

  return (
    <div className={styles.pageWrapper}>
      <Header />
      <h1>Favorite Users</h1>
      {favorites.length === 0 && <h3>no favorite users selected</h3>}
      <div className={styles.favoritesWrapper}>
        {favorites.map((user) => (
          <FavoriteUserCard
            key={user.username}
            user={user}
            setModal={setShowModal}
            setFavoriteUser={setFavoriteUser}
          />
        ))}
        {showModal && (
          <Modal>
            <RemoveFavoriteUser setModal={setShowModal} user={favoriteUser} />
          </Modal>
        )}
      </div>
    </div>
  );
}

export default Favorites;
