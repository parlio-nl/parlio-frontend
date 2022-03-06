import Head from "next/head";
import Breadcrumb from "../components/Breadcrumb";

export default function Home(): JSX.Element {
  return (
    <>
      <Head>
        <title>Parlio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Breadcrumb
        crumbs={[
          {
            /* This is the "root" breadcrumb, make it clickable */
            text: "Home",
            href: "/",
            active: false,
            icon: "bi-house-door-fill",
          },
        ]}
      />

      <p>Test Text</p>
      <button onClick={() => alert("alert")} className={"btn btn-primary"}>
        Test knop
      </button>
      <footer data-testid={"home-footer"}>
        <p>Footer Text</p>
      </footer>
    </>
  );
}
