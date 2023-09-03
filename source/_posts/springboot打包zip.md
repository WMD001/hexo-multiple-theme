---
title: springboot打包zip
tags:
  - springboot
  - maven-assembly
categories:
  - Sprint Boot
excerpt: 使用 maven assembly 插件，将项目打包成zip
abbrlink: 27600
date: 2023-07-28 16:46:31
index_img: img/cover/springboot-build-with-assembly.png
---
# Spring boot 打包成zip

官方文档：[apache-maven-assembly-plugin](https://maven.apache.org/plugins/maven-assembly-plugin/#apache-maven-assembly-plugin)

assembly 是一个maven插件，可以将项目构建包，依赖，模块，文档以及其它文件合并到一个单文件中。
assembly 的配置称为`descriptor`，按照描述文件的配置工作，可以使用assembly内置的几种配置，处理了许多常用操作，比如打包项目工件以及项目文档到一个zip文件中。或者可以为项目配置自定义的配置来设置在assembly中如何控制依赖，模块和其它文件打包。

支持的打包类型
- zip
- tar
- tar.gz (or tgz)
- tar.bz2 (or tbz2)
- tar.snappy
- tar.xz (or txz)
- tar.zst (or tzst)
- jar
- dir
- war
- and any other format that the ArchiveManager has been configured for

要使用assembly插件，如果要使用预定义的配置，需要在`<descriptorRefs><descriptorRefs>`参数中设置配置，如果要使用自定义配置，需要在`<descriptors></descriptors>`参数中设置配置文件的路径。

例如，如果你的项目最终构建是一个`jar`文件，想要包含所有的项目依赖，可以使用assembly的内置配置，在`pom.xml`添加插件配置如下：

```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-assembly-plugin</artifactId>
    <version>3.3.0</version>
    <configuration>
        <descriptorRefs>
            <descriptorRef>jar-with-dependencies</descriptorRef>
        </descriptorRefs>
    </configuration>
</plugin>
```

> `assembly`允许一次指定多个`descriptorRef`，来生成多种类型的组件。
> `descriptorRef` 可选值有 `jar-with-dependencies`、`bin`、`src`、`project`，具体文档参考[descriptor-refs](https://maven.apache.org/plugins/maven-assembly-plugin/descriptor-refs.html)


或者我们想要创建一个自定义的组装描述文件，可以这样使用：
```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-assembly-plugin</artifactId>
    <version>3.3.0</version>
    <configuration>
        <descriptors>
            <descriptor>src/assembly/assembly.xml</descriptor>
        </descriptors>
    </configuration>
</plugin>
```
`assembly.xml`:
```xml
<assembly xmlns="http://maven.apache.org/ASSEMBLY/2.2.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xsi:schemaLocation="http://maven.apache.org/ASSEMBLY/2.2.0 https://maven.apache.org/xsd/assembly-2.2.0.xsd">

    <id>make-assembly</id>
    <formats>
        <format>zip</format>
        <format>tar.gz</format>
    </formats>
    <fileSets>
        <fileSet>
            <directory>${project.basedir}</directory>
            <outputDirectory></outputDirectory>
            <includes>
                <include>README*</include>
                <include>LICENSE*</include>
                <include>NOTICE*</include>
            </includes>
        </fileSet>
        <fileSet>
            <directory>${project.build.directory}</directory>
            <outputDirectory>bin</outputDirectory>
            <includes>
                <include>*.jar</include>
            </includes>
        </fileSet>
    </fileSets>

</assembly>
```

当我们配置好需要的描述文件之后，是时候进行构建了。我们需要将`assembly`的执行加入到项目的构建周期上，添加以下配置：
```xml
<plugin>
    <groupId>org.apache.maven.plugins</groupId>
    <artifactId>maven-assembly-plugin</artifactId>
    <version>3.3.0</version>
    <configuration>
        <descriptors>
            <descriptor>src/assembly/assembly.xml</descriptor>
        </descriptors>
    </configuration>
    <executions>
        <execution>
            <id>assembly</id>
            <!--    绑定到package阶段    -->
            <phase>package</phase>
            <goals>
                <goal>single</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

配置好以后，当我们执行 `mvn package`的时候，assembly 将会在package之后执行，根据`assembly.xml`中的配置，打包zip和tar.gz文件
