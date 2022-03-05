/**
 * @generated SignedSource<<0c09e8e21e3a5bc848a9a0325063cd9a>>
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
  };
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
        "kind": "RequiredField",
        "field": {
          "alias": null,
          "args": (v1/*: any*/),
          "concreteType": "Person",
          "kind": "LinkedField",
          "name": "person",
          "plural": false,
          "selections": [
            {
              "kind": "RequiredField",
              "field": (v2/*: any*/),
              "action": "THROW",
              "path": "person.firstName"
            },
            (v3/*: any*/),
            (v4/*: any*/)
          ],
          "storageKey": null
        },
        "action": "THROW",
        "path": "person"
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

(node as any).hash = "b8a065412c864a12098164b7037d80d5";

export default node;
