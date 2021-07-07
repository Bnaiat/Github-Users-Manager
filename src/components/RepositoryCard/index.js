import React from "react";

import styles from "./RepositoryCard.module.css";

function RepositoryCard({ repo }) {
  return (
    <div className={styles.cardWrapper}>
      <h4>Name: {repo.name}</h4>
      <h4>Forks: {repo.forks}</h4>
      <h4>Stars: {repo.stargazers_count}</h4>
      <a href={repo.svn_url} target="_blank" rel="noreferrer">
        See Repository
      </a>
    </div>
  );
}

export default RepositoryCard;
