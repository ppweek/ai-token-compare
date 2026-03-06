'use client';

import { FileText } from 'lucide-react';
import { formatTokens } from '@/lib/tokenCalculator';

interface InputSectionProps {
  text: string;
  onChange: (text: string) => void;
  tokenCount: number;
}

export function InputSection({ text, onChange, tokenCount }: InputSectionProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
      <div className="flex items-center gap-2 mb-4">
        <FileText className="w-5 h-5 text-indigo-600" />
        <h2 className="font-semibold text-gray-900">输入你的 Prompt</h2>
      </div>
      
      <textarea
        value={text}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-40 p-4 border border-gray-200 rounded-xl resize-none 
                   focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent
                   text-gray-700 text-sm leading-relaxed"
        placeholder="在这里粘贴你的 Prompt 文本...&#10;&#10;例如：&#10;请帮我写一段 Python 代码，实现一个简单的 Web 服务器。"
      />
      
      <div className="flex items-center justify-between mt-3">
        <span className="text-sm text-gray-500">
          已输入：<span className="font-medium text-indigo-600">{formatTokens(tokenCount)}</span> tokens
        </span>
        <span className="text-xs text-gray-400">
          支持中英文混合
        </span>
      </div>
    </div>
  );
}
