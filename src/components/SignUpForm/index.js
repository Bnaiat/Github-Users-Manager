import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

import styles from "./SignUpForm.module.css";
import { userSignUp } from "../../api/auth";
import PAGE_ROUTES from "../../constants/routes";

function SignUpForm() {
  const [user, setUser] = useState({
    username: "",
    firstName: "",
    lastName: "",
    email: "",
    birthDate: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState([]);

  const history = useHistory();

  function signUpSubmitHandler(e) {
    if (user.password !== user.confirmPassword) {
      e.preventDefault();
      setError(["Password doesn't match"]);
    } else {
      e.preventDefault();
      userSignUp(user)
        .then(() => history.push(PAGE_ROUTES.PAGE_SIGN_IN, { success: true }))
        .catch((error) => setError(error.response.data.message));
    }
  }

  return (
    <div className={styles.fullWrapper}>
      <div className={styles.errorWrapper}>
        {error.length != 0 && Array.isArray(error) ? (
          error.map((err, index) => <p key={index}>{err}</p>)
        ) : (
          <p>{error}</p>
        )}
      </div>
      <form className={styles.signUpForm}>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
          />
        </label>
        <label htmlFor="firstName">
          First Name:
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={user.firstName}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
          />
        </label>
        <label htmlFor="lastName">
          Last Name:
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={user.lastName}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
          />
        </label>
        <label htmlFor="email">
          E-mail:
          <input
            type="mail"
            id="email"
            name="email"
            value={user.email}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
          />
        </label>
        <label htmlFor="birthDate">
          Birth Date:
          <input
            type="date"
            id="birthDate"
            name="birthDate"
            value={user.birthDate}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
          />
        </label>
        <label htmlFor="confirmPassword">
          Confirm Password:
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={(e) =>
              setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }))
            }
          />
        </label>
        <button type="submit" onClick={signUpSubmitHandler}>
          Sign Up
        </button>
        <Link to={PAGE_ROUTES.PAGE_SIGN_IN}>
          <button className={styles.linkButton}>Cancel</button>
        </Link>
      </form>
    </div>
  );
}

export default SignUpForm;
