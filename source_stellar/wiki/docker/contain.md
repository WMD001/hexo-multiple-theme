---
layout: wiki  # 使用wiki布局模板
wiki: docker # 这是项目名
title: 容器相关
order: 1
---


## 容器使用

## **docker run**

运行一个容器 `docker run -it nginx /bin/bash`，参数说明：
- -i : 交互式操作
- -t : 终端
- nginx : 镜像名称
- /bin/bash : 要执行的命令

其他参数：
- -d : 后台执行
- -p : 端口映射   80:80  input/output
- -m : 内存限制
- -e : 设置环境变量
- -v : 目录映射   /test:/usr/local   ，冒号`:`前是宿主机目录，后是容器内目录，宿主机目录如果不存在会自动生成，
  如果是相对目录，宿主机将以docker下的volumes为根目录创建
- --name : 指定容器名称

## **docker ps**

查看运行中的容器
`docker ps -a` 查看所有容器，包括已经停止的

## **docker start**

启动已经停止的容器 `docker start 容器id`

## **docker stop**

停止正在运行的容器 `docker stop 容器id`

## **docker restart**

重启容器 `docker restart 容器id`

## **docker attach**

进入容器

## **docker exec**

## **docker export**

导出容器 `docker export nginx ## nginx.tar` 或者 `docker export --output=nginx.tar nginx`

## **docker import**

导入容器 `docker import /path/nginx.tar nginx:laster`

## **docker rm**

删除容器

## DockerFile

{% ablock DockerFile child:codeblock %}

```dockerfile
# 指定基础镜像
FROM openjdk:8-jre
# 镜像维护者姓名或邮箱
MAINTAINER habitdev@163.com
# 指定后续执行的用户和用户组 <用户名##[:<用户组##]
USER ROOT:ROOT
# ADD / COPY 复制文件 ADD 会对tar压缩文件自动解压，COPY不会
ADD target/eureka.jar eureka.jar
# 声明端口
EXPOSE 8010
# docker build 时候执行的命令
RUN java -version
# 设置环境变量 ARG 也可以声明参数，但是只在docker build过程中生效
ENV key1=value1 key2=value2
# 容器启动时执行的命令
CMD java -jar eureka.jar
# 指定工作目录
WORKDIR /
```

{% endablock %}

## 打包本地镜像使用

/work 目录下有两个文件分别是
- eureka.jar
- DockerFile

DockerFile 内容如下：
```dockerfile
# 以openjdk:8-jre为基础镜像
FROM openjdk:8-jre
# 复制eureka.jar到镜像
ADD eureka.jar eureka.jar
# 声明8010端口
EXPOSE 8010
# 镜像容器启动时执行 java -jar eureka.jar
CMD java -jar eureka.jar
```
在work目录下执行 `docker build -t eureka .`

## docker save

打包镜像，可以发送到其他机器上加载。  `docker save -o 要打镜像包的名称 镜像`

## docker load

加载打包镜像， `docker load -i 镜像名`