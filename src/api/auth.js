const AUTH_URL = process.env.REACT_APP_AUTH_URL;

import axios from "axios";

async function userSignUp(user) {
  const response = await axios.post(`${AUTH_URL}/auth/signup`, user, {
    headers: {
      "Content-Type": "application/json",
    },
  });

  return response.data;
}

async function userSignIn(username, password) {
  const response = await axios.post(
    `${AUTH_URL}/auth/signin`,
    { username, password },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
}

export { userSignUp, userSignIn };
