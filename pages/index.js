import Head from "next/head";
import { Heading } from "rebass";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Buldidé</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Heading as="h1">Hello world</Heading>
    </div>
  );
}
