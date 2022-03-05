/**
 * @generated SignedSource<<7a0005393eada33c8485060e099192f7>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type TestComponentQuery$variables = {};
export type TestComponentQuery$data = {
  readonly test: string;
};
export type TestComponentQuery = {
  variables: TestComponentQuery$variables;
  response: TestComponentQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "alias": null,
    "args": null,
    "kind": "ScalarField",
    "name": "test",
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TestComponentQuery",
    "selections": (v0/*: any*/),
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TestComponentQuery",
    "selections": (v0/*: any*/)
  },
  "params": {
    "cacheID": "de51ee7dca503b8419a166fe1ad74fbc",
    "id": null,
    "metadata": {},
    "name": "TestComponentQuery",
    "operationKind": "query",
    "text": "query TestComponentQuery {\n  test\n}\n"
  }
};
})();

(node as any).hash = "6a6d0d1661ebb1cd3e437a693d44565b";

export default node;
