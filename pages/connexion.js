import { getSession } from "next-auth/client";
import { SITE_NAME } from "@config";
import Head from "next/head";
import Login from "@components/Login";

export default function Connexion() {
  return (
    <>
      <Head>
        <title>{SITE_NAME} | Se connecter</title>
      </Head>
      <h1>Se connecter</h1>
      <Login />
    </>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  if (session) {
    // The user is already logged in, redirect him to home page
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
