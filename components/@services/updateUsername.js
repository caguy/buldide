import callAPI from "./callAPI";

const updateUsername = async (email, username) => {
  return await callAPI("/users", "post", { email, username });
};

export default updateUsername;
