// File: components/IntegrateLang/CodeBlock/CodePanel.tsx
"use client";
import dynamic from "next/dynamic";
// import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import { dracula } from "react-syntax-highlighter/dist/esm/styles/prism";

import { codeSnippets } from "./CodeSnippets";

const SyntaxHighlighter = dynamic(
  () => import("react-syntax-highlighter").then((mod) => mod.Prism),
  { ssr: false }
);

 interface Props {
  activeTab: keyof typeof codeSnippets;
}

export default function CodePanel({ activeTab }: Props) {
  const code = codeSnippets[activeTab] || "// No code snippet available";
const language = activeTab === "node js" ? "javascript" : activeTab;
  return (
    <div className="overflow-x-auto mt-4 ">
      <SyntaxHighlighter
        language={language}
        style={dracula}
        showLineNumbers
        customStyle={{
          background: "#000",
        }}
        lineNumberStyle={{ color: "#6e7681" }}
      >
        {code.trim()}
      </SyntaxHighlighter>
    </div>
  );
}
