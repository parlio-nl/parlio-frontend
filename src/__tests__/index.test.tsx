import { render, screen } from "@testing-library/react";
import Home from "../pages";

describe("/index", () => {
  it("renders a footer", () => {
    expect.assertions(2);

    render(<Home />);

    const footer = screen.getByTestId("home-footer");

    expect(footer).toBeInTheDocument();
    expect(footer).toHaveTextContent("Footer Text");
  });

  it("matches snapshot", () => {
    expect.assertions(1);

    const { container } = render(<Home />);
    expect(container).toMatchSnapshot();
  });
});
