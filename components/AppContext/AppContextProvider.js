import React from "react";
import AppContext from "./AppContext";
import reducer from "./lib/reducer";
import initialState from "./lib/initialState";

function AppContextProvider({ children }) {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const store = { state, dispatch };
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
