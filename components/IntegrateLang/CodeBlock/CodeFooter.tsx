// File: components/IntegrateLang/CodeBlock/CodeFooter.tsx
import { DownloadCloud, Github } from 'lucide-react'
import React from 'react'

function CodeFooter() {
    const classes = "hover:bg-[#f1f7feb5]/10 p-1 rounded cursor-pointer py-2";
  return (
    <div className="w-full flex items-center justify-center lg:justify-start mt-2 mb-1 text-[#F1F7FEB5] text-sm">
      <p className={classes}>
        <Github className="inline-block mr-2 mb-1" size={16} />
        View on GitHub
      </p>
      <p className={classes}>
        <DownloadCloud className="inline-block ml-6 mr-2 mb-1" size={16} />
        Download Zip
      </p>
    </div>
  );
}

export default CodeFooter
