var posts=["2026/02/18/2026年AI大模型爆发：从千问3-5到GPT-5-2，谁将引领AGI时代/","2026/02/20/2026年最值得收藏的开发者工具与资源清单/","2026/02/19/Hexo博客搭建指南：从零开始打造个人技术博客/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };