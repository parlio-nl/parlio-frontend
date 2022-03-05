import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEnvironment } from "../lib/relay";
import { RelayEnvironmentProvider } from "react-relay";
import { Suspense, useEffect } from "react";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);

  const environment = useEnvironment(pageProps.initialRecords);
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RelayEnvironmentProvider>
  );
}

export default MyApp;
