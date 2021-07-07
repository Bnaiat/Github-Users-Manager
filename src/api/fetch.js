const SEARCH_URL = process.env.REACT_APP_SEARCH_URL;
const USER_URL = process.env.REACT_APP_USER_URL;
const TOKEN = process.env.REACT_APP_GITHUB_TOKEN;

async function getInitialData(number) {
  const response = await fetch(`${SEARCH_URL}${number}`, {
    headers: {
      authorization: `token ${TOKEN}`,
    },
  });
  if (response.ok) {
    const data = response.json();
    return data;
  }
  throw new Error("Something went wrong");
}

async function getUser(userName) {
  const response = await fetch(`${USER_URL}/${userName}`, {
    headers: {
      authorization: `token ${TOKEN}`,
    },
  });

  if (response.ok) {
    const data = response.json();
    return data;
  }

  throw new Error("Something went wrong");
}

async function getData(URL) {
  const response = await fetch(URL, {
    headers: {
      authorization: `token ${TOKEN}`,
    },
  });

  if (response.ok) {
    const data = response.json();
    return data;
  }

  throw new Error("Can't Get Organisations");
}

export { getInitialData, getUser, getData };
