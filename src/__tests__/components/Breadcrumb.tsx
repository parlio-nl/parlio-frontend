import { render, screen, within } from "@testing-library/react";
import Breadcrumb from "../../components/Breadcrumb";

describe("breadcrumb", () => {
  it("does not render empty array", () => {
    expect.assertions(1);

    render(<Breadcrumb crumbs={[]} />);

    const breadcrumb = screen.queryByTestId("breadcrumb-nav");

    expect(breadcrumb).not.toBeInTheDocument();
  });

  it("renders single element", () => {
    expect.assertions(2);

    render(
      <Breadcrumb
        crumbs={[
          {
            text: "a",
            href: "/a",
            active: false,
          },
        ]}
      />
    );

    const breadcrumb = screen.getByTestId("breadcrumb-nav");

    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb).toHaveTextContent("a");
  });

  it("renders active elements", () => {
    expect.assertions(4);

    render(
      <Breadcrumb
        crumbs={[
          {
            text: "a",
            href: "/a",
            active: false,
          },
          {
            text: "b",
            href: "/b",
            active: true,
          },
        ]}
      />
    );

    const breadcrumb = screen.getByTestId("breadcrumb-nav");

    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb).toHaveTextContent("ab");
    // When a breadcrumb is active (current location) do not display a link
    expect(breadcrumb).toContainHTML('<a href="/a">a</a>');
    expect(breadcrumb).not.toContainHTML('<a href="/b">b</a>');
  });

  it("renders multiple inactive elements", () => {
    expect.assertions(4);

    render(
      <Breadcrumb
        crumbs={[
          {
            text: "a",
            href: "/a",
            active: false,
          },
          {
            text: "b",
            href: "/b",
            active: false,
          },
        ]}
      />
    );

    const breadcrumb = screen.getByTestId("breadcrumb-nav");

    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb).toHaveTextContent("ab");
    expect(breadcrumb).toContainHTML('<a href="/a">a</a>');
    expect(breadcrumb).toContainHTML('<a href="/b">b</a>');
  });

  it("should be a unordered list", () => {
    expect.assertions(3);

    render(
      <Breadcrumb
        crumbs={[
          {
            text: "a",
            href: "/a",
            active: false,
          },
          {
            text: "b",
            href: "/b",
            active: true,
          },
        ]}
      />
    );

    const breadcrumb = screen.getByTestId("breadcrumb-nav");

    expect(breadcrumb).toBeInTheDocument();

    const breadcrumbList = within(breadcrumb).getByRole("list");

    expect(breadcrumbList).toBeInTheDocument();

    const breadCrumbs = within(breadcrumbList).getAllByRole("listitem");

    expect(breadCrumbs).toHaveLength(2);
  });

  it("renders multiple active elements", () => {
    expect.assertions(13);

    render(
      <Breadcrumb
        crumbs={[
          {
            text: "a",
            href: "/a",
            active: true,
          },
          {
            text: "b",
            href: "/b",
            active: true,
          },
          {
            text: "c",
            href: "/c",
            active: true,
          },
        ]}
      />
    );

    validateCrumbs(true);
  });

  it("renders crumbs without `href` or `active: true` as active crumbs", () => {
    expect.assertions(13);

    render(
      <Breadcrumb
        crumbs={[
          {
            text: "a",
          },
          {
            text: "b",
            active: true,
          },
          {
            text: "c",
          },
        ]}
      />
    );

    validateCrumbs(true);
  });

  it("renders crumbs with `href` or `active: false` as inactive crumbs", () => {
    expect.assertions(13);

    render(
      <Breadcrumb
        crumbs={[
          {
            text: "a",
            href: "/a",
          },
          {
            text: "b",
            href: "/b",
            active: false,
          },
          {
            text: "c",
            href: "/c",
          },
        ]}
      />
    );

    validateCrumbs(false);
  });

  function validateCrumbs(toBeActive: boolean) {
    const breadcrumb = screen.getByTestId("breadcrumb-nav");

    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb).toHaveTextContent("abc");

    const breadcrumbList = within(breadcrumb).getByRole("list");

    expect(breadcrumbList).toBeInTheDocument();

    const breadCrumbs = within(breadcrumbList).getAllByRole("listitem");

    expect(breadCrumbs).toHaveLength(3);

    const expectCrumb = (crumb: HTMLElement) =>
      // eslint-disable-next-line
      toBeActive ? expect(crumb) : expect(crumb).not;

    breadCrumbs.forEach((breadcrumb) => {
      expect(breadcrumb).toHaveClass("breadcrumb-item");
      expectCrumb(breadcrumb).toHaveAttribute("aria-current", "page");
      expectCrumb(breadcrumb).toHaveClass("active");
    });
  }

  it("renders icons", () => {
    expect.assertions(5);

    render(
      <Breadcrumb
        crumbs={[
          {
            text: "a",
            href: "/a", // Not included because active!
            active: true,
            icon: "a",
          },
          {
            text: "b",
            href: "/b",
            icon: "b",
            active: false,
          },
          {
            text: "c",
            href: "/c",
            active: true,
          },
        ]}
      />
    );

    const breadcrumb = screen.getByTestId("breadcrumb-nav");

    expect(breadcrumb).toBeInTheDocument();
    expect(breadcrumb).toHaveTextContent("a bc"); // Space before `a` is trimmed

    const breadcrumbList = within(breadcrumb).getByRole("list");

    expect(breadcrumbList).toBeInTheDocument();

    const breadCrumbs = within(breadcrumbList).getAllByRole("listitem");

    expect(breadCrumbs).toHaveLength(3);

    expect(breadCrumbs).toMatchSnapshot();
  });

  it("matches snapshot", () => {
    expect.assertions(1);

    const { container } = render(
      <Breadcrumb
        crumbs={[
          {
            text: "a",
            href: "/a",
            active: false,
          },
          {
            text: "b",
            href: "/b",
            active: false,
          },
          {
            text: "c",
            href: "/c",
            active: true,
          },
        ]}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
