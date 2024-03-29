import React from "react";

interface PostTitleProps {
  title: string;
  abstract?: string;
}

function PostTitle(props: PostTitleProps) {
  const { title, abstract } = props;

  return (
    <div className="w-full h-64 bg-[#282C34] text-gray-100 top-0">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <h1 className="text-2xl lg:text-4xl font-bold">{title}</h1>
        <hr />
        {abstract && <h3 className="text-lg lg:text-xl font-bold">{abstract}</h3>}
      </div>
    </div>
  );
}

export { PostTitle };
