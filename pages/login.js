import Logger from "@components/Logger";
import { SITE_NAME } from "@config";
import Head from "next/head";

const Login = () => (
  <>
    <Head>
      <title>{SITE_NAME} | Se connecter</title>
    </Head>
    <h1>Se connecter</h1>
    <Logger />
  </>
);

export default Login;
