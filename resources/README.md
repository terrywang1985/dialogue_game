# 📁 Resources 资源文件夹说明

## 文件夹结构

```
resources/
├── backgrounds/     # 场景背景图
├── characters/      # 角色立绘
├── music/          # 背景音乐
├── sounds/         # 音效
└── cg/             # CG图片
```

---

## 📂 各文件夹用途

### backgrounds/ - 场景背景图
存放游戏中各个场景的背景图片

**规格要求：**
- 分辨率：1920x1080 或 1280x720
- 格式：PNG 或 JPG
- 大小：建议 < 2MB

**命名示例：**
```
cold_palace.png          # 冷宫
medical_hall.png         # 太医院
imperial_garden.png      # 御花园
throne_room.png          # 金銮殿
```

---

### characters/ - 角色立绘
存放游戏中角色的立绘图片

**规格要求：**
- 分辨率：800x1200（推荐）
- 格式：PNG（透明背景）
- 大小：建议 < 1MB

**命名示例：**
```
heroine_cold_palace.png  # 女主（冷宫装扮）
heroine_palace.png       # 女主（宫装）
gu_taiyi.png            # 顾太医
xiao_wangye.png         # 萧王爷
han_general.png         # 韩将军
emperor.png             # 皇帝
empress.png             # 皇后
```

**命名规范：**
```
角色名_状态.png
例：
- gu_taiyi_normal.png    # 顾太医（常态）
- gu_taiyi_smile.png     # 顾太医（微笑）
- empress_angry.png      # 皇后（愤怒）
```

---

### music/ - 背景音乐
存放游戏中的背景音乐文件

**规格要求：**
- 格式：MP3
- 比特率：128-320kbps
- 大小：建议 < 5MB
- 时长：3-5分钟（循环播放）

**命名示例：**
```
cold_palace_theme.mp3    # 冷宫主题
gentle_theme.mp3         # 温柔主题
tense_theme.mp3          # 紧张主题
ending_theme.mp3         # 结局主题
menu_theme.mp3           # 菜单主题
palace_theme.mp3         # 宫殿主题
romance_theme.mp3        # 浪漫主题
battle_theme.mp3         # 战斗主题
```

**命名规范：**
```
场景/情绪_theme.mp3
```

---

### sounds/ - 音效
存放游戏中的音效文件

**规格要求：**
- 格式：MP3
- 比特率：128kbps
- 大小：建议 < 500KB
- 时长：1-3秒

**命名示例：**
```
button.mp3              # 按钮点击
choice.mp3              # 选择音效
page.mp3                # 翻页音效
notification.mp3        # 提示音效
door_open.mp3           # 开门
footstep.mp3            # 脚步
sword_draw.mp3          # 拔剑
```

**命名规范：**
```
动作描述.mp3
```

---

### cg/ - CG图片
存放游戏中的特殊CG图片（结局、重要事件等）

**规格要求：**
- 分辨率：1920x1080
- 格式：PNG 或 JPG
- 大小：建议 < 3MB

**命名示例：**
```
ending1.png              # 结局1
ending2.png              # 结局2
special_event1.png       # 特殊事件1
emperor_meeting.png      # 皇帝召见
palace_banquet.png       # 宫宴
romance_scene.png        # 恋爱场景
```

---

## 🎨 资源获取方式

### 1. AI生成（推荐新手）
**图片：**
- Stable Diffusion（免费）
- Midjourney（付费）
- NovelAI（付费）

**音乐：**
- AIVA（免费+付费）
- Soundraw（付费）

### 2. 免费素材网站
**图片：**
- Pixabay.com
- Unsplash.com
- Pexels.com

**音乐：**
- Incompetech.com
- FreePD.com
- Purple Planet Music

**音效：**
- Freesound.org
- Zapsplat.com

### 3. 委托制作
- 淘宝搜索"游戏立绘"、"场景原画"
- B站UP主约稿
- 猪八戒网

---

## 📋 资源添加流程

### 第一步：准备文件
1. 获取或制作资源文件
2. 按照规格要求调整大小和格式
3. 按照命名规范重命名文件

### 第二步：放置文件
将文件放入对应文件夹：
```
backgrounds/ → 背景图
characters/  → 角色图
music/      → 音乐
sounds/     → 音效
cg/         → CG图
```

### 第三步：注册资源
在 `config/resources_config.json` 中注册：
```json
{
  "backgrounds": {
    "新场景": "resources/backgrounds/新场景.png"
  },
  "characters": {
    "新角色": "resources/characters/新角色.png"
  },
  "music": {
    "新音乐": "resources/music/新音乐.mp3"
  }
}
```

### 第四步：在剧情中使用
在 `config/story_config.json` 中引用：
```json
{
  "background": "resources/backgrounds/新场景.png",
  "bgm": "resources/music/新音乐.mp3",
  "dialogues": [
    {
      "character": "resources/characters/新角色.png"
    }
  ]
}
```

---

## ⚠️ 注意事项

### 文件命名
- ✅ 使用英文、拼音或数字
- ✅ 使用下划线 `_` 连接单词
- ❌ 不要使用中文（可能导致路径问题）
- ❌ 不要使用特殊字符（如空格、@、#等）

**示例：**
```
✅ imperial_garden.png
✅ gu_taiyi_smile.png
✅ palace_theme.mp3

❌ 御花园.png
❌ 顾太医 微笑.png
❌ 宫殿@主题.mp3
```

### 文件大小
- 背景图：尽量 < 2MB（优化加载速度）
- 角色图：尽量 < 1MB
- 音乐：尽量 < 5MB
- 音效：尽量 < 500KB

### 路径格式
配置文件中使用**正斜杠** `/`：
```
✅ resources/backgrounds/scene.png
❌ resources\backgrounds\scene.png
❌ \resources\backgrounds\scene.png
```

---

## 🔧 图片优化工具

### 在线工具
- TinyPNG.com（PNG压缩）
- Compressor.io（通用压缩）
- Squoosh.app（Google开发）

### 本地工具
- Photoshop（Save for Web）
- GIMP（导出时调整质量）
- XnConvert（批量处理）

---

## 📊 当前资源清单

### 背景图（5张）
- cold_palace.png
- medical_hall.png
- imperial_garden.png
- study_room.png
- throne_room.png

### 角色立绘（4张）
- heroine_cold_palace.png
- gu_taiyi.png
- xiao_wangye.png
- han_general.png

### 背景音乐（5首）
- cold_palace_theme.mp3
- gentle_theme.mp3
- tense_theme.mp3
- ending_theme.mp3
- menu_theme.mp3

### 音效（4个）
- button.mp3
- choice.mp3
- page.mp3
- notification.mp3

### CG（3张）
- ending1.png
- ending2.png
- special_event1.png

---

## 📚 相关文档

- `HOW_TO_ADD_STORY.md` - 如何添加新剧情
- `QUICK_START.md` - 快速开始指南
- `RESOURCE_CHECKLIST.md` - 资源需求清单
- `FOLDER_STRUCTURE.md` - 项目结构说明

---

**需要更多资源？** 查看 `RESOURCE_CHECKLIST.md` 获取详细的资源需求列表！
