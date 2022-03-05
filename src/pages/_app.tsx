import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import { useEnvironment } from "../lib/relay";
import { RelayEnvironmentProvider } from "react-relay";
import { Suspense, useEffect } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("bootstrap");
  }, []);

  const environment = useEnvironment(pageProps.initialRecords);
  return (
    <RelayEnvironmentProvider environment={environment}>
      <Suspense fallback={"Loading..."}>
        <Component {...pageProps} />
      </Suspense>
    </RelayEnvironmentProvider>
  );
}

export default MyApp;
