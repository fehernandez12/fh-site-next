import { BlogPostScreen } from "@/screens/BlogPostScreen";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { useEffect } from "react";

export default function PostBySlugPage() {
  const {
    query: { slug },
  } = useRouter();

  return <BlogPostScreen slug={slug!} />;
}
