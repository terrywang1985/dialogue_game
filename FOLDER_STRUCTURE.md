# 📁 项目文件夹结构说明

## 当前项目结构

```
OKComputer_凤临朝：权倾天下/
│
├── index.html                 # 主菜单页面
├── story.html                # 剧情游戏页面
├── character.html            # 角色图鉴页面
├── collection.html           # 收藏鉴赏页面
├── main.js                   # 核心游戏逻辑
│
├── config/                   # 配置文件夹 ⚙️
│   ├── story_config.json     # 剧情配置（对话、选择、场景）
│   └── resources_config.json # 资源索引（图片、音乐路径）
│
├── resources/                # 资源文件夹 🎨
│   ├── backgrounds/          # 场景背景图
│   │   ├── cold_palace.png
│   │   ├── medical_hall.png
│   │   ├── imperial_garden.png
│   │   ├── study_room.png
│   │   └── throne_room.png
│   │
│   ├── characters/           # 角色立绘
│   │   ├── heroine_cold_palace.png
│   │   ├── gu_taiyi.png
│   │   ├── xiao_wangye.png
│   │   └── han_general.png
│   │
│   ├── music/               # 背景音乐
│   │   ├── cold_palace_theme.mp3
│   │   ├── gentle_theme.mp3
│   │   ├── tense_theme.mp3
│   │   ├── ending_theme.mp3
│   │   └── menu_theme.mp3
│   │
│   ├── sounds/              # 音效
│   │   ├── button.mp3
│   │   ├── choice.mp3
│   │   ├── page.mp3
│   │   └── notification.mp3
│   │
│   └── cg/                  # CG图片
│       ├── ending1.png
│       ├── ending2.png
│       └── special_event1.png
│
├── HOW_TO_ADD_STORY.md      # 添加新剧情指南 📖
├── FOLDER_STRUCTURE.md      # 本文件
├── README_CONFIG.md         # 配置说明（原有）
├── design.md                # 设计文档
├── outline.md               # 剧情大纲
└── interaction.md           # 交互设计
```

---

## 🎯 添加新内容时需要修改的文件

### 添加新剧情场景
1. **放置资源文件** → `resources/backgrounds/`, `resources/characters/`, `resources/music/`
2. **注册资源** → `config/resources_config.json`
3. **编写剧情** → `config/story_config.json`

### 添加新角色
1. **角色立绘** → `resources/characters/新角色.png`
2. **注册资源** → `config/resources_config.json` 的 `characters` 部分
3. **配置对话** → `config/story_config.json` 的对话中使用

### 添加新音乐
1. **音乐文件** → `resources/music/新音乐.mp3`
2. **注册资源** → `config/resources_config.json` 的 `music` 部分
3. **场景配置** → `config/story_config.json` 的场景中引用

---

## 📝 文件说明

### HTML页面文件
- `index.html` - 游戏主菜单，包含开始游戏、继续游戏、设置等
- `story.html` - 核心剧情游戏界面，显示对话和选择
- `character.html` - 角色图鉴，展示已解锁角色信息
- `collection.html` - 收藏鉴赏，查看CG和音乐

### JavaScript文件
- `main.js` - 游戏核心逻辑
  - GameStateManager - 游戏状态管理
  - StoryDataManager - 剧情数据管理
  - AudioManager - 音效管理
  - Utils - 工具函数

### 配置文件
- `config/story_config.json` - 剧情配置
  - 章节、场景、对话、选择
  - 属性和好感度变化
  - 条件判断
  
- `config/resources_config.json` - 资源索引
  - 背景图路径
  - 角色立绘路径
  - 音乐文件路径
  - CG图片路径

---

## 🎨 资源文件规范

### 图片资源
| 类型 | 位置 | 规格 | 格式 |
|------|------|------|------|
| 场景背景 | `resources/backgrounds/` | 1920x1080 或 1280x720 | PNG/JPG |
| 角色立绘 | `resources/characters/` | 800x1200（建议） | PNG（透明背景） |
| CG图片 | `resources/cg/` | 1920x1080 | PNG/JPG |

### 音频资源
| 类型 | 位置 | 格式 | 说明 |
|------|------|------|------|
| 背景音乐 | `resources/music/` | MP3 | 循环播放，建议3-5分钟 |
| 音效 | `resources/sounds/` | MP3 | 短促音效，1-3秒 |

---

## 🚀 快速开始

### 添加第一个新场景
1. 准备一张背景图 → 放入 `resources/backgrounds/新场景.png`
2. 打开 `config/resources_config.json`，添加：
   ```json
   "backgrounds": {
     "新场景": "resources/backgrounds/新场景.png"
   }
   ```
3. 打开 `config/story_config.json`，在某个章节的scenes中添加：
   ```json
   "新场景ID": {
     "background": "resources/backgrounds/新场景.png",
     "bgm": "resources/music/某个音乐.mp3",
     "dialogues": [...],
     "choices": [...]
   }
   ```

---

## ✅ 资源文件检查清单

添加新内容前，确保：
- [ ] 图片文件已放入正确文件夹
- [ ] 文件名与配置中的路径完全一致
- [ ] PNG图片已优化大小（建议<2MB）
- [ ] 音乐文件已压缩（建议<5MB）
- [ ] resources_config.json 已更新
- [ ] story_config.json 已添加场景配置

---

## 💡 提示

1. **保持命名一致性**：使用英文或拼音命名文件，避免特殊字符
2. **资源优化**：压缩图片和音频文件以提高加载速度
3. **备份配置**：修改JSON前先备份，避免格式错误
4. **逐步测试**：添加一个场景后立即测试，不要一次添加太多

---

## 🔍 常见路径问题

❌ **错误示例**
```json
"background": "resources\\backgrounds\\scene.png"  // 使用反斜杠
"background": "/resources/backgrounds/scene.png"   // 多余的开头斜杠
```

✅ **正确示例**
```json
"background": "resources/backgrounds/scene.png"    // 使用正斜杠
```

---

需要详细的添加剧情教程，请查看 `HOW_TO_ADD_STORY.md` 文件！
