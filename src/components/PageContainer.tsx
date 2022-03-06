import { Suspense } from "react";
import Footer from "./Footer";
import Header from "./Header";

export default function PageContainer({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element {
  return (
    <div className={"d-flex flex-column vh-100"}>
      <div className={""}>
        <Header />
      </div>
      <div className={"d-flex flex-grow-1 "}>
        <div className={"container-fluid p-4"}>
          <Suspense fallback={""}>
            <main>{children}</main>
          </Suspense>
        </div>
      </div>
      <div className={""}>
        <Footer version={"0.1.0"} />
      </div>
    </div>
  );
}
