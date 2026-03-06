export interface Model {
  id: string;
  name: string;
  vendor: string;
  vendorDisplay: string;
  description: string;
  inputPriceUSD: number | null;
  outputPriceUSD: number | null;
  inputPriceCNY: number;
  outputPriceCNY: number;
  currency: string;
  unit: string;
  contextWindow: number;
  features: string[];
  recommendedFor: string[];
  speed: string;
  quality: string;
  icon: string;
  color: string;
}

export interface Scene {
  name: string;
  description: string;
  outputRatio: number;
  recommendedModels: string[];
}

export interface PricingData {
  version: string;
  lastUpdated: string;
  exchangeRate: {
    USD_CNY: number;
  };
  models: Model[];
  scenes: Record<string, Scene>;
}

export const pricingData: PricingData = {
  "version": "1.0.0",
  "lastUpdated": "2024-03-06",
  "exchangeRate": {
    "USD_CNY": 7.2
  },
  "models": [
    {
      "id": "gpt-4o",
      "name": "GPT-4o",
      "vendor": "OpenAI",
      "vendorDisplay": "OpenAI",
      "description": "旗舰多模态模型，综合能力最强",
      "inputPriceUSD": 5.0,
      "outputPriceUSD": 15.0,
      "inputPriceCNY": 36.0,
      "outputPriceCNY": 108.0,
      "currency": "USD",
      "unit": "perMillion",
      "contextWindow": 128000,
      "features": ["多模态", "长上下文", "代码能力强"],
      "recommendedFor": ["复杂任务", "多模态处理"],
      "speed": "fast",
      "quality": "premium",
      "icon": "🟠",
      "color": "orange"
    },
    {
      "id": "gpt-4o-mini",
      "name": "GPT-4o-mini",
      "vendor": "OpenAI",
      "vendorDisplay": "OpenAI",
      "description": "轻量级模型，性价比之选",
      "inputPriceUSD": 0.15,
      "outputPriceUSD": 0.6,
      "inputPriceCNY": 1.08,
      "outputPriceCNY": 4.32,
      "currency": "USD",
      "unit": "perMillion",
      "contextWindow": 128000,
      "features": ["轻量", "快速", "低成本"],
      "recommendedFor": ["简单任务", "高并发"],
      "speed": "fastest",
      "quality": "good",
      "icon": "🔵",
      "color": "blue"
    },
    {
      "id": "claude-3-5-sonnet",
      "name": "Claude 3.5 Sonnet",
      "vendor": "Anthropic",
      "vendorDisplay": "Anthropic",
      "description": "代码和推理能力突出",
      "inputPriceUSD": 3.0,
      "outputPriceUSD": 15.0,
      "inputPriceCNY": 21.6,
      "outputPriceCNY": 108.0,
      "currency": "USD",
      "unit": "perMillion",
      "contextWindow": 200000,
      "features": ["代码专家", "长上下文", "安全性高"],
      "recommendedFor": ["代码生成", "复杂推理"],
      "speed": "fast",
      "quality": "premium",
      "icon": "🟣",
      "color": "purple"
    },
    {
      "id": "claude-3-haiku",
      "name": "Claude 3 Haiku",
      "vendor": "Anthropic",
      "vendorDisplay": "Anthropic",
      "description": "Anthropic 轻量模型",
      "inputPriceUSD": 0.25,
      "outputPriceUSD": 1.25,
      "inputPriceCNY": 1.8,
      "outputPriceCNY": 9.0,
      "currency": "USD",
      "unit": "perMillion",
      "contextWindow": 200000,
      "features": ["轻量", "快速", "长上下文"],
      "recommendedFor": ["日常对话", "快速响应"],
      "speed": "fastest",
      "quality": "good",
      "icon": "🟣",
      "color": "purple"
    },
    {
      "id": "gemini-1-5-flash",
      "name": "Gemini 1.5 Flash",
      "vendor": "Google",
      "vendorDisplay": "Google",
      "description": "轻量快速，超长上下文",
      "inputPriceUSD": 0.075,
      "outputPriceUSD": 0.3,
      "inputPriceCNY": 0.54,
      "outputPriceCNY": 2.16,
      "currency": "USD",
      "unit": "perMillion",
      "contextWindow": 1000000,
      "features": ["超长上下文", "极速", "超低价"],
      "recommendedFor": ["长文本摘要", "批量处理"],
      "speed": "fastest",
      "quality": "good",
      "icon": "🔴",
      "color": "red"
    },
    {
      "id": "glm-4",
      "name": "GLM-4",
      "vendor": "Zhipu",
      "vendorDisplay": "智谱 AI",
      "description": "国产旗舰大模型",
      "inputPriceUSD": null,
      "outputPriceUSD": null,
      "inputPriceCNY": 100.0,
      "outputPriceCNY": 100.0,
      "currency": "CNY",
      "unit": "perMillion",
      "contextWindow": 128000,
      "features": ["中文优化", "国产", "全能力"],
      "recommendedFor": ["中文任务", "合规要求"],
      "speed": "fast",
      "quality": "premium",
      "icon": "🟢",
      "color": "green"
    },
    {
      "id": "deepseek-v2",
      "name": "DeepSeek-V2",
      "vendor": "DeepSeek",
      "vendorDisplay": "DeepSeek",
      "description": "极致性价比的开源模型",
      "inputPriceUSD": null,
      "outputPriceUSD": null,
      "inputPriceCNY": 1.0,
      "outputPriceCNY": 2.0,
      "currency": "CNY",
      "unit": "perMillion",
      "contextWindow": 128000,
      "features": ["超低价", "开源", "长上下文"],
      "recommendedFor": ["成本敏感", "大规模应用"],
      "speed": "fast",
      "quality": "good",
      "icon": "🟢",
      "color": "green"
    }
  ],
  "scenes": {
    "general": {
      "name": "通用对话",
      "description": "日常问答、聊天对话",
      "outputRatio": 2.0,
      "recommendedModels": ["gpt-4o-mini", "claude-3-haiku", "gemini-1-5-flash"]
    },
    "code": {
      "name": "代码生成",
      "description": "编程、调试、代码解释",
      "outputRatio": 1.5,
      "recommendedModels": ["claude-3-5-sonnet", "gpt-4o", "deepseek-v2"]
    },
    "longtext": {
      "name": "长文本处理",
      "description": "文档分析、摘要、翻译",
      "outputRatio": 0.3,
      "recommendedModels": ["gemini-1-5-flash", "glm-4", "claude-3-5-sonnet"]
    }
  }
};
