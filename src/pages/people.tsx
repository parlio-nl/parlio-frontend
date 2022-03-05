import PersonList from "../components/PersonList";
import { graphql, useLazyLoadQuery } from "react-relay";
import { Suspense } from "react";
import { peoplePageQuery } from "../__generated__/peoplePageQuery.graphql";

export default function People(): JSX.Element {
  const data = useLazyLoadQuery<peoplePageQuery>(
    graphql`
      query peoplePageQuery($count: Int!, $cursor: String) {
        ...PersonList_query
      }
    `,
    { count: 5 }
  );

  return (
    <Suspense fallback={"Loading..."}>
      <PersonList query={data} />
    </Suspense>
  );
}
