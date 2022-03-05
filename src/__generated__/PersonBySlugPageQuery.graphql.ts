/**
 * @generated SignedSource<<0665a90ab1a753ac2f463e93ce49722d>>
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
    readonly displayName: string;
    readonly firstName: string | null;
    readonly familyName: string | null;
    readonly nameInitials: string | null;
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
  "name": "displayName",
  "storageKey": null
},
v3 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "firstName",
  "storageKey": null
},
v4 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "familyName",
  "storageKey": null
},
v5 = {
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
              "path": "person.displayName"
            },
            (v3/*: any*/),
            (v4/*: any*/),
            (v5/*: any*/)
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
          (v5/*: any*/),
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
    "cacheID": "3447d4655d8e0173bd48bf835931a8e6",
    "id": null,
    "metadata": {},
    "name": "PersonBySlugPageQuery",
    "operationKind": "query",
    "text": "query PersonBySlugPageQuery(\n  $personSlug: String!\n) {\n  person(slug: $personSlug) {\n    displayName\n    firstName\n    familyName\n    nameInitials\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "5b686de5197f26768c62901696378ef8";

export default node;
