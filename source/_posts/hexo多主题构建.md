---
title: hexo多主题构建
tags:
  - hexo
  - 多主题
categories:
  - hexo
excerpt: 在hexo博客中同时使用多个主题进行博客搭建
abbrlink: 2265
date: 2023-11-13 15:02:07
index_img:
---

# 创建hexo项目

首先，我们需要先创建一个hexo项目，hexo中默认的主题是`landscape`。

# 引入第二个主题

复制`_config.yml`文件，修改文件名称为`_config.theme.yml`，然后在文件中添加对应的主题配置

# hexo generate

生成时，使用generate的`--config`参数生成对应主题配置的静态资源。
```shell
hexo generate && hexo generate --config _config.theme.yml
```
这样生成的静态资源在public目录下，还会有一个theme目录，既是第二个主题的目录，部署后可以通过`主站地址/theme`进行访问

# 最后

现在的博客页主题使用[fluid](https://github.com/fluid-dev/hexo-theme-fluid)，wiki菜单使用的主题是[stellar](https://github.com/xaoxuu/hexo-theme-stellar)，网址导航使用的主题是[webstack](https://github.com/HCLonely/hexo-theme-webstack/)