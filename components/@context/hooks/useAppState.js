import React from "react";
import AppContext from "../AppContext";

function useAppState() {
  const appContext = React.useContext(AppContext);
  if (appContext === undefined) {
    throw new Error("useAppState must be used within an AppContextProvider");
  }
  return appContext.state;
}

export default useAppState;
