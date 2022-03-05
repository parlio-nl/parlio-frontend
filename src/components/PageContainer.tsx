import { Suspense } from "react";

export default function PageContainer({
  children,
}: JSX.ElementChildrenAttribute): JSX.Element {
  return (
    <div className={"m-4"}>
      <div className={"container-fluid bg-light p-4"}>
        <Suspense fallback={""}>
          <main>{children}</main>
        </Suspense>
      </div>
    </div>
  );
}
