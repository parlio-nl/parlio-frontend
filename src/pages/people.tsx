import PersonList from "../components/PersonList";
import { graphql, useLazyLoadQuery } from "react-relay";
import { Suspense } from "react";
import { peoplePageQuery } from "../__generated__/peoplePageQuery.graphql";
import Breadcrumb from "../components/Breadcrumb";

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
    <>
      <Breadcrumb
        crumbs={[
          {
            text: "Home",
            href: "/",
            active: false,
          },
          {
            text: "Personen",
          },
        ]}
      />
      <Suspense fallback={"Loading..."}>
        <PersonList query={data} />
      </Suspense>
    </>
  );
}
