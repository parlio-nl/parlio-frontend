import { graphql, useLazyLoadQuery } from "react-relay";
import {
  TestComponentQuery,
  TestComponentQuery$data,
} from "./__generated__/TestComponentQuery.graphql";

// interface Props {
//     test: TestComponentQuery$data
// }

export default function TestComponent(props: any) {
  const data = useLazyLoadQuery<TestComponentQuery>(
    graphql`
      query TestComponentQuery {
        test
      }
    `,
    {}
  );
  return <p>props.test</p>;
}
