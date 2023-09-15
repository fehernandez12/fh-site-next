import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { duotoneDark as oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

interface MarkdownTextProps {
  text: string;
}

function MarkdownText(props: MarkdownTextProps) {
  const { text } = props;

  const components = {
    h1: ({ node, ...props }: { [x: string]: any; node: any }) => (
      <>
        <h1 className="text-2xl font-bold" {...props} />
        <br />
      </>
    ),
    h2: ({ node, ...props }: { [x: string]: any; node: any }) => (
      <>
        <h2 className="text-xl font-bold" {...props} />
        <br />
      </>
    ),
    h3: ({ node, ...props }: { [x: string]: any; node: any }) => (
      <>
        <h3 className="text-lg font-bold" {...props} />
        <br />
      </>
    ),
    a: ({ node, ...props }: { [x: string]: any; node: any }) => (
      <a className="text-blue-500 hover:underline" target="_blank" {...props} />
    ),
    p: ({ node, ...props }: { [x: string]: any; node: any }) => (
      <>
        <p className="leading-6" {...props} />
        <br />
      </>
    ),
  };

  return (
    <ReactMarkdown
      className="leading-8"
      remarkPlugins={[remarkGfm]}
      components={{
        ...components,
        code({ node, inline, className, children, ...props }) {
          const match = /language-(\w+)/.exec(className || "");
          return !inline && match ? (
            <>
              <SyntaxHighlighter
                {...props}
                className="text-code rounded-md break-words"
                style={oneDark}
                language={match[1]}
                PreTag="div"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
              <br />
            </>
          ) : (
            <code {...props} className={className}>
              {children}
            </code>
          );
        },
      }}
    >
      {text}
    </ReactMarkdown>
  );
}

export { MarkdownText };
