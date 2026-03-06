import { encodingForModel } from 'js-tiktoken';

// 估算中文 token 数（简化版：1 汉字 ≈ 2 tokens）
export function estimateChineseTokens(text: string): number {
  const chineseChars = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
  return chineseChars * 2;
}

// 使用 tiktoken 计算英文 token 数
export function calculateEnglishTokens(text: string): number {
  try {
    const encoding = encodingForModel('gpt-4o');
    return encoding.encode(text).length;
  } catch {
    // 如果 tiktoken 失败，使用简化估算
    return Math.ceil(text.length / 4);
  }
}

// 综合计算 token 数
export function calculateTokens(text: string): { 
  total: number; 
  english: number; 
  chinese: number;
  englishTokens: number;
  chineseTokens: number;
} {
  // 分离中英文
  const chineseChars = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
  const englishText = text.replace(/[\u4e00-\u9fa5]/g, '');
  
  const chineseTokens = chineseChars * 2;
  const englishTokens = calculateEnglishTokens(englishText);
  
  return {
    total: chineseTokens + englishTokens,
    english: englishText.length,
    chinese: chineseChars,
    englishTokens,
    chineseTokens
  };
}

// 计算成本
export function calculateCost(
  inputTokens: number, 
  outputTokens: number, 
  inputPrice: number, 
  outputPrice: number
): number {
  const inputCost = (inputTokens * inputPrice) / 1000000;
  const outputCost = (outputTokens * outputPrice) / 1000000;
  return inputCost + outputCost;
}

// 格式化价格显示
export function formatPrice(price: number): string {
  if (price < 0.01) {
    return `¥${(price * 100).toFixed(2)}分`;
  } else if (price < 1) {
    return `¥${price.toFixed(3)}`;
  } else {
    return `¥${price.toFixed(2)}`;
  }
}

// 格式化 token 数
export function formatTokens(tokens: number): string {
  if (tokens >= 1000000) {
    return `${(tokens / 1000000).toFixed(2)}M`;
  } else if (tokens >= 1000) {
    return `${(tokens / 1000).toFixed(1)}K`;
  }
  return tokens.toString();
}
