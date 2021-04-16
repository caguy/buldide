import { SiteLayout } from "@layouts";
import { AppContextProvider } from "@components/AppContext";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </AppContextProvider>
  );
}

export default MyApp;
