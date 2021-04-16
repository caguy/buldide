import React from "react";
import AppContext from "./AppContext";
import reducer from "./lib/reducer";
import initialState from "./lib/initialState";

function AppContextProvider({ children }) {
  const [state, actionDispatch] = React.useReducer(reducer, initialState);

  const dispatch = (action) => {
    if (typeof action === "function") {
      // this is a thunk
      return action({ dispatch: actionDispatch, state });
    } else {
      // this is a vanilla action
      actionDispatch(action);
    }
  };

  const store = { state, dispatch };
  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
}

export default AppContextProvider;
