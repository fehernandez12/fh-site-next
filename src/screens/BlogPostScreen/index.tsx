import { Navbar } from "@/components/Navbar";
import { PostTitle } from "@/components/PostTitle";
import React, { useEffect, useState } from "react";
import { LoadingScreen } from "../LoadingScreen";
import { PostContent } from "@/components/PostContent";
import { Footer } from "@/components/Footer";
import { Related } from "@/components/Related";
import Head from "next/head";

interface BlogPostScreenProps {
  slug: string | string[];
}

function BlogPostScreen(props: BlogPostScreenProps) {
  const { slug } = props;
  const [post, setPost] = useState<TBlogPost | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    if (!slug) return;
    async function fetchData(): Promise<void> {
      const response = await fetch(`/api/blog/${slug}`);
      const data: TBlogPost = await response.json();
      setPost(data);
      setLoading(false);
    }
    fetchData();
  }, [slug]);

  return loading ? (
    <LoadingScreen />
  ) : (
    <>
      <Head>
        <title>Felipe Hernández - {post!.title}</title>
        <meta name="description" content={post!.abstract} key="desc" />
        <meta property="og:title" content={post!.title} key="og:title" />
        <meta property="og:description" content={post!.abstract} />
      </Head>
      <Navbar />
      <PostTitle title={post!.title} abstract={post!.abstract} />
      <PostContent post={post!} />
      <Related slug={slug} />
      <Footer landing />
    </>
  );
}

export { BlogPostScreen };
