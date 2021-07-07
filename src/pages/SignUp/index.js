import React from "react";

import SignUpForm from "../../components/SignUpForm";
import styles from "./signUp.module.css";

function SignUp() {
  return (
    <div className={styles.signUpWrapper}>
      <SignUpForm />
    </div>
  );
}

export default SignUp;
