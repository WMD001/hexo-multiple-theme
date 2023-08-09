---
title: linux常用命令
tags:
  - linux
categories:
  - linux
abbrlink: 30335
date: 2023-07-31 16:49:52
excerpt: Linux 常用命令 创建用户 修改权限 查看内存 文件解压
---

## 创建用户
```shell
useradd username
```

## 修改用户密码
```shell
passwd username
```

## 修改文件夹用户权限
```shell
chown -R username:userGroup dir/
```

## 查看服务器内存
```shell
free -h
```

## 查看服务器磁盘使用
```shell
df -h
```

## 安装zip
```shell
yum install -y unzip zip
```

## 打包文件
```shell
tar -czvf /path/to/archive.tar.gz /path/to/directory
```

## 解压文件
```shell
# -C 指定解压的目录
tar -C /extract/to/path -xzvf /path/to/archive.tar.gz

unzip test.zip
```

To be continued
