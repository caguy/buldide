import { LOGIN, LOGOUT } from "./actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggedIn: true };
    case LOGOUT:
      return { ...state, isLoggedIn: false, user: {} };
    default:
      throw new Error("Invalid action type");
  }
};

export default reducer;
