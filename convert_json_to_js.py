#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
JSON转JS自动转换脚本
读取config目录下的JSON文件，生成game-data.js
"""

import json
import os
from datetime import datetime

def read_json(filepath):
    """读取JSON文件"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"❌ 错误：找不到文件 {filepath}")
        return None
    except json.JSONDecodeError as e:
        print(f"❌ 错误：{filepath} JSON格式错误")
        print(f"   详细信息：{e}")
        return None
    except Exception as e:
        print(f"❌ 错误：读取 {filepath} 失败")
        print(f"   详细信息：{e}")
        return None

def generate_game_data_js(story_config, resources_config, collection_config, characters_config, achievements_config):
    """生成game-data.js文件内容"""
    
    current_time = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
    
    js_code = f'''/**
 * 凤临朝游戏数据配置
 * 此文件由转换脚本自动生成，请勿手动编辑
 * 生成时间: {current_time}
 */

// 剧情配置数据
window.GAME_STORY_CONFIG = {json.dumps(story_config, ensure_ascii=False, indent=2)};

// 资源配置数据
window.GAME_RESOURCES_CONFIG = {json.dumps(resources_config, ensure_ascii=False, indent=2)};

// 收藏配置数据
window.GAME_COLLECTION_CONFIG = {json.dumps(collection_config, ensure_ascii=False, indent=2)};

// 角色配置数据
window.GAME_CHARACTERS_CONFIG = {json.dumps(characters_config, ensure_ascii=False, indent=2)};

// 成就配置数据
window.GAME_ACHIEVEMENTS_CONFIG = {json.dumps(achievements_config, ensure_ascii=False, indent=2)};

console.log('✅ 游戏配置数据已加载');
console.log('📅 生成时间: {current_time}');
'''
    
    return js_code

def main():
    """主函数"""
    print("=" * 50)
    print("  凤临朝 - JSON转JS自动转换工具")
    print("=" * 50)
    print()
    
    # 文件路径
    story_config_path = 'config/story_config.json'
    resources_config_path = 'config/resources_config.json'
    collection_config_path = 'config/collection_config.json'
    characters_config_path = 'config/characters_config.json'
    achievements_config_path = 'config/achievements_config.json'
    output_path = 'game-data.js'
    
    print(f"📖 读取配置文件...")
    print(f"   - {story_config_path}")
    print(f"   - {resources_config_path}")
    print(f"   - {collection_config_path}")
    print(f"   - {characters_config_path}")
    print(f"   - {achievements_config_path}")
    print()
    
    # 读取JSON文件
    story_config = read_json(story_config_path)
    resources_config = read_json(resources_config_path)
    collection_config = read_json(collection_config_path)
    characters_config = read_json(characters_config_path)
    achievements_config = read_json(achievements_config_path)
    
    # 检查是否读取成功
    if (story_config is None or resources_config is None or 
        collection_config is None or characters_config is None or
        achievements_config is None):
        print()
        print("❌ 转换失败！请检查JSON文件是否存在且格式正确")
        input("\n按回车键退出...")
        return
    
    print("✅ JSON文件读取成功")
    print()
    
    # 生成JS代码
    print(f"🔄 生成 {output_path}...")
    js_code = generate_game_data_js(story_config, resources_config, collection_config, characters_config, achievements_config)
    
    # 写入文件
    try:
        with open(output_path, 'w', encoding='utf-8') as f:
            f.write(js_code)
        print(f"✅ {output_path} 生成成功！")
        print()
        print("📊 统计信息：")
        
        # 统计信息
        chapter_count = len(story_config.get('chapters', {}))
        scene_count = sum(len(chapter.get('scenes', {})) 
                         for chapter in story_config.get('chapters', {}).values())
        cg_count = len(collection_config.get('cgGallery', []))
        story_review_count = len(collection_config.get('storyReview', []))
        character_count = len(characters_config.get('characters', {}))
        achievement_count = len(achievements_config.get('achievements', []))
        
        print(f"   - 章节数：{chapter_count}")
        print(f"   - 场景数：{scene_count}")
        print(f"   - 角色数：{character_count}")
        print(f"   - 成就数：{achievement_count}")
        print(f"   - CG图片数：{cg_count}")
        print(f"   - 剧情回顾数：{story_review_count}")
        print(f"   - 文件大小：{len(js_code)} 字节")
        print()
        print("=" * 50)
        print("🎉 转换完成！现在可以双击 index.html 运行游戏了")
        print("=" * 50)
        
    except Exception as e:
        print(f"❌ 错误：写入文件失败")
        print(f"   详细信息：{e}")
    
    print()
    input("按回车键退出...")

if __name__ == '__main__':
    main()
