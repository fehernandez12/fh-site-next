import React, { useEffect } from "react";
import { LoadingScreen } from "../LoadingScreen";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ResultsTitle } from "@/components/ResultsTitle";
import ResultsList from "@/components/ResultsList";
import Head from "next/head";

interface BlogResultScreenProps {
  search?: string | string[];
  tag?: string | string[];
}

function BlogResultScreen(props: BlogResultScreenProps) {
  const { search, tag } = props;
  const [loading, setLoading] = React.useState<boolean>(true);
  const [posts, setPosts] = React.useState<TBlogPost[]>([]);

  useEffect(() => {
    setLoading(true);

    async function searchByTag(): Promise<void> {
      const response = await fetch(`/api/blog?tag=${tag}`);
      const data: TBlogPost[] = await response.json();
      setPosts(data);
    }

    async function searchByQuery(): Promise<void> {
      const response = await fetch(`/api/blog?search=${search}`);
      const data: TBlogPost[] = await response.json();
      setPosts(data);
    }

    if (tag && !search) {
      searchByTag();
    }
    if (search && !tag) {
      searchByQuery();
    }

    setLoading(false);
  }, [search, tag]);

  return loading ? (
    <LoadingScreen />
  ) : (
    <>
      <Head>
        <title>{tag ? `FH: #${tag}` : `FH - Search: ${search}`} </title>
      </Head>
      <Navbar />
      <ResultsTitle tag={tag} search={search} />
      <ResultsList posts={posts} />
      <Footer landing />
    </>
  );
}

export { BlogResultScreen };
