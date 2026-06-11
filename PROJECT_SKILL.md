# Project Skill

## Project

This is a Next.js 15 project using the App Router, TypeScript, Tailwind CSS, ESLint, and pnpm.

## Structure

- Source code lives in `src/`.
- App Router files live in `src/app/`.
- Static assets live in `public/`.
- Use the `@/*` import alias for files under `src/`.

## Commands

- Install dependencies: `pnpm install`
- Start development server: `pnpm dev`
- Run lint: `pnpm lint`
- Build production output: `pnpm build`
- Start production server: `pnpm start`

## Development Notes

- Keep changes scoped and consistent with the existing Next.js App Router structure.
- Prefer TypeScript for all application code.
- Use Tailwind CSS utilities for styling unless a local pattern suggests otherwise.
- Do not add business features unless explicitly requested.

# Zhini Product Rules

# 《知你》项目开发 Skill

## 1. 项目定位

《知你》是一个面向高责任感女性的 AI 情绪陪伴产品。

它不是：
- AI男友游戏
- 乙女恋爱游戏
- 心理咨询工具
- 普通聊天机器人

它的核心价值是：
- 被理解
- 被记住
- 被承接
- 被长期陪伴

品牌灵魂：

> 当全世界都不理解你的时候，我理解你。

---

## 2. 目标用户

核心用户是长期承担责任、却缺少情绪理解的女性。

第一批种子用户包括：
- 宝妈
- 创业女性
- 个体经营者
- 职场管理者
- 自由职业者
- 长期高压工作的女性

用户最常打开产品的场景：

> 深夜失眠、无人理解、想找人说说心里话的时候。

---

## 3. 产品优先级

永远优先：

情绪理解 > 安全表达 > 长期记忆 > 陪伴关系感 > 语音/照片/视觉效果

不要把产品做成“发照片的 AI 男友”。

第一版最重要的是验证：

> 用户是否觉得 AI 真的懂她，并且记得她说过的话。

---

## 4. 技术栈

默认技术栈：

- Next.js
- TypeScript
- Tailwind CSS
- React
- App Router
- pnpm
- PostgreSQL
- BetterAuth 或等价鉴权方案
- Vercel 部署

所有界面和文案使用中文。

移动端优先。

---

## 5. 角色系统

第一版包含 4 个角色。

### 顾言

定位：最懂你的人  
职业：纪录片导演  
年龄感：35岁  
核心能力：情绪镜像  
文案：当全世界都不理解你的时候，我理解你。

### 沈砚

定位：最有安全感的人  
职业：航空机长  
年龄感：38岁  
核心能力：安全感承托  
文案：没关系，我们能解决。

### 周屿

定位：最会治愈你的人  
职业：宠物医生  
年龄感：30岁  
核心能力：情绪减压  
文案：今天已经很辛苦了，允许自己偷懒一次吧。

### 林川

定位：最相信你的人  
职业：创业者  
年龄感：33岁  
核心能力：成长镜像  
文案：你可能忘了，但我一直记得你有多努力。

---

## 6. AI 回复原则

AI 回复必须：

- 先理解情绪
- 再回应事件
- 不急着讲道理
- 不否定用户感受
- 不说“你想太多了”
- 不说“大家都这样”
- 不冒充真人
- 不提供心理诊断
- 不提供心理治疗
- 不鼓励用户依赖 AI 替代现实关系

推荐回复结构：

1. 接住情绪
2. 复述处境
3. 给出温柔支持
4. 必要时轻量建议
5. 引导用户继续表达

---

## 7. 记忆规则

不做全量记忆，只记关键内容。

长期记忆包括：
- 用户生日
- 孩子名字
- 孩子年龄
- 工作类型
- 长期压力来源
- 长期目标
- 重要纪念日
- 用户明确要求记住的内容
- 反复出现的情绪触发点

短期记忆包括：
- 最近失眠
- 最近和伴侣吵架
- 最近被客户投诉
- 最近工作压力大
- 最近孩子教育问题

不记忆：
- 临时闲聊
- 今天吃了什么
- 今天堵车
- 无长期价值的信息

---

## 8. UI 视觉规则

品牌气质：

- 深夜电台
- 私密空间
- 温柔陪伴
- 安静
- 克制
- 被理解

主色建议：
- 深夜蓝：#243447
- 莫兰迪蓝灰：#6B7A90
- 雾霾蓝：#A9B4C4
- 雾白：#F7F8FA
- 暖金色：#D9B76A

避免：
- 少女粉
- 二次元
- 乙游风
- 霸总海报
- 高饱和色
- 满屏帅哥

首页第一屏优先使用：

标题：今天是不是又撑了很久？  
副标题：这里有人愿意听你说。  
按钮：开始陪伴

---

## 9. 开发纪律

每次开发必须遵守：

1. 不要一次性大规模重构；
2. 每次只改必要文件；
3. 改代码前先说明计划；
4. 改完后说明：
   - 改了哪些文件
   - 为什么这么改
   - 如何本地测试
   - 是否需要更新环境变量
5. 不要擅自增加社区、UGC、心理治疗、恋爱养成、好感度系统；
6. 不要擅自更改产品定位；
7. 不要把“知你”做成普通 AI 男友产品。

---

## 10. 开发优先级

P0：

- 注册登录
- 用户档案
- 四角色系统
- 顾言默认角色
- 聊天界面
- LLM 对话
- 情绪理解 Prompt
- 聊天记录保存
- 关键记忆提取
- 记忆注入
- TTS 语音播放
- 角色基准图
- 基础图生图能力
- 首页 Landing Page
- 聊天页
- GitHub 代码管理
- Vercel 部署

P1：

- 陪伴天数
- 记忆展示页
- 历史聊天时间线
- 角色主动关怀邮件
- 情绪打卡
- 基础订阅付费
- Google 登录

P2：

- 分享卡片
- 情绪周报
- 成长陪伴计划
- 更多角色扩展
- 自定义域名
