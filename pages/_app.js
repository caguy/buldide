import { useReducer } from "react";
import { SiteLayout } from "@layouts";
import AppContext, { reducer, initialState } from "@components/AppContext";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={state}>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </AppContext.Provider>
  );
}

export default MyApp;
