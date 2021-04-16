import { LOGIN } from "./actionsTypes";

export default (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggedIn: true };
    case LOGOUT:
      return { ...state, isLoggedIn: false, user: {} };
    default:
      throw new Error("Invalid action type");
  }
};
