import * as React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

const Markdown = ({ children, className }) => {
  if (!children) {
    return null;
  }

  return (
    <ReactMarkdown className={className} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
      {children}
    </ReactMarkdown>
  );
};

export default Markdown;
