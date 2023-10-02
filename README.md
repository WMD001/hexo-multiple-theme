# wmd001.github.io

> 使用hexo搭建的个人博客，博客主页使用[fluid](https://github.com/fluid-dev/hexo-theme-fluid)主题，wiki使用[stellar](https://github.com/xaoxuu/hexo-theme-stellar)主题，网址导航使用[webstack](https://github.com/HCLonely/hexo-theme-webstack)主题

## 多主题配置

### 1. 配置多个_config.theme.yml
   
    不同的主题对应不同的主题配置文件，打包构建时使用使用`--config`参数指定对应的配置文件

### 2. 添加打包脚本

    修改package.json，例如添加stellar构建

```json
{
  "scripts": {
    "build": "hexo generate",
    "build:stellar": "hexo generate --config _config.stellar.yml"    
  }
}
```

### 3. 修改构建过程

修改`.github/workflows/pages.yml`，在build之后添加一个build
```yaml
- name: Build:stellar
  run: npm run build:stellar
```

### 4. 提交，等待重新发布