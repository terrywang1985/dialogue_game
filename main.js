/**
 * 凤临朝：穿越之权倾天下 - 主要游戏逻辑
 * 处理游戏状态管理、存档系统、剧情进度等核心功能
 */

// 游戏状态管理器
class GameStateManager {
    constructor() {
        this.defaultState = {
            // 玩家属性
            stats: {
                wisdom: 0,    // 智慧
                courage: 0,   // 勇气
                insight: 0,   // 洞察
                charm: 0      // 魅力
            },
            
            // 角色好感度
            affection: {
                gu: 0,      // 顾太医
                xiao: 0,    // 萧王爷
                han: 0      // 韩将军
            },
            
            // 游戏进度
            currentScene: 'scene1',
            currentDialogue: 0,
            chapter: 1,
            
            // 选择历史
            choices: [],
            
            // 解锁内容
            unlockedCG: [],
            unlockedStory: [],
            
            // 游戏统计
            playTime: 0,
            startTime: Date.now(),
            
            // 设置
            settings: {
                musicVolume: 0.7,
                soundVolume: 0.8,
                textSpeed: 1.0,
                autoPlay: false
            }
        };
        
        this.currentState = { ...this.defaultState };
        this.isInitialized = false;
    }
    
    // 初始化游戏状态
    init() {
        if (this.isInitialized) return;
        
        this.loadGame();
        this.isInitialized = true;
        
        console.log('游戏状态管理器初始化完成');
    }
    
    // 获取当前游戏状态
    getState() {
        return this.currentState;
    }
    
    // 更新游戏状态
    updateState(updates) {
        this.currentState = { ...this.currentState, ...updates };
        this.saveGame();
        
        // 触发状态更新事件
        this.dispatchEvent('stateUpdate', this.currentState);
    }
    
    // 更新玩家属性
    updateStats(statUpdates) {
        Object.entries(statUpdates).forEach(([stat, value]) => {
            if (this.currentState.stats[stat] !== undefined) {
                this.currentState.stats[stat] = Math.max(0, Math.min(10, this.currentState.stats[stat] + value));
            }
        });
        
        this.saveGame();
        this.dispatchEvent('statsUpdate', this.currentState.stats);
    }
    
    // 更新角色好感度
    updateAffection(affectionUpdates) {
        Object.entries(affectionUpdates).forEach(([character, value]) => {
            if (this.currentState.affection[character] !== undefined) {
                this.currentState.affection[character] = Math.max(0, Math.min(10, this.currentState.affection[character] + value));
            }
        });
        
        this.saveGame();
        this.dispatchEvent('affectionUpdate', this.currentState.affection);
    }
    
    // 记录选择
    recordChoice(sceneId, choiceIndex, choiceData) {
        const choice = {
            scene: sceneId,
            choice: choiceIndex,
            timestamp: Date.now(),
            data: choiceData
        };
        
        this.currentState.choices.push(choice);
        this.updateUnlocks();
        this.saveGame();
        
        this.dispatchEvent('choiceMade', choice);
    }
    
    // 根据进度更新解锁内容
    updateUnlocks() {
        const choiceCount = this.currentState.choices.length;
        
        // 根据选择数量解锁CG
        const cgUnlocks = [
            { count: 1, cg: ['cold_palace'], story: ['scene1'] },
            { count: 2, cg: ['medical_hall'], story: ['scene2'] },
            { count: 3, cg: ['imperial_garden'], story: ['scene3'] },
            { count: 4, cg: ['study_room', 'throne_room'], story: ['scene4'] }
        ];
        
        cgUnlocks.forEach(unlock => {
            if (choiceCount >= unlock.count) {
                unlock.cg.forEach(cgId => {
                    if (!this.currentState.unlockedCG.includes(cgId)) {
                        this.currentState.unlockedCG.push(cgId);
                        this.dispatchEvent('cgUnlocked', cgId);
                    }
                });
                
                unlock.story.forEach(storyId => {
                    if (!this.currentState.unlockedStory.includes(storyId)) {
                        this.currentState.unlockedStory.push(storyId);
                        this.dispatchEvent('storyUnlocked', storyId);
                    }
                });
            }
        });
    }
    
    // 保存游戏
    saveGame() {
        try {
            const saveData = JSON.stringify(this.currentState);
            localStorage.setItem('phoenixGameSave', saveData);
            localStorage.setItem('phoenixGameSaveTime', Date.now().toString());
            
            console.log('游戏已保存');
            return true;
        } catch (error) {
            console.error('保存游戏失败:', error);
            return false;
        }
    }
    
    // 加载游戏
    loadGame() {
        try {
            const saveData = localStorage.getItem('phoenixGameSave');
            if (saveData) {
                const loadedState = JSON.parse(saveData);
                this.currentState = { ...this.defaultState, ...loadedState };
                
                console.log('游戏已加载');
                return true;
            }
        } catch (error) {
            console.error('加载游戏失败:', error);
        }
        
        // 如果没有存档或加载失败，使用默认状态
        this.currentState = { ...this.defaultState };
        return false;
    }
    
    // 检查是否有存档
    hasSaveData() {
        return localStorage.getItem('phoenixGameSave') !== null;
    }
    
    // 删除存档
    deleteSave() {
        localStorage.removeItem('phoenixGameSave');
        localStorage.removeItem('phoenixGameSaveTime');
        this.currentState = { ...this.defaultState };
        
        console.log('游戏存档已删除');
    }
    
    // 获取存档时间
    getSaveTime() {
        const saveTime = localStorage.getItem('phoenixGameSaveTime');
        return saveTime ? new Date(parseInt(saveTime)) : null;
    }
    
    // 事件系统
    dispatchEvent(eventName, data) {
        const event = new CustomEvent(`game:${eventName}`, {
            detail: data
        });
        document.dispatchEvent(event);
    }
    
    // 添加事件监听器
    addEventListener(eventName, callback) {
        document.addEventListener(`game:${eventName}`, callback);
    }
    
    // 移除事件监听器
    removeEventListener(eventName, callback) {
        document.removeEventListener(`game:${eventName}`, callback);
    }
}

// 剧情数据管理器
class StoryDataManager {
    constructor() {
        this.storyConfig = null;
        this.resourcesConfig = null;
        this.currentChapter = null;
        this.isLoaded = false;
    }
    
    // 加载配置文件（从game-data.js）
    async loadConfigs() {
        try {
            // 从全局变量加载配置（由game-data.js提供）
            if (window.GAME_STORY_CONFIG && window.GAME_RESOURCES_CONFIG) {
                console.log('✅ 从game-data.js加载配置...');
                this.storyConfig = window.GAME_STORY_CONFIG;
                this.resourcesConfig = window.GAME_RESOURCES_CONFIG;
                this.currentChapter = this.storyConfig.startChapter;
                this.isLoaded = true;
                console.log('✅ 剧情配置加载成功');
                return true;
            } else {
                // 如果没有找到配置数据
                console.error('❌ 未找到游戏配置数据！');
                console.error('💡 请确保：');
                console.error('   1. game-data.js 文件存在于项目根目录');
                console.error('   2. HTML中已引入 <script src="game-data.js"></script>');
                console.error('   3. game-data.js 在 main.js 之前引入');
                console.error('');
                console.error('🔧 如何生成 game-data.js：');
                console.error('   1. 打开 json-to-js-converter.html');
                console.error('   2. 上传 story_config.json 和 resources_config.json');
                console.error('   3. 点击"一键生成game-data.js"');
                console.error('   4. 下载文件到项目根目录');
                
                alert('未找到游戏配置！\n\n请先使用 json-to-js-converter.html 生成 game-data.js 文件\n\n详见浏览器控制台提示');
                return false;
            }
        } catch (error) {
            console.error('加载配置失败:', error);
            return false;
        }
    }
    
    // 获取场景数据
    getScene(sceneId) {
        if (!this.isLoaded) {
            console.error('配置文件尚未加载');
            return null;
        }
        
        const chapter = this.storyConfig.chapters[this.currentChapter];
        return chapter ? chapter.scenes[sceneId] : null;
    }
    
    // 获取对话数据
    getDialogue(sceneId, dialogueIndex) {
        const scene = this.getScene(sceneId);
        return scene ? scene.dialogues[dialogueIndex] : null;
    }
    
    // 获取选择数据
    getChoices(sceneId) {
        const scene = this.getScene(sceneId);
        return scene ? scene.choices : [];
    }
    
    // 获取章节标题
    getChapterTitle() {
        if (!this.isLoaded) return '';
        const chapter = this.storyConfig.chapters[this.currentChapter];
        return chapter ? chapter.title : '';
    }
    
    // 切换章节
    setChapter(chapterId) {
        if (this.storyConfig.chapters[chapterId]) {
            this.currentChapter = chapterId;
            return true;
        }
        return false;
    }
    
    // 获取起始场景
    getStartScene() {
        return this.storyConfig ? this.storyConfig.startScene : 'scene1';
    }
    
    // 检查选择条件
    checkChoiceCondition(choice, gameState) {
        if (!choice.conditions || choice.conditions.length === 0) return true;
        
        // 检查所有条件
        return choice.conditions.every(condition => {
            switch (condition.type) {
                case 'stat':
                    return gameState.stats[condition.target] >= condition.value;
                case 'affection':
                    return gameState.affection[condition.target] >= condition.value;
                case 'hasItem':
                    return gameState.items && gameState.items.includes(condition.target);
                case 'sceneVisited':
                    return gameState.visitedScenes && gameState.visitedScenes.includes(condition.target);
                default:
                    return true;
            }
        });
    }
    
    // 应用选择效果
    applyChoiceEffects(choice, gameState) {
        if (!choice.effects || choice.effects.length === 0) return;
        
        choice.effects.forEach(effect => {
            switch (effect.type) {
                case 'stat':
                    if (gameState.stats[effect.target] !== undefined) {
                        gameState.stats[effect.target] = Math.max(0, Math.min(10, 
                            gameState.stats[effect.target] + effect.value));
                    }
                    break;
                case 'affection':
                    if (gameState.affection[effect.target] !== undefined) {
                        gameState.affection[effect.target] = Math.max(0, Math.min(10, 
                            gameState.affection[effect.target] + effect.value));
                    }
                    break;
                case 'addItem':
                    if (!gameState.items) gameState.items = [];
                    if (!gameState.items.includes(effect.target)) {
                        gameState.items.push(effect.target);
                    }
                    break;
                case 'removeItem':
                    if (gameState.items) {
                        const index = gameState.items.indexOf(effect.target);
                        if (index > -1) {
                            gameState.items.splice(index, 1);
                        }
                    }
                    break;
            }
        });
    }
    
    // 获取资源路径
    getResourcePath(type, key) {
        if (!this.resourcesConfig) return '';
        return this.resourcesConfig[type] ? this.resourcesConfig[type][key] : '';
    }
}

// 音效管理器
class AudioManager {
    constructor() {
        this.sounds = {};
        this.music = null;
        this.musicVolume = 0.7;
        this.soundVolume = 0.8;
        this.isMuted = false;
    }
    
    // 初始化音效系统
    init() {
        // 预加载音效文件
        this.loadSound('button', 'sounds/button.mp3');
        this.loadSound('choice', 'sounds/choice.mp3');
        this.loadSound('page', 'sounds/page.mp3');
        
        console.log('音效管理器初始化完成');
    }
    
    // 加载音效文件
    loadSound(name, src) {
        // 注意：由于我们没有实际的音效文件，这里只是模拟
        this.sounds[name] = { src, loaded: false };
    }
    
    // 播放音效
    playSound(name, volume = null) {
        if (this.isMuted) return;
        
        const sound = this.sounds[name];
        if (!sound) {
            console.warn(`音效 ${name} 未找到`);
            return;
        }
        
        const finalVolume = (volume || this.soundVolume) * (this.isMuted ? 0 : 1);
        
        // 模拟音效播放
        console.log(`播放音效: ${name}, 音量: ${finalVolume}`);
    }
    
    // 播放背景音乐
    playMusic(name, loop = true) {
        if (this.isMuted) return;
        
        console.log(`播放背景音乐: ${name}, 循环: ${loop}`);
    }
    
    // 停止背景音乐
    stopMusic() {
        console.log('停止背景音乐');
    }
    
    // 设置音乐音量
    setMusicVolume(volume) {
        this.musicVolume = Math.max(0, Math.min(1, volume));
        console.log(`音乐音量设置为: ${this.musicVolume}`);
    }
    
    // 设置音效音量
    setSoundVolume(volume) {
        this.soundVolume = Math.max(0, Math.min(1, volume));
        console.log(`音效音量设置为: ${this.soundVolume}`);
    }
    
    // 静音/取消静音
    toggleMute() {
        this.isMuted = !this.isMuted;
        console.log(`静音状态: ${this.isMuted ? '开启' : '关闭'}`);
        return this.isMuted;
    }
}

// 工具函数
class Utils {
    // 格式化时间
    static formatTime(milliseconds) {
        const seconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(seconds / 60);
        const hours = Math.floor(minutes / 60);
        
        if (hours > 0) {
            return `${hours}小时${minutes % 60}分钟`;
        } else if (minutes > 0) {
            return `${minutes}分钟${seconds % 60}秒`;
        } else {
            return `${seconds}秒`;
        }
    }
    
    // 格式化日期
    static formatDate(date) {
        return new Intl.DateTimeFormat('zh-CN', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit'
        }).format(date);
    }
    
    // 深拷贝对象
    static deepClone(obj) {
        return JSON.parse(JSON.stringify(obj));
    }
    
    // 生成随机ID
    static generateId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }
    
    // 防抖函数
    static debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // 节流函数
    static throttle(func, limit) {
        let inThrottle;
        return function() {
            const args = arguments;
            const context = this;
            if (!inThrottle) {
                func.apply(context, args);
                inThrottle = true;
                setTimeout(() => inThrottle = false, limit);
            }
        };
    }
}

// 全局实例
const gameState = new GameStateManager();
const storyData = new StoryDataManager();
const audioManager = new AudioManager();
const utils = new Utils();

// 导出到全局作用域
window.gameState = gameState;
window.storyData = storyData;
window.audioManager = audioManager;
window.utils = utils;

// 初始化
document.addEventListener('DOMContentLoaded', function() {
    gameState.init();
    audioManager.init();
    
    console.log('凤临朝游戏系统初始化完成');
});