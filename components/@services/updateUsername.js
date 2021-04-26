import callAPI from "./callAPI";

const updateUsername = async (email, username) => {
  return await callAPI("/users", "put", { email, username });
};

export default updateUsername;
