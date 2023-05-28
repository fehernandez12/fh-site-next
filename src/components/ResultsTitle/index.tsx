import React from "react";

interface ResultsTitleProps {
  search?: string | string[];
  tag?: string | string[];
}

function ResultsTitle(props: ResultsTitleProps) {
  const { search, tag } = props;

  if (search && !tag) {
    return (
      <div className="w-full h-18 p-6 flex items-center justify-start border-b-2 border-b-gray-500">
        <div className="text-2xl font-bold">
          Search results for &apos;{search}&apos;:
        </div>
      </div>
    );
  } else if (tag && !search) {
    return (
      <div className="w-full h-18 p-6 flex items-center justify-start border-b-2 border-b-gray-500">
        <div className="text-2xl font-bold">
          Posts tagged with &apos;{tag}&apos;:
        </div>
      </div>
    );
  } else {
    return <div>Invalid query</div>;
  }
}

export { ResultsTitle };
