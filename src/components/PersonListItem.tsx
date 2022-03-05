import { graphql, useFragment } from "react-relay";
import { PersonListItem_test$key } from "../__generated__/PersonListItem_test.graphql";
import Link from "next/link";

type Props = {
  person: PersonListItem_test$key;
};

export default function PersonListItem(props: Props) {
  const person = useFragment<PersonListItem_test$key>(
    graphql`
      fragment PersonListItem_test on Person {
        id
        firstName
        familyName
        slug
      }
    `,
    props.person
  );

  return (
    <div className="col">
      <div className="card h-100">
        <div className="card-body">
          <h5 className="card-title">
            {person.firstName} {person.familyName}
          </h5>
          <Link href={`/person/${encodeURIComponent(person.slug)}`}>
            <a className={"link link-secondary pe-auto"}>
              <small>Profielpagina</small>
            </a>
          </Link>
          <p className="card-text">{person.slug}</p>
        </div>
      </div>
    </div>
  );
}
