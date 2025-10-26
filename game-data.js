/**
 * 凤临朝游戏数据配置
 * 此文件由转换脚本自动生成，请勿手动编辑
 * 生成时间: 2025-10-26 11:28:57
 */

// 剧情配置数据
window.GAME_STORY_CONFIG = {
  "chapters": {
    "chapter1": {
      "title": "第一章：冷宫初遇",
      "scenes": {
        "scene1": {
          "background": "resources/backgrounds/cold_palace.png",
          "bgm": "resources/music/cold_palace_theme.mp3",
          "dialogues": [
            {
              "name": "系统提示",
              "text": "您已穿越成大梁朝冷宫废妃苏清月，原主因家族获罪被贬至此，三日前突发高热而亡...",
              "character": null,
              "voice": null
            },
            {
              "name": "苏清月（内心）",
              "text": "这是哪里？我不是在博物馆参观凤冠吗？怎么一眨眼就到了这个古色古香的地方...等等，这身体不是我的！",
              "character": "resources/characters/heroine_cold_palace.png",
              "voice": null
            },
            {
              "name": "苏清月（内心）",
              "text": "冷静，我必须冷静。先看看周围的环境，了解现在的情况。",
              "character": "resources/characters/heroine_cold_palace.png",
              "voice": null
            }
          ],
          "choices": [
            {
              "text": "【冷静观察】先弄清楚周围环境（智慧+1）",
              "effects": [
                {
                  "type": "stat",
                  "target": "wisdom",
                  "value": 1
                }
              ],
              "nextScene": "scene2",
              "conditions": []
            },
            {
              "text": "【惊慌失措】大声呼救寻找帮助（无加成）",
              "effects": [],
              "nextScene": "scene2",
              "conditions": []
            },
            {
              "text": "【检查身份】查看自己的服饰和身体状况（洞察+1）",
              "effects": [
                {
                  "type": "stat",
                  "target": "insight",
                  "value": 1
                }
              ],
              "nextScene": "scene2",
              "conditions": []
            }
          ]
        },
        "scene2": {
          "background": "resources/backgrounds/medical_hall.png",
          "bgm": "resources/music/gentle_theme.mp3",
          "dialogues": [
            {
              "name": "顾清弦",
              "text": "（轻叩门扉）苏娘娘，微臣来为您诊脉了。",
              "character": "resources/characters/gu_taiyi.png",
              "voice": null
            },
            {
              "name": "苏清月",
              "text": "（警惕地）你是谁？",
              "character": "resources/characters/heroine_cold_palace.png",
              "voice": null
            },
            {
              "name": "顾清弦",
              "text": "（温和一笑）微臣顾清弦，太医院医官。听闻娘娘身体不适，特来诊治。",
              "character": "resources/characters/gu_taiyi.png",
              "voice": null
            }
          ],
          "choices": [
            {
              "text": "【接受诊治】伸出手腕让他诊脉（顾清弦好感+2）",
              "effects": [
                {
                  "type": "affection",
                  "target": "gu",
                  "value": 2
                }
              ],
              "nextScene": "scene3",
              "conditions": []
            },
            {
              "text": "【保持距离】后退一步，谨慎观察（洞察+1）",
              "effects": [
                {
                  "type": "stat",
                  "target": "insight",
                  "value": 1
                }
              ],
              "nextScene": "scene3",
              "conditions": []
            },
            {
              "text": "【主动询问】借机打听宫中情况（智慧+1）",
              "effects": [
                {
                  "type": "stat",
                  "target": "wisdom",
                  "value": 1
                }
              ],
              "nextScene": "scene3",
              "conditions": []
            }
          ]
        },
        "scene3": {
          "background": "resources/backgrounds/imperial_garden.png",
          "bgm": "resources/music/tense_theme.mp3",
          "dialogues": [
            {
              "name": "萧王爷",
              "text": "（冷峻的声音从身后传来）冷宫废妃，也配来御花园？",
              "character": "resources/characters/xiao_wangye.png",
              "voice": null
            },
            {
              "name": "苏清月",
              "text": "（转身，见到身着蟒袍的英俊男子，不卑不亢）御花园乃皇家园林，既入宫门，自是皇家之人。",
              "character": "resources/characters/heroine_cold_palace.png",
              "voice": null
            },
            {
              "name": "萧王爷",
              "text": "（挑眉）倒是伶牙俐齿。你父亲苏相的案子，你可有话说？",
              "character": "resources/characters/xiao_wangye.png",
              "voice": null
            }
          ],
          "choices": [
            {
              "text": "【为父辩白】坚信父亲清白（勇气+1，萧王爷兴趣+1）",
              "effects": [
                {
                  "type": "stat",
                  "target": "courage",
                  "value": 1
                },
                {
                  "type": "affection",
                  "target": "xiao",
                  "value": 1
                }
              ],
              "nextScene": "scene4",
              "conditions": []
            },
            {
              "text": "【避而不谈】称病弱不便多言（洞察+1）",
              "effects": [
                {
                  "type": "stat",
                  "target": "insight",
                  "value": 1
                }
              ],
              "nextScene": "scene4",
              "conditions": []
            },
            {
              "text": "【转移话题】称赞御花园景致（智慧+1）",
              "effects": [
                {
                  "type": "stat",
                  "target": "wisdom",
                  "value": 1
                }
              ],
              "nextScene": "scene4",
              "conditions": []
            }
          ]
        },
        "scene4": {
          "background": "resources/backgrounds/study_room.png",
          "bgm": "resources/music/gentle_theme.mp3",
          "dialogues": [
            {
              "name": "韩将军",
              "text": "（关切地）苏姑娘，可是迷路了？冷宫方向在那边。",
              "character": "resources/characters/han_general.png",
              "voice": null
            },
            {
              "name": "苏清月",
              "text": "（微微施礼）多谢将军指点。不知将军如何认得我？",
              "character": "resources/characters/heroine_cold_palace.png",
              "voice": null
            },
            {
              "name": "韩将军",
              "text": "（神色复杂）当年苏相于我有知遇之恩...姑娘若有难处，韩某定当相助。",
              "character": "resources/characters/han_general.png",
              "voice": null
            }
          ],
          "choices": [
            {
              "text": "【接受好意】感谢并请求关照（韩将军好感+2）",
              "effects": [
                {
                  "type": "affection",
                  "target": "han",
                  "value": 2
                }
              ],
              "nextScene": "end",
              "conditions": []
            },
            {
              "text": "【保持距离】礼貌拒绝以免连累（洞察+1）",
              "effects": [
                {
                  "type": "stat",
                  "target": "insight",
                  "value": 1
                }
              ],
              "nextScene": "end",
              "conditions": []
            },
            {
              "text": "【打探消息】询问朝中局势（智慧+1，韩将军好感+1）",
              "effects": [
                {
                  "type": "stat",
                  "target": "wisdom",
                  "value": 1
                },
                {
                  "type": "affection",
                  "target": "han",
                  "value": 1
                }
              ],
              "nextScene": "end",
              "conditions": []
            }
          ]
        },
        "end": {
          "background": "resources/backgrounds/throne_room.png",
          "bgm": "resources/music/ending_theme.mp3",
          "dialogues": [
            {
              "name": "系统提示",
              "text": "第一章：冷宫初遇 完",
              "character": null,
              "voice": null
            },
            {
              "name": "系统提示",
              "text": "感谢您体验《凤临朝：穿越之权倾天下》首章内容。更多精彩剧情正在制作中...",
              "character": null,
              "voice": null
            }
          ],
          "choices": []
        }
      }
    }
  },
  "startChapter": "chapter1",
  "startScene": "scene1"
};

// 资源配置数据
window.GAME_RESOURCES_CONFIG = {
  "backgrounds": {
    "cold_palace": "resources/backgrounds/cold_palace.png",
    "medical_hall": "resources/backgrounds/medical_hall.png",
    "imperial_garden": "resources/backgrounds/imperial_garden.png",
    "study_room": "resources/backgrounds/study_room.png",
    "throne_room": "resources/backgrounds/throne_room.png"
  },
  "characters": {
    "heroine_cold_palace": "resources/characters/heroine_cold_palace.png",
    "gu_taiyi": "resources/characters/gu_taiyi.png",
    "xiao_wangye": "resources/characters/xiao_wangye.png",
    "han_general": "resources/characters/han_general.png"
  },
  "music": {
    "_comment": "音乐文件暂未添加，可以在 resources/music/ 目录下添加 .mp3 文件",
    "cold_palace_theme": "resources/music/cold_palace_theme.mp3",
    "gentle_theme": "resources/music/gentle_theme.mp3",
    "tense_theme": "resources/music/tense_theme.mp3",
    "ending_theme": "resources/music/ending_theme.mp3",
    "menu_theme": "resources/music/menu_theme.mp3"
  },
  "sounds": {
    "_comment": "音效文件暂未添加，可以在 resources/sounds/ 目录下添加 .mp3 文件",
    "button": "resources/sounds/button.mp3",
    "choice": "resources/sounds/choice.mp3",
    "page": "resources/sounds/page.mp3",
    "notification": "resources/sounds/notification.mp3"
  },
  "cg": {
    "_comment": "CG文件暂未添加，当前使用背景图片作为占位符",
    "ending1": "resources/backgrounds/throne_room.png",
    "ending2": "resources/backgrounds/imperial_garden.png",
    "special_event1": "resources/backgrounds/cold_palace.png"
  }
};

// 收藏配置数据
window.GAME_COLLECTION_CONFIG = {
  "cgGallery": [
    {
      "id": "cold_palace",
      "title": "冷宫初醒",
      "description": "破败的冷宫中，女主苏清月刚刚穿越醒来，面对陌生的环境和身份。",
      "image": "resources/backgrounds/cold_palace.png",
      "unlockCondition": "完成场景一"
    },
    {
      "id": "medical_hall",
      "title": "太医院相遇",
      "description": "在药香弥漫的太医院，女主初次遇见温柔的顾太医顾清弦。",
      "image": "resources/backgrounds/medical_hall.png",
      "unlockCondition": "完成场景二"
    },
    {
      "id": "imperial_garden",
      "title": "御花园风波",
      "description": "精美的御花园中，女主与冷峻的萧王爷展开第一次交锋。",
      "image": "resources/backgrounds/imperial_garden.png",
      "unlockCondition": "完成场景三"
    },
    {
      "id": "study_room",
      "title": "将军情谊",
      "description": "在宁静的书房外，女主结识了忠诚的韩将军，获得重要盟友。",
      "image": "resources/backgrounds/study_room.png",
      "unlockCondition": "完成场景四"
    },
    {
      "id": "throne_room",
      "title": "权倾天下",
      "description": "金碧辉煌的大殿，象征着至高无上的权力，等待女主去征服。",
      "image": "resources/backgrounds/throne_room.png",
      "unlockCondition": "完成第一章"
    }
  ],
  "storyReview": [
    {
      "id": "scene1",
      "title": "穿越醒来",
      "scene": "场景一",
      "preview": "现代女主意外穿越成冷宫废妃，面对陌生的古代环境和身份，需要做出第一个重要选择...",
      "unlockCondition": "完成场景一"
    },
    {
      "id": "scene2",
      "title": "初遇顾太医",
      "scene": "场景二",
      "preview": "在太医院遇到温柔的顾清弦，这位医术高明的太医似乎对女主的处境很是关心...",
      "unlockCondition": "完成场景二"
    },
    {
      "id": "scene3",
      "title": "御花园风波",
      "scene": "场景三",
      "preview": "在御花园中遇到霸道冷峻的萧王爷，一场言语交锋让女主展现出不卑不亢的态度...",
      "unlockCondition": "完成场景三"
    },
    {
      "id": "scene4",
      "title": "结识韩将军",
      "scene": "场景四",
      "preview": "遇到忠诚勇武的韩将军，得知他与苏相有旧，愿意在危难时刻相助...",
      "unlockCondition": "完成场景四"
    }
  ]
};

// 角色配置数据
window.GAME_CHARACTERS_CONFIG = {
  "characters": {
    "gu": {
      "name": "顾清弦",
      "title": "太医院医官",
      "avatar": "resources/characters/gu_taiyi.png",
      "description": "温和体贴的医者，医术高明，为人正直。",
      "maxAffection": 10
    },
    "xiao": {
      "name": "萧王爷",
      "title": "摄政王",
      "avatar": "resources/characters/xiao_wangye.png",
      "description": "霸道冷峻的摄政王，手握重权，心思深沉。",
      "maxAffection": 10
    },
    "han": {
      "name": "韩将军",
      "title": "镇国将军",
      "avatar": "resources/characters/han_general.png",
      "description": "忠诚勇武的将军，重情重义，武艺高强。",
      "maxAffection": 10
    }
  }
};

console.log('✅ 游戏配置数据已加载');
console.log('📅 生成时间: 2025-10-26 11:28:57');
