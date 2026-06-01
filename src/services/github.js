import axios from "axios";

export const getGitHubData = async (username) => {
  const res = await axios.get(
    `https://api.github.com/users/${username}`
  );
  return res.data;
};