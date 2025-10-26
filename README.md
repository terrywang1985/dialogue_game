# 🎮 凤临朝：穿越之权倾天下

一款基于文字选择的古风宫廷剧情游戏，支持通过配置JSON文件快速添加新剧情。

---

## ✨ 特性

- 📝 **纯JSON配置** - 无需编程，只需配置JSON即可添加剧情
- 🎨 **资源化管理** - 图片、音乐统一管理，易于替换
- 🎭 **多角色系统** - 支持多个角色和好感度系统
- 📊 **属性系统** - 智慧、勇气、洞察、魅力四维属性
- 💾 **自动存档** - 游戏进度自动保存
- 🎵 **音乐系统** - 支持背景音乐和音效
- 🖼️ **CG收藏** - 解锁特殊CG和剧情回顾

---

## 🚀 快速开始

### 第一次运行
1. 双击 `生成game-data.bat` 生成配置文件
2. 双击 `index.html` 开始游戏！

### 更新配置
1. 用编辑器修改 `config/` 下的JSON文件
2. 双击 `生成game-data.bat` 重新生成
3. 刷新浏览器即可看到更新

**就这么简单！** ⚡

**详细教程：** 查看 [`配置更新流程.md`](配置更新流程.md)

---

## 📁 项目结构

```
凤临朝/
├── index.html                  # 主菜单
├── story.html                  # 游戏界面
├── character.html              # 角色图鉴
├── collection.html             # 收藏鉴赏
├── main.js                     # 核心逻辑
│
├── config/                     # 配置文件
│   ├── story_config.json       # 剧情配置
│   ├── resources_config.json   # 资源索引
│   └── chapter2_example.json   # 第二章示例
│
├── resources/                  # 资源文件
│   ├── backgrounds/            # 背景图
│   ├── characters/             # 角色立绘
│   ├── music/                  # 背景音乐
│   ├── sounds/                 # 音效
│   └── cg/                     # CG图片
│
└── 文档/
    ├── QUICK_START.md          # 快速开始
    ├── HOW_TO_ADD_STORY.md     # 添加剧情指南
    ├── FOLDER_STRUCTURE.md     # 文件夹说明
    └── RESOURCE_CHECKLIST.md   # 资源清单
```

---

## 📖 文档导航

### 新手入门
1. **[快速开始 (QUICK_START.md)](QUICK_START.md)**
   - 5分钟添加新剧情
   - 配置速查表
   - 常见错误解决

2. **[文件夹结构 (FOLDER_STRUCTURE.md)](FOLDER_STRUCTURE.md)**
   - 项目结构说明
   - 文件用途说明
   - 添加内容流程

### 进阶教程
3. **[添加剧情详细指南 (HOW_TO_ADD_STORY.md)](HOW_TO_ADD_STORY.md)**
   - 完整工作流程
   - 配置详解
   - 最佳实践

4. **[资源需求清单 (RESOURCE_CHECKLIST.md)](RESOURCE_CHECKLIST.md)**
   - 各章节资源需求
   - 资源制作建议
   - 预算参考

5. **[资源文件夹说明 (resources/README.md)](resources/README.md)**
   - 资源规格要求
   - 文件命名规范
   - 获取方式推荐

---

## 🎯 添加新剧情三步走

### 1️⃣ 编辑JSON配置
使用你的JSON编辑器编辑 `config/story_config.json`

### 2️⃣ 双击转换
```
双击 生成game-data.bat → 自动生成 game-data.js
```

### 3️⃣ 双击运行
双击 `index.html` 测试新剧情

**总共只需要2次双击！** ⚡

---

## 💡 配置示例

### 最简单的场景配置
```json
"new_scene": {
  "background": "resources/backgrounds/场景.png",
  "bgm": "resources/music/音乐.mp3",
  "dialogues": [
    {
      "name": "角色名",
      "text": "对话内容",
      "character": null,
      "voice": null
    }
  ],
  "choices": [
    {
      "text": "选项文本",
      "effects": [],
      "nextScene": "下一场景",
      "conditions": []
    }
  ]
}
```

### 添加属性变化
```json
{
  "text": "【聪明选择】智慧+1",
  "effects": [
    {"type": "stat", "target": "wisdom", "value": 1}
  ],
  "nextScene": "next_scene",
  "conditions": []
}
```

### 添加好感度变化
```json
{
  "text": "【温柔对话】顾太医好感+2",
  "effects": [
    {"type": "affection", "target": "gu", "value": 2}
  ],
  "nextScene": "next_scene",
  "conditions": []
}
```

### 添加条件选项
```json
{
  "text": "【需要智慧≥5】高级选项",
  "effects": [],
  "nextScene": "special_scene",
  "conditions": [
    {"type": "stat", "target": "wisdom", "value": 5}
  ]
}
```

---

## 🎨 资源要求

### 图片
- **背景图**：1920x1080 或 1280x720，PNG/JPG，< 2MB
- **角色立绘**：800x1200，PNG透明背景，< 1MB
- **CG图**：1920x1080，PNG/JPG，< 3MB

### 音频
- **背景音乐**：MP3格式，128-320kbps，< 5MB
- **音效**：MP3格式，128kbps，< 500KB

---

## 🛠️ 推荐工具

### AI生成
- **图片**：Stable Diffusion, Midjourney, NovelAI
- **音乐**：AIVA, Soundraw

### 免费资源
- **图片**：Pixabay, Unsplash, Pexels
- **音乐**：Incompetech, FreePD
- **音效**：Freesound, Zapsplat

### 编辑工具
- **图片**：Photoshop, GIMP, Krita
- **音频**：Audacity
- **JSON**：VS Code（带验证）

---

## 📚 游戏系统说明

### 属性系统
- **智慧**：影响策略和学识相关选项
- **勇气**：影响冒险和对抗选项
- **洞察**：影响观察和推理选项
- **魅力**：影响社交和说服选项

### 好感度系统
- **顾太医（gu）**：温柔治愈路线
- **萧王爷（xiao）**：权谋霸道路线
- **韩将军（han）**：忠诚守护路线

### 条件系统
根据属性值和好感度解锁特殊选项和剧情分支

---

## 🎮 当前进度

### 第一章：冷宫初遇 ✅
- 4个主要场景
- 3位可攻略角色
- 多个分支结局

### 第二章：宫闱暗涌 📝
- 示例配置已提供
- 等待资源素材

### 未来计划
- 更多章节
- Live2D角色动画
- 配音系统
- 多结局系统

---

## ❓ 常见问题

### Q: 图片不显示怎么办？
A: 检查文件路径是否正确，确保使用正斜杠 `/`

### Q: 如何添加新角色？
A: 
1. 放置角色立绘到 `resources/characters/`
2. 在 `resources_config.json` 注册
3. 在对话中引用

### Q: 如何创建分支剧情？
A: 在不同选项的 `nextScene` 中指向不同场景ID

### Q: 如何设置条件选项？
A: 在选项的 `conditions` 数组中添加条件对象

### Q: JSON格式错误怎么办？
A: 使用VS Code等编辑器的JSON验证功能，或在线JSON验证工具

---

## 🔧 技术栈

- **前端**：原生HTML + CSS + JavaScript
- **样式**：Tailwind CSS
- **动画**：Anime.js
- **存储**：LocalStorage
- **配置**：JSON

---

## 📄 许可证

本项目仅供学习交流使用。

---

## 🤝 贡献

欢迎提交问题和建议！

---

## 📞 需要帮助？

1. 查看相关文档（见上方"文档导航"）
2. 检查浏览器控制台（F12）的错误信息
3. 参考 `config/chapter2_example.json` 示例配置

---

## 🎉 开始你的创作之旅！

**选择你的入口：**
- 🎮 **玩游戏** → 打开 `index.html`
- ✍️ **写剧情** → 查看 `QUICK_START.md`
- 📖 **学习** → 查看 `HOW_TO_ADD_STORY.md`
- 🎨 **准备素材** → 查看 `RESOURCE_CHECKLIST.md`

**愿你的故事精彩纷呈！** ✨📜👑
