import React from "react";
import { DotLoader } from "react-spinners";

import { useDashboardContext } from "../../context/DashboardContext";
import UserCard from "../../components/UserCard";
import Header from "../../components/Header";
import styles from "./Dashboard.module.css";

function Dashboard() {
  const { error, loading, userDetails, setNumberUsers } = useDashboardContext();

  const loadMoreUsers = () => {
    setNumberUsers((prev) => prev + 20);
  };

  return (
    <div className={styles.fullWrapper}>
      <Header />
      {loading ? (
        <div className={styles.loadingWrapper}>
          <DotLoader color="white" />
        </div>
      ) : error ? (
        <div className={styles.errorWrapper}>
          <h1>{error}</h1>
        </div>
      ) : (
        <>
          <div className={styles.gridWrapper}>
            {userDetails.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
          <button onClick={loadMoreUsers} className={styles.customButton}>
            Load More
          </button>
        </>
      )}
    </div>
  );
}

export default Dashboard;
