import React from "react";
import { PostCard } from "../PostCard";

interface FeatureProps {
  featured: TFeatured;
}

function Featured(props: FeatureProps) {
  const { featured } = props;
  return (
    <>
      <div className="w-full h-1/5 pt-6 lg:pt-12 lg:pb-6 px-6 lg:px-12">
        <h1 className="text-xl lg:text-4xl font-bold text-gray-800">
          Featured
        </h1>
        <hr className="border border-b-0 border-x-0 border-gray-800 my-2 lg:my-4" />
        <p className="text-md lg:text-2xl">Popular and very recent posts.</p>
      </div>
      <div className="w-full h-4/5 mb-12 lg:mb-4 px-6 lg:px-12">
        <h1 className="text-xl lg:text-2xl py-2 font-semibold text-gray-800">
          Featured
        </h1>
        {featured.popular && featured.popular.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="grid gap-4">
              {featured.popular.map((post) => (
                <PostCard
                  key={post.slug}
                  post={post}
                  theme="light"
                  grid="masonry"
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <h2 className="text-bold text-lg">
              There will be posts here anytime soon!
            </h2>
          </div>
        )}
      </div>
      <div className="w-full h-4/5 mb-12 lg:mb-6 lg:pb-12 px-6 lg:px-12">
        <h1 className="text-xl lg:text-2xl pt-2 pb-6 font-semibold text-gray-800">
          Recent
        </h1>
        {featured.recent && featured.recent.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="grid gap-4">
              {featured.recent.map((post) => (
                <PostCard
                  key={post.slug}
                  post={post}
                  theme="light"
                  grid="masonry"
                />
              ))}
            </div>
          </div>
        ) : (
          <div className="flex justify-center items-center">
            <h2 className="text-bold text-lg">
              There will be posts here anytime soon!
            </h2>
          </div>
        )}
      </div>
    </>
  );
}

export { Featured };
