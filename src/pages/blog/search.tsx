import { BlogResultScreen } from "@/screens/BlogResultScreen";
import { useRouter } from "next/router";
import React from "react";

export async function getServerSideProps({ query }: any) {
  return {
    props: {
      q: query.q || "",
      tag: query.tag || "",
    }, // will be passed to the page component as props
  };
}

export interface SearchProps {
  q?: string | string[];
  tag?: string | string[];
}

export default function search({ q, tag }: SearchProps) {
  return <BlogResultScreen search={q} tag={tag} />;
}
