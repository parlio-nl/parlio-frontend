import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEnvironment } from "../lib/relay";
import { RelayEnvironmentProvider } from "react-relay";
import { useEffect } from "react";
import Layout from "../components/Layout";
import Head from "next/head";
import { IEnvironment } from "relay-runtime";

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);

  const environment: IEnvironment = useEnvironment(pageProps.initialRecords);
  return (
    <>
      <Head>
        <title>Parlio</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* eslint-disable-next-line @typescript-eslint/ban-ts-comment */}
      {/* @ts-ignore */}
      <RelayEnvironmentProvider environment={environment}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </RelayEnvironmentProvider>
    </>
  );
}
