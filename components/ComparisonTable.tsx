'use client';

import { TrendingUp, Download } from 'lucide-react';
import { formatPrice, formatTokens } from '@/lib/tokenCalculator';
import { Scene } from '@/data/models';

interface ModelResult {
  id: string;
  name: string;
  vendorDisplay: string;
  description: string;
  inputPriceCNY: number;
  outputPriceCNY: number;
  cost: number;
  inputTokens: number;
  outputTokens: number;
  speed: string;
  quality: string;
  icon: string;
  color: string;
  features: string[];
}

interface ComparisonTableProps {
  results: ModelResult[];
  scene: Scene;
}

export function ComparisonTable({ results, scene }: ComparisonTableProps) {
  const getTag = (model: ModelResult, index: number) => {
    if (index === 0) {
      return (
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">
          💰 最便宜
        </span>
      );
    }
    if (scene.recommendedModels.includes(model.id)) {
      return (
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-indigo-100 text-indigo-700">
          ⭐ 推荐
        </span>
      );
    }
    if (model.speed === 'fastest') {
      return (
        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
          🚀 最快
        </span>
      );
    }
    return (
      <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-600">
        {model.quality === 'premium' ? '旗舰' : '标准'}
      </span>
    );
  };

  const colorDot: Record<string, string> = {
    orange: 'bg-orange-500',
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    red: 'bg-red-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-500',
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-indigo-600" />
          <h2 className="font-semibold text-gray-900">详细对比</h2>
        </div>
        <button className="px-3 py-1.5 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-1">
          <Download className="w-4 h-4" />
          导出
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-4 font-semibold text-gray-700">模型</th>
              <th className="text-right py-3 px-4 font-semibold text-gray-700">输入成本</th>
              <th className="text-right py-3 px-4 font-semibold text-gray-700">输出成本</th>
              <th className="text-right py-3 px-4 font-semibold text-gray-700">预估总成本</th>
              <th className="text-center py-3 px-4 font-semibold text-gray-700">标签</th>
            </tr>
          </thead>
          <tbody>
            {results.map((model, index) => (
              <tr key={model.id} className="border-b border-gray-100 hover:bg-gray-50">
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-3 h-3 rounded-full ${colorDot[model.color] || 'bg-gray-400'}`} />
                    <div>
                      <div className="font-medium text-gray-900">{model.name}</div>
                      <div className="text-xs text-gray-500">{model.vendorDisplay}</div>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4 text-right text-gray-600">
                  ¥{model.inputPriceCNY}/M
                </td>
                <td className="py-4 px-4 text-right text-gray-600">
                  ¥{model.outputPriceCNY}/M
                </td>
                <td className="py-4 px-4 text-right">
                  <span className="font-bold text-gray-900">{formatPrice(model.cost)}</span>
                  <div className="text-xs text-gray-400">
                    {formatTokens(model.inputTokens)} → {formatTokens(model.outputTokens)}
                  </div>
                </td>
                <td className="py-4 px-4 text-center">
                  {getTag(model, index)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
