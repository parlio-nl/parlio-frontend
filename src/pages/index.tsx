import Head from "next/head";

export default function Home(): JSX.Element {
  return (
    <div>
      <Head>
        <title>Parlio</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <p>Test Text</p>
        <button onClick={() => alert("alert")} className={"btn btn-primary"}>
          Test knop
        </button>
      </main>
      <footer data-testid={"home-footer"}>
        <p>Footer Text</p>
      </footer>
    </div>
  );
}
