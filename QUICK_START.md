# 🚀 快速开始 - 5分钟添加新剧情

## 最简单的新剧情流程

### 第一步：准备一张背景图（1分钟）
1. 找一张古风宫廷背景图（1920x1080）
2. 重命名为 `new_scene.png`
3. 放入 `resources/backgrounds/` 文件夹

### 第二步：注册资源（1分钟）
打开 `config/resources_config.json`，在 `backgrounds` 中添加：
```json
{
  "backgrounds": {
    "cold_palace": "resources/backgrounds/cold_palace.png",
    "new_scene": "resources/backgrounds/new_scene.png"  ← 添加这一行
  }
}
```

### 第三步：编写剧情（3分钟）
打开 `config/story_config.json`，在 `chapter1` 的 `scenes` 中添加：

```json
"new_scene": {
  "background": "resources/backgrounds/new_scene.png",
  "bgm": "resources/music/gentle_theme.mp3",
  "dialogues": [
    {
      "name": "角色名",
      "text": "这是一段新对话",
      "character": null,
      "voice": null
    }
  ],
  "choices": [
    {
      "text": "选项1：返回冷宫",
      "effects": [],
      "nextScene": "scene1",
      "conditions": []
    }
  ]
}
```

### 第四步：连接场景
在某个现有场景的选项中，将 `nextScene` 改为 `"new_scene"`

### 第五步：测试
打开 `story.html`，测试新场景！

---

## 完整示例：添加"御书房场景"

### 1️⃣ 准备资源
```
下载一张御书房图片 → new_scene.png
放入 → resources/backgrounds/imperial_study.png
```

### 2️⃣ 注册（resources_config.json）
```json
"backgrounds": {
  "imperial_study": "resources/backgrounds/imperial_study.png"
}
```

### 3️⃣ 编写剧情（story_config.json）
```json
"imperial_study": {
  "background": "resources/backgrounds/imperial_study.png",
  "bgm": "resources/music/gentle_theme.mp3",
  "dialogues": [
    {
      "name": "系统提示",
      "text": "你来到了御书房，这里摆满了各种典籍...",
      "character": null,
      "voice": null
    },
    {
      "name": "苏清月",
      "text": "这里似乎藏着什么秘密...",
      "character": "resources/characters/heroine_cold_palace.png",
      "voice": null
    }
  ],
  "choices": [
    {
      "text": "【翻阅书籍】仔细查看（智慧+1）",
      "effects": [
        {"type": "stat", "target": "wisdom", "value": 1}
      ],
      "nextScene": "scene1",
      "conditions": []
    },
    {
      "text": "【离开】返回冷宫",
      "effects": [],
      "nextScene": "scene1",
      "conditions": []
    }
  ]
}
```

### 4️⃣ 连接到现有剧情
在 `scene3` 的选择中添加：
```json
{
  "text": "【前往御书房】探索一番",
  "effects": [],
  "nextScene": "imperial_study",
  "conditions": []
}
```

---

## 常用配置速查

### 对话格式
```json
{
  "name": "说话人",
  "text": "对话内容",
  "character": "立绘路径或null",
  "voice": null
}
```

### 选择格式
```json
{
  "text": "选项文本",
  "effects": [效果数组],
  "nextScene": "下一场景ID",
  "conditions": [条件数组]
}
```

### 效果类型
```json
// 加属性
{"type": "stat", "target": "wisdom", "value": 1}

// 加好感
{"type": "affection", "target": "gu", "value": 2}

// 添加物品
{"type": "addItem", "target": "玉佩", "value": 1}
```

### 条件类型
```json
// 需要智慧≥5
{"type": "stat", "target": "wisdom", "value": 5}

// 需要顾太医好感≥3
{"type": "affection", "target": "gu", "value": 3}
```

---

## 文件结构一览

```
你的项目/
├── story.html              ← 打开这个测试游戏
├── config/
│   ├── story_config.json   ← 编写剧情
│   └── resources_config.json ← 注册资源
└── resources/
    ├── backgrounds/        ← 放背景图
    ├── characters/         ← 放角色图
    └── music/             ← 放音乐
```

---

## 🎯 测试清单

添加新场景后检查：
- [ ] 图片文件存在且路径正确
- [ ] resources_config.json 已注册
- [ ] story_config.json 格式正确（注意逗号）
- [ ] 至少有一个对话
- [ ] 至少有一个选择
- [ ] nextScene 指向的场景存在
- [ ] 打开 story.html 能正常显示

---

## ⚠️ 常见错误

### 1. 图片不显示
**原因**：路径错误
**解决**：检查文件名和路径是否完全一致（区分大小写）

### 2. 场景不显示
**原因**：JSON格式错误（通常是少逗号或多逗号）
**解决**：使用JSON验证工具检查

### 3. 点击选项无反应
**原因**：nextScene场景不存在
**解决**：确保nextScene指向的场景ID存在

---

## 📚 进阶功能

### 添加角色立绘
```json
"dialogues": [
  {
    "name": "顾清弦",
    "text": "娘娘请看这药方",
    "character": "resources/characters/gu_taiyi.png",  ← 显示立绘
    "voice": null
  }
]
```

### 添加条件选项
```json
{
  "text": "【需要智慧≥5】智取",
  "effects": [],
  "nextScene": "win",
  "conditions": [
    {"type": "stat", "target": "wisdom", "value": 5}
  ]
}
```

### 多重效果
```json
{
  "text": "完美选择",
  "effects": [
    {"type": "stat", "target": "wisdom", "value": 1},
    {"type": "stat", "target": "charm", "value": 1},
    {"type": "affection", "target": "gu", "value": 2}
  ],
  "nextScene": "next",
  "conditions": []
}
```

---

## 🎉 恭喜！

你已经学会了添加新剧情的基础方法！

**下一步推荐：**
1. 查看 `HOW_TO_ADD_STORY.md` - 详细教程
2. 查看 `config/chapter2_example.json` - 完整章节示例
3. 查看 `RESOURCE_CHECKLIST.md` - 资源准备指南
4. 查看 `FOLDER_STRUCTURE.md` - 文件夹说明

**开始创作属于你的剧情吧！** 📝✨
