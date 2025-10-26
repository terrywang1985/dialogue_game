/**
 * 凤临朝游戏数据配置
 * 此文件由转换脚本自动生成，请勿手动编辑
 * 生成时间: 2025-10-26 21:53:54
 */

// 剧情配置数据
window.GAME_STORY_CONFIG = {
  "startChapter": "chapter1",
  "chapters": {
    "chapter1": {
      "title": "第一章：冷宫初遇",
      "description": "穿越成冷宫废妃，结识关键人物",
      "startScene": "scene1",
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
          "background": "resources/backgrounds/cold_palace.png",
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
              "nextScene": "scene2_walk",
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
              "nextScene": "scene2_walk",
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
              "nextScene": "scene2_walk",
              "conditions": []
            }
          ]
        },
        "scene2_walk": {
          "background": "resources/backgrounds/imperial_garden.png",
          "bgm": "resources/music/gentle_theme.mp3",
          "dialogues": [
            {
              "name": "旁白",
              "text": "顾清弦叮嘱几句后告辞。闷在冷宫许久，苏清月想着出去透口气，沿着偏僻小道慢慢踱步。",
              "character": null,
              "voice": null
            },
            {
              "name": "系统提示",
              "text": "不知不觉，前方便是御花园的偏门。花影重重中，脚步声渐近——",
              "character": null,
              "voice": null
            }
          ],
          "choices": [
            {
              "text": "【继续】踏入御花园一角",
              "effects": [],
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
              "nextScene": "scene3_defend",
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
              "nextScene": "scene3_avoid",
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
              "nextScene": "scene3_praise",
              "conditions": []
            }
          ]
        },
        "scene3_defend": {
          "background": "resources/backgrounds/imperial_garden.png",
          "bgm": "resources/music/tense_theme.mp3",
          "dialogues": [
            {
              "name": "苏清月",
              "text": "（正色）家父清正为官，一生光明磊落。如今蒙冤，终有一日会水落石出。",
              "character": "resources/characters/heroine_cold_palace.png",
              "voice": null
            },
            {
              "name": "萧王爷",
              "text": "（凝视片刻，收敛锋芒）倒有几分胆气。今日到此，回去好自为之。",
              "character": "resources/characters/xiao_wangye.png",
              "voice": null
            }
          ],
          "choices": [
            {
              "text": "【告退】行礼退下",
              "effects": [],
              "nextScene": "scene4",
              "conditions": []
            }
          ]
        },
        "scene3_avoid": {
          "background": "resources/backgrounds/imperial_garden.png",
          "bgm": "resources/music/tense_theme.mp3",
          "dialogues": [
            {
              "name": "苏清月",
              "text": "（低声）臣妾病体未愈，不敢多言，愿改日再谢王爷。",
              "character": "resources/characters/heroine_cold_palace.png",
              "voice": null
            },
            {
              "name": "萧王爷",
              "text": "（淡淡）也罢。御花园非你久留之处。",
              "character": "resources/characters/xiao_wangye.png",
              "voice": null
            }
          ],
          "choices": [
            {
              "text": "【离开】在内侍催促下退回原路",
              "effects": [],
              "nextScene": "scene4",
              "conditions": []
            }
          ]
        },
        "scene3_praise": {
          "background": "resources/backgrounds/imperial_garden.png",
          "bgm": "resources/music/tense_theme.mp3",
          "dialogues": [
            {
              "name": "苏清月",
              "text": "（含笑）园景锦绣，但不及王爷心怀天下。",
              "character": "resources/characters/heroine_cold_palace.png",
              "voice": null
            },
            {
              "name": "萧王爷",
              "text": "（微愣，随即失笑）少拍朕……本王的马屁。回去吧。",
              "character": "resources/characters/xiao_wangye.png",
              "voice": null
            }
          ],
          "choices": [
            {
              "text": "【告退】行礼离去",
              "effects": [],
              "nextScene": "scene4",
              "conditions": []
            }
          ]
        },
        "scene4": {
          "background": "resources/backgrounds/imperial_garden.png",
          "bgm": "resources/music/gentle_theme.mp3",
          "dialogues": [
            {
              "name": "韩将军",
              "text": "（关切地）苏姑娘，可是迷路了？这边不是回冷宫的方向。",
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
              "text": "你已在冷宫中站稳脚跟，结识了关键人物。接下来的宫廷风云，将更加波诡云谲...",
              "character": null,
              "voice": null
            }
          ],
          "choices": [
            {
              "text": "【继续第二章】宫廷暗涌",
              "effects": [],
              "nextScene": "chapter2_scene1",
              "conditions": []
            },
            {
              "text": "【暂时退出】返回主菜单",
              "effects": [],
              "nextScene": "main_menu",
              "conditions": []
            }
          ]
        }
      }
    },
    "chapter2": {
      "title": "第二章：宫闱暗涌",
      "description": "深入宫廷，卷入权力斗争",
      "startScene": "scene1",
      "scenes": {
        "scene1": {
          "background": "resources/backgrounds/throne_room.png",
          "bgm": "resources/music/cold_palace_theme.mp3",
          "dialogues": [
            {
              "name": "系统提示",
              "text": "数日后，你终于在冷宫站稳脚跟。然而一道圣旨，将你重新卷入宫廷风波...",
              "character": null,
              "voice": null
            },
            {
              "name": "太监总管",
              "text": "苏娘娘，陛下召您进宫觐见，请随奴才走吧。",
              "character": null,
              "voice": null
            },
            {
              "name": "苏清月（内心）",
              "text": "皇帝？为何突然召见我这个冷宫废妃？这其中必有蹊跷...",
              "character": "resources/characters/heroine_cold_palace.png",
              "voice": null
            }
          ],
          "choices": [
            {
              "text": "【欣然前往】既来之则安之（魅力+1）",
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
              "text": "【小心应对】装病推脱试探虚实（智慧+1）",
              "effects": [
                {
                  "type": "stat",
                  "target": "wisdom",
                  "value": 1
                }
              ],
              "nextScene": "scene2_alt",
              "conditions": []
            },
            {
              "text": "【寻求帮助】先去找顾太医商量（需智慧≥2）",
              "effects": [
                {
                  "type": "affection",
                  "target": "gu",
                  "value": 1
                }
              ],
              "nextScene": "scene2_gu",
              "conditions": [
                {
                  "type": "stat",
                  "target": "wisdom",
                  "value": 2
                }
              ]
            }
          ]
        },
        "scene2": {
          "background": "resources/backgrounds/throne_room.png",
          "bgm": "resources/music/tense_theme.mp3",
          "dialogues": [
            {
              "name": "皇帝",
              "text": "苏氏，抬起头来。",
              "character": null,
              "voice": null
            },
            {
              "name": "苏清月",
              "text": "（跪地行礼）臣妾参见陛下。",
              "character": "resources/characters/heroine_cold_palace.png",
              "voice": null
            },
            {
              "name": "皇帝",
              "text": "听闻你近日颇有才名，朕欲考校一番。若答得好，朕便还你自由之身。",
              "character": null,
              "voice": null
            }
          ],
          "choices": [
            {
              "text": "【展现才华】作诗一首展示文采（智慧+2）",
              "effects": [
                {
                  "type": "stat",
                  "target": "wisdom",
                  "value": 2
                },
                {
                  "type": "stat",
                  "target": "charm",
                  "value": 1
                }
              ],
              "nextScene": "scene3",
              "conditions": []
            },
            {
              "text": "【谦虚退让】自谦才疏学浅（洞察+1）",
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
              "text": "【直言不讳】质疑此举用意（勇气+2，需勇气≥3）",
              "effects": [
                {
                  "type": "stat",
                  "target": "courage",
                  "value": 2
                }
              ],
              "nextScene": "scene3_brave",
              "conditions": [
                {
                  "type": "stat",
                  "target": "courage",
                  "value": 3
                }
              ]
            }
          ]
        },
        "scene2_alt": {
          "background": "resources/backgrounds/cold_palace.png",
          "bgm": "resources/music/cold_palace_theme.mp3",
          "dialogues": [
            {
              "name": "太监总管",
              "text": "（冷笑）装病？娘娘可要想清楚，违抗圣旨的后果...",
              "character": null,
              "voice": null
            },
            {
              "name": "苏清月",
              "text": "（镇定）本宫身体确实不适，还请总管代为禀告陛下。",
              "character": "resources/characters/heroine_cold_palace.png",
              "voice": null
            },
            {
              "name": "系统提示",
              "text": "你的举动引起了注意...这可能会带来意想不到的后果。",
              "character": null,
              "voice": null
            }
          ],
          "choices": [
            {
              "text": "【继续装病】坚持己见",
              "effects": [
                {
                  "type": "stat",
                  "target": "courage",
                  "value": 1
                }
              ],
              "nextScene": "scene3",
              "conditions": []
            },
            {
              "text": "【改变主意】还是前去觐见",
              "effects": [],
              "nextScene": "scene2",
              "conditions": []
            }
          ]
        },
        "scene2_gu": {
          "background": "resources/backgrounds/medical_hall.png",
          "bgm": "resources/music/gentle_theme.mp3",
          "dialogues": [
            {
              "name": "顾清弦",
              "text": "（关切）娘娘，有何要事？",
              "character": "resources/characters/gu_taiyi.png",
              "voice": null
            },
            {
              "name": "苏清月",
              "text": "顾太医，皇帝突然召见，你说这是福是祸？",
              "character": "resources/characters/heroine_cold_palace.png",
              "voice": null
            },
            {
              "name": "顾清弦",
              "text": "（沉思）依在下之见，陛下此举必有深意。娘娘不妨以静制动，观其变化。",
              "character": "resources/characters/gu_taiyi.png",
              "voice": null
            }
          ],
          "choices": [
            {
              "text": "【接受建议】多谢顾太医指点（顾清弦好感+2）",
              "effects": [
                {
                  "type": "affection",
                  "target": "gu",
                  "value": 2
                }
              ],
              "nextScene": "scene2",
              "conditions": []
            },
            {
              "text": "【继续询问】请教宫中局势",
              "effects": [
                {
                  "type": "affection",
                  "target": "gu",
                  "value": 1
                },
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
        "scene3": {
          "background": "resources/backgrounds/throne_room.png",
          "bgm": "resources/music/ending_theme.mp3",
          "dialogues": [
            {
              "name": "皇帝",
              "text": "不错。苏氏，朕准你复位，册封为昭仪。",
              "character": null,
              "voice": null
            },
            {
              "name": "苏清月",
              "text": "（惊讶）谢陛下隆恩！",
              "character": "resources/characters/heroine_cold_palace.png",
              "voice": null
            },
            {
              "name": "系统提示",
              "text": "你成功走出冷宫，但宫廷权谋才刚刚开始...",
              "character": null,
              "voice": null
            }
          ],
          "choices": [
            {
              "text": "【第二章完成】返回主菜单",
              "effects": [],
              "nextScene": "end",
              "conditions": []
            }
          ]
        },
        "scene3_brave": {
          "background": "resources/backgrounds/throne_room.png",
          "bgm": "resources/music/tense_theme.mp3",
          "dialogues": [
            {
              "name": "皇帝",
              "text": "（大笑）好！有胆识！朕欣赏你的勇气。",
              "character": null,
              "voice": null
            },
            {
              "name": "皇帝",
              "text": "苏氏，从今日起，你便是朕的妃嫔了。",
              "character": null,
              "voice": null
            },
            {
              "name": "系统提示",
              "text": "你的勇气赢得了皇帝的赏识，但也可能引来嫉妒...",
              "character": null,
              "voice": null
            }
          ],
          "choices": [
            {
              "text": "【第二章完成】返回主菜单",
              "effects": [],
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
              "text": "第二章：宫闱暗涌 完",
              "character": null,
              "voice": null
            },
            {
              "name": "系统提示",
              "text": "恭喜完成第二章！你已经成功脱离冷宫，但真正的挑战才刚刚开始...",
              "character": null,
              "voice": null
            }
          ],
          "choices": [
            {
              "text": "【继续第三章】权谋之争（敬请期待）",
              "effects": [],
              "nextScene": "chapter3_scene1",
              "conditions": []
            },
            {
              "text": "【返回主菜单】",
              "effects": [],
              "nextScene": "main_menu",
              "conditions": []
            }
          ]
        }
      }
    }
  },
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

// 成就配置数据
window.GAME_ACHIEVEMENTS_CONFIG = {
  "achievements": [
    {
      "id": "first_choice",
      "name": "初次选择",
      "description": "完成第一个剧情选择",
      "icon": "🎯",
      "condition": {
        "type": "choices_count",
        "value": 1
      }
    },
    {
      "id": "wisdom_beginner",
      "name": "智慧初现",
      "description": "智慧属性达到3点",
      "icon": "🧠",
      "condition": {
        "type": "stat",
        "stat": "wisdom",
        "value": 3
      }
    },
    {
      "id": "courage_beginner",
      "name": "勇气可嘉",
      "description": "勇气属性达到3点",
      "icon": "💪",
      "condition": {
        "type": "stat",
        "stat": "courage",
        "value": 3
      }
    },
    {
      "id": "insight_beginner",
      "name": "洞察先机",
      "description": "洞察属性达到3点",
      "icon": "👁️",
      "condition": {
        "type": "stat",
        "stat": "insight",
        "value": 3
      }
    },
    {
      "id": "charm_beginner",
      "name": "魅力四射",
      "description": "魅力属性达到3点",
      "icon": "✨",
      "condition": {
        "type": "stat",
        "stat": "charm",
        "value": 3
      }
    },
    {
      "id": "gu_affection",
      "name": "医者仁心",
      "description": "顾太医好感度达到4点",
      "icon": "💊",
      "condition": {
        "type": "affection",
        "character": "gu",
        "value": 4
      }
    },
    {
      "id": "xiao_affection",
      "name": "王侯将相",
      "description": "萧王爷好感度达到4点",
      "icon": "👑",
      "condition": {
        "type": "affection",
        "character": "xiao",
        "value": 4
      }
    },
    {
      "id": "han_affection",
      "name": "将军情谊",
      "description": "韩将军好感度达到4点",
      "icon": "⚔️",
      "condition": {
        "type": "affection",
        "character": "han",
        "value": 4
      }
    }
  ]
};

console.log('✅ 游戏配置数据已加载');
console.log('📅 生成时间: 2025-10-26 21:53:54');
