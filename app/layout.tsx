import './globals.css';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'AI Token 比价器 - 一键对比各大模型成本',
  description: '快速对比 GPT-4、Claude、Gemini、文心等主流 AI 模型的 Token 价格，找到最划算的选择',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
