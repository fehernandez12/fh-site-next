import React, { useEffect, useState } from "react";
import { LoadingSpinner } from "../LoadingSpinner";
import { PostCard } from "../PostCard";
import { LoadingScreen } from "@/screens/LoadingScreen";
import Link from "next/link";

function yieldColumns(arr: TBlogPost[], windowWidth: number) {
  const result: TBlogPost[][] = [];
  const columns = windowWidth > 1024 ? 4 : windowWidth > 768 ? 6 : 12;
  for (let i = 0; i < arr.length; i += columns) {
    result.push(arr.slice(i, i + columns));
  }
  return result;
}

function RecentPosts() {
  const [recent, setRecent] = useState<TBlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [windowWidth, setWindowWidth] = useState<number>(0);

  useEffect(() => {
    setWindowWidth(window.innerWidth);
    async function fetchData() {
      const response = await fetch("/api/blog/recent");
      const data: BlogPost[] = await response.json();
      setRecent(data);
    }
    fetchData();
    setLoading(false);
  }, []);

  return loading ? (
    <LoadingScreen />
  ) : (
    <>
      <div className="w-full h-1/5 pt-6 pb-3 lg:pt-12 lg:pb-6 px-6 lg:px-12">
        <h1 className="text-xl lg:text-2xl font-bold text-gray-800">
          Recent posts
        </h1>
        <hr className="border border-b-0 border-x-0 border-gray-800 my-2 lg:my-4" />
        <p className="">The most recent content from my blog.</p>
      </div>
      <div className="w-full h-4/5 mb-12 lg:mb-0 px-6 lg:px-12">
        {recent && recent.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {yieldColumns(recent, windowWidth).map((group, index) => (
              <div className="grid gap-4" key={index}>
                {group.map((post) => (
                  <PostCard
                    key={post.slug}
                    post={post}
                    theme="light"
                    grid="masonry"
                  />
                ))}
              </div>
            ))}
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <h2 className="text-bold text-lg">
              There will be posts here anytime soon!
            </h2>
          </div>
        )}
        <hr className="border border-b-0 border-x-0 border-gray-800 my-2 lg:my-4" />
        <Link
          className="underline underline-offset-4 hover:text-gray-800 transition-colors duration-300"
          href="/blog"
        >
          See more...
        </Link>
      </div>
    </>
  );
}

export { RecentPosts };
