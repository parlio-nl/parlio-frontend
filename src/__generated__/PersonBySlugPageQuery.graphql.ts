/**
 * @generated SignedSource<<72016e5bbbcf86174307307105552d89>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
export type PersonBySlugPageQuery$variables = {
  personSlug: string;
};
export type PersonBySlugPageQuery$data = {
  readonly person: {
    readonly firstName: string;
    readonly familyName: string;
    readonly nameInitials: string;
  } | null;
};
export type PersonBySlugPageQuery = {
  variables: PersonBySlugPageQuery$variables;
  response: PersonBySlugPageQuery$data;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "personSlug"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "slug",
    "variableName": "personSlug"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "familyName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "nameInitials",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "PersonBySlugPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Person",
        "kind": "LinkedField",
        "name": "person",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "PersonBySlugPageQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "Person",
        "kind": "LinkedField",
        "name": "person",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          (v3/*: any*/),
          (v4/*: any*/),
          {
            "alias": null,
            "args": null,
            "kind": "ScalarField",
            "name": "id",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "81b80010379fff0d2193ebb17cb439a1",
    "id": null,
    "metadata": {},
    "name": "PersonBySlugPageQuery",
    "operationKind": "query",
    "text": "query PersonBySlugPageQuery(\n  $personSlug: String!\n) {\n  person(slug: $personSlug) {\n    firstName\n    familyName\n    nameInitials\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "350db427cde7f6626e5ddf039726a9b4";

export default node;
