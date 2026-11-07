---
title: 【实战】利用 Github + Cloudflare 搭建自己的图床
date: 2026-04-06
updated: 2026-04-12
description: 实际不难
tags:
  - 图床
  - Github
  - Cloudflare
---

首先，你得准备一个 [Github](www.github.com) 和一个 [Cloudflare](https://dash.cloudflare.com/) 账号

## 创建 Github 仓库

在 Github 上登录你的账号，然后创建一个 repositories（仓库），Repository name（仓库名称）可以按自己意愿写，比如说 `my-image-bed`（名字内最好不要加空格）。
>> 其实加空格 Github 会自动帮你把**实际名称**填充上 `-`

最好把仓库设置成 Private（隐私）的，你也不想别人能不费吹灰之力就把你的图片浏览个遍吧。

![](https://image.smallaw.cc.cd//img1/imagebed1.png)

## 创建一个访问令牌（Token）

GitHub Token 是访问私有仓库的身份验证凭据，确保只有授权用户才能上传和访问图片。

进入设置页面：点击右上角头像 → Settings，然后找到开发者设置：在左侧菜单中找到 "Developer settings"，创建新 Token：选择 "Personal access tokens" → "Tokens (classic)" → "Generate new token"

![](https://image.smallaw.cc.cd//img1/imagebed2.png)

如下，
Note：可以理解为这个 Token 的名称；

Expiration：过期时间，按自己需求吧，可以设定为永久（No Expiration）；

Select scopes：这个 Token 的权限，搭建图床用的话勾选 repo（完整仓库权限）与 write:packages（写入包权限）

![](https://image.smallaw.cc.cd//img1/imagebed3.jpeg)

然后点击 "Generate token" 按钮，创建 Token，**不要关掉页面，不要关掉页面，不要关掉页面！**

然后复制保存 Token：⚠️ 立即复制并保存 Token，页面刷新后将无法再次查看，这个玩意只显示一次，如果你不小心关掉了，下次注意一下，再创建一个 Token 就好了。

## 创建一个 Cloudflare 的 Worker

接下来我们来到这个可爱的 [Cloudflare](https://dash.cloudflare.com/)。

点开左侧的计算 → Workers 和 Pages，然后点击右侧的 **创建应用程序**
![](https://image.smallaw.cc.cd//img1/imagebed4.png)

创建 Worker，选择**从 Hello World! 开始**，然后填一下 Worker 名称，点击部署，基本的 Worker 就创建好了。

## 建立反向代理

点击 **编辑代码**，把下面的代码完整替换掉原本的代码。
```js
let token = "";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname !== '/') {
      let githubRawUrl = 'https://raw.githubusercontent.com';

      if (new RegExp(githubRawUrl, 'i').test(url.pathname)) {
        githubRawUrl += url.pathname.split(githubRawUrl)[1];
      } else {
        if (env.GH_NAME) {
          githubRawUrl += '/' + env.GH_NAME;
          if (env.GH_REPO) {
            githubRawUrl += '/' + env.GH_REPO;
            if (env.GH_BRANCH) githubRawUrl += '/' + env.GH_BRANCH;
          }
        }
        githubRawUrl += url.pathname;
      }

      // Token 处理逻辑
      if (env.GH_TOKEN && env.TOKEN) {
        if (env.TOKEN == url.searchParams.get('token')) {
          token = env.GH_TOKEN || token;
        } else {
          token = url.searchParams.get('token') || token;
        }
      } else {
        token = url.searchParams.get('token') || env.GH_TOKEN || env.TOKEN || token;
      }

      const githubToken = token;

      if (!githubToken || githubToken == '') {
        return new Response('TOKEN不能为空', { status: 400 });
      }

      // 构建请求头
      const headers = new Headers();
      headers.append('Authorization', `token ${githubToken}`);

      // 发起请求
      const response = await fetch(githubRawUrl, { headers });

      // 检查请求是否成功
      if (response.ok) {
        return new Response(response.body, {
          status: response.status,
          headers: response.headers
        });
      } else {
        const errorText = env.ERROR || '无法获取文件，检查路径或TOKEN是否正确。';
        return new Response(errorText, { status: response.status });
      }
    } else {
      // 处理首页访问
      const envKey = env.URL302 ? 'URL302' : (env.URL ? 'URL' : null);
      if (envKey) {
        const URLs = await ADD(env[envKey]);
        const URL = URLs[Math.floor(Math.random() * URLs.length)];
        return envKey === 'URL302'
          ? Response.redirect(URL, 302)
          : fetch(new Request(URL, request));
      }

      // 返回伪装页面
      return new Response(await nginx(), {
        headers: {
          'Content-Type': 'text/html; charset=UTF-8',
        },
      });
    }
  }
};

// Nginx 伪装页面
async function nginx() {
  const text = `
  <!DOCTYPE html>
  <html>
  <head>
  <title>Welcome to nginx!</title>
  <style>
    body {
      width: 35em;
      margin: 0 auto;
      font-family: Tahoma, Verdana, Arial, sans-serif;
    }
  </style>
  </head>
  <body>
  <h1>Welcome to nginx!</h1>
  <p>If you see this page, the nginx web server is successfully installed and
  working. Further configuration is required.</p>

  <p>For online documentation and support please refer to
  <a href="http://nginx.org/">nginx.org</a>.<br/>
  Commercial support is available at
  <a href="http://nginx.com/">nginx.com</a>.</p>

  <p><em>Thank you for using nginx.</em></p>
  </body>
  </html>
  `;
  return text;
}

// 处理环境变量
async function ADD(envadd) {
  var addtext = envadd.replace(/[\t|"'\r\n]+/g, ',').replace(/,+/g, ',');
  if (addtext.charAt(0) == ',') addtext = addtext.slice(1);
  if (addtext.charAt(addtext.length - 1) == ',') addtext = addtext.slice(0, addtext.length - 1);
  const add = addtext.split(',');
  return add;
}
```
点击 **部署** 就好了。

然后点开设置，

域和路由：有一个 Cloudflare 给你发配的 **域名**，你可以通过这个域名访问你的图床，当然你也可以加上你自己的域名。

变量和机密：点击添加，类型可以选择 **秘钥**，至于名称和值，请参考下表：
|  名称  | 示例值  |说明|
|  ----  | ----  |----|
| `GH_TOKEN`  | `ghp_xxxxxxxxxxxx` |上文保存的 Token|
| `GH_NAME`  | `QWQ-smallAW` |你的 Github 用户名|
|`GH_REPO`| `my-image-bed`|上文建立的 Github 的用来存放图片的仓库|
|`GH_BRANCH`| `main` | 仓库分支名，一般没变的话都是 main|

配置完后，点击 **部署** 即可。

事到如今，你已经可以在你的 Github 仓库存放图片了，然后通过
`https://[你的 Worker 域名/[文件夹]/[图片名称].[扩展名访]问它了`

## 使用 PicGo 上传工具（可选）

首先，你得下载一个 [PicGo](https://github.com/Molunerfinn/PicGo/releases) 软件，根据安装向导安装即可。

打开 PicGo 软件，在左侧找到图床设置 → Github，按下图配置即可，软件都有提示。

![](https://image.smallaw.cc.cd//img1/imagebed5.png)

![](https://image.smallaw.cc.cd//img1/imagebed6.png)

转到上传区，上传你要上传的照片，可以自己选择链接格式，然后再相册里就可以查看已经上传过的图片并复制图片链接了！