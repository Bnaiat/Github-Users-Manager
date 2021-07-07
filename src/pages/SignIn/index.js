import React from "react";

import SignInForm from "../../components/SignInForm";
import styles from "./SignIn.module.css";

function SignIn({ location }) {
  const { state } = location;
  return (
    <div className={styles.signInWrapper}>
      {state?.success && <h3>Registration Was Successful</h3>}
      <SignInForm />
    </div>
  );
}

export default SignIn;
