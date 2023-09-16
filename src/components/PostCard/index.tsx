import Link from "next/link";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import { MarkdownText } from "../MarkdownText";

interface PostCardProps {
  post: TBlogPost;
  theme: "light" | "dark";
  grid: "masonry" | "grid";
}

function truncateString(str: string, num: number) {
  if (str.length <= num) {
    return str;
  }
  return str.slice(0, num) + "...";
}

function PostCard(props: PostCardProps) {
  const { post, theme, grid } = props;

  return (
    <>
      <Link href={`/blog/${post.slug}/`}>
        <div
          className={`${
            grid === "masonry" ? "h-auto max-w-full" : "w-full h-full"
          } ${
            theme === "light"
              ? "bg-gray-100 hover:bg-gray-300"
              : "bg-[#232C34] hover:bg-[#556C80]"
          } transition-colors duration-300 flex flex-col items-start justify-start p-4 shadow-lg rounded-sm`}
        >
          <h1 className="text-xl font-bold">{post.title}</h1>
          {post.abstract ?? <MarkdownText text={truncateString(post.body!, 80)} />}
          <div className="w-full h-1/6 pt-2 mt-auto border border-b-0 border-x-0 border-gray-800 relative bottom-0">
            <p className="text-sm text-gray-500">
              Published on {new Date(post.published!).toLocaleDateString()}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
}

export { PostCard };
