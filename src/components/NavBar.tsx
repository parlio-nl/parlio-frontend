import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import parlioLogoSvg from "/public/parlio-logo.svg";

export default function NavBar(): JSX.Element {
  const router = useRouter();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link href={"/"}>
          <a className="navbar-brand d-flex justify-content-center">
            <Image
              src={parlioLogoSvg}
              alt={"Parlementaire Informatie Online (Parlio) Logo"}
              width={130}
              height={32}
              placeholder={"blur"}
              blurDataURL={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNsNAYAATsAtrqkgxAAAAAASUVORK5CYII="
              }
              className={"d-inline-block"}
              priority={true}
            />
            <span
              className={
                "text-secondary small ms-2 d-none d-lg-block align-self-center"
              }
            >
              Parlio
            </span>
          </a>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link href={"/"}>
                <a
                  className={
                    "nav-link" + (router.route === "/" ? " active" : "")
                  }
                  aria-current="page"
                >
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href={"/people"}>
                <a
                  className={
                    "nav-link" + (router.route === "/people" ? " active" : "")
                  }
                  aria-current="page"
                >
                  Personen
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Link
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
