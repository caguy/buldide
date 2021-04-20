import Head from "next/head";
import { SITE_NAME, SITE_DESCRIPTION } from "@config";

const SEO = ({ title, description }) => (
  <Head>
    <title>
      {SITE_NAME}
      {title && ` | ${title}`}
    </title>
    <meta
      key="description"
      name="description"
      content={description ? description : SITE_DESCRIPTION}
    />
    <link key="favicon" rel="icon" href="/favicon.ico" />
  </Head>
);

export default SEO;
