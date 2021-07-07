import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { Link } from "react-router-dom";

import PAGE_ROUTES from "../../constants/routes";
import styles from "./SignInForm.module.css";

function SignInForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useAuth();

  function SignInHandler(e) {
    e.preventDefault();
    logIn(username, password).catch(() =>
      setError("No such username or password...")
    );
  }
  return (
    <div className={styles.fullWrapper}>
      <div className={styles.errorWrapper}>
        <p>{error}</p>
      </div>
      <form className={styles.signInForm}>
        <label htmlFor="username">
          Username:
          <input
            value={username}
            type="text"
            id="username"
            name="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            value={password}
            type="password"
            id="password"
            name="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit" onClick={SignInHandler}>
          Sign In
        </button>
        <Link to={PAGE_ROUTES.PAGE_SIGN_UP}>
          <button className={styles.linkButton}>Sign Up</button>
        </Link>
      </form>
    </div>
  );
}

export default SignInForm;
