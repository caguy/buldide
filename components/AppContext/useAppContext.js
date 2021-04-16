import React from "react";
import AppContext from "./AppContext";

function useAppContext() {
  const appContext = React.useContext(AppContext);
  if (appContext === undefined) {
    throw new Error("useAppContext must be used within an AppContextProvider");
  }
  return appContext;
}

export default useAppContext;
