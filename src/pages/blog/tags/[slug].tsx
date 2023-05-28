import { BlogResultScreen } from "@/screens/BlogResultScreen";
import { useRouter } from "next/router";
import React from "react";

export default function PostsByTagPage() {
  const {
    query: { slug },
  } = useRouter();

  return <BlogResultScreen search={undefined} tag={slug} />;
}
