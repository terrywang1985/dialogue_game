# 📖 如何添加新剧情 - 快速指南

## 🎯 三步添加新剧情

通过简单配置JSON文件和放置资源文件，即可添加新的剧情章节！

---

## 📋 步骤一：准备资源文件

### 1. 准备图片资源
将以下图片放入对应文件夹：

```
resources/
├── backgrounds/        # 背景图片
│   └── 你的场景.png    # 例如：宫殿大殿.png
├── characters/         # 角色立绘
│   └── 你的角色.png    # 例如：皇后.png
└── cg/                # CG图片（可选）
    └── 特殊事件.png
```

**推荐规格：**
- 背景图：1920x1080 或 1280x720
- 角色立绘：800x1200（透明背景PNG）
- CG图：1920x1080

### 2. 准备音乐文件
将音乐文件放入对应文件夹：

```
resources/
├── music/             # 背景音乐
│   └── 你的音乐.mp3   # 例如：宫殿主题.mp3
└── sounds/            # 音效（可选）
    └── 音效.mp3
```

**推荐格式：** MP3，建议比特率128-320kbps

---

## ⚙️ 步骤二：配置资源索引

在 `config/resources_config.json` 中注册你的资源：

```json
{
  "backgrounds": {
    "你的场景ID": "resources/backgrounds/你的场景.png",
    "宫殿大殿": "resources/backgrounds/宫殿大殿.png"
  },
  "characters": {
    "你的角色ID": "resources/characters/你的角色.png",
    "皇后": "resources/characters/皇后.png"
  },
  "music": {
    "你的音乐ID": "resources/music/你的音乐.mp3",
    "宫殿主题": "resources/music/宫殿主题.mp3"
  }
}
```

---

## 📝 步骤三：编写剧情配置

在 `config/story_config.json` 中添加新章节或新场景：

### 示例：添加第二章

```json
{
  "chapters": {
    "chapter1": {
      // ... 第一章现有内容
    },
    "chapter2": {
      "title": "第二章：权谋之始",
      "scenes": {
        "scene1": {
          "background": "resources/backgrounds/宫殿大殿.png",
          "bgm": "resources/music/宫殿主题.mp3",
          "dialogues": [
            {
              "name": "系统提示",
              "text": "你来到了金碧辉煌的大殿...",
              "character": null,
              "voice": null
            },
            {
              "name": "皇后",
              "text": "苏清月，你终于来了。",
              "character": "resources/characters/皇后.png",
              "voice": null
            }
          ],
          "choices": [
            {
              "text": "【恭敬行礼】见过皇后娘娘（魅力+1）",
              "effects": [
                {
                  "type": "stat",
                  "target": "charm",
                  "value": 1
                }
              ],
              "nextScene": "scene2",
              "conditions": []
            },
            {
              "text": "【直言质问】皇后娘娘召见所为何事？（勇气+1）",
              "effects": [
                {
                  "type": "stat",
                  "target": "courage",
                  "value": 1
                }
              ],
              "nextScene": "scene2",
              "conditions": []
            }
          ]
        },
        "scene2": {
          "background": "resources/backgrounds/宫殿大殿.png",
          "bgm": "resources/music/宫殿主题.mp3",
          "dialogues": [
            {
              "name": "皇后",
              "text": "本宫听闻你最近颇有长进...",
              "character": "resources/characters/皇后.png",
              "voice": null
            }
          ],
          "choices": [
            {
              "text": "【结束本章】",
              "effects": [],
              "nextScene": "end",
              "conditions": []
            }
          ]
        }
      }
    }
  },
  "startChapter": "chapter1",
  "startScene": "scene1"
}
```

---

## 🎮 配置说明

### 场景配置 (Scene)

```json
{
  "background": "背景图路径",
  "bgm": "背景音乐路径",
  "dialogues": [...],
  "choices": [...]
}
```

### 对话配置 (Dialogue)

```json
{
  "name": "说话者名字",
  "text": "对话内容",
  "character": "角色立绘路径（可为null）",
  "voice": "语音文件路径（暂时可为null）"
}
```

### 选择配置 (Choice)

```json
{
  "text": "选项文本",
  "effects": [
    {
      "type": "stat",          // 效果类型
      "target": "wisdom",      // 目标属性
      "value": 1               // 变化值
    }
  ],
  "nextScene": "scene2",       // 下一个场景ID
  "conditions": []             // 显示条件（可选）
}
```

### 效果类型 (Effects)

| type | target | 说明 |
|------|--------|------|
| stat | wisdom/courage/insight/charm | 属性变化 |
| affection | gu/xiao/han | 角色好感度 |
| addItem | 物品ID | 添加物品 |
| removeItem | 物品ID | 移除物品 |

### 条件类型 (Conditions)

```json
{
  "type": "stat",
  "target": "wisdom",
  "value": 5  // 需要智慧≥5才显示此选项
}
```

条件类型：
- `stat`: 属性条件
- `affection`: 好感度条件
- `hasItem`: 持有物品
- `sceneVisited`: 访问过场景

---

## 🚀 快速模板

### 创建新章节模板

```json
"chapter章节号": {
  "title": "第X章：章节名称",
  "scenes": {
    "scene1": {
      "background": "resources/backgrounds/场景1.png",
      "bgm": "resources/music/背景音乐1.mp3",
      "dialogues": [
        {
          "name": "角色名",
          "text": "对话内容",
          "character": "resources/characters/角色.png",
          "voice": null
        }
      ],
      "choices": [
        {
          "text": "选项1",
          "effects": [{"type": "stat", "target": "wisdom", "value": 1}],
          "nextScene": "scene2",
          "conditions": []
        }
      ]
    }
  }
}
```

---

## ✅ 完整工作流程

1. **准备资源**
   - 设计并制作背景图（PNG）
   - 绘制角色立绘（透明背景PNG）
   - 准备背景音乐（MP3）

2. **放置文件**
   ```
   resources/backgrounds/新场景.png
   resources/characters/新角色.png
   resources/music/新音乐.mp3
   ```

3. **注册资源**
   - 在 `resources_config.json` 中添加资源引用

4. **编写剧情**
   - 在 `story_config.json` 中添加新章节/场景
   - 配置对话、选择、效果

5. **测试游戏**
   - 打开 `story.html`
   - 测试新剧情流程
   - 检查资源加载和效果

---

## 💡 最佳实践

### 文件命名规范
```
背景：palace_hall.png（宫殿大殿）
角色：empress_normal.png（皇后_普通表情）
音乐：palace_theme.mp3（宫殿主题）
```

### 场景ID命名
```
scene1, scene2, scene3...
或
palace_enter（宫殿入口）
garden_meet（花园相遇）
```

### 剧情设计建议
1. 每个场景3-5段对话
2. 每个场景2-4个选择
3. 选择要有明确的属性/好感度变化
4. 设置合理的分支和条件

---

## 🔧 常见问题

**Q: 图片显示不出来？**
A: 检查路径是否正确，确保文件存在且路径完全匹配

**Q: 音乐不播放？**
A: 当前是模拟播放，可在浏览器控制台看到日志

**Q: 如何添加条件选项？**
A: 在choice中添加conditions数组：
```json
"conditions": [
  {"type": "stat", "target": "wisdom", "value": 5}
]
```

**Q: 如何让剧情结束？**
A: 将nextScene设为"end"

**Q: 如何切换章节？**
A: 修改story_config.json中的startChapter值

---

## 📚 示例资源清单

### 第二章所需资源示例
```
✅ resources/backgrounds/throne_hall.png         # 金銮殿
✅ resources/backgrounds/queens_palace.png       # 皇后寝宫
✅ resources/characters/empress.png              # 皇后立绘
✅ resources/characters/emperor.png              # 皇帝立绘
✅ resources/music/royal_theme.mp3              # 皇家主题曲
✅ resources/music/conspiracy_theme.mp3         # 阴谋主题曲
```

---

## 🎨 推荐工具

- **图片编辑**: Photoshop, GIMP, Krita
- **AI绘图**: Stable Diffusion, Midjourney
- **音乐**: 免费音乐网站（如incompetech.com）
- **JSON编辑**: VS Code (带JSON格式验证)

---

## 📞 需要帮助？

检查浏览器控制台（F12）查看错误信息，通常会显示：
- 配置文件加载失败
- 资源文件找不到
- JSON格式错误

---

**祝你创作愉快！✨**
