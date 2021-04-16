import { API_URL } from "@config";
import { FETCH_START, FETCH_END } from "@context/actions";
import axios from "axios";

const fetchAPI = (method, path, body) => async ({ state, dispatch }) => {
  const url = API_URL + path;
  dispatch({ type: FETCH_START });

  try {
    let response = await axios({ method, url, data: body });
    return { success: true, data: response.data };
  } catch (err) {
    if (err.response) {
      // It is an handled error
      return { success: false, error: err.response.data };
    }
    if (err.request) {
      return {
        success: false,
        error: {
          code: err.request.status,
          error: err.request.statusText,
          message:
            err.message === "Network Error" && "Pas de connexion internet",
        },
      };
    }
    return { success: false };
  } finally {
    dispatch({ type: FETCH_END });
  }
};

export default fetchAPI;
