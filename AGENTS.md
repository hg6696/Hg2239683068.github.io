# HgBlog - AGENTS.md

> Hexo 静态博客项目，使用 AnZhiYu 主题，部署至 GitHub Pages。

## 项目概览

| 属性 | 值 |
|------|-----|
| 框架 | Hexo 8.1.1 |
| 主题 | AnZhiYu (themes/anzhiyu/) |
| 语言 | zh-CN |
| 部署 | GitHub Pages (hg6696.github.io) |

---

## Build / Lint / Test Commands

```bash
# NPM Scripts
npm run build      # hexo generate - 生成静态文件
npm run clean      # hexo clean - 清理缓存
npm run server     # hexo server - 本地预览 (http://localhost:4000)
npm run deploy     # hexo deploy - 部署到 GitHub Pages

# 完整部署流程
npm run clean && npm run build && npm run deploy

# 文章管理
hexo new "文章标题"      # 创建新文章 (source/_posts/)
hexo new page "页面名"   # 创建新页面 (source/页面名/index.md)

# 调试
hexo generate --debug   # 显示详细调试信息
```

> **注意**: 本项目为静态博客，无配置测试框架或代码检查工具。

---

## 目录结构

```
HgBlog/
├── source/
│   ├── _posts/              # 博客文章 (*.md)
│   ├── _data/               # 数据文件 (flink.yml, album.yml)
│   ├── img/                 # 图片资源
│   ├── css/custom.css       # 自定义样式 [在此添加CSS]
│   └── [页面]/index.md      # 独立页面
├── themes/anzhiyu/          # 主题文件 [勿直接修改]
├── scaffolds/               # 文章模板
├── _config.yml              # Hexo 主配置
├── _config.anzhiyu.yml      # 主题配置 [优先级最高]
└── public/                  # 生成文件 (gitignore)
```

---

## 配置优先级

1. `_config.anzhiyu.yml` - **主题配置 (修改此项)**
2. `themes/anzhiyu/_config.yml` - 主题默认配置 (勿修改)
3. `_config.yml` - Hexo 核心配置

---

## 文章规范

### Front Matter 模板

```yaml
---
title: 文章标题
date: 2026-02-20 10:00:00
categories:
  - 分类名称
tags:
  - 标签1
  - 标签2
keywords:
  - SEO关键词
cover: https://example.com/cover.jpg
description: 文章摘要 (用于首页和SEO)
# 可选字段
updated: 2026-02-21 15:30:00
toc: true
comments: true
ai: true
sticky: 100                    # 置顶优先级
---
```

### Markdown 规范

- 标题: ATX 风格 (`## Heading`)
- 代码块: 必须指定语言 ` ```bash `
- 图片: 使用 HTTPS 链接，推荐图床
- 文件名: 英文+连字符，避免中文/空格

---

## CSS 规范

所有自定义样式写入 `source/css/custom.css`:

```css
/* ------------------------------------
 * 功能区块描述
 * ------------------------------------ */

/* ID: 页面唯一元素 */
#site-title { }

/* Class: 可复用样式 */
.nav-fixed { }

/* 深色模式适配 */
[data-theme='dark'] .element { color: #eee; }
```

### 命名约定

- 使用语义化命名
- 深色模式使用 `[data-theme='dark']` 选择器
- 避免使用 `!important` (除非覆盖主题样式)

---

## JavaScript 规范

### 工具脚本 (根目录 fix-*.js)

```javascript
// CommonJS 风格
const fs = require('fs');
const content = fs.readFileSync('./_config.anzhiyu.yml', 'utf8');
fs.writeFileSync(path, content.replace(/pattern/, 'replacement'));
```

### 主题 JS (themes/anzhiyu/source/js/)

```javascript
// 变量命名: 使用 anzhiyu_ 前缀避免冲突
var anzhiyu_musicFirst = false;

// DOM 操作: 原生 JS
var $bodyWrap = document.getElementById("body-wrap");

// 事件监听
document.addEventListener("DOMContentLoaded", function() { });
```

---

## 数据文件格式

### 友链 (source/_data/flink.yml)

```yaml
- class_name: 分类名称
  class_desc: 分类描述
  link_list:
    - name: 站点名称
      link: https://example.com
      avatar: https://example.com/avatar.jpg
      descr: 站点简介
```

---

## 部署流程

```bash
# 1. 确保配置 SSH 密钥
# 2. 执行部署
npm run clean && npm run build && npm run deploy
# 3. 等待 GitHub Pages 构建 (1-2分钟)
```

---

## 常见问题

| 问题 | 解决方案 |
|------|----------|
| 配置不生效 | `hexo clean` 后重新生成 |
| 图片无法显示 | 检查 HTTPS 链接是否可访问 |
| 主题更新 | `cd themes/anzhiyu && git pull` |

---

## 禁止事项

- 勿修改 `themes/anzhiyu/` 下的文件
- 勿提交 `node_modules/`、`public/`、`.deploy_git/`
- 勿在 Front Matter 中使用中文文件名
