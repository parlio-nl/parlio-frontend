import { graphql, usePaginationFragment } from "react-relay";
import { PersonList_query$key } from "../__generated__/PersonList_query.graphql";
import { PersonListPaginationQuery } from "../__generated__/PersonListPaginationQuery.graphql";
import PersonListItem from "./PersonListItem";

type Props = {
  query: PersonList_query$key;
};

export default function PersonList(props: Props): JSX.Element {
  const { data, refetch } = usePaginationFragment<
    PersonListPaginationQuery,
    PersonList_query$key
  >(
    graphql`
      fragment PersonList_query on Query
      @refetchable(queryName: "PersonListPaginationQuery") {
        people(first: $count, after: $cursor)
          @connection(key: "PersonList_query_people") {
          edges {
            cursor
            node {
              ...PersonListItem_test
            }
          }
        }
      }
    `,
    props.query
  );
  return (
    <>
      <button
        className={"btn btn-danger mb-3"}
        onClick={() => {
          refetch({ count: 10 }, { fetchPolicy: "network-only" });
        }}
      >
        Reload
      </button>

      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-5 row-cols-xxl-6 g-4">
        {data.people?.edges?.map((v) => {
          if (v == null || v.node == undefined) {
            return null;
          }
          return <PersonListItem key={v.cursor} person={v.node} />;
        })}
      </div>
    </>
  );
}
