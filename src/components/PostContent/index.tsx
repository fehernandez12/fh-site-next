import React from "react";
import { MarkdownText } from "../MarkdownText";
import { TagBadge } from "../TagBadge";

interface PostContentProps {
  post: TBlogPost;
}

function PostContent(props: PostContentProps) {
  const { post } = props;
  return (
    <>
      <div className="w-full h-full flex flex-col py-12 items-center justify-center">
        <p className="text-sm text-gray-400 mb-12">
          Published on {new Date(post.published!).toLocaleDateString()}. Seen{" "}
          {post.views!} times.
        </p>
        <div className="w-5/6 lg:w-3/5 px-0 lg:px-12 mb-6 lg:mb-12">
          <MarkdownText text={post.body!} />
        </div>
        <hr className="h-px px-48 my-12 w-full border border-b-0 border-gray-700 bg-gray-700" />
        <div className="w-3/5 px-6 lg:px-12">
          <div className="flex flex-row justify-start gap-3 items-center">
            <h1 className="text-xl font-bold">Tags:</h1>
            <div className="flex flex-row gap-2">
              {post.tags!.map((tag) => (
                <TagBadge key={tag} tag={tag} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { PostContent };
