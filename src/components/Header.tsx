import NavBar from "./NavBar";

export default function Header(): JSX.Element {
  return (
    <header
      className={"sticky-top shadow-sm d-flex align-items-center bg-light py-2"}
    >
      <NavBar />
    </header>
  );
}
