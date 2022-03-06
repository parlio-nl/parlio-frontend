import { Suspense } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";

export default function PageContainer({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element {
  return (
    <div className={"d-flex flex-column h-100"}>
      <NavBar />
      <div className={"m-sm-4 mb-4 flex-shrink-0"}>
        <div className={"container-fluid bg-light p-4"}>
          <Suspense fallback={""}>
            <main>{children}</main>
          </Suspense>
        </div>
      </div>
      <Footer version={"0.1.0"} />
    </div>
  );
}
