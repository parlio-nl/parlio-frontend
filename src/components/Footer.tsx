import Link from "next/link";
import styles from "../styles/Footer.module.css";

type Props = {
  version: string;
};

export default function Footer(props: Props): JSX.Element {
  return (
    <footer
      className={
        "d-flex flex-wrap justify-content-start justify-content-sm-center align-items-center py-4 mx-3 mt-auto border-top"
      }
    >
      <ul
        className={"nav footer align-items-center text-muted " + styles.footer}
      >
        <li className={"nav-item"}>
          <Link href={"/"}>
            <a className={"d-inline px-2 nav-link text-muted"}>
              <i className="bi bi-house-door-fill" /> Home
            </a>
          </Link>
        </li>
        <li className={"nav-item"}>
          <Link href={"/about"}>
            <a className={"d-inline px-2 nav-link text-muted"}>
              <i className={"bi bi-bicycle"} /> Over
            </a>
          </Link>
        </li>
        <li className={"nav-item"}>
          <a
            className={"d-inline px-2 nav-link text-muted"}
            href={"https://github.com/parlio-nl"}
            target={"_blank"}
            rel="noreferrer"
          >
            <i className="bi bi-github" /> GitHub
          </a>
        </li>
        <li className={"nav-item"}>
          <span className={"d-inline px-2 text-muted"} title={"Website versie"}>
            <i className="bi bi-tags-fill" /> {props.version}
          </span>
        </li>
      </ul>
    </footer>
  );
}
