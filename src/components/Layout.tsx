import NavBar from "./NavBar";
import PageContainer from "./PageContainer";

export default function Layout({ children }: JSX.ElementChildrenAttribute) {
  return (
    <>
      <NavBar />
      <PageContainer>{children}</PageContainer>
    </>
  );
}
