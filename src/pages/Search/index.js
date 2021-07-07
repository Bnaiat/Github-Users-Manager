import React, { useRef, useState } from "react";

import Header from "../../components/Header";
import { useDashboardContext } from "../../context/DashboardContext";
import UserCard from "../../components/UserCard";
import styles from "./Search.module.css";

function Search() {
  const { userDetails } = useDashboardContext();
  const searchValue = useRef("");
  const [filteredUsers, setFilteredUsers] = useState([]);

  const inputChangeHandler = (e) => {
    searchValue.current = e.target.value;
    if (searchValue.current) {
      setFilteredUsers(
        userDetails.filter((user) =>
          user.login.toLowerCase().includes(searchValue.current.toLowerCase())
        )
      );
    } else {
      setFilteredUsers([]);
    }
  };

  return (
    <>
      <Header />
      <div className={styles.searchWrapper}>
        <label htmlFor="search">
          Search:
          <input
            id="search"
            type="text"
            placeholder="type here..."
            onChange={inputChangeHandler}
          />
        </label>
        {!searchValue.current ? (
          <h1>Type username to search user</h1>
        ) : filteredUsers.length ? (
          <div className={styles.usersWrapper}>
            {filteredUsers.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        ) : (
          <h1>No such Username</h1>
        )}
      </div>
    </>
  );
}

export default Search;
