import { Environment, Network, RecordSource, Store } from "relay-runtime";

async function fetchQuery(
  operation: any,
  variables: any,
  cacheConfig: any,
  uploadables: any
) {
  const endpoint = process.env.GRAPHQL_ENDPOINT_INTERNAL;
  if (!endpoint) {
    throw new Error(`Invalid SSR endpoint: ${endpoint}`);
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

export function initSsrEnvironment(): Environment {
  return new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
    isServer: true,
  });
}
