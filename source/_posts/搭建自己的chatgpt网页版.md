---
title: 搭建自己的chatgpt网页版
tags:
  - ChatGpt
  - ChatGpt-nex-web
  - Vercel
categories:
  - ChatGpt
excerpt: 使用vercel部署一个属于自己的ChatGpt网站
abbrlink: 60861
date: 2023-11-12 20:46:59
index_img:
---

<p class="note note-primary">
PS: 如果想不使用科学上网就可以访问到需要有国内域名
</p>

# 申请OpenAI账号

要申请OpenAI账号，您需要按照以下步骤进行操作：

1. 首先，您需要科学上网以便访问OpenAI的官方网站。
2. 准备一个Gmail或Outlook账号，用于注册OpenAI账号。
3. 在注册过程中，您将需要进行手机短信验证码验证。您可以使用接码平台[sms-activate](https://sms-activate.org/)来获取验证码。
4. 完成账号注册后，您就可以免费使用ChatGPT 3.5进行对话了。请注意，使用ChatGPT 3.5需要一直保持科学上网。

# Vercel部署

## ChatGPT-Next-Web

您可以使用[ChatGPT-Next-Web](https://github.com/Yidadaa/ChatGPT-Next-Web)来进行Vercel部署。按照以下步骤操作：

1. 首先，前往[这个链接](https://github.com/Yidadaa/ChatGPT-Next-Web#get-started)获取如何使用ChatGPT-Next-Web的详细说明。
2. 在部署时，您需要设置两个环境变量。第一个是`OPENAI_API_KEY`，您可以在[OpenAI官方网站](https://platform.openai.com/account/api-keys)获取该API密钥。第二个是`CODE`，这是页面上设置的登录码。只有在输入正确的登录码后，才能进行请求。这是为了防止过度请求`tokens`。

# 设置域名

目前Vercel部署后的域名不能直接连接，但如果您拥有自己的域名，您可以通过配置域名来使用自己的域名进行访问。
