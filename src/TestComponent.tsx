import { graphql, useLazyLoadQuery } from "react-relay";
import { TestComponentQuery } from "./__generated__/TestComponentQuery.graphql";

export default function TestComponent() {
  const data = useLazyLoadQuery<TestComponentQuery>(
    graphql`
      query TestComponentQuery {
        test
      }

      #      fragment TestComponentFragment on Query {
      #        test
      #      }
    `,
    {}
  );
  return <p>{data.test}</p>;
}
