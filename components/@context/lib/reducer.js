import { FETCH_START, FETCH_END, LOGIN, LOGOUT } from "./actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_START:
      return { ...state, nbFetch: state.nbFetch + 1 };
    case FETCH_END:
      let { nbFetch } = state;
      nbFetch--;
      if (nbFetch < 0) nbFetch = 0;
      return { ...state, nbFetch };
    case LOGIN:
      return {
        ...state,
        user: {
          isLoggedIn: true,
          username: action.payload.username,
          isAdmin: action.payload.isAdmin,
        },
      };
    case LOGOUT:
      return {
        ...state,
        user: {
          isLoggedIn: false,
          username: null,
          isAdmin: false,
        },
      };
    default:
      throw new Error("Invalid action type");
  }
};

export default reducer;
