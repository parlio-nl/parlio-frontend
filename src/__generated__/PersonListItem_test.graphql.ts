/**
 * @generated SignedSource<<80e6e9665106d36fe05a100fa57a0c11>>
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
  readonly firstName: string;
  readonly familyName: string;
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

(node as any).hash = "2e3cb14c3db3a61b19b7ce6bc4dd3296";

export default node;
