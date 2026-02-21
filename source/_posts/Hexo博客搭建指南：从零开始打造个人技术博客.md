---
title: Hexo博客搭建指南：从零开始打造个人技术博客
date: 2026-02-19 10:00:00
categories:
  - 技术心得
tags:
  - Hexo
  - 博客
  - 前端
  - 教程
keywords:
  - Hexo博客搭建
  - 个人博客
  - GitHub Pages
  - 静态网站
cover: https://picsum.photos/seed/hexo-blog/800/450
description: 一篇面向新手的 Hexo 博客搭建完整教程，涵盖环境配置、主题美化、部署上线全流程。
---

## 前言

搭建一个属于自己的博客，是每个技术人的必经之路。相比 WordPress 等动态博客系统，Hexo 以其极快的生成速度、丰富的主题生态和零服务器成本（配合 GitHub Pages），成为了静态博客的首选方案。

本文将从零开始，手把手带你完成一个精美 Hexo 博客的搭建。

## 环境准备

在开始之前，你需要确保系统中已安装以下工具：

- **Node.js**（推荐 v18+）
- **Git**
- **npm** 或 **yarn**

```bash
# 检查 Node.js 版本
node -v

# 检查 Git 版本
git --version
```

## 安装 Hexo

通过 npm 全局安装 Hexo CLI：

```bash
npm install -g hexo-cli
```

创建一个新的 Hexo 项目：

```bash
hexo init my-blog
cd my-blog
npm install
```

启动本地预览服务器：

```bash
hexo server
```

访问 `http://localhost:4000` 即可看到默认的 Hexo 博客页面。

## 选择主题

Hexo 的主题生态非常丰富，以下是几个高质量的推荐：

| 主题名称 | 特点 | 适合场景 |
|---------|------|---------|
| AnZhiYu | 功能丰富、视觉精美 | 个人博客 |
| Butterfly | 高度可定制 | 技术博客 |
| NexT | 简洁优雅 | 学术/技术 |
| Fluid | 现代化设计 | 通用 |

### 安装 AnZhiYu 主题

```bash
git clone -b main https://github.com/anzhiyu-c/hexo-theme-anzhiyu.git themes/anzhiyu
```

修改 `_config.yml` 中的主题配置：

```yaml
theme: anzhiyu
```

## 基础配置

编辑项目根目录下的 `_config.yml`：

```yaml
title: 你的博客名称
subtitle: 一句话介绍
description: SEO 描述
author: 你的名字
language: zh-CN
timezone: Asia/Shanghai
url: https://你的用户名.github.io
```

## 写第一篇文章

```bash
hexo new "我的第一篇博客"
```

这会在 `source/_posts/` 目录下生成一个 Markdown 文件。使用你喜欢的编辑器打开它，开始写作吧！

### Markdown 小技巧

- 使用 `##` 创建标题层级
- 使用 `` ` `` 包裹行内代码
- 使用 `![](url)` 插入图片
- 使用 `> ` 创建引用块

## 部署到 GitHub Pages

1. 在 GitHub 上创建名为 `<用户名>.github.io` 的仓库
2. 安装部署插件：

```bash
npm install hexo-deployer-git --save
```

3. 在 `_config.yml` 中配置部署信息：

```yaml
deploy:
  type: git
  repository: git@github.com:<用户名>/<用户名>.github.io.git
  branch: master
```

4. 一键部署：

```bash
hexo clean && hexo deploy
```

## 进阶优化

- **图片懒加载**：提升页面加载速度
- **Pjax 无刷新切换**：提升浏览体验
- **搜索功能**：安装 `hexo-generator-search` 插件
- **评论系统**：推荐 Twikoo 或 Waline
- **CDN 加速**：通过 Cloudflare 或国内 CDN 服务加速

## 总结

Hexo 是一个强大而灵活的博客框架，配合优秀的主题和插件生态，可以打造出极具个性的技术博客。希望本文能帮助你顺利上手，开启属于自己的写作之旅。

> 动手实践是最好的学习方式。现在就开始搭建你的博客吧！
