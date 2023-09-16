import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";

interface TagBadgeProps {
  tag: string;
}

function TagBadge(props: TagBadgeProps) {
  const { tag } = props;
  const router = useRouter();

  const onTagClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push({
      pathname: `/blog/search`,
      query: { tag },
    });
  };

  return (
    <button
      className="badge bg-[#282C34] text-gray-100"
      onClick={(e) => onTagClick(e)}
    >
      {tag}
    </button>
  );
}

export { TagBadge };
