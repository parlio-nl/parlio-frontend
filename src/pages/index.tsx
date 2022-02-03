import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { graphql, useLazyLoadQuery } from "react-relay";
import TestComponent from "../TestComponent";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Parlio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main></main>

      <footer></footer>
    </div>
  );
};

export default Home;
