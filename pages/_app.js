import { Provider } from "next-auth/client";
import { SiteLayout } from "@layouts";
import "styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <SiteLayout>
        <Component {...pageProps} />
      </SiteLayout>
    </Provider>
  );
}

export default MyApp;
