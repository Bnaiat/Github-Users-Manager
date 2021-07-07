import React from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import PAGES from "../../constants/routes";

function Header() {
  const { logOut } = useAuth();

  return (
    <header className={styles.header}>
      <nav>
        <Link className={styles.nav_list} to={PAGES.PAGE_DASHBOARD}>
          DASHBOARD
        </Link>
        <Link className={styles.nav_list} to={PAGES.PAGE_SEARCH}>
          SEARCH
        </Link>
        <Link className={styles.nav_list} to={PAGES.PAGE_FAVORITES}>
          FAVORITES
        </Link>
      </nav>

      <button onClick={logOut} className={styles.customButton}>
        LOG OUT
      </button>
    </header>
  );
}

export default Header;
