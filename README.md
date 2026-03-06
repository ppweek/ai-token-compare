# 🤖 AI Token 比价器

一键对比 GPT-4、Claude、Gemini、文心等主流 AI 模型的 Token 价格，帮你找到最划算的选择。

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/ai-token-compare)

## ✨ 功能特性

- 🔢 **精准 Token 计算** - 支持中英文混合文本的 Token 估算
- 💰 **实时价格对比** - 覆盖 7+ 主流模型，价格实时更新
- 🎯 **场景智能推荐** - 通用对话、代码生成、长文本处理三种场景
- 📊 **可视化对比** - 清晰展示最便宜、推荐、最快的模型
- 🌐 **隐私友好** - 无需登录，数据不上传服务器

## 🚀 在线体验

**访问地址：** https://ai-token-compare.vercel.app

## 📸 截图

![AI Token 比价器截图](./screenshot.png)

## 🛠️ 技术栈

- **框架：** [Next.js 14](https://nextjs.org/) + React + TypeScript
- **样式：** [Tailwind CSS](https://tailwindcss.com/)
- **Token 计算：** [js-tiktoken](https://github.com/dqbd/tiktoken)
- **部署：** [Vercel](https://vercel.com/)
- **统计：** [Vercel Analytics](https://vercel.com/analytics)

## 🏃 本地开发

```bash
# 克隆仓库
git clone https://github.com/yourusername/ai-token-compare.git
cd ai-token-compare

# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 访问 http://localhost:3000
```

## 📊 支持的模型

| 厂商 | 模型 | 输入价格 | 输出价格 |
|-----|------|---------|---------|
| OpenAI | GPT-4o | ¥36/M | ¥108/M |
| OpenAI | GPT-4o-mini | ¥1.08/M | ¥4.32/M |
| Anthropic | Claude 3.5 Sonnet | ¥21.6/M | ¥108/M |
| Anthropic | Claude 3 Haiku | ¥1.8/M | ¥9/M |
| Google | Gemini 1.5 Flash | ¥0.54/M | ¥2.16/M |
| 智谱 AI | GLM-4 | ¥100/M | ¥100/M |
| DeepSeek | DeepSeek-V2 | ¥1/M | ¥2/M |

> 💡 价格数据每日更新，汇率按 1 USD = 7.2 CNY 计算

## 🗺️ 路线图

- [x] MVP v0.1 - 基础 Token 计算和价格对比
- [ ] v0.2 - 历史记录、更多模型支持
- [ ] v0.3 - 深色模式、导出功能
- [ ] v1.0 - API 接口、批量计算

## 🤝 贡献

欢迎提交 Issue 和 PR！

1. Fork 本仓库
2. 创建你的分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 打开 Pull Request

## 📝 反馈

发现价格有误？有新功能建议？

- [提交 Issue](https://github.com/yourusername/ai-token-compare/issues)
- [发送邮件](mailto:your-email@example.com)

## 📄 许可证

[MIT](LICENSE) © 2024 AI Token 比价器

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/yourusername">Your Name</a>
</p>
