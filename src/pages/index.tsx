import type { NextPage } from "next";
import Head from "next/head";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Parlio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>Test Tex</p>
      </main>
      <footer data-testid={"home-footer"}>
        <p>Footer Text</p>
      </footer>
    </div>
  );
};

export default Home;
