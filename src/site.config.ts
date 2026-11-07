export const SITE = {
  title: 'term.log',
  subtitle: '记录、折腾、思考',
  author: 'smallAW',
  signature: '把折腾变成文字，把文字变成沉淀。',
  description: '一个终端风格的个人博客：写作、标签、归档与全文搜索。',
  repo: 'https://github.com/QWQ-smallAW/Astro-smallAW',
  postDir: 'content/blog',
};

// 侧栏社交链接（改成自己的主页地址；QQ 填 wpa.qq.com 临时聊天链接或群链接）
export const SOCIALS = [
  { name: 'GitHub', url: 'https://github.com/QWQ-smallAW' },
  { name: 'Bilibili', url: 'https://space.bilibili.com/180357698' },
  { name: '知乎', url: 'https://www.zhihu.com/people/smallaw/' },
  // { name: 'QQ', url: 'https://wpa.qq.com/msgrd?v=3&site=qq&menu=yes&uin=10000' },
];

// Twikoo 评论：填你的后端地址，留空则不启用评论
// - Vercel：https://xxx.vercel.app
// - Netlify：https://xxx.netlify.app（组件会自动补 /.netlify/functions/twikoo 路径）
// - 腾讯云 / 自建：填环境 URL
export const TWIKOO_ENVID = 'https://smallaw-twikoo.netlify.app';
