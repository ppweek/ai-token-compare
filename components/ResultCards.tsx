'use client';

import { DollarSign, Star, Zap } from 'lucide-react';
import { formatPrice } from '@/lib/tokenCalculator';

interface ModelResult {
  id: string;
  name: string;
  vendorDisplay: string;
  cost: number;
  speed: string;
  quality: string;
  icon: string;
  color: string;
}

interface ResultCardsProps {
  cheapest: ModelResult;
  recommended: ModelResult;
  fastest: ModelResult;
}

export function ResultCards({ cheapest, recommended, fastest }: ResultCardsProps) {
  const cards = [
    {
      type: 'cheapest',
      icon: <DollarSign className="w-5 h-5" />,
      label: '最便宜',
      color: 'green',
      model: cheapest,
      desc: '适合成本敏感场景',
    },
    {
      type: 'recommended',
      icon: <Star className="w-5 h-5" />,
      label: '推荐',
      color: 'indigo',
      model: recommended,
      desc: '性价比最佳',
    },
    {
      type: 'fastest',
      icon: <Zap className="w-5 h-5" />,
      label: '最快',
      color: 'blue',
      model: fastest,
      desc: '响应速度最快',
    },
  ];

  const colorClasses: Record<string, { bg: string; border: string; text: string; price: string }> = {
    green: {
      bg: 'from-green-50 to-emerald-50',
      border: 'border-green-200',
      text: 'text-green-700',
      price: 'text-green-600',
    },
    indigo: {
      bg: 'from-indigo-50 to-purple-50',
      border: 'border-indigo-200',
      text: 'text-indigo-700',
      price: 'text-indigo-600',
    },
    blue: {
      bg: 'from-blue-50 to-cyan-50',
      border: 'border-blue-200',
      text: 'text-blue-700',
      price: 'text-blue-600',
    },
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {cards.map((card) => {
        const colors = colorClasses[card.color];
        return (
          <div
            key={card.type}
            className={`bg-gradient-to-br ${colors.bg} border ${colors.border} rounded-xl p-4`}
          >
            <div className={`flex items-center gap-2 mb-2 ${colors.text}`}>
              {card.icon}
              <span className="text-sm font-medium">{card.label}</span>
            </div>
            <div className="font-bold text-gray-900">{card.model.name}</div>
            <div className="text-2xl font-bold ${colors.price} mt-1">
              {formatPrice(card.model.cost)}
            </div>
            <div className="text-xs text-gray-500 mt-1">{card.desc}</div>
          </div>
        );
      })}
    </div>
  );
}
