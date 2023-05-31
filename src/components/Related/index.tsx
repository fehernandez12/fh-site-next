import Link from "next/link";
import React, { useEffect, useState } from "react";

interface RelatedProps {
  slug: string | string[];
}

function Related(props: RelatedProps) {
  const { slug } = props;
  const [related, setRelated] = useState<TBlogPost[] | null>(null);

  useEffect(() => {
    if (!slug) return;
    async function fetchData(): Promise<void> {
      const response = await fetch(`/api/blog/${slug}/related`);
      const data: TBlogPost[] = await response.json();
      setRelated(data);
    }
    fetchData();
  }, [slug]);

  return (
    related && (
      <>
        <div className="w-full bg-[#BEBEBE] pt-12 flex flex-col items-center justify-center">
          <h1 className="text-2xl lg:text-4xl font-bold mb-12">
            Related Posts
          </h1>
          {related.map((post) => (
            <Link
              href={`/blog/${post.slug}`}
              className={`w-3/5 
              flex
              flex-col
              items-start
              border-t-2
              border-gray-500
              justify-start
              transition-colors
              duration-300
              hover:bg-gray-200
              py-12
              px-6`}
              key={post.slug}
            >
              <h2 className="text-2xl">{post.title}</h2>
              <p className="text-gray-500">
                Published on {new Date(post.published!).toLocaleDateString()}.
              </p>
            </Link>
          ))}
        </div>
      </>
    )
  );
}

export { Related };
