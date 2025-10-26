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

def merge_chapters(chapters_index_path='config/chapters_index.json'):
    """合并多个章节配置文件为统一的story_config"""
    chapters_index = read_json(chapters_index_path)
    
    if chapters_index is None:
        print(f"⚠️  警告：找不到 {chapters_index_path}，使用传统单文件模式")
        return None
    
    print(f"📚 检测到章节索引文件，启用模块化章节加载")
    
    merged_config = {
        "startChapter": chapters_index.get("startChapter", "chapter1"),
        "chapters": {}
    }
    
    # chapters 是对象（字典），不是数组
    chapters_dict = chapters_index.get("chapters", {})
    print(f"   - 发现 {len(chapters_dict)} 个章节配置")
    
    for chapter_id, chapter_info in chapters_dict.items():
        config_file = chapter_info.get("configFile")
        
        if not config_file:
            print(f"   ⚠️  跳过章节 {chapter_id}：未指定配置文件")
            continue
        
        # 读取章节配置文件（需要加上 config/ 前缀）
        config_path = os.path.join('config', config_file)
        chapter_data = read_json(config_path)
        
        if chapter_data is None:
            print(f"   ❌ 无法加载章节 {chapter_id} 配置文件: {config_file}")
            continue
        
        # 将独立章节配置合并到统一结构
        merged_config["chapters"][chapter_id] = {
            "title": chapter_data.get("title", chapter_info.get("title")),
            "description": chapter_data.get("description", chapter_info.get("description")),
            "startScene": chapter_data.get("startScene"),
            "scenes": chapter_data.get("scenes", {})
        }
        
        print(f"   ✅ 加载章节: {chapter_id} ({merged_config['chapters'][chapter_id]['title']})")
        scene_count = len(merged_config['chapters'][chapter_id]['scenes'])
        print(f"      场景数: {scene_count}")
    
    # 设置起始场景（从起始章节获取）
    start_chapter_id = merged_config.get("startChapter")
    if start_chapter_id in merged_config["chapters"]:
        merged_config["startScene"] = merged_config["chapters"][start_chapter_id].get("startScene", "scene1")
    else:
        merged_config["startScene"] = "scene1"
    
    print()
    return merged_config

def main():
    """主函数"""
    print("=" * 50)
    print("  凤临朝 - JSON转JS自动转换工具")
    print("=" * 50)
    print()
    
    # 文件路径
    story_config_path = 'config/story_config.json'
    chapters_index_path = 'config/chapters_index.json'
    resources_config_path = 'config/resources_config.json'
    collection_config_path = 'config/collection_config.json'
    characters_config_path = 'config/characters_config.json'
    achievements_config_path = 'config/achievements_config.json'
    output_path = 'game-data.js'
    
    print(f"📖 读取配置文件...")
    
    # 优先尝试模块化章节加载
    story_config = None
    if os.path.exists(chapters_index_path):
        story_config = merge_chapters(chapters_index_path)
    
    # 如果模块化加载失败，回退到传统方式
    if story_config is None:
        print(f"   - {story_config_path}")
        story_config = read_json(story_config_path)
    
    print(f"   - {resources_config_path}")
    print(f"   - {collection_config_path}")
    print(f"   - {characters_config_path}")
    print(f"   - {achievements_config_path}")
    print()
    
    # 读取其他JSON文件
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
