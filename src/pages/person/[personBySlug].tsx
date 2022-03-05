import { useRouter } from "next/router";
import { graphql, useLazyLoadQuery } from "react-relay";
import { Suspense } from "react";
import { PersonBySlugPageQuery } from "../../__generated__/PersonBySlugPageQuery.graphql";

type QueryProps = {
  personBySlug: string;
};

export default function PersonBySlug(): JSX.Element | null {
  const router = useRouter();

  if (!router.isReady) {
    return null;
  }

  const { personBySlug } = router.query as QueryProps;

  return PersonBySlugPageSafe(personBySlug);
}

function PersonBySlugPageSafe(slug: string): JSX.Element {
  const { person } = useLazyLoadQuery<PersonBySlugPageQuery>(
    graphql`
      query PersonBySlugPageQuery($personSlug: String!) {
        person(slug: $personSlug) {
          firstName
          familyName
          nameInitials
        }
      }
    `,
    { personSlug: slug }
  );

  return (
    <Suspense fallback={"Loading..."}>
      <ul>
        <li>
          <strong>Voornaam:</strong> {person?.firstName ?? ""}
        </li>
        <li>
          <strong>Achternaam:</strong> {person?.familyName ?? ""}
        </li>
        <li>
          <strong>Initialen:</strong> {person?.nameInitials ?? ""}
        </li>
      </ul>
    </Suspense>
  );
}
