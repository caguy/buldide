import React from "react";
import AppContext from "../AppContext";

function useAppDispatch() {
  const appContext = React.useContext(AppContext);
  if (appContext === undefined) {
    throw new Error("useAppDispatch must be used within an AppContextProvider");
  }
  return appContext.dispatch;
}

export default useAppDispatch;
