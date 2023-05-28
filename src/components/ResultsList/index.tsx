import React from "react";
import { PostCard } from "../PostCard";

interface ResultsListProps {
  posts: TBlogPost[];
}

function ResultsList(props: ResultsListProps) {
  const { posts } = props;

  return (
    <>
      <section className="w-full min-h-screen grid grid-cols-3 gap-3 p-5">
        {posts.map((post) => (
          <PostCard post={post} key={post.slug} theme="light" grid="masonry" />
        ))}
      </section>
    </>
  );
}

export default ResultsList;
