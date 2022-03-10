import { useMemo } from "react";
import { IEnvironment, Network, RecordSource, Store } from "relay-runtime";
import { RecordMap } from "relay-runtime/lib/store/RelayStoreTypes";
import { RequestParameters } from "relay-runtime/lib/util/RelayConcreteNode";
import {
  CacheConfig,
  Variables,
} from "relay-runtime/lib/util/RelayRuntimeTypes";
import { UploadableMap } from "relay-runtime/lib/network/RelayNetworkTypes";
import RelayModernEnvironment from "relay-runtime/lib/store/RelayModernEnvironment";

let relayEnvironment: IEnvironment;

async function fetchQuery(
  request: RequestParameters,
  variables: Variables,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  cacheConfig: CacheConfig,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  uploadables?: UploadableMap | null
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
    },
    body: JSON.stringify({
      query: request.text,
      variables,
    }),
  });

  return response.json();
}

function createEnvironment(initialRecords?: RecordMap): IEnvironment {
  // console.log((typeof window === 'undefined' ? '[SSR] ' : '') + 'Created environment')
  return new RelayModernEnvironment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource(initialRecords)),
  });
}

export function initEnvironment(initialRecords?: RecordMap): IEnvironment {
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

export function useEnvironment(initialRecords?: RecordMap): IEnvironment {
  return useMemo(() => initEnvironment(initialRecords), [initialRecords]);
}
