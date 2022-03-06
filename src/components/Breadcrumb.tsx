import Link from "next/link";

type Crumb = InactiveCrumb | ActiveCrumb;

type InactiveCrumb = {
  text: string;
  href: string;
  active: false;
  icon?: string;
};

type ActiveCrumb = {
  text: string;
  href?: string;
  active?: true;
  icon?: string;
};

type Props = {
  crumbs: Array<Crumb>;
};

export default function Breadcrumb(props: Props): JSX.Element | null {
  const { crumbs } = props;
  if (crumbs.length === 0) {
    return null;
  }

  return (
    <nav data-testid="breadcrumb-nav" aria-label="breadcrumb">
      <ol className="breadcrumb">
        {crumbs.map((crumb, i) => {
          const isActive = crumb.href === undefined || crumb.active === true;
          return (
            <li
              key={i}
              className={`breadcrumb-item${isActive ? " active" : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              {crumb.icon ? (
                <>
                  <i className={`bi ${crumb.icon}`} />{" "}
                </>
              ) : undefined}
              {isActive ||
              crumb.href ===
                undefined /* WebStorm doesn't catch this in `isActive` */ ? (
                crumb.text
              ) : (
                <Link href={crumb.href}>
                  <a>{crumb.text}</a>
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
