'use client';

import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  indent?: number;
}

const CodeBlock = ({ code, language, title, indent = 0 }: CodeBlockProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className={`relative my-4  rounded-lg overflow-hidden ${indent > 0 ? `ml-${indent * 4}` : ''}`}>
      {/* Title Bar with Copy Button */}
      {title && (
        <div className="flex items-center justify-between px-4 py-2 bg-[#1e2937] text-sage-100">
          <span className="text-sm font-medium">
            {title}
          </span>
          <button
            onClick={copyToClipboard}
            className="text-xs px-3 py-1 rounded-md 
              bg-forest-800/50 hover:bg-forest-700/50 
              transition-colors duration-200 backdrop-blur-sm"
          >
            {copied ? 'Copied!' : 'Copy'}
          </button>
        </div>
      )}

      {/* Code Block */}
      <div className="bg-[#282c34]">
        <SyntaxHighlighter
          language={language || 'javascript'}
          style={atomOneDark}
          customStyle={{
            padding: '1.5rem',
            fontSize: '0.875rem',
            lineHeight: '1.5',
            margin: 0,
            background: '#282c34',
          }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </div>
  );
};

export default CodeBlock;
