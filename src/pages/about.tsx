import { GetServerSidePropsResult } from "next";
import React from "react";

type Props = {
  reactVersion: string;
  nodeVersion: string;
  nextVersion: string;
};

export default function About(props: Props) {
  return (
    <div>
      <ul>
        <li>
          <strong>React Version</strong> {props.reactVersion}
        </li>
        <li>
          <strong>Node Version</strong> {props.nodeVersion}
        </li>
        <li>
          <strong>Next.js Version</strong> {props.nextVersion}
        </li>
      </ul>
    </div>
  );
}

export function getServerSideProps(): GetServerSidePropsResult<Props> {
  return {
    props: {
      reactVersion: React.version,
      nodeVersion: process.version,
      nextVersion:
        process.env.__NEXT_VERSION ||
        process.env.npm_package_dependencies_next ||
        "Unknown",
    },
  };
}
