import { Environment, Network, RecordSource, Store } from "relay-runtime";
import { RequestParameters } from "relay-runtime/lib/util/RelayConcreteNode";
import {
  CacheConfig,
  Variables,
} from "relay-runtime/lib/util/RelayRuntimeTypes";
import { UploadableMap } from "relay-runtime/lib/network/RelayNetworkTypes";

async function fetchQuery(
  request: RequestParameters,
  variables: Variables,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  cacheConfig: CacheConfig,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  uploadables?: UploadableMap | null
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
    },
    body: JSON.stringify({
      query: request.text,
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
