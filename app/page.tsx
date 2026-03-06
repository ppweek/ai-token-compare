'use client';

import { useState, useMemo } from 'react';
import { Calculator, Github, Sparkles } from 'lucide-react';
import { pricingData } from '@/data/models';
import { calculateTokens, calculateCost, formatPrice } from '@/lib/tokenCalculator';
import { InputSection } from '@/components/InputSection';
import { SceneSelector } from '@/components/SceneSelector';
import { ResultCards } from '@/components/ResultCards';
import { ComparisonTable } from '@/components/ComparisonTable';
import { TipSection } from '@/components/TipSection';

export default function Home() {
  const [text, setText] = useState('');
  const [selectedScene, setSelectedScene] = useState('general');
  const [showResults, setShowResults] = useState(false);

  const tokenInfo = useMemo(() => calculateTokens(text), [text]);
  
  const scene = pricingData.scenes[selectedScene];
  const outputTokens = Math.round(tokenInfo.total * scene.outputRatio);

  const results = useMemo(() => {
    return pricingData.models.map(model => {
      const cost = calculateCost(
        tokenInfo.total,
        outputTokens,
        model.inputPriceCNY,
        model.outputPriceCNY
      );
      return {
        ...model,
        cost,
        inputTokens: tokenInfo.total,
        outputTokens
      };
    }).sort((a, b) => a.cost - b.cost);
  }, [tokenInfo.total, outputTokens]);

  const cheapest = results[0];
  const recommended = results.find(m => scene.recommendedModels.includes(m.id)) || results[1];
  const fastest = results.find(m => m.speed === 'fastest') || results[0];

  const handleCalculate = () => {
    if (text.trim()) {
      setShowResults(true);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 导航栏 */}
      <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center text-white">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-900">AI Token 比价器</h1>
              <p className="text-xs text-gray-500">一键对比各大模型成本</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 hidden sm:block">
              💡 已覆盖 {pricingData.models.length}+ 主流模型
            </span>
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
        </div>
      </nav>

      {/* 主内容 */}
      <main className="max-w-5xl mx-auto px-4 py-8">
        {/* 输入区域 */}
        <InputSection 
          text={text} 
          onChange={setText} 
          tokenCount={tokenInfo.total}
        />

        {/* 场景选择 */}
        <SceneSelector 
          selected={selectedScene} 
          onChange={setSelectedScene}
          scenes={pricingData.scenes}
        />

        {/* 计算按钮 */}
        <button
          onClick={handleCalculate}
          disabled={!text.trim()}
          className="w-full gradient-bg text-white font-semibold py-4 rounded-xl text-lg 
                     hover:opacity-90 transition-opacity flex items-center justify-center gap-2
                     disabled:opacity-50 disabled:cursor-not-allowed mb-6"
        >
          <Calculator className="w-5 h-5" />
          计算成本
        </button>

        {/* 结果展示 */}
        {showResults && (
          <div className="space-y-6">
            <ResultCards 
              cheapest={cheapest}
              recommended={recommended}
              fastest={fastest}
            />
            
            <ComparisonTable 
              results={results}
              scene={scene}
            />
            
            <TipSection 
              cheapest={cheapest}
              currentModel={results.find(m => m.id === 'gpt-4o')}
            />
          </div>
        )}

        {/* 底部信息 */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>价格数据每日更新 | 汇率按 1 USD = {pricingData.exchangeRate.USD_CNY} CNY 计算</p>
          <p className="mt-2">© 2024 AI Token 比价器 | 数据仅供参考</p>
        </div>
      </main>
    </div>
  );
}
