import React from "react";
import { Link } from "react-router-dom";

import ROUTES from "../../constants/routes";
import styles from "./NotFound.module.css";

function NotFound() {
  return (
    <div className={styles.pageWrapper}>
      <h1>Page Not Found</h1>
      <Link to={ROUTES.PAGE_DASHBOARD}>Return to Dashboard</Link>
    </div>
  );
}

export default NotFound;
