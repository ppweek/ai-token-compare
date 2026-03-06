'use client';

import { Lightbulb } from 'lucide-react';
import { formatPrice } from '@/lib/tokenCalculator';

interface ModelInfo {
  name: string;
  cost: number;
}

interface TipSectionProps {
  cheapest: ModelInfo;
  currentModel?: ModelInfo;
}

export function TipSection({ cheapest, currentModel }: TipSectionProps) {
  if (!currentModel || currentModel.cost <= cheapest.cost * 1.1) {
    return null;
  }

  const savings = ((1 - cheapest.cost / currentModel.cost) * 100).toFixed(0);

  return (
    <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl flex items-start gap-3">
      <Lightbulb className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
      <div>
        <div className="font-medium text-amber-800">💡 省钱小贴士</div>
        <div className="text-sm text-amber-700 mt-1">
          此任务使用 <span className="font-semibold">{cheapest.name}</span> 可节省{' '}
          <span className="font-semibold">{savings}%</span> 成本
          （从 {formatPrice(currentModel.cost)} 降至 {formatPrice(cheapest.cost)}）
        </div>
      </div>
    </div>
  );
}
