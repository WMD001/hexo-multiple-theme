---
title: python项目离线部署
tags:
  - python部署
  - pip使用
  - requirements
categories:
  - python
excerpt: 在离线环境下部署python项目
abbrlink: 38532
date: 2023-08-21 16:35:47
index_img: /img/cover/python-offline-deply.png
---

!!! warning "注意"
    打包环境的python、pip版本和系统架构应和部署环境保持一致，即在windows上下载的包不能在linux上使用，pip低版本不能使用pip高版本的包。 可以使用`pip debug -verbose`查看pip安装允许的包后缀类型

# venv 虚拟环境
首先我们需要一个虚拟环境，虚拟环境可以让我们只安装需要的依赖。
```shell
python -m venv venv
```
如果是使用PyCharm创建的python项目，已经创建好了venv
# requirements.txt
```shell
pip freeze > requirements.txt
```
将当前python环境的安装包信息保存到requirements.txt文件

# pip download
```shell
# 下载requirements.txt中的依赖包到packages目录下，使用清华镜像
pip download -d ./packages -r requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
```

# pip install
把packages目录上传到服务器，安装
```shell
pip install -r requirements.txt --no-index -f packages
```
