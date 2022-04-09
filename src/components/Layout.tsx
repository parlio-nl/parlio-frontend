import PageContainer from "./PageContainer";
import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return <PageContainer>{children}</PageContainer>;
}
