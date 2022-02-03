import { useMemo } from "react";
import { Environment, Network, RecordSource, Store } from "relay-runtime";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";

let relayEnvironment: Environment;

async function fetchQuery(
  operation: any,
  variables: any,
  cacheConfig: any,
  uploadables: any
) {
  const endpoint = process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT;
  if (!endpoint) {
    throw new Error(`Invalid GraphQL endpoint: ${endpoint}`);
  }
  // console.log(JSON.stringify(operation))

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      "Sec-Fetch-Site": "cross-site",
    }, // Add authentication and other headers here
    body: JSON.stringify({
      query: operation.text, // GraphQL text from input
      variables,
    }),
  });

  return response.json();
}

function createEnvironment(initialRecords?: RecordMap): Environment {
  // console.log((typeof window === 'undefined' ? '[SSR] ' : '') + 'Created environment')
  return new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource(initialRecords)),
  });
}

export function initEnvironment(initialRecords?: RecordMap): Environment {
  const environment = relayEnvironment ?? createEnvironment(initialRecords);

  if (initialRecords) {
    // console.log('Publishing initialRecords', initialRecords)
    environment.getStore().publish(new RecordSource(initialRecords));
  }

  if (typeof window === "undefined") {
    return environment;
  }

  if (!relayEnvironment) {
    console.log("!relayEnvironment");
    relayEnvironment = environment;
  }

  return relayEnvironment;
}

export function useEnvironment(initialRecords?: RecordMap): Environment {
  return useMemo(() => initEnvironment(initialRecords), [initialRecords]);
}
