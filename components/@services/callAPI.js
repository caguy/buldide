import { API_URL } from "@config";
import axios from "axios";
import { mutate } from "swr";

const callAPI = async (path, method = "GET", body = {}) => {
  const url = API_URL + path;

  try {
    let response = await axios({ method, url, data: body });
    mutate(url, response.data);
    return { error: false, data: response.data };
  } catch (err) {
    if (err.response) {
      // It is an handled error
      return {
        error: true,
        data: { code: err.response.status, ...err.response.data },
      };
    }
    if (err.request) {
      return {
        error: true,
        data: {
          code: err.response?.status,
          message:
            err.message === "Network Error" && "Pas de connexion internet",
        },
      };
    }
    return { error: true };
  }
};

export default callAPI;
