---
layout: wiki  # 使用wiki布局模板
wiki: docker # 这是项目名
title: 镜像相关
---


## **docker images**

列出本地镜像列表，返回项：
- REPOSITORY：表示镜像的仓库源
- TAG：镜像的标签
- IMAGE ID：镜像的ID
- CREATED：镜像的创建时间
- SIZE：镜像的大小

## **docker search**

例如 `docker search nginx` , 从 Docker Hub 网站来搜索镜像，返回项：
- NAME：镜像仓库源的名称
- DESCRIPTION：镜像的描述
- OFFICIAL：镜像是否是官方的
- STARTS：类似Github里的star
- AUTOMATED：镜像是否自动构建

## **docker pull**

拉取镜像，将镜像拉取到本地，例如 `docker pull nginx`，可以将最新的nginx镜像拉取到本地，拉取之后使用 `docker images` 查看本地镜像

## **docker rmi**

删除本地镜像，例如 `docker rmi nginx`，删除后 `docker images` 将看不到

## **docker commit**

对容器进行操作后可以使用 commit 提交容器副本到本地镜像，例如 `docker commit -m "update" -a="runoob" e21dec runoob/ubuntu:v2 `
- -m : 提交的描述信息
- -a : 执行镜像作者
- e21dec : 容器ID
-  runoob/ubuntu:v2 : 指定要创建的目标镜像名
   commit 完成后，可以使用 `docker images` 查看新镜像

## **docker build**

使用build命令可以从零构建一个新的镜像。首先，我们需要一个[DockerFile](#DockerFile)文件
```dockerfile
FROM openjdk:8-jre
ADD target/eureka.jar eureka.jar
EXPOSE 8010
CMD java -jar eureka.jar
```
然后，我们使用DockerFile文件，通过 docker build 命令来构建一个镜像  
`docker build -t eureka:1.0 .`  
-t : 指定要创建的目标镜像名
. : DockerFile文件所在的目录

## **docker tag**

使用 docker tag 为镜像添加一个新的标签，用法是： `docker tag 镜像id/镜像名称 镜像源名:新标签`，例如：`docker tag nginx nginx:dev`
将会给nginx镜像再打一下 dev 的标签，使用docker images 可以看到两个不同标签的镜像
