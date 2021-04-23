import { Provider } from "next-auth/client";
import { SiteLayout } from "@layouts";
import "styles/globals.css";
import { MenuProvider } from "@helpers";

function MyApp({ Component, pageProps }) {
  return (
    <Provider session={pageProps.session}>
      <MenuProvider>
        <SiteLayout>
          <Component {...pageProps} />
        </SiteLayout>
      </MenuProvider>
    </Provider>
  );
}

export default MyApp;
