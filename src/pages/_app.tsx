import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEnvironment } from "../lib/relay";
import { RelayEnvironmentProvider } from "react-relay";
import { useEffect } from "react";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
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
