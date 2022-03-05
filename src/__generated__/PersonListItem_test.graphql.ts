/**
 * @generated SignedSource<<5ebe14e670f3a8107f575160949dc56d>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type PersonListItem_test$data = {
  readonly id: string;
  readonly displayName: string | null;
  readonly firstName: string | null;
  readonly familyName: string | null;
  readonly slug: string;
  readonly " $fragmentType": "PersonListItem_test";
};
export type PersonListItem_test$key = {
  readonly " $data"?: PersonListItem_test$data;
  readonly " $fragmentSpreads": FragmentRefs<"PersonListItem_test">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "PersonListItem_test",
  "selections": [
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "id",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "displayName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "firstName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "familyName",
      "storageKey": null
    },
    {
      "alias": null,
      "args": null,
      "kind": "ScalarField",
      "name": "slug",
      "storageKey": null
    }
  ],
  "type": "Person",
  "abstractKey": null
};

(node as any).hash = "5c578d317daf3a4060ce8ccfffffde1b";

export default node;
