
//Credits: https://steamcommunity.com/sharedfiles/filedetails/?id=2829701779

const LevelNameSCH = "阶层";
const LevelNameTCH = "レベル";
const LevelAbbrSCH = "Lv.";
const LevelAbbrTCH = "Lv.";
const HPNameSCH = "体力"; 
const HPNameTCH = "体力";
const HPAbbrSCH = "体力";
const HPAbbrTCH = "体力";
const MPNameSCH = "精力"; 
const MPNameTCH = "精力";
const MPAbbrSCH = "精力";
const MPAbbrTCH = "精力";
const TPNameSCH = "高潮度";
const TPNameTCH = "快楽度";
const TPAbbrSCH = "高潮度";
const TPAbbrTCH = "快楽度";
const EXPNameSCH = "经验值";
const EXPNameTCH = "経験値";
const EXPAbbrSCH = "EXP";
const EXPAbbrTCH = "EXP";

//Param Strings
const MaxHPNameSCH = "最大体力";
const MaxHPNameTCH = "最大体力";
const MaxMPNameSCH = "最大精力";
const MaxMPNameTCH = "最大精力";
const AtkNameSCH = "力量";
const AtkNameTCH = "腕力";
const DefNameSCH = "忍耐力";
const DefNameTCH = "忍耐力";
const MatNameSCH = "灵巧";
const MatNameTCH = "器用さ";
const MdfNameSCH = "精神";
const MdfNameTCH = "マインド";
const AgiNameSCH = "敏捷";
const AgiNameTCH = "素早さ";
const LukNameSCH = "魅力";
const LukNameTCH = "魅力";

const CritDmgNameSCH = "暴击";
const CritDmgNameTCH = "クリティカルダメージ";
const WpAtkNameSCH = "武器攻击力";
const WpAtkNameTCH = "攻撃力";
const WpDefNameSCH = "武器防御力";
const WpDefNameTCH = "防御力";
const OverblowProtectionNameSCH = "伤害减少量";
const OverblowProtectionNameTCH = "ダメージ軽減量";
const FatigueNameSCH = "疲劳";
const FatigueNameTCH = "現在の疲労";
const FatigueGainNameSCH = "疲劳蓄积";
const FatigueGainNameTCH = "疲労蓄積量";
const FatigueRecoveryNameSCH = "疲劳恢复";
const FatigueRecoveryNameTCH = "疲労回復量";
const MaxWillpowerNameSCH = "最大意志力";
const MaxWillpowerNameTCH = "最大意志力";
const WillpowerNameSCH = "意志力";
const WillpowerNameTCH = "意思力";
const WillpowerAbbrSCH = "意志";
const WillpowerAbbrTCH = "意思";
const CooldownTurnsSingularNameSCH = "%1 回合";
const CooldownTurnsSingularNameTCH = "%1ターン";
const CooldownTurnsPluralNameSCH = "%1 回合";
const CooldownTurnsPluralNameTCH = "%1ﾀｰﾝ";
const CockinessNameSCH = "勇气";
const CockinessNameTCH = "大胆さ";


const XParamNameSCH = [
"命中率",
"闪避率",
"暴击率",
"暴击回避率",
"命中",
"",
"反击率",
"体力恢复率",
"精力恢复率",
"每回合上升的高潮值"];

const XParamNameTCH = [
"命中力",
"回避力",
"クリティカル率",
"クリティカル回避力",
"かすりダメージ",
"",
"カウンター率",
"体力回復量",
"精力回復量",
"ターンごとに得る快楽"];

const SParamNameSCH = [
"成为目标率",
"武器防御力",
"回复率",
"精力技能消耗",
"武器攻击力",
"意志力回复率",
"意志力技能消耗",
"性技消耗",
"攻击技能消耗",
"经验值率"];

const SParamNameTCH = [
"狙われ率",
"ハルバード防御力",
"回復率",
"精神スキルコスト",
"ハルバード攻撃力",
"意思力回復量",
"意思スキルコスト",
"性スキルコスト",
"攻撃スキルコスト",
"経験率"];

//Elements String

const ElementSlashNameSCH = "斩击";
const ElementSlashNameTCH = "斬撃";
const ElementPierceNameSCH = "突刺";
const ElementPierceNameTCH = "突撃";
const ElementBluntNameSCH = "打击";
const ElementBluntNameTCH = "打撃";
const ElementTalkNameSCH = "猥谈";
const ElementTalkNameTCH = "猥談";
const ElementSightNameSCH = "视奸";
const ElementSightNameTCH = "視姦";
const ElementPettingNameSCH = "爱抚";
const ElementPettingNameTCH = "愛撫";
const ElementStripNameSCH = "扒衣";
const ElementStripNameTCH = "ストリップ";
const ElementAlmightyNameSCH = "全能";
const ElementAlmightyNameTCH = "全般";
const ElementDrugsNameSCH = "毒";
const ElementDrugsNameTCH = "ドラッグ";
const ElementStenchNameSCH = "嗅觉";
const ElementStenchNameTCH = "嗅覚";
const ElementSexNameSCH = "性交";
const ElementSexNameTCH = "セックス";

//Passive Categories
const PassiveCategoryNameSCH = [
"\\I[56]全体",
"\\I[57]\\C[1]口欲",
" ├嘴巴",
" ├接吻",
" └口交",
"\\I[58]\\C[1]乳欲",
" ├乳房",
" ├乳头",
" └乳交",
"\\I[59]\\C[1]膣欲",
" ├阴蒂",
" ├小穴",
" ├湿润",
" ├舔阴",
" └性交",
"\\I[60]\\C[1]尻欲",
" ├臀部",
" ├菊穴",
" └肛交",
"\\I[61]\\C[1]棒欲",
" ├阴茎崇拜",
" ├手交",
" ├精液",
" ├吞精",
" ├中出",
" └肉体关系",
"\\I[44]\\C[1]施虐",
" ├状态",
" ├技能", 
" ├抗性",
" ├足交",
" └主导",
"\\I[45]\\C[1]受虐",
" ├猥谈",
" ├负面状态",
" ├舔肛",
" ├性癖",
" └顺从",
"\\I[46]\\C[1]自慰",
" ├欲求",
" ├睡眠",
" ├性玩具",
" └高潮",
"\\I[47]\\C[1]露出狂",
" ├视奸",
" ├衣服",
" ├裸体",
" └事件"
];

const PassiveCategoryNameTCH = [
"\\I[56]取得パッシブ",
"\\I[57]\\C[1]口欲",
" ├クチ",
" ├キス",
" └フェラチオ",
"\\I[58]\\C[1]乳欲",
" ├おっぱい",
" ├乳首",
" └パイズリ",
"\\I[59]\\C[1]膣欲",
" ├クリトリス",
" ├マンコ",
" ├愛液",
" ├クンニ",
" └マンコセックス",
"\\I[60]\\C[1]尻欲",
" ├ケツ",
" ├アナル",
" └アナルセックス",
"\\I[61]\\C[1]棒欲",
" ├チンポ愛",
" ├手コキ",
" ├ぶっかけ",
" ├精飲",
" ├中出し",
" └肉体関係",
"\\I[44]\\C[1]サド",
" ├ステータス",
" ├スキル", 
" ├耐性",
" ├足コキ",
" └支配欲",
"\\I[45]\\C[1]マゾ",
" ├猥談",
" ├弱体化",
" ├ケツ舐め",
" ├フェチ",
" └服従心",
"\\I[46]\\C[1]オナニー",
" ├性衝動",
" ├睡眠の質",
" ├オモチャ",
" └絶頂",
"\\I[47]\\C[1]露出",
" ├視姦",
" ├着衣",
" ├全裸",
" └アルバイト"
];


//Command Strings
const FightNameSCH = "战斗";
const FightNameTCH = "戦闘";
const EscapeNameSCH = "撤退";
const EscapeNameTCH = "撤退";
const AttackNameSCH = "攻击"; 
const AttackNameTCH = "攻撃"; 
const GuardNameSCH = "意志回合结束";
const GuardNameTCH = "メンタルフェーズ終了";
const ItemNameSCH = "道具";
const ItemNameTCH = "アイテム";
const SkillNameSCH = "被动";
const SkillNameTCH = "パッシブ";
const EquipNameSCH = "装备";
//const EquipNameSCH = "REM\\I[95]Equip";
const EquipNameTCH = "装備";
const StatusNameSCH = "状态";
const StatusNameTCH = "ステータス";
const FormationNameSCH = "小队";
const FormationNameTCH = "パーティ";
const SaveNameSCH = "保存";
const SaveNameTCH = "セーブ";
const LoadNameSCH = "读取";
const LoadNameTCH = "ロード";
const DeleteNameSCH = "删除";
const DeleteNameTCH = "削除";
const GameEndNameSCH = "结束游戏";
const GameEndNameTCH = "終了";
const OptionsNameSCH = "设定";
const OptionsNameTCH = "環境設定";
const WeaponNameSCH = "武器";
const WeaponNameTCH = "武器";
const ArmorNameSCH = "首饰";
const ArmorNameTCH = "装飾";
const KeyItemNameSCH = "关键道具";
const KeyItemNameTCH = "主要アイテム";
const Equip2NameSCH = "装备";
const Equip2NameTCH = "装備";
												 
const NewGameNameSCH = "新游戏";
const NewGameNameTCH = "ニューゲーム";
const ContinueNameSCH = "继续游戏";
const ContinueNameTCH = "コンティニュー";
const ToTitleNameSCH = "返回标题";
const ToTitleNameTCH = "タイトル画面へ";
const CancelNameSCH = "取消";
const CancelNameTCH = "キャンセル";
const BuyNameSCH = "商店";
const BuyNameTCH = "ショップ";
const SellNameSCH = "出售";
const SellNameTCH = "売却";

//Message Strings
const ActionFailureSCH = "%1没有效果!";
const ActionFailureTCH = "%1には効果なし！";
const ActorDamageSCH = "\\C[16]%1的体力下降%2!";
const ActorDamageTCH = "\\C[16]%1の体力が%2ダウン！！";
const ActorDrainSCH = "%1's %2 are drained by %3 points!"; //currently unused
const ActorDrainTCH = "%1's %2 are drained by %3 points!"; //currently unused
const ActorGainSCH = "\\C[11]%1 获得了 %3 %2!";
const ActorGainTCH = "\\C[11]%1の%3が%2アップ！";
const ActorLossSCH = "\\C[2]%1 失去了 %3 %2!";
const ActorLossTCH = "\\C[2]%1の%3が%2ダウン！";
const ActorNoDamageSCH = "%1 没有受到伤害！";
const ActorNoDamageTCH = "%1はダメージを受けていない！！";
const ActorNoHitSCH = "\\C[6]命中！%1受到了%2点伤害!";
const ActorNoHitTCH = "\\C[6]かすった！%1は%2のダメージを受けた！";
const ActorNoDamageGrazeSCH = "命中!但是%1没有受到伤害!";
const ActorNoDamageGrazeTCH = "かすった！しかし%1はダメージを受けていない！";
const ActorRecoverySCH = "%1的%2回复了%3点!"; //currently unused
const ActorRecoveryTCH = "%1's %2 are restored by %3 points!"; //currently unused
const CriticalToActorSCH = "\\C[10]暴击!!";
const CriticalToActorTCH = "\\C[10]クリティカルダメージ！！！";
const CriticalToEnemySCH = "暴击!!";
const CriticalToEnemyTCH = "クリティカルヒット！！！";
const DefeatTextSCH = "%1 is exhausted!"; //currently unused
const DefeatTextTCH = "%1 is exhausted!"; //currently unused
const EmergeTextSCH = "%1 appears!"; //currently unused
const EmergeTextTCH = "%1 appears!jp"; //currently unused
const EnemyDamageSCH = "%1的体力下降了%2点！";
const EnemyDamageTCH = "%1に%2のダメージ！";
const EnemyDrainSCH = "%1's %2 are drained by %3 points!"; //currently unused
const EnemyDrainTCH = "%1's %2 are drained by %3 points!"; //currently unused
const EnemyGainSCH = "%1获得了%3和%2!";
const EnemyGainTCH = "%1の%2が%3アップ！";
const EnemyLossSCH = "%1失去了%3和%2!";
const EnemyLossTCH = "%1の%2が%3ダウン！";
const EnemyNoDamageSCH = "\\C[7]%1没有受到伤害!";
const EnemyNoDamageTCH = "\\C[7]%1にダメージを与えられない！";
const EnemyNoHitSCH = "\\C[8]命中!%1受到了%2点伤害!";
const EnemyNoHitTCH = "\\C[8]かすった！%1に%2のダメージ！";
const EnemyNoDamageGrazeSCH = "\\C[7]命中! %1没有受到伤害!";
const EnemyNoDamageGrazeTCH = "\\C[7]かすった！しかし%1にはダメージを与えられない！";
const EnemyRecoverySCH = "%1's %2 are restored by %3 points!"; //currently unused
const EnemyRecoveryTCH = "%1's %2 are restored by %3 points!"; //currently unused
const EscapeFailureSCH = "But they couldn't escape!"; //currently unused
const EscapeFailureTCH = "But they couldn't escape!"; //currently unused
const EscapeStartSCH = "%1 runs away!"; //currently unused
const EscapeStartTCH = "%1 runs away!"; //currently unused
const EvasionTextSCH = "%1躲过了攻击!";
const EvasionTextTCH = "%1は避けた！";
const SuperEffectiveTextSCH = "效果拔群!";
const SuperEffectiveTextTCH = "効果はバツグンだ！";
const NotEffectiveTextSCH = "效果不佳...";
const NotEffectiveTextTCH = "効果は今ひとつのようだ……。";
const SaveFileTextSCH = "存档";
const SaveFileTextTCH = "ﾌｧｲﾙ";
const LoadMessageSCH = "读取存档?";
const LoadMessageTCH = "ロード";
const PreemptiveTextSCH = "%1成功逃走了!";
const PreemptiveTextTCH = "%1は脱出した！";
const SurpriseTextSCH = "%1无法抵抗!";
const SurpriseTextTCH = "%1は抵抗出来ない！";
const UseItemTextSCH = "%1使用了%2!";
const UseItemTextTCH = "%1は%2を使った！";
const VictoryTextSCH = "%1 has won!"; //currently unused
const VictoryTextTCH = "%1 has won!"; //currently unused
const CounterAttackTextSCH = "%1发动反击!";
const CounterAttackTextTCH = "%1が反撃！";


const WardenNameSCH = "典狱长等级";
const WardenNameTCH = "看守レベル";
const WardenLvlLimitSCH = "典狱长等级上限";
const WardenLvlLimitTCH = "看守レベル上限";
const SlutNameSCH = "淫乱值";
const SlutNameTCH = "ビッチレベル";
const StatLevelNameSCH = "%1等级";
const StatLevelNameTCH = "%1レベル";
const DayNameSCH = "天数";
const DayNameTCH = "日数";
const OrderNameSCH = "秩序";
const OrderNameTCH = "秩序";
const OrderChangeNameSCH = "统治力";
const OrderChangeNameTCH = "統制力";
const CorruptionNameSCH = "堕落";
const CorruptionNameTCH = "堕落";
const TitlesNameSCH = "称号";
const TitlesNameTCH = "称号";
const FundingNameSCH = "资金";
const FundingNameTCH = "資金";
const LedgerNameSCH = "《 账单 》";
const LedgerNameTCH = "《 損益 》";
const IncomeNameSCH = "收入";
const IncomeNameTCH = "収入";
const BarIncomeNameSCH = "酒吧收入";
const BarIncomeNameTCH = "酒場の収入";
const StoreIncomeNameSCH = "小卖部收入";
const StoreIncomeNameTCH = "ショップの収入";
const OutsourcingIncomeNameSCH = "外包项目收入";
const OutsourcingIncomeNameTCH = "残業の収入";
const NerdBlackmailNameSCH = "宅男勒索支出";
const NerdBlackmailNameTCH = "オタクのゆすり";
const ExpenseNameSCH = "支出";
const ExpenseNameTCH = "経費";
const EstimatedSubsidiesNameSCH = "预计支援金";
const EstimatedSubsidiesNameTCH = "支援金";
const EstimatedProfitNameSCH = "预计收益";
const EstimatedProfitNameTCH = "翌日収益";
const EstimatedLossNameSCH = "预计支出";
const EstimatedLossNameTCH = "翌日支出";

const SecretaryModeNameSCH = "秘书路线";
const SecretaryModeNameTCH = "秘書モード";
const WardenModeNameSCH = "典狱长路线";
const WardenModeNameTCH = "看守モード";
const PrisonerModeNameSCH = "囚犯路线";
const PrisonerModeNameTCH = "囚人モード";

//Right Click Status
const RCMenuSleepQualityNegTwoTextSCH = "\\C[7]卡琳昨晚几乎没睡... \\C[0](\\C[18]所有属性 -10%, 魅力 -20%\\C[0])";
const RCMenuSleepQualityNegTwoTextTCH = "\\C[7]昨夜の睡眠：ほとんど眠れなかった……。 \\C[0](\\C[18]全ステータス-10％ / 魅力-20％\\C[0])";
const RCMenuSleepQualityNegOneTextSCH = "\\C[7]卡琳昨晚没睡好... \\C[0](\\C[2]所有属性 -5%, 魅力 -10%\\C[0])";
const RCMenuSleepQualityNegOneTextTCH = "\\C[7]昨夜の睡眠：あまり眠れなかった…。 \\C[0](\\C[2]全ステータス-5％ / 魅力-10％\\C[0])";
const RCMenuSleepQualityZeroTextSCH = "\\C[8]卡琳昨晚睡眠正常.\\C[0]";
const RCMenuSleepQualityZeroTextTCH = "\\C[8]昨夜の睡眠：よく眠れた。\\C[0]";
const RCMenuSleepQualityOneTextSCH = "\\C[0]卡琳昨晚休息得不错. (\\C[24]全属性 +3%\\C[0])";
const RCMenuSleepQualityOneTextTCH = "\\C[0]昨夜の睡眠：リラックスしてよく眠れた。 (\\C[24]全ステータス+3％\\C[0])";
const RCMenuSleepQualityTwoTextSCH = "\\C[0]卡琳昨晚睡得很好. (\\C[29]全属性 +6%\\C[0])";
const RCMenuSleepQualityTwoTextTCH = "\\C[0]昨夜の睡眠：非常に質の高い睡眠が取れた。 (\\C[29]全ステータス+6％\\C[0])";
const RCMenuSleepQualityThreeTextSCH = "\\C[0]卡琳昨晚睡眠状态达到最佳. (\\C[28]全属性 +9%\\C[0])";
const RCMenuSleepQualityThreeTextTCH = "\\C[0]昨夜の睡眠：最高のコンディションで眠れた。 (\\C[28]全ステータス+9％\\C[0])";

const RCMenuFatigueLevelOneTextSCH = "\\C[0]卡琳感到疲劳. (\\C[2]全属性 -10%\\C[0])";
const RCMenuFatigueLevelOneTextTCH = "\\C[0]疲労感：少し疲れを感じ始めている。 (\\C[2]全ステータス-10％\\C[0])";
const RCMenuFatigueLevelTwoTextSCH = "\\C[0]卡琳有些累了... (\\C[2]全属性 -20%\\C[0])";
const RCMenuFatigueLevelTwoTextTCH = "\\C[0]疲労感：疲れを感じている…。 (\\C[2]全ステータス-20％\\C[0])";
const RCMenuFatigueLevelThreeTextSCH = "\\C[8]卡琳比较累了... \\C[0](\\C[10]全属性 -30%\\C[0])";
const RCMenuFatigueLevelThreeTextTCH = "\\C[8]疲労感：疲れている……。 \\C[0](\\C[10]全ステータス-30％\\C[0])";
const RCMenuFatigueLevelFourTextSCH = "\\C[7]卡琳很累了... \\C[0](\\C[18]全属性 -40%, 无法从战斗中撤退\\C[0])";
const RCMenuFatigueLevelFourTextTCH = "\\C[7]疲労感：かなり疲弊している………。 \\C[0](\\C[18]全ステータス-40％ / 撤退不可\\C[0])";
const RCMenuFatigueLevelFiveTextSCH = "\\C[7]卡琳快到达极限了......... \\C[0](\\C[18]全属性 -50%, 无法从战斗中撤退\\C[0])";
const RCMenuFatigueLevelFiveTextTCH = "\\C[7]疲労感：完全に疲労困憊になっている…………。 \\C[0](\\C[18]全ステータス-50％ / 撤退不可\\C[0])";
const RCMenuFatigueLevelFourHardTextSCH = "\\C[7]卡琳累坏了... \\C[0](\\C[18]全属性 -40%\\C[0])";
const RCMenuFatigueLevelFourHardTextTCH = "\\C[7]疲労感：かなり疲弊している………。 \\C[0](\\C[18]全ステータス-40％\\C[0])";
const RCMenuFatigueLevelFiveHardTextSCH = "\\C[7]卡琳已经快累晕过去了...... \\C[0](\\C[18]全属性 -50%\\C[0])";
const RCMenuFatigueLevelFiveHardTextTCH = "\\C[7]疲労感：完全に疲労困憊になっている…………。 \\C[0](\\C[18]全ステータス-50％\\C[0])";

const RCMenuArousedLevelOneTextSCH = "\\C[27]性奋状态：稍微发情中...\\C[0]";
const RCMenuArousedLevelOneTextTCH = "\\C[27]興奮状態：発情している…。\\C[0]";
const RCMenuArousedLevelTwoTextSCH = "\\C[5]性奋状态：渴望肉棒中...\\C[0]";
const RCMenuArousedLevelTwoTextTCH = "\\C[5]興奮状態：完全に発情している……。\\C[0]";

const RCMenuFrustratedLevelOneTextSCH = "\\C[27]性奋状态：有些紧张...\\C[0]";
const RCMenuFrustratedLevelOneTextTCH = "\\C[27]興奮状態：ムラムラしている…。\\C[0]";
const RCMenuFrustratedLevelTwoTextSCH = "\\C[5]性奋状态：非常紧张...\\C[0]";
const RCMenuFrustratedLevelTwoTextTCH = "\\C[5]興奮状態：かなりムラムラしている……。\\C[0]";

const RCMenuNightModeTextSCH = "\\C[27]卡琳以淫荡的姿态完全吸引了男人的注意...\\C[0]";
const RCMenuNightModeTextTCH = "\\C[27]淫らな姿で完全に男の注目を集めてしまっている……。\\C[0]";

const RCMenuLostPantiesTextSCH = "\\C[27]真空巡逻中.\\C[0]";
const RCMenuLostPantiesTextTCH = "\\C[27]ノーパンで巡回中。\\C[0]";

const RCMenuDefiledHalberdTextSCH = "\\C[7]长戟沾满了精液... \\C[0](\\C[18]无法装备\\C[0])";
const RCMenuDefiledHalberdTextTCH = "\\C[7]ハルバード：汚されている……。\\C[0]";

const RCMenuMetalSingleTextSCH = "\\C[0]今天制服了一名顽强的囚犯. (\\C[11]经验值 +%1%\\C[0])";
const RCMenuMetalSingleTextTCH = "\\C[0]メタル囚人を撃退した。 (\\C[11]経験値+%1％\\C[0])";
const RCMenuMetalPluralTextSCH = "\\C[0]今天制服了%2名顽强的囚犯. (\\C[11]经验值 +%1%\\C[0])";
const RCMenuMetalPluralTextTCH = "\\C[0]メタル囚人を%2人撃退した。 (\\C[11]経験値+%1％\\C[0])";

const RCMenuGiftsSingleTextSCH = "\\C[0]已收到礼物: \\C[0]";
const RCMenuGiftsSingleTextTCH = "\\C[0]受け取った贈呈品： \\C[0]";
const RCMenuGiftsPluralTextSCH = "\\C[0]已收到礼物: \\C[0]";
const RCMenuGiftsPluralTextTCH = "\\C[0]受け取った贈呈品： \\C[0]";

const RCMenuMealOneTextSCH = "\\C[0]卡琳吃了专业厨师的特制料理: (\\C[11]经验值 +50%\\C[0])";
const RCMenuMealOneTextTCH = "\\C[0]専属シェフの特別料理を食べた。 (\\C[11]経験値+50％\\C[0])";
const RCMenuMealTwoTextSCH = "\\C[0]卡琳吃了专业厨师的特制料理: (\\C[11]体力恢复, 精力恢复, 意志恢复 +5%\\C[0])";
const RCMenuMealTwoTextTCH = "\\C[0]専属シェフの特別料理を食べた。 (\\C[11]体力回復量+5％ / 精力回復量+5％ / 意志力回復量+5％\\C[0])";
const RCMenuMealThreeTextSCH = "\\C[0]卡琳吃了专业厨师的特制料理: (\\C[11]体力 +15%, 减少绝顶精力消耗\\C[0])";
const RCMenuMealThreeTextTCH = "\\C[0]専属シェフの特別料理を食べた。 (\\C[11]体力+15％ / 絶頂による精力ダメージを軽減\\C[0])";
const RCMenuMealFourTextSCH = "\\C[0]卡琳吃了专业厨师的特制料理: (\\C[27]增加每回合发情的概率\\C[0])";
const RCMenuMealFourTextTCH = "\\C[0]専属シェフの特別料理を食べた。 (\\C[27]興奮状態になる確率が毎ターン上昇\\C[0])";
const RCMenuMealFiveTextSCH = "\\C[0]卡琳吃了专业厨师的特制料理: (\\C[27]乳房,小穴的敏感度 +50%\\C[0])";
const RCMenuMealFiveTextTCH = "\\C[0]専属シェフの特別料理を食べた。 (\\C[27]おっぱい感度+50％ / マンコ感度+50％\\C[0])";
const RCMenuMealSixTextSCH = "\\C[0]卡琳吃了专业厨师的特制料理: (\\C[11]力量, 灵巧, 敏捷 +5%\\C[0])";
const RCMenuMealSixTextTCH = "\\C[0]専属シェフの特別料理を食べた。 (\\C[11]腕力+5％ / 器用さ+5％ / 素早さ+5％\\C[0])";
const RCMenuMealSevenTextSCH = "\\C[0]卡琳吃了专业厨师的特制料理: (\\C[11]疲劳积累 -33%\\C[0])";
const RCMenuMealSevenTextTCH = "\\C[0]専属シェフの特別料理を食べた。 (\\C[11]疲労蓄積-33％\\C[0])";
const RCMenuMealEightTextSCH = "\\C[0]卡琳吃了专业厨师的特制料理: (\\C[11]爱抚,性交耐性 +15%\\C[0])";
const RCMenuMealEightTextTCH = "\\C[0]専属シェフの特別料理を食べた。 (\\C[11]愛撫耐性+15％ / セックス耐性+15％\\C[0])";
const RCMenuMealNineTextSCH = "\\C[0]卡琳吃了专业厨师的特制料理: (\\C[11]敌人攻击性↓↓↓\\C[0])";
const RCMenuMealNineTextTCH = "\\C[0]専属シェフの特別料理を食べた。 (\\C[11]敵の攻撃性↓↓↓\\C[0])";
const RCMenuMealTenTextSCH = "\\C[0]卡琳吃了专业厨师的特制料理: (\\C[27]嘴唇,肛门敏感度 +50%\\C[0])";
const RCMenuMealTenTextTCH = "\\C[0]専属シェフの特別料理を食べた。 (\\C[27]クチ感度+50％ / アナル感度+50％\\C[0])";

const RCMenuStoreItemOneTextSCH = "\\C[0]卡琳正在使用商店物品: (\\C[11]疲劳值累积 -20% \\C[10]全属性 -5%\\C[0])";
const RCMenuStoreItemOneTextTCH = "\\C[0]ショップのアイテムを使用。 (\\C[11]疲労蓄積-20％ \\C[0]/ \\C[10]能力-5％\\C[0])";
const RCMenuStoreItemTwoTextSCH = "\\C[0]卡琳正在使用商店物品: (\\C[11]斧戟暴击率 +25% \\C[10]斧戟防御力 -10%\\C[0])";
const RCMenuStoreItemTwoTextTCH = "\\C[0]ショップのアイテムを使用。 (\\C[11]ハルバードクリティカル率+25％ \\C[0]/ \\C[10]ハルバード防御力-10％\\C[0])";
const RCMenuStoreItemThreeTextSCH = "\\C[0]卡琳正在使用商店物品: (\\C[11]斩击耐性·打击耐性·突击耐性 +15% \\C[10]体力恢复量 -2%\\C[0])";
const RCMenuStoreItemThreeTextTCH = "\\C[0]ショップのアイテムを使用。 (\\C[11]斬撃耐性・突撃耐性・打撃耐性+15％ \\C[0]/ \\C[10]体力回復量-2％\\C[0])";
const RCMenuStoreItemFourTextSCH = "\\C[0]卡琳正在使用商店物品: (\\C[11]扒衣耐性 +30％ \\C[10]魅力(战斗中) -15%\\C[0])";
const RCMenuStoreItemFourTextTCH = "\\C[0]ショップのアイテムを使用。 (\\C[11]ストリップ耐性+30％ \\C[0]/ \\C[10]魅力-15％(バトル中)\\C[0])";
const RCMenuStoreItemFiveTextSCH = "\\C[0]卡琳正在使用商店物品: (\\C[11]魅力(战斗中) +15% \\C[10]猥谈耐性·视奸耐性 -15%\\C[0])";
const RCMenuStoreItemFiveTextTCH = "\\C[0]ショップのアイテムを使用。 (\\C[11]魅力+15％(バトル中) \\C[0]/ \\C[10]猥談耐性・ストリップ耐性-15％\\C[0])";

const PrisonLevelNameSCH = "Level";
const PrisonLevelNameTCH = "LEVEL";
const PrisonLevelStatusUnknownSCH = "???????";
const PrisonLevelStatusUnknownTCH = "???????";
const PrisonLevelStatusAnarchySCH = "无法压制";
const PrisonLevelStatusAnarchyTCH = "無法状態";
const PrisonLevelStatusSubjugatedSCH = "已压制";
const PrisonLevelStatusSubjugatedTCH = "制圧";
const PrisonLevelStatusRiotingSCH = "暴动发生！！";
const PrisonLevelStatusRiotingTCH = "暴動発生中!!";

const PrisonMapLevelNameSCH = "第%1层: ";
const PrisonMapLevelNameTCH = "【LEVEL %1】 ";
const PrisonMapOutsideNameSCH = "迦南要塞: ";
const PrisonMapOutsideNameTCH = "【要塞ガナン】 ";
const PrisonMapUnknownNameSCH = "要塞内";
const PrisonMapUnknownNameTCH = "要塞内";
const PrisonMapUndiscoveredNameSCH = "???";
const PrisonMapUndiscoveredNameTCH = "???";
const PrisonMapWeddingNameSCH = "正在举行结婚典礼";
const PrisonMapWeddingNameTCH = "結婚式の最中";
const PrisonMapLevelFiveNameSCH = "Level 5";
const PrisonMapLevelFiveNameTCH = "LEVEL 5";
const PrisonMapEndlessPrisonNameSCH = "无尽监狱之战";
const PrisonMapEndlessPrisonNameTCH = "果てしなきプリズンバトル";
const PrisonMapEndlessHellNameSCH = "无尽地狱之战";
const PrisonMapEndlessHellNameTCH = "終わりなきヘルバトル";
const PrisonMapCustomNameSCH = "自定义战斗";
const PrisonMapCustomNameTCH = "カスタムバトル";


//カリンのレベル
const KissingLevelSCH = "接吻等级";
const KissingLevelTCH = "キスレベル";
const PettingLevelSCH = "爱抚等级";
const PettingLevelTCH = "愛撫レベル";
const HandjobLevelSCH = "手交等级";
const HandjobLevelTCH = "手コキレベル";
const BlowjobLevelSCH = "口交等级";
const BlowjobLevelTCH = "フェラレベル";
const FootjobLevelSCH = "足交等级";
const FootjobLevelTCH = "足コキレベル";
const RimjobLevelSCH = "舔肛等級";
const RimjobLevelTCH = "ケツ舐めレベル";
const TittyFuckLevelSCH = "乳交等級";
const TittyFuckLevelTCH = "パイズリレベル";
const PussyLevelSCH = "穴交等級";
const PussyLevelTCH = "マンコセックスレベル";
const AnalLevelSCH = "肛交等級";
const AnalLevelTCH = "アナルセックスレベル";
const MasturbationLevelSCH = "自慰等級";
const MasturbationLevelTCH = "オナニーレベル";
const SadismLevelSCH = "施虐等級";
const SadismLevelTCH = "サドレベル";
const MasochismLevelSCH = "受虐等级";
const MasochismLevelTCH = "マゾレベル";

const MouthSensitivitySCH = "嘴巴敏感度";
const MouthSensitivityTCH = "クチ感度";
const FingerSensitivitySCH = "手部敏感度";
const FingerSensitivityTCH = "手の感度";
const BoobsSensitivitySCH = "乳房敏感度";
const BoobsSensitivityTCH = "おっぱい感度";
const NipplesSensitivitySCH = "乳头敏感度";
const NipplesSensitivityTCH = "チクビ感度";
const ClitorisSensitivitySCH = "阴蒂敏感度";
const ClitorisSensitivityTCH = "クリトリス感度";
const PussySensitivitySCH = "小穴敏感度";
const PussySensitivityTCH = "マンコ感度";
const ButtSensitivitySCH = "屁股敏感度";
const ButtSensitivityTCH = "ケツ感度";
const AnalSensitivitySCH = "菊花敏感度";
const AnalSensitivityTCH = "アナル感度";
const FootSensitivitySCH = "足部敏感度";
const FootSensitivityTCH = "足の感度";
const TalkSensitivitySCH = "猥谈敏感度";
const TalkSensitivityTCH = "猥談感度";
const SightSensitivitySCH = "视奸敏感度";
const SightSensitivityTCH = "視姦感度";
const SwallowSensitivitySCH = "吞精敏感度";
const SwallowSensitivityTCH = "ごっくん感度";
const PussyCreampieSensitivitySCH = "阴道中出敏感度";
const PussyCreampieSensitivityTCH = "マンコ中出し感度";
const AnalCreampieSensitivitySCH = "菊穴中出敏感度";
const AnalCreampieSensitivityTCH = "アナル中出し感度";
const BukkakeSensitivitySCH = "被射精敏感度";
const BukkakeSensitivityTCH = "ぶっかけ感度";
const ButtSpankingSensitivitySCH = "打屁股敏感度";
const ButtSpankingSensitivityTCH = "スパンキング感度";

//Status Menu
const StatusMenuPrimarySCH = "状态①";
const StatusMenuPrimaryTCH = "ステータス①";
const StatusMenuSecondarySCH = "状态②";
const StatusMenuSecondaryTCH = "ステータス②";
const StatusMenuProfileSCH = "经历";
const StatusMenuProfileTCH = "経歴";
const StatusMenuTertiarySCH = "性能力";
const StatusMenuTertiaryTCH = "セックス";
const StatusMenuRecordsSCH = "体验记录";
const StatusMenuRecordsTCH = "体験記録";
const StatusMenuDesiresSCH = "欲望";
const StatusMenuDesiresTCH = "必須性欲";
const StatusMenuEffectsSCH = "状态";
const StatusMenuEffectsTCH = "状態";

const StatusMenuStatsSCH = "《 属性 》";
const StatusMenuStatsTCH = "《 身体能力 》";
const StatusMenuStatLevelsSCH = "《 属性等级 》";
const StatusMenuStatLevelsTCH = "《 ステータスレベル 》";
const StatusMenuAttributesSCH = "《 战斗能力 》";
const StatusMenuAttributesTCH = "《 戦闘能力 》";
const StatusMenuResistsSCH = "《 耐性 》";
const StatusMenuResistsTCH = "《 耐性 》";
const StatusMenuLevelsSCH = "《 性技等级 》";
const StatusMenuLevelsTCH = "《 性レベル 》";
const StatusMenuSensitivitiesSCH = "《 敏感度 》";
const StatusMenuSensitivitiesTCH = "《 性感度 》";

const StatusMenuMouthDesireReqSCH = "《 口欲要求 》";
const StatusMenuMouthDesireReqTCH = "《 必須口欲 》";
const StatusMenuBoobsDesireReqSCH = "《 乳欲要求 》";
const StatusMenuBoobsDesireReqTCH = "《 必須乳欲 》";
const StatusMenuPussyDesireReqSCH = "《 膣欲要求 》";
const StatusMenuPussyDesireReqTCH = "《 必須膣欲 》";
const StatusMenuButtDesireReqSCH = "《 尻欲要求 》";
const StatusMenuButtDesireReqTCH = "《 必須尻欲 》";
const StatusMenuCockDesireReqSCH = "《 棒欲要求 》";
const StatusMenuCockDesireReqTCH = "《 必須棒欲 》";

const ProfileNameTextSCH = "名字:";
const ProfileNameTextTCH = "名前：";
const ProfileAgeTextSCH = "年龄:";
const ProfileAgeTextTCH = "年齢：";
const ProfileThreeSizesTextSCH = "三围:";
const ProfileThreeSizesTextTCH = "スリーサイズ：";
const ProfileBioTextSCH = "经历";
const ProfileBioTextTCH = "経歴";

const ProfileNameSCH = "卡琳";
const ProfileNameTCH = "カリン";
const ProfileThreeSizesSCH = "110(K罩杯)-59-100厘米(43-23-39英寸)";
const ProfileThreeSizesTCH = "110cm (Ｋカップ) / 59cm / 100cm";
const ProfileBio_One_SCH = [
"从小就以出色的成绩和身体能力压倒别人的才华，并有目的地轻松攀登到了生涯顶峰。", 
"惊人的成绩使她迅速跻身于赞纳多帝国的精英行列。",
"官至帝国皇帝的直属秘书而驰名天下。",
"此外，因为对自己的美貌和体型有绝对的自信，所以自尊心非常高。"
];
const ProfileBio_One_TCH = [
"ザナドス帝国皇帝の直属秘書として名を馳せるまで、まさしく俊足の早さで到達した正真正銘のエリート。",
"幼少期から優秀な成績と身体能力で他を圧倒する才能で、キャリアの階段を意図もたやすく上り詰めていった。", 
"また、その恵まれた美貌と体型に絶対的な自信を持っているため、プライドが非常に高い。"
];

const ProfileRecordFirstSCH = "初体验: ";
const ProfileRecordFirstTCH = "初体験：";
const ProfileRecordLastSCH = "最　近: ";
const ProfileRecordLastTCH = "最　近：";
const ProfileRecordSecretSCH = "\\C[7]保密\\C[0]";
const ProfileRecordSecretTCH = "\\C[7]ヒミツ\\C[0]";
const ProfileRecordNeverSCH = "\\C[29]尚未经验\\C[0]";
const ProfileRecordNeverTCH = "\\C[29]未経験\\C[0]";

const ProfileRecordKissSCH = "接吻";
const ProfileRecordKissTCH = "キス";
const ProfileRecordSexSCH = "性交";
const ProfileRecordSexTCH = "セックス";
const ProfileRecordAnalSCH = "肛交";
const ProfileRecordAnalTCH = "アナル";
const ProfileRecordHandjobSCH = "手交";
const ProfileRecordHandjobTCH = "手コキ";
const ProfileRecordBlowjobSCH = "口交";
const ProfileRecordBlowjobTCH = "フェラチオ";
const ProfileRecordTittyFuckSCH = "乳交";
const ProfileRecordTittyFuckTCH = "パイズリ";
const ProfileRecordFootjobSCH = "足交";
const ProfileRecordFootjobTCH = "足コキ";
const ProfileRecordRimjobSCH = "舔肛";
const ProfileRecordRimjobTCH = "ケツ舐め";
const ProfileRecordSwallowSCH = "精饮";
const ProfileRecordSwallowTCH = "精飲";
const ProfileRecordPussyCreampieSCH = "阴道中出";
const ProfileRecordPussyCreampieTCH = "中出し";
const ProfileRecordAnalCreampieSCH = "肛交中出";
const ProfileRecordAnalCreampieTCH = "アナル中出し";
const ProfileRecordBodyBukkakeSCH = "体外射精";
const ProfileRecordBodyBukkakeTCH = "体へのぶっかけ";
const ProfileRecordFaceBukkakeSCH = "颜射";
const ProfileRecordFaceBukkakeTCH = "顔射";

const ProfileRecordCunnilingusSCH = "舔阴";
const ProfileRecordCunnilingusTCH = "クンニ";
const ProfileRecordSuckFingersSCH = "吮吸手指";
const ProfileRecordSuckFingersTCH = "指しゃぶり";
const ProfileRecordButtSpankSCH = "打屁股";
const ProfileRecordButtSpankTCH = "スパンキング";
const ProfileRecordBoobsPettingSCH = "胸部爱抚";
const ProfileRecordBoobsPettingTCH = "おっぱい愛撫";
const ProfileRecordNipplesPettingSCH = "乳头爱抚";
const ProfileRecordNipplesPettingTCH = "乳首愛撫";
const ProfileRecordClitPettingSCH = "阴蒂爱抚";
const ProfileRecordClitPettingTCH = "クリ愛撫";
const ProfileRecordPussyPettingSCH = "小穴爱抚";
const ProfileRecordPussyPettingTCH = "マンコ愛撫";
const ProfileRecordButtPettingSCH = "屁股爱抚";
const ProfileRecordButtPettingTCH = "ケツ愛撫";
const ProfileRecordAnalPettingSCH = "肛门爱抚";
const ProfileRecordAnalPettingTCH = "アナル愛撫";
const ProfileRecordClitToySCH = "跳蛋";
const ProfileRecordClitToyTCH = "クリのオモチャ";
const ProfileRecordPussyToySCH = "阴道玩具";
const ProfileRecordPussyToyTCH = "マンコのオモチャ";
const ProfileRecordAnalToySCH = "肛门玩具";
const ProfileRecordAnalToyTCH = "アナルのオモチャ";
const ProfileRecordPussySexSCH = "小穴性交";
const ProfileRecordPussySexTCH = "マンコセックス";
const ProfileRecordAnalSexSCH = "肛门性交";
const ProfileRecordAnalSexTCH = "アナルセックス";


const ProfileRecordFirstKissSCH = "初吻在\\C[26]第%1天\\C[0]的%3献给了\\C[31]%2\\C[0].";
const ProfileRecordFirstKissTCH = "初キスは、\\C[26]%1日目\\C[0]の%3で\\C[31]%2\\C[0]と交わした。";
const ProfileRecordFirstKissWasPenisSCH = "初吻在\\C[26]第%1天\\C[0]的%3献给了\\C[31]%2\\C[0]的肉棒.";
const ProfileRecordFirstKissWasPenisTCH = "\\C[26]%1日目\\C[0]に%3で経験した初キスは\\C[31]%2\\C[0]のチンポの亀頭だった。";
const ProfileRecordFirstKissWasAnusSCH = "初吻在\\C[26]第%1天\\C[0]的%3献给了\\C[31]%2\\C[0]的肛门.";
const ProfileRecordFirstKissWasAnusTCH = "記念すべきファーストキスは、\\C[26]%1日目\\C[0]に%3で舐めた\\C[31]%2\\C[0]のケツ穴だった。";

const ProfileRecordLastKissSCH = "\\C[26]第%1天\\C[0]在%3与\\C[31]%2\\C[0]接吻了.";
const ProfileRecordLastKissTCH = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]とキスした。";
const ProfileRecordFirstSexSCH = "\\C[26]第%1天\\C[0]在%3被\\C[31]%2\\C[0]夺去了处女之身.";
const ProfileRecordFirstSexTCH = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]に処女を奪われた。";
const ProfileRecordFirstPussySexWasDildoSCH = "\\C[26]第%1天\\C[0]在%3被\\C[31]%2\\C[0]的假阴茎玩具夺去了处女之身.";
const ProfileRecordFirstPussySexWasDildoTCH = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]のディルドに処女を奪われた。";
const ProfileRecordLastSexSCH = "在\\C[26]第%1天\\C[0]的%3与\\C[31]%2\\C[0]发生了性交.";
const ProfileRecordLastSexTCH = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]とヤッた。";
const ProfileRecordFirstAnalSCH = "\\C[26]第%1天\\C[0]在%3被\\C[31]%2\\C[0]夺去了肛门的第一次.";
const ProfileRecordFirstAnalTCH = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]にアナル処女を奪われた。";
const ProfileRecordLastAnalSCH = "在\\C[26]第%1天\\C[0]的%3与\\C[31]%2\\C[0]发生了肛交.";
const ProfileRecordLastAnalTCH = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]とケツマンコでヤッた。";
const ProfileRecordFirstHandjobSCH = "在\\C[26]第%1天\\C[0]的%3，人生第一次给\\C[31]%2\\C[0]打了飞机.";
const ProfileRecordFirstHandjobTCH = "\\C[26]%1日目\\C[0]、%3で初めて手コキしたのは\\C[31]%2\\C[0]のチンポだった。";
const ProfileRecordLastHandjobSCH = "在\\C[26]第%1天\\C[0]给\\C[31]%2\\C[0]提供了手交服务.";
const ProfileRecordLastHandjobTCH = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]の勃起チンポをシコった。";
const ProfileRecordFirstBlowjobSCH = "在\\C[26]第%1天\\C[0]的%3里，人生第一次吮吸了\\C[31]%2\\C[0]的肉棒.";
const ProfileRecordFirstBlowjobTCH = "\\C[26]%1日目\\C[0]、%3でしゃぶった\\C[31]%2\\C[0]のチンポが初フェラだった。";
const ProfileRecordLastBlowjobSCH = "在\\C[26]第%1天\\C[0]给\\C[31]%2\\C[0]吹了一发.";
const ProfileRecordLastBlowjobTCH = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]の勃起チンポをしゃぶった。";
const ProfileRecordFirstTittyFuckSCH = "在\\C[26]第%1天\\C[0]的%3，人生中第一次用双乳夹入了\\C[31]%2\\C[0]的肉棒.";
const ProfileRecordFirstTittyFuckTCH = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]に初パイズリをさせられた。";
const ProfileRecordLastTittyFuckSCH = "在\\C[26]第%1天\\C[0]的%3给\\C[31]%2\\C[0]提供了乳交服务.";
const ProfileRecordLastTittyFuckTCH = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]のチンポをおっぱいで気持ち良くした。";

const ProfileRecordFirstFootjobSCH = "在\\C[26]第%1天\\C[0]的%3，人生中第一次用双脚玩弄\\C[31]%2\\C[0]的肉棒.";
const ProfileRecordFirstFootjobTCH = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]のチンポを足でコスった。";
const ProfileRecordLastFootjobSCH = "在\\C[26]第%1天\\C[0]用双脚，在%3里给\\C[31]%2\\C[0]提供了足交服务.";
const ProfileRecordLastFootjobTCH = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]のチンポを足でシゴいてやった。";
const ProfileRecordFirstRimjobSCH = "在\\C[26]第%1天\\C[0]的%3里，被强迫舔了\\C[31]%2\\C[0]的肛门.";
const ProfileRecordFirstRimjobTCH = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]に初めてアナルを舐めさせられた。";
const ProfileRecordLastRimjobSCH = "在\\C[26]Day %1\\C[0]的%3，舔了\\C[31]%2\\C[0]的肛门.";
const ProfileRecordLastRimjobTCH = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]のケツ穴を舐め回してあげた。";

const ProfileRecordFirstBukkakeSCH = "在\\C[26]第%1天\\C[0]的%3，人生中第一次被\\C[31]%2\\C[0]射在了身上.";
const ProfileRecordFirstBukkakeTCH = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]から初めて体にぶっかけられた。";
const ProfileRecordLastBukkakeSCH = "在\\C[26]第%1天\\C[0]的%3，人生中第一次用\\C[31]%2\\C[0]的精液洗了个精液浴.";
const ProfileRecordLastBukkakeTCH = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]のザーメンを体に浴びた。";
const ProfileRecordFirstFaceBukkakeSCH = "在\\C[26]第%1天\\C[0]的%3，被\\C[31]%2\\C[0]颜射了.";
const ProfileRecordFirstFaceBukkakeTCH = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]から初めて顔射された。";
const ProfileRecordLastFaceBukkakeSCH = "在\\C[26]Day %1\\C[0]的%3，接受了\\C[31]%2\\C[0]的颜射.";
const ProfileRecordLastFaceBukkakeTCH = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]のザーメンを顔面で受け入れた。";

const ProfileRecordFirstSwallowSCH = "在\\C[26]第%1天\\C[0]的%3，初次品尝了\\C[31]%2\\C[0]的精液.";
const ProfileRecordFirstSwallowTCH = "\\C[26]%1日目\\C[0]、%3で初めて飲んだのは\\C[31]%2\\C[0]の精子だった。";
const ProfileRecordLastSwallowSCH = "在\\C[26]Day %1\\C[0]的%3，喝下了\\C[31]%2\\C[0]射在嘴里的精液.";
const ProfileRecordLastSwallowTCH = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]が口内に発射したザーメンをごっくんした。";
const ProfileRecordFirstPussyCreampieSCH = "\\C[31]%2\\C[0]在\\C[26]第%1天\\C[0]的%3里，首次中出了我.";
const ProfileRecordFirstPussyCreampieTCH = "ついに\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]に初めて膣内射精をされた。";
const ProfileRecordLastPussyCreampieSCH = "在\\C[26]第%1天\\C[0]，让在%3的\\C[31]%2\\C[0]在阴道最深处中出了.";
const ProfileRecordLastPussyCreampieTCH = "\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]が膣奥にザーメンをぶちまけていった。";
const ProfileRecordFirstAnalCreampieSCH = "\\C[31]%2\\C[0]在\\C[26]第%1天\\C[0]的%3里，首次中出了我的肛门.";
const ProfileRecordFirstAnalCreampieTCH = "とうとう\\C[26]%1日目\\C[0]、%3で\\C[31]%2\\C[0]に初めて腸内射精された。";
const ProfileRecordLastAnalCreampieSCH = "在\\C[26]第%1天\\C[0]，让在%3的\\C[31]%2\\C[0]在肛门里中出了.";
const ProfileRecordLastAnalCreampieTCH = "\\C[26]%1日目\\C[0]に%3で\\C[31]%2\\C[0]がケツ奥へザーメンを放出していった。";


const StatusRecordDaysSingularSCH = "日";
const StatusRecordDaysSingularTCH = "日";
const StatusRecordDaysPluralSCH = "日";
const StatusRecordDaysPluralTCH = "日";
const StatusRecordTimesSingularSCH = "回";
const StatusRecordTimesSingularTCH = "回";
const StatusRecordTimesPluralSCH = "回";
const StatusRecordTimesPluralTCH = "回";
const StatusRecordJustPeopleSingularSCH = "人";
const StatusRecordJustPeopleSingularTCH = "人";
const StatusRecordJustPeoplePluralSCH = "人";
const StatusRecordJustPeoplePluralTCH = "人";
const StatusRecordDifferentPeopleSingularSCH = "人";
const StatusRecordDifferentPeopleSingularTCH = "人";
const StatusRecordDifferentPeoplePluralSCH = "人";
const StatusRecordDifferentPeoplePluralTCH = "人";

const StatusRecordDateSCH = "自从到监狱就任以来，已经度过了%1天.";
const StatusRecordDateTCH = "私が監獄に着任してから%1日が経過した。";
const StatusRecordDateSlutSCH = "已经在在迦南监狱与大肉棒们度过了愉快的%1天♥";
const StatusRecordDateSlutTCH = "私がガナンで暮らしてから%1日も経っちゃった♥";
const StatusRecordFightSCH = "在战斗中击退了%1人，但败北了%2次.";
const StatusRecordFightTCH = "戦闘で%1人を撃退したが、%2回は敗北してしまった。";
const StatusRecordFightSlutSCH = "'在战斗中击退了%1人，但“一不小心”输给了敌人%2次♥";
const StatusRecordFightSlutTCH = "バトルで%1人もやっつけて来たけど、%2回は負けちゃった♥";
const StatusRecordFightSubduedOnlySCH = "战斗中击退了%1人.";
const StatusRecordFightSubduedOnlyTCH = "戦闘で%1人を撃退した。";
const StatusRecordStripSCH = "衣服被扒掉了%1次，内裤被扒掉了%2次.";
const StatusRecordStripTCH = "服を%1回脱がされた。その内、パンティは%2回脱がされた。";
const StatusRecordStripSlutSCH = "在大伙儿面前被扒光光了%1次，并且内裤还被拿走了%2次♥";
const StatusRecordStripSlutTCH = "みんなの前で%1回脱いで、%2回はノーパンになっちゃった♥";
const StatusRecordKissSCH = "和%2个不同的人接吻了，总计接吻了%1次.";
const StatusRecordKissTCH = "キスを%2人の男と交わした。合計で%1回キスをしている。";
const StatusRecordKissSlutSCH = "和%2位不同的男人热烈舌吻了共计%1次♥";
const StatusRecordKissSlutTCH = "私とベロチューしたオトコは%2人♥全部で%1回もチュッチュしちゃってる♥";
const StatusRecordBoobsPettedSCH = "乳房被%2个不同的人揉过，总计被揉捏过%1次.";
const StatusRecordBoobsPettedTCH = "私の胸を%2人の男に揉まれた。合計で%1回おっぱいを揉まれている。";
const StatusRecordBoobsPettedSlutSCH = "我的色情巨乳被%2位不同的男人揉捏玩弄了共计%2次♥";
const StatusRecordBoobsPettedSlutTCH = "私のエロ乳を揉みしだいたオトコは%2人♥全部で%1回も揉んで貰ってるわね♥";
const StatusRecordNipplesPettedSCH = "乳头被%2个不同的人捏过，总计总计被捏过%1次..";
const StatusRecordNipplesPettedTCH = "私の乳首を%2人の男につままれた。合計で%1回乳首をつままれている。";
const StatusRecordNipplesPettedSlutSCH = "我的下流乳头被%2位不同的男人揉捏玩弄了共计%2次♥";
const StatusRecordNipplesPettedSlutTCH = "私のスケベな乳首をつまんだオトコは%2人♥全部で%1回も弄ばれてるのね♥";
const StatusRecordClitPettedSCH = "阴蒂被%2个不同的人玩弄过，总计被玩弄过%1次.";
const StatusRecordClitPettedTCH = "私のクリトリスを%2人の男にイジられた。合計で%1回クリをイジられている。";
const StatusRecordClitPettedSlutSCH = "我的敏感阴蒂被%2位不同的男人挑逗玩弄了共计%1次♥";
const StatusRecordClitPettedSlutTCH = "私のクリちゃんをシコったオトコは%2人♥全部で%1回もイジってくれてるわ♥";
const StatusRecordPussyPettedSCH = "小穴被%2个不同的人用手指侵犯过，总计被侵犯了%1次.";
const StatusRecordPussyPettedTCH = "私のマンコを%2人の男にイジられた。合計で%1回マンコをイジられている。";
const StatusRecordPussyPettedSlutSCH = "我的淫乱小穴被%2位不同的男人用手指抽插过共计%1次♥";
const StatusRecordPussyPettedSlutTCH = "私のドスケベマンコをイジったオトコは%2人♥全部で%1回もマンコイジりを味わったのね♥";
const StatusRecordButtPettedSCH = "有%2个不同的人捏过我的屁股，总计被捏过%1次..";
const StatusRecordButtPettedTCH = "私のお尻を%2人の男に鷲掴みにされた。合計で%1回尻を鷲掴みされている。";
const StatusRecordButtPettedSlutSCH = "我的诱人巨臀被%2位不同的男人揉捏过共计%1次♥";
const StatusRecordButtPettedSlutTCH = "私のデカケツにセクハラしたオトコは%2人♥全部で%1回もケツハラしてくれてるわ♥";
const StatusRecordAnalPettedSCH = "肛门被%2个不同的人用手指侵犯过，总计被侵犯%1次.";
const StatusRecordAnalPettedTCH = "私のアナルを%2人の男に指でほじられた。合計で%1回アナルをほじられている。";
const StatusRecordAnalPettedSlutSCH = "我的淫靡菊穴被%2位不同的男人用手指抽插过共计%1次♥";
const StatusRecordAnalPettedSlutTCH = "私のケツ穴をホジくりまくったオトコは%2人♥全部で%1回もアナホジして貰えてるの♥";
const StatusRecordMasturbateSCH = "自慰过%1次，看过其他男人在我面前自慰%2次.";
const StatusRecordMasturbateTCH = "私は%1回オナニーをした。男達にオナニーを目撃されたのは%2回目。";
const StatusRecordMasturbateSlutSCH = "人家只自慰过%1回♥但看过其他男人对着我打过%2次手枪♥";
const StatusRecordMasturbateSlutTCH = "色んな場所で%1回もオナって来たわ♥その内の%2回はオトコ達にちゃんと見て貰ったの♥";
const StatusRecordSexPartnersSCH = "和%1个男人有过肉体关系.";
const StatusRecordSexPartnersTCH = "私と性的な関係がある男は%1人。";
const StatusRecordSexPartnersSlutSCH = "能和我做过各种色色事情的男人总共只有%1人哟♥";
const StatusRecordSexPartnersSlutTCH = "私とエロいコトした男は全部で%1人もいるのよ♥";
const StatusRecordHandjobSCH = "为%2个不同的人手淫过，总计%1次.";
const StatusRecordHandjobTCH = "私が手コキしたチンポは%2本。合計で%1回手コキした。";
const StatusRecordHandjobSlutSCH = "用我的纤纤玉手，给%2根不同的大肉棒总共只手淫过%1次♥ 大家的大肉棒都在我的手里得到了慰藉♥♥";
const StatusRecordHandjobSlutTCH = "私がシコったチンポは%2本♥全部で%1回もチンコキしてあげちゃった♥";
const StatusRecordBlowjobSCH = "为%2个不同的人口交过，总计%1次.";
const StatusRecordBlowjobTCH = "私がしゃぶったチンポは%2本。合計で%1回フェラチオをした。";
const StatusRecordBlowjobSlutSCH = "用我的下流小嘴，给%2根不同的大肉棒总共只口交过%1次♥ 每根肉棒的滋味都不一样，但都很好吃♥♥";
const StatusRecordBlowjobSlutTCH = "私がしゃぶり尽くしたチンポは%2本♥全部で%1回もチンしゃぶを味わってるわ♥";
const StatusRecordTittyFuckSCH = "为%2个不同的人乳交过，总计%1次.";
const StatusRecordTittyFuckTCH = "私がおっぱいで挟んだチンポは%2本。合計で%1回パイズリをした。";
const StatusRecordTittyFuckSlutSCH = "用我的淫荡巨乳，给%2根不同的大肉棒总共只乳交过%1次♥ 大家都在我的乳沟里释放了超多的精液♥♥";
const StatusRecordTittyFuckSlutTCH = "私の淫乱おっぱいで気持ち良くしてあげたチンポは%2本♥全部で%1回もパイコキして来たのね♥";
const StatusRecordFootjobSCH = "为%2个不同的人足交过，总计%1次.";
const StatusRecordFootjobTCH = "私が足でシゴいたチンポは%2本。合計で%1回足コキをした。";
const StatusRecordFootjobSlutSCH = "用我的纤纤玉足，给%2根不同的大肉棒总共只足交过%1次♥ 用脚调教肉棒真是太有趣了♥♥";
const StatusRecordFootjobSlutTCH = "私に足でシコられたチンポは%2本♥全部で%1回もチンポを踏みまくってやったわ♥";
const StatusRecordRimjobSCH = "舔过%2个不同的人的肛门，总计%1次.";
const StatusRecordRimjobTCH = "私がアナルを舐めた男は%2人。合計で%1回ケツ舐めをした。";
const StatusRecordRimjobSlutSCH = "用我的淫乱舌头，只品尝过%2个不同的菊穴共计%1次♥ 慢慢地也爱上了菊穴的滋味♥♥";
const StatusRecordRimjobSlutTCH = "私にケツ穴を舐めさせてくれた殿方は%2人♥全部で%1回もケツフェラさせて頂いたわ♥";
const StatusRecordCunniSCH = "被%2个不同的人舔过小穴，总计%1次.";
const StatusRecordCunniTCH = "私をクンニした男は%2人。合計で%1回マンコを舐められている。";
const StatusRecordCunniSlutSCH = "被%2位欲求不满的男人舔过我的小穴仅%2次♥ 大家好像都很喜欢我淫水的味道♥♥";
const StatusRecordCunniSlutTCH = "私のエロエロ欲求不マンコを舐めたオトコは%2人♥全部で%1回も私のマン汁を味わってくれたのね♥";
const StatusRecordSpankedSCH = "屁股被%2个不同的人打了%1次.";
const StatusRecordSpankedTCH = "私をスパンキングした男は%2人。合計で%1回ケツを叩かれている。";
const StatusRecordSpankedSlutSCH = "我的诱人丰臀，被%2位不同的男人打了共计仅%2次♥ 每次打屁股的响声和我的淫叫都能响彻监狱♥♥";
const StatusRecordSpankedSlutTCH = "私のエロケツを叩いてくれた紳士は%2人♥全部で%1回もケツにお仕置きして貰ってるの♥";
const StatusRecordPussySexSCH = "小穴被%2个不同的人干过总计%1次.";
const StatusRecordPussySexTCH = "私とセックスした男は%2人。合計%1回マンコファックしている。";
const StatusRecordPussySexSlutSCH = "我的淫乱小穴才被%2根大鸡巴狠狠地干过%2次♥每根大鸡巴都在小穴深处被刺激得一跳一跳的，感觉很开心呢♥♥";
const StatusRecordPussySexSlutTCH = "私の淫乱マンコにチンポをハメたオトコは%2人♥全部で%1回もマン奥で勃起チンポを楽しんで来たのね♥♥";
const StatusRecordAnalSexSCH = "肛门被%2个不同的人干过总计%1次.";
const StatusRecordAnalSexTCH = "私とアナルセックスした男は%2人。合計%1回アナルファックしている。";
const StatusRecordAnalSexSlutSCH = "我的变态菊穴才被%2根大鸡巴狠狠地干过%2次♥每次菊穴都被干得抽搐停不下来呢♥♥";
const StatusRecordAnalSexSlutTCH = "私の変態ケツマンコとパコッたオトコは%2人♥全部で%1回もケツ穴にチンポを出し挿れして喜んじゃった♥♥";
const StatusRecordGangbangSCH = "被男人们二穴插入过%1次，被轮奸过%2次.";
const StatusRecordGangbangTCH = "私と男達との二穴ファックは%1回で、輪姦セックスは%2回目。";
const StatusRecordGangbangSlutSCH = "和%2位不同的男人进行过%2次大乱交♥ 前后两个淫穴都被大鸡巴插入，双倍的快感呢♥♥";
const StatusRecordGangbangSlutTCH = "２つのエロ穴にチンポをハメて来てかれこれ%1回目♥複数のオトコとの乱交で数えるともう%2回目になるわね♥♥";
const StatusRecordOrgasmSCH = "在%2个不同的人面前绝顶过%1次, 淫液总共流了%3ml.";
const StatusRecordOrgasmTCH = "私がイカせた男は%2人。全部で%1回チンポを射精させている。その合計ザーメン量は%3ml。";
const StatusRecordOrgasmSlutSCH = "在%2位不同的男人面前激烈高潮过总计%1次♥ 淫水总共喷出了%3ml♥♥";
const StatusRecordOrgasmSlutTCH = "私でイッちゃったオトコは%2人♥勃起チンポで数えると全部で%1本♥ザーメンはトータル%3mlで大量ね♥♥";
const StatusRecordSwallowSCH = "从%2根不同的肉棒那里喝过精液，总计吞精%1次，吞下精液%3 ml。";
const StatusRecordSwallowTCH = "私がザーメンを飲んだチンポは%2本。全部で%1回精飲している。その合計ごっくん量は%3ml。";
const StatusRecordSwallowSlutSCH = "喝下了%2根大肉棒射出的%3ml精液，总计吞精%1回♥ 迦南监狱的每根大肉棒都能射出大量美味的精液呢♥♥";
const StatusRecordSwallowSlutTCH = "チンポミルクを飲み干したチンポは%2本♥%1回ごっくんした内、トータルで%3mlも美味しく味わって来たのね♥♥";
const StatusRecordPussyCreampieSCH = "被%2个不同的男人中出%1次，小穴被内射了总共%3ml的精液.";
const StatusRecordPussyCreampieTCH = "私のマンコに中出しした男は%2人。全部で%1回膣内射精されている。合計%3mlのザーメンが膣を満たした。";
const StatusRecordPussyCreampieSlutSCH = "淫穴被%2根大鸡巴合计中出了%1次♥ 总共有%3ml的精液被射进了子宫♥ 子宫被灌得满满的要流出来了♥♥♥";
const StatusRecordPussyCreampieSlutTCH = "私の欲情マンコに中出ししたオトコは%2人♥膣奥に%1回も排泄されたチンポ汁は全部で%3mlになるわ♥♥♥";
const StatusRecordAnalCreampieSCH = "被%2个不同的男人爆菊并中出了%1次，直肠被内射了总共%3ml的精液.";
const StatusRecordAnalCreampieTCH = "私のアナルに中出しした男は%2人。全部で%1回腸内射精されている。合計%3mlのザーメンがお腹を満たした。";
const StatusRecordAnalCreampieSlutSCH = "我的中出专用菊穴被%2根大肉棒中出了%1次，合计%3ml的精液被射入了菊穴♥ 大家毫不在意射进了错误的穴呢♥";
const StatusRecordAnalCreampieSlutTCH = "私のチンコキ専用アナルで中出ししたオトコは%2人♥♥%1回も腸奥に放出されて、気が付けばもう%3mlね♥♥♥";

const StatusRecordFingersSuckedSCH = "吮吸了%2个不同男人的手指，共%1次.";
const StatusRecordFingersSuckedTCH = "私が指をしゃぶった男は%2人。合計%1回おしゃぶりしている。";
const StatusRecordFingersSuckedSlutSCH = "把%2位不同男人的手指当成肉棒高速真空口交了才%1次♥";
const StatusRecordFingersSuckedSlutTCH = "私に指をしゃぶらせてくれたオトコは%2人♥全部で%1回もチンポみたいに舐め回してるの♥";
const StatusRecordBukkakeSCH = "被%2个不同的人射在身上了%1次，共计被射了%3毫升的精液.";
const StatusRecordBukkakeTCH = "私にぶっかけた男は%2人。全部で%1回ぶっかけられている。その合計ザーメン量は%3ml。";
const StatusRecordBukkakeSlutSCH = "被%2位不同的男人射在身上了%1次♥ 共计洗了%3ml的精液浴♥♥";
const StatusRecordBukkakeSlutTCH = "私をトイレみたいにぶっかけてくれたオトコは%2人♥%1回も浴びて来たザーメンシャワーは全部で%3mlよ♥";
const StatusRecordFaceBukkakeSCH = "被%2个不同的人颜射了%1次，共计被颜射了%3毫升的精液.";
const StatusRecordFaceBukkakeTCH = "私の顔にぶっかけした男は%2人。全部で%1回顔射されている。その合計ザーメン量は%3ml。";
const StatusRecordFaceBukkakeSlutSCH = "被%2位不同的男人颜射了%1次，我的脸蛋已经接住了共计%3ml的温暖精液♥ 成为了名副其实的精液便器♥♥";
const StatusRecordFaceBukkakeSlutTCH = "私のお顔めがけてチンポ射精してくれたオトコは%2人♥%1回も顔面便器になって浴びた汁は全部で%3mlなの♥";

//StatusBattleEffectはステータスメニューの「状態」に書いてる
const StatusBattleEffectOrgasmSCH = "卡琳\\C[5]高潮了\\C[0]! 她正翻着白眼无法动弹!";
const StatusBattleEffectOrgasmTCH = "【快楽：\\C[5]絶頂中！\\C[0]】今は何も出来ない！";
const StatusBattleEffectCoolSCH = "卡琳处于\\C[4]冷静沉着\\C[0]的状态！\n命中率，回避率，暴击率，暴击闪避率，体力恢复率上升少许";
const StatusBattleEffectCoolTCH = "【感情：\\C[4]冷静沈着①\\C[0]】命中力、回避力、クリティカル率、クリティカル回避率が少しアップ。\n【感情：\\C[4]冷静沈着②\\C[0]】全ての回復量が少しアップ。";
const StatusBattleEffectIsHornyZeroSCH = "卡琳\\C[18]发情了\\C[0]! 她对所有性攻击的耐性降低了.";
const StatusBattleEffectIsHornyZeroTCH = "【快楽：\\C[18]興奮中！\\C[0]】全てのセクハラ耐性がダウン。";
const StatusBattleEffectIsHornyOneSCH = "卡琳\\C[18]发情了\\C[0]! 她对所有性攻击的耐性降低了, 全性欲每回合上升少许.";
const StatusBattleEffectIsHornyOneTCH = "【快楽：\\C[18]興奮中！\\C[0]】全てのセクハラ耐性がダウン。全ての性欲が少しづつ上昇中【毎ターン】";
const StatusBattleEffectIsHornyTwoSCH = "卡琳\\C[18]发情了\\C[0]! 她对所有性攻击的耐性降低了,\n全性欲每回合上升少许，抑制性欲意志花费上升.";
const StatusBattleEffectIsHornyTwoTCH = "【快楽：\\C[18]興奮中！①\\C[0]】全てのセクハラ耐性がダウン。抑制スキルのコストがアップ【毎ターン】\n【快楽：\\C[18]興奮中！②\\C[0]】全ての性欲が少しづつ上昇中【毎ターン】";
const StatusBattleEffectIsHornyThreeSCH = "卡琳\\C[18]发情了\\C[0]! 她对所有性攻击的耐性·回避率·命中率降低了,\n全性欲每回合上升少许，抑制性欲意志花费上升.";
const StatusBattleEffectIsHornyThreeTCH = "【快楽：\\C[18]興奮中！①\\C[0]】回避力、命中力、全てのセクハラ耐性がダウン。抑制スキルのコストがアップ【毎ターン】\n【快楽：\\C[18]興奮中！②\\C[0]】全ての性欲が少しづつ上昇中【毎ターン】";
const StatusBattleEffectIsArousedSCH = "卡琳\\C[27]想要了\\C[0]! 她的阴道将每回合慢慢 \\C[23]变湿\\C[0].";
const StatusBattleEffectIsArousedTCH = "【快楽：\\C[27]発情中！\\C[0]】マンコがゆっくりと\\C[23]濡れていく\\C[0]【毎ターン】";
const StatusBattleEffectNotArousedSCH = "卡琳现在没有发情. 在她发情之前小穴不会变湿.";
const StatusBattleEffectNotArousedTCH = "【快楽：発情していない】マンコは濡れていない。";
const StatusBattleEffectIsWetSCH = "卡琳已经\\C[23]湿了\\C[0]! 现在小穴可以被插入了.";
const StatusBattleEffectIsWetTCH = "【マンコ：\\C[23]濡れている！\\C[0]】挿入可能。";
const StatusBattleEffectNotWetSCH = "卡琳的小穴没有湿. 现在还不能被插入。";
const StatusBattleEffectNotWetTCH = "【マンコ：濡れていない】挿入不可。";
const StatusBattleEffectIsWearingPantiesSCH = "卡琳穿着内裤。只有她的制服被重度破坏后，卡琳的下体才会暴露给敌人";
const StatusBattleEffectIsWearingPantiesTCH = "【パンティ：履いている】服を脱がされない限り下半身への接触は守られる。";
const StatusBattleEffectIsNotWearingPantiesSCH = "卡琳\\C[27]没有穿内裤\\C[0]！只要她的制服被轻度破坏，卡琳的下体就会暴露给敌人";
const StatusBattleEffectIsNotWearingPantiesTCH = "【パンティ：\\C[27]履いてない！\\C[0]】服を脱がされれば下半身への接触を許してしまう。";
const StatusBattleEffectIsVirginPublishedSCH = "卡琳是一名\\C[27]处女\\C[0]! 战斗中的魅力提升.";
const StatusBattleEffectIsVirginPublishedTCH = "【性体験の情報：\\C[27]処女だと知られてしまっている！\\C[0]】バトル中は魅力アップ。";
const StatusBattleEffectIsVirginHighSCH = "卡琳被认为是一名\\C[27]处女\\C[0]! 战斗中的魅力提升.";
const StatusBattleEffectIsVirginHighTCH = "【性体験の情報：\\C[27]処女の噂が広がっている！\\C[0]】バトル中は魅力アップ。";
const StatusBattleEffectIsVirginMedSCH = "卡琳被怀疑是一名\\C[27]处女\\C[0]! 战斗中的魅力少量提升.";
const StatusBattleEffectIsVirginMedTCH = "【性体験の情報：\\C[27]処女疑惑を持たれ始めている！\\C[0]】バトル中は魅力が少しアップ。";
const StatusBattleEffectIsVirginLowSCH = "卡琳依然是是一名\\C[27]处女\\C[0] 但没人相信她是！战斗中的魅力不受影响.";
const StatusBattleEffectIsVirginLowTCH = "【性体験の情報：\\C[27]まだ未経験だと誰にも知られていない\\C[0]】魅力に影響なし。";

const StatusBattleEffectIsConfidentZeroSCH = "卡琳感到\\C[30]自信满满\\C[0]! 全属性上升!";
const StatusBattleEffectIsConfidentZeroTCH = "【感情：\\C[30]自信満々！\\C[0]】全ステータスアップ！";
const StatusBattleEffectIsConfidentOneSCH = "卡琳感到\\C[30]自信满满\\C[0]! 所有属性根据勇气值上升!";
const StatusBattleEffectIsConfidentOneTCH = "【感情：\\C[30]自信満々！\\C[0]】全ステータスが大胆さによってアップ！";

const StatusBattleEffectIsFrustratedSCH = "卡琳处于\\C[18]性紧张\\C[0]状态! 她的攻击上升，但是防御·敏捷·命中·暴击闪避率下降了！";
const StatusBattleEffectIsFrustratedTCH = "【感情：\\C[18]ムラムラしている！\\C[0]】攻撃力アップと引き換えに、防御力・素早さ・命中力・クリティカル回避率ダウン！";

const StatusBattleEffectDisarmedSCH = "卡琳的武器被 \\C[18]解除\\C[0]了! 她需要靠近武器并重新装备.";
const StatusBattleEffectDisarmedTCH = "【武装：\\C[18]なし\\C[0]】ハルバードを拾い上げて再武装が必要。";
const StatusBattleEffectDefiledHalberdSCH = "卡琳的\\C[18]武器沾满了精液\\C[0]! 在回到休息室或办公室保养前无法再次装备.";
const StatusBattleEffectDefiledHalberdTCH = "【武装：\\C[18]不可\\C[0]】ハルバードが汚されていて武装出来ない。【ベッドで休む必要あり】";
const StatusBattleEffectOffBalancedSCH = "卡琳失去了\\C[18]平衡\\C[0]! 她的攻击，防御，闪避率下降.";
const StatusBattleEffectOffBalancedTCH = "【状態：\\C[18]バランス崩壊\\C[0]】攻撃力、防御力、回避力ダウン。";
const StatusBattleEffectWeakenSCH = "卡琳处于\\C[18]虚弱状态\\C[0]! 力量和攻击下降.";
const StatusBattleEffectWeakenTCH = "【状態：\\C[18]脱力\\C[0]】腕力、攻撃力ダウン。";
const StatusBattleEffectDizzySCH = "卡琳感到\\C[18]头晕目眩\\C[0]! 命中率和闪避率下降.";
const StatusBattleEffectDizzyTCH = "【状態：\\C[18]めまい\\C[0]】命中力、回避力ダウン。";
const StatusBattleEffectSlowSCH = "卡琳中了\\C[18]减速\\C[0]! 敏捷大幅下降.";
const StatusBattleEffectSlowTCH = "【状態：\\C[18]スロー\\C[0]】素早さが大幅ダウン！";
const StatusBattleEffectVulnerableSCH = "卡琳现在很\\C[18]脆弱\\C[0]! 防御力降低.";
const StatusBattleEffectVulnerableTCH = "【状態：\\C[18]放心\\C[0]】防御力ダウン。";
const StatusBattleEffectPoisonSCH = "卡琳\\C[18]中毒\\C[0]了! 体力每回合慢慢减少.";
const StatusBattleEffectPoisonTCH = "【状態：\\C[18]毒\\C[0]】体力が減少していく【毎ターン】";
const StatusBattleEffectYetiHeatAuraOneSCH = "卡琳被雪人的\\C[18]热气光环\\C[0]影响了！体力恢复量大大减少！";
const StatusBattleEffectYetiHeatAuraOneTCH = "【状態：\\I[18]イエティの熱オーラ\\C[0]】体力回復量が大幅ダウン！";
const StatusBattleEffectYetiHeatAuraTwoSCH = "卡琳被雪人的\\C[18]热气光环\\C[0]影响了！体力和意志力恢复量大大减少！";
const StatusBattleEffectYetiHeatAuraTwoTCH = "【状態：\\I[18]イエティの熱オーラ\\C[0]】体力回復量、意志力回復量が大幅ダウン！";
const StatusBattleEffectExposeWeaknessSCH = "卡琳的\\C[18]弱点被暴露\\C[0]了！她的闪避·暴击闪避·全耐性下降了.";
const StatusBattleEffectExposeWeaknessTCH = "【状態：\\C[18]弱点バレ\\C[0]】回避力、クリティカル回避力、全ての耐性がダウン。";
const StatusBattleEffectAttackComboSCH = "卡琳已经\\C[2]连续%1次\\C[0]攻击了！下次攻击的伤害·命中·体力消耗上升.";
const StatusBattleEffectAttackComboTCH = "【攻撃コンボ：\\C[2]%1連続目\\C[0]】次の攻撃時にダメージ、命中力、スキルコストがアップ。";
const StatusBattleEffectAttackComboCockySCH = "攻击4次以上会增加\\C[30]勇气值\\C[0].";
const StatusBattleEffectAttackComboCockyTCH = "4回以上のコンボで大胆さアップ。";
const StatusBattleEffectSexComboOneSCH = "卡琳已经\\C[2]连续%1次\\C[0]使用性技了！下次的非爱抚类性技给予的快感和体力消耗上升.";
const StatusBattleEffectSexComboOneTCH = "【SEXコンボ：\\C[2]%1連続目\\C[0]】次の攻撃時に性スキルの快楽ダメージとスキルコストがアップ【愛撫は除く】";
const StatusBattleEffectSexComboTwoSCH = "对相同目标连续使用相同类型的非爱抚类性技，会大大提升性技给予目标的快感.";
const StatusBattleEffectSexComboTwoTCH = "更に同じ相手に同じ性スキルを連続使用で、快楽ダメージとスキルコストが大幅アップ【愛撫は除く】";

const StatusBattleEffectDanceComboSCH = "卡琳已经连续\\C[2]%1次\\C[0]使用脱衣舞技能了！下一次脱衣舞技能提升的快感和耗费的体力提升！";
const StatusBattleEffectDanceComboTCH = "【ダンスコンボ：\\C[2]%1連続目\\C[0]】次のダンススキルの快楽ダメージと体力コストがアップ。";


//Tooltipsは戦闘画面のステートTooltipに表示される
const StateTooltipsRemainingTurnsSingularSCH = "\\c[27](还剩1回合)\\c[0]";
const StateTooltipsRemainingTurnsSingularTCH = "\\c[27](残り1ターン)\\c[0]";
const StateTooltipsRemainingTurnsPluralSCH = "\\c[27](还剩%1回合)\\c[0]";
const StateTooltipsRemainingTurnsPluralTCH = "\\c[27](残り%1ターン)\\c[0]";

const StateTooltipsOrgasmSCH = "卡琳刚刚\\C[5]高潮\\C[0]了！\n现在什么也做不了！";
const StateTooltipsOrgasmTCH = "\\C[5]【絶頂中！】\\C[0]\n今は何も出来ない！";
const StateTooltipsSlashStanceSCH = "%1被\\C[4]突刺\\C[0]系克制\n但克制\\C[2]打击\\C[0]系";
const StateTooltipsSlashStanceTCH = "有効\\I[42]\\C[4]スラスト系\\C[0]\n耐久\\I[42]\\C[2]ストライク系\\C[0]";
const StateTooltipsPierceStanceSCH = "%1被\\C[2]打击\\C[0]系克制\n但克制\\C[3]斩击\\C[0]系";
const StateTooltipsPierceStanceTCH = "有効\\I[42]\\C[2]ストライク系\\C[0]\n耐久\\I[42]\\C[3]スラッシュ系\\C[0]";
const StateTooltipsBluntStanceSCH = "%1被\\C[3]斩击\\C[0]系克制\n但克制\\C[4]突刺\\C[0]系";
const StateTooltipsBluntStanceTCH = "有効\\I[42]\\C[3]スラッシュ系\\C[0]\n耐久\\I[42]\\C[4]スラスト系\\C[0]";
const StateTooltipsHornyZeroSCH = "卡琳\\C[18]发情了\\C[0]!\n全性耐性下降";
const StateTooltipsHornyZeroTCH = "\\C[18]【興奮中！】\\C[0]\n\\I[42]全てのセクハラ耐性 ダウン";
const StateTooltipsHornyOneSCH = "卡琳\\C[18]发情了\\C[0]!\n全性耐性下降\n全性欲每回合上升少许";
const StateTooltipsHornyOneTCH = "\\C[18]【興奮中！】\\C[0]\n\\I[42]全てのセクハラ耐性 ダウン\n\\I[40]全ての性欲 少しづつ上昇中\n（毎ターン）";
const StateTooltipsHornyTwoSCH = "卡琳\\C[18]发情了\\C[0]!\n全性耐性下降\n抑制欲望系技能消耗更多意志力\n全性欲每回合上升少许";
const StateTooltipsHornyTwoTCH = "\\C[18]【興奮中！】\\C[0]\n\\I[42]全てのセクハラ耐性 ダウン\n\\I[42]抑制スキルのコスト アップ\n\\I[40]全ての性欲 少しづつ上昇中\n（毎ターン）";
const StateTooltipsHornyThreeSCH = "卡琳\\C[18]发情了\\C[0]!\n全性耐性·闪避·命中下降\n抑制欲望系技能消耗更多意志力\n全性欲每回合上升少许";
const StateTooltipsHornyThreeTCH = "\\C[18]【興奮中！】\\C[0]\n\\I[42]回避力 ダウン\n\\I[42]命中力 ダウン\n\\I[42]全てのセクハラ耐性 ダウン\n\\I[42]抑制スキルのコスト アップ\n\\I[40]全ての性欲 少しづつ上昇中\n（毎ターン）";



const StateTooltipsEnemyHornySCH = "%1 处于\\C[18]性奋状态\\C[0]！\n行动力提升，攻击性降低\n魅力需求减少，射精量提升";
const StateTooltipsEnemyHornyTCH = "\\C[18]【興奮中！】\\C[0]\n\\I[42]判断力 アップ\n\\I[42]攻撃性 ダウン\n\\I[42]全ての耐性 ダウン\n\\I[42]魅力の必要値 ダウン\n\\I[40]射精量 アップ";

const StateTooltipsCoolSCH = "卡琳处于\\C[4]沉着冷静\\C[0]状态！\n命中·闪避·暴击率·暴击闪避率少量提升\n体力恢复率少量提升";
const StateTooltipsCoolTCH = "\\C[4]【冷静沈着】\\C[0]\n\\I[42]命中力 少しアップ\n\\I[42]回避力 少しアップ\n\\I[42]クリティカル率 少しアップ\n\\I[42]クリティカル回避率 少しアップ\n\\I[42]全ての回復量 少しアップ";

const StateTooltipsIsWetSCH = "卡琳\\C[23]湿了\\C[0]！\n现在小穴可以被插入了";
const StateTooltipsIsWetTCH = "\\C[23]【マンコが濡れている！】\n\\I[40]\\C[0]挿入可能";
const StateTooltipsNotWetSCH = "卡琳小穴是干的\n现在不能插入";
const StateTooltipsNotWetTCH = "【マンコは濡れていない】\n\\I[42]挿入不可";
const StateTooltipsWearingPantiesSCH = "卡琳穿着内裤\n她的衣服需要被扒开不少\n\\I[42]下半身才会暴露给对手";
const StateTooltipsWearingPantiesTCH = "【パンティを履いている】\n\\I[42]服を脱がされない限り下半身への接触は守られる";
const StateTooltipsNotWearingPantiesSCH = "卡琳没有\\C[27]穿内裤\\C[0]！ \n\\I[40]她的衣服只需要被扒开一点点，下半身就会暴露给对手";
const StateTooltipsNotWearingPantiesTCH = "\\C[27]【パンティを履いていない！】\\C[0]\n\\I[40]服を脱がされれば下半身への接触を許してしまう";
const StateTooltipsVirginPublishedSCH = "卡琳是一名\\C[27]处女\\C[0]！\n\\I[40]战斗中的魅力提升";
const StateTooltipsVirginPublishedTCH = "\\C[27]【処女の情報が公開されている！】\\C[0]\n\\I[40]魅力 増加中";
const StateTooltipsVirginHighSCH = "卡琳被认为是一名\\C[27]处女\\C[0]!\n\\I[40]战斗中的魅力提升";
const StateTooltipsVirginHighTCH = "\\C[27]【処女疑惑が広がっている！】\\C[0]\n\\I[40]魅力 増加中";
const StateTooltipsVirginMedSCH = "卡琳被怀疑是一名\\C[27]处女\\C[0]!\n\\I[40]战斗中的魅力小幅提升";
const StateTooltipsVirginMedTCH = "\\C[27]【処女かもと噂され始めている……】\\C[0]\n\\I[40]魅力 少し増加中";
const StateTooltipsVirginLowSCH = "卡琳依然是一名\\C[27]处女\\C[0]！但没有人相信！\n\\I[42]战斗中的魅力不受影响";
const StateTooltipsVirginLowTCH = "\\C[27]【処女バレしていない】\\C[0]\n\\I[42]魅力に影響なし";
const StateTooltipsConfidentZeroSCH = "卡琳感到\\C[30]自信\\C[0]!\n\\I[42]全属性提升！";
const StateTooltipsConfidentZeroTCH = "\\C[30]【自信満々！】\\C[0]\n\\I[42]全ステータス アップ";
const StateTooltipsConfidentOneSCH = "卡琳感到\\C[30]自信\\C[0]!\n\\I[42]全属性基于勇气值提升！";
const StateTooltipsConfidentOneTCH = "\\C[30]【自信満々！】\\C[0]\n\\I[42]全ステータス 大胆さによってアップ";
const StateTooltipsFrustratedSCH = "卡琳处于\\C[18]性紧张\\C[0]状态!\n\\I[42]攻击力提升\n\\I[42]防御·敏捷·命中·暴击闪避率下降";
const StateTooltipsFrustratedTCH = "\\C[18]【ムラムラしている！】\\C[0]\n\\I[42]攻撃力 アップ\n\\I[42]防御力 ダウン\n\\I[42]素早さ ダウン\n\\I[42]命中力 ダウン\n\\I[42]クリティカル回避率 ダウン";
const StateTooltipsDisarmedSCH = "卡琳被\\C[18]解除武器\\C[0]了！\n需要靠近武器才能重新拾起武器";
const StateTooltipsDisarmedTCH = "\\C[18]【武装なし】\\C[0]\nハルバードを拾って再武装が必要";
const StateTooltipsOffBalancedSCH = "%1 处于 \\C[18]失去平衡\\C[0]状态!\n\\I[42]攻击·防御·闪避率下降";
const StateTooltipsOffBalancedTCH = "\\C[18]【バランス崩壊】\\C[0]\n\\I[42]攻撃力 ダウン\n\\I[42]防御力 ダウン\n\\I[42]回避力 ダウン";
const StateTooltipsWeakenSCH = "%1 被 \\C[18]弱化\\C[0]了!\n\\I[42]力量·攻击下降";
const StateTooltipsWeakenTCH = "\\C[18]【脱力している！】\\C[0]\n\\I[42]腕力 ダウン\n\\I[42]攻撃力 ダウン";
const StateTooltipsDizzySCH = "%1 被 \\C[18]晕眩\\C[0]了!\n\\I[42]命中率·闪避率下降";
const StateTooltipsDizzyTCH = "\\C[18]【フラついている！】\\C[0]\n\\I[42]命中力 ダウン\n\\I[42]回避力 ダウン";
const StateTooltipsSlowSCH = "%1 被 \\C[18]减速\\C[0]了!\n\\I[42]敏捷大幅下降";
const StateTooltipsSlowTCH = "\\C[18]【鈍くなっている！】\\C[0]\n\\I[42]素早さ 大幅ダウン";
const StateTooltipsVulnerableSCH = "%1 处于 \\C[18]无法抵抗\\C[0]状态!\n\\I[42]防御力下降";
const StateTooltipsVulnerableTCH = "\\C[18]【放心している！】\\C[0]\n\\I[42]防御力 ダウン";
const StateTooltipsPoisonSCH = "%1 \\C[18]中毒\\C[0]了!\n\\I[42]体力每回合下降";
const StateTooltipsPoisonTCH = "\\C[18]【毒に侵されている！】\\C[0]\n\\I[42]体力 ダウン\n　（毎ターン）";
const StateTooltipsExposeWeaknessSCH = "卡琳的\\C[18]弱点暴露\\C[0]了!\n\\I[42]闪避·暴击闪避率下降\n\\I[42]全耐性下降";
const StateTooltipsExposeWeaknessTCH = "\\C[18]【弱点バレしている！】\\C[0]\n\\I[42]回避力 ダウン\n\\I[42]クリティカル回避力 ダウン\n\\I[42]全ての耐性 ダウン";
const StateTooltipsStunnedSCH = "%1 被 \\C[18]击晕\\C[0]了!\n本回合不可行动";
const StateTooltipsStunnedTCH = "\\C[18]【スタン状態！】\\C[0]\nこのターンは行動不可";
const StateTooltipsEnemyPoseMasterSCH = "体位操控者是\\I[12]%1\n※射精后体位可能会重置";
const StateTooltipsEnemyPoseMasterTCH = "ヤリ主\\I[29]%1\n※射精で体位リセットの可能性あり";
const StateTooltipsActorAttackComboSCH = "卡琳已经\\C[2]连续%1次\\C[0]攻击了!\n下次的攻击：\\I[42]伤害·命中·体力消耗上升";
const StateTooltipsActorAttackComboTCH = "\\C[2]【アタックコンボ！%1連続攻撃】\\C[0]\n次の攻撃で：\n\\I[42]ダメージ アップ\n\\I[42]命中力 アップ\n\\I[42]スキルコスト アップ";
const StateTooltipsActorAttackComboCockySCH = "卡琳已经\\C[2]连续%1次\\C[0]攻击了!\n下次的攻击：\\I[42]伤害·命中·体力消耗上升\n\\I[42]连续4次以上攻击会增长\\C[30]勇气值\\C[0].";
const StateTooltipsActorAttackComboCockyTCH = "\\C[2]【アタックコンボ！%1連続攻撃】\\C[0]\n\\I[42]ダメージ アップ\n\\I[42]命中力 アップ\n\\I[42]スキルコスト アップ\n\\I[42]4コンボ目で大胆さ アップ";
const StateTooltipsActorSexComboSCH = "卡琳已经\\C[2]连续%1次\\C[0]使用性技了!\n\\I[42]下次非爱抚类性技给予的快感提升\n\\I[42]对同一个目标使用同一类型的非爱抚类性技，给予的快感会大幅提升";
const StateTooltipsActorSexComboTCH = "\\C[2]【SEXコンボ！%1連続性行為】\\C[0]\n性スキル(愛撫以外)使用で：\n\\I[42]快楽ダメージ アップ\n\\I[42]スキルコスト アップ\n　\n同じ相手に同じ性スキル(愛撫以外)を連続使用で：\n\\I[42]快楽ダメージ大幅 アップ\n\\I[42]スキルコスト 大幅アップ";
const StateTooltipsEnemyPosePussySexSCH = "%1 正在操卡琳的淫穴！";
const StateTooltipsEnemyPosePussySexTCH = "マンコをファックしている！";
const StateTooltipsEnemyPoseCunnilingusSCH = "%1 正在舔卡琳的小穴！";
const StateTooltipsEnemyPoseCunnilingusTCH = "マンコをクンニしている！";
const StateTooltipsEnemyPoseAnalSexSCH = "%1 正在操卡琳的菊花！";
const StateTooltipsEnemyPoseAnalSexTCH = "アナルをファックしている！";
const StateTooltipsEnemyPosePaizuriSCH = "%1 正在操卡琳的巨乳！";
const StateTooltipsEnemyPosePaizuriTCH = "パイズリさせている！";
const StateTooltipsEnemyPoseHandjobSCH = "%1 正在被卡琳撸管！";
const StateTooltipsEnemyPoseHandjobTCH = "手コキさせている！";
const StateTooltipsEnemyPoseBlowjobSCH = "%1 正在被卡琳乳交！";
const StateTooltipsEnemyPoseBlowjobTCH = "フェラさせている！";
const StateTooltipsEnemyPoseFootjobSCH = "%1 正在被卡琳足交！";
const StateTooltipsEnemyPoseFootjobTCH = "足コキしてもらっている！";
const StateTooltipsEnemyPoseRimjobSCH = "%1 正在被卡琳舔肛！";
const StateTooltipsEnemyPoseRimjobTCH = "ケツ舐めさせている！";
const StateTooltipsEnemyKissedSCH = "%1 被卡琳吻了！\n\\I[42]攻击·命中·闪避率下降";
const StateTooltipsEnemyKissedTCH = "キスされてデレデレ！\n\\I[42]攻撃力 ダウン\n\\I[42]命中力 ダウン\n\\I[42]回避力 ダウン";
const StateTooltipsArousedSCH = "卡琳\\C[27]性奋\\C[0]了!\n小穴会每回合逐渐 \\C[23]变湿\\C[0]";
const StateTooltipsArousedTCH = "\\C[27]【発情中！】\\C[0]\n\\I[40]\\C[23]マンコがゆっくり濡れていく\\C[0]\n（毎ターン）";
const StateTooltipsCautiousStanceSCH = "【谨慎姿态】\\I[42]闪避率·暴击闪避率大幅提升";
const StateTooltipsCautiousStanceTCH = "【見抜きの構え】\n\\I[42]回避力 大幅アップ\n\\I[42]クリティカル回避率 大幅アップ";
const StateTooltipsDefensiveStanceSCH = "【防御姿态】\\I[42]免疫多种负面状态\n\\I[42]防御·减伤率大幅提升\n\\I[42]扒衣·爱抚耐性大幅提升";
const StateTooltipsDefensiveStanceTCH = "【守備の構え】\n\\I[42]様々なデバフを保護\n\\I[42]守備力 大幅アップ\n\\I[42]ダメージ軽減量 大幅アップ\n\\I[42]愛撫耐性 大幅アップ\n\\I[42]ストリップ耐性 大幅アップ";
const StateTooltipsCounterStanceSCH = "【反击姿态】\\I[42]反击率大幅提升\n\\I[42]最大反击数提升\n\\I[42]减伤率略微下降";
const StateTooltipsCounterStanceTCH = "【反撃の構え】\n\\I[42]カウンター率 大幅アップ\n\\I[42]カウンター最大数 アップ\n\\I[42]ダメージ軽減量 少しアップ";
const StateTooltipsSecretaryStanceSCH = "【秘书姿态】\\I[42]猥谈·视奸·爱抚·性交耐性大幅提升\n\\I[42]对敌造成的性快感提升";
const StateTooltipsSecretaryStanceTCH = "【秘書の構え】\n\\I[42]猥談耐性 大幅アップ\n\\I[42]視姦耐性 大幅アップ\n\\I[42]愛撫耐性 大幅アップ\n\\I[42]セックス耐性 大幅アップ\n\\I[42]敵への快楽ダメージ アップ";
const StateTooltipsLadyStanceSCH = "【淑女姿态】\\I[42]爱抚·性交耐性小幅提升\n\\I[42]战斗中魅力提升";
const StateTooltipsLadyStanceTCH = "【淑女の構え】\n\\I[42]愛撫耐性 少しアップ\n\\I[42]セックス耐性 少しアップ\n\\I[40]魅力 増加中";
const StateTooltipsPleasureStanceSCH = "【放纵姿态】\\I[40]卡琳正在放纵自己享受性爱♥";
const StateTooltipsPleasureStanceTCH = "【快楽の構え】\n\\I[40]快感を受け入れている！";
const StateTooltipsWillpowerKiOneSCH = "攻击力提升";
const StateTooltipsWillpowerKiOneTCH = "【チャージ】\n\\I[42]攻撃力 アップ";
const StateTooltipsWillpowerKiTwoSCH = "攻击力·暴击伤害提升";
const StateTooltipsWillpowerKiTwoTCH = "【チャージ】\n\\I[42]攻撃力 アップ\n\\I[42]クリティカルダメージ アップ";
const StateTooltipsWillpowerFocusOneSCH = "反击率提升";
const StateTooltipsWillpowerFocusOneTCH = "【フォーカス】\n\\I[42]カウンター率 アップ";
const StateTooltipsWillpowerFocusTwoSCH = "反击率·减伤率提升";
const StateTooltipsWillpowerFocusTwoTCH = "【フォーカス】\n\\I[42]カウンター率 アップ\n\\I[42]ダメージ軽減率 アップ";
const StateTooltipsWillpowerEyeOfTheMindOneSCH = "命中·闪避·暴击率提升";
const StateTooltipsWillpowerEyeOfTheMindOneTCH = "【マインドアイズ】\n\\I[42]命中力 アップ\n\\I[42]回避力 アップ\n\\I[42]クリティカル率 アップ";
const StateTooltipsWillpowerEyeOfTheMindTwoSCH = "命中·闪避·暴击伤害提升";
const StateTooltipsWillpowerEyeOfTheMindTwoTCH = "【マインドアイズ】\n\\I[42]命中力 アップ\n\\I[42]回避力 アップ\n\\I[42]クリティカル率 アップ\n\\I[42]クリティカルダメージ アップ";
const StateTooltipsWillpowerSeeNoEvilSCH = "视奸耐性提升";
const StateTooltipsWillpowerSeeNoEvilTCH = "【スコトーマ】\n\\I[42]視姦耐性 アップ";
const StateTooltipsWillpowerHearNoEvilSCH = "猥谈耐性提升";
const StateTooltipsWillpowerHearNoEvilTCH = "【マスキング】\n\\I[42]猥談耐性 アップ";
const StateTooltipsWillpowerRealityMarbleSCH = "魅力提升";
const StateTooltipsWillpowerRealityMarbleTCH = "【ゲシュタルト】\n\\I[40]魅力 増加中";
const StateTooltipsWillpowerResistOrgasmSCH = "【高潮抑制】卡琳正在抑制高潮！\n\\I[42]绝顶必需的快感提升";
const StateTooltipsWillpowerResistOrgasmTCH = "【絶頂抑制】\nイクのを我慢している！\n\\I[42]絶頂の必須快楽度 アップ";
const StateTooltipsWillpowerEdgingControlKarrynSCH = "【射精管理】卡琳正在实施射精管理！\n\\I[42]敌人射精所需的快感提升";
const StateTooltipsWillpowerEdgingControlKarrynTCH = "【射精管理】\nターゲットの射精を制御する！\n\\I[42]敵が射精に必須の快楽度 アップ";
const StateTooltipsWillpowerEdgingControlEnemySCH = "【射精管理】%1被卡琳实施了射精管理！\n\\I[42]射精所需的快感提升";
const StateTooltipsWillpowerEdgingControlEnemyTCH = "【射精管理】\n%1の射精を抑制中！\n\\I[42]敵が射精に必須の快楽度 アップ";
const StateTooltipsBonusPierceDamageSCH = "%1克制\\C[4]突刺\\C[0]攻击";
const StateTooltipsBonusPierceDamageTCH = "【ボーナスアタック\\I[42]\\C[4]スラスト系\\C[0]】";
const StateTooltipsBonusBluntDamageSCH = "%1克制\\C[2]打击\\C[0]攻击";
const StateTooltipsBonusBluntDamageTCH = "【ボーナスアタック\\I[42]\\C[2]ストライク系\\C[0]】";
const StateTooltipsBonusSlashDamageSCH = "%1克制\\C[3]斩击\\C[0]攻击";
const StateTooltipsBonusSlashDamageTCH = "【ボーナスアタック\\I[42]\\C[3]スラッシュ系\\C[0]】";
const StateTooltipsEjaculationStunnedSCH = "%1被\\C[18]击晕\\C[0]了!\n本回合无法行动\n性技耐性下降\n闪避·暴击闪避率下降";
const StateTooltipsEjaculationStunnedTCH = "\\C[18]【スタン状態！】\\C[0]\nこのターンは行動不可\n\\I[42]セクハラ耐性 アップ\n\\I[42]回避力 ダウン\n\\I[42]クリティカル回避率 ダウン";
const StateTooltipsSlimeRegenNormalSCH = "【再生能力】%1每回合自动恢复20%的体力";
const StateTooltipsSlimeRegenNormalTCH = "【再生能力】\n\\I[42]体力 20％回復\n（毎ターン）";
const StateTooltipsSlimeRegenFourthSCH = "【再生能力】%1每回合自动恢复5%的体力";
const StateTooltipsSlimeRegenFourthTCH = "【再生能力】\n\\I[42]体力 5％回復\n（毎ターン）";
const StateTooltipsOrcDefensivePresenceSCH = "%1的防御力提升了";
const StateTooltipsOrcDefensivePresenceTCH = "【オークの肉壁】\n\\I[42]防御力 アップ";
const StateTooltipsOrcCommandingPresenceOneSCH = "%1的攻击力/防御力/回避率上升";
const StateTooltipsOrcCommandingPresenceOneTCH = "【進撃のオーク】\n\\I[42]攻撃力＆防御力＆回避力 アップ";
const StateTooltipsOrcCommandingPresenceTwoSCH = "%1的防御力/回避率上升";
const StateTooltipsOrcCommandingPresenceTwoTCH = "【オークの肉壁】\n\\I[42]防御力＆回避力 アップ";
const StateTooltipsOrcCommandingPresenceThreeSCH = "%1的攻击力上升";
const StateTooltipsOrcCommandingPresenceThreeTCH = "【進撃のオーク】\n\\I[42]攻撃力 アップ";
const StateTooltipsOrcCommandingPresenceFourSCH = "%1的快感获得率上升";
const StateTooltipsOrcCommandingPresenceFourTCH = "【オークの豚汁】\n\\I[42]快楽度ダメージ アップ";
const StateTooltipsLizardmanRacialSCH = "%1和其他的蜥蜴人扎堆了！\n全属性提升";
const StateTooltipsLizardmanRacialTCH = "【群れるリザードマン】\n\\I[42]全ステータス アップ";
const StateTooltipsLizardmanRacialWeakSCH = "%1和其他蜥蜴人扎堆了！\n全属性小幅上升";
const StateTooltipsLizardmanRacialWeakTCH = "【群れるリザードマン】\n\\I[42]全ステータス 少しアップ";
const StateTooltipsYetiHeatAuraSCH = "%1的热气光环\n导致全员附加各种异常状态";
const StateTooltipsYetiHeatAuraTCH = "【熱オーラ放出中】\n\\I[42]全員に様々なデバフ";
const StateTooltipsYetiHeatAuraEnemyOneSCH = "%1被雪人的\\C[18]热气光环\\C[0]影响了！\n性技造成的快感下降";
const StateTooltipsYetiHeatAuraEnemyOneTCH = "\\C[18]【イエティの熱オーラ】\\C[0]\n\\I[40]カリンへの快楽度ダメージ ダウン";
const StateTooltipsYetiHeatAuraEnemyTwoSCH = "%1被雪人的\\C[18]热气光环\\C[0]影响了！\n性技造成的快感大大下降";
const StateTooltipsYetiHeatAuraEnemyTwoTCH = "\\C[18]【イエティの熱オーラ】\\C[0]\n\\I[40]カリンへの快楽度ダメージ 大幅ダウン";
const StateTooltipsYetiHeatAuraKarrynOneSCH = "卡琳被雪人的\\C[18]热气光环\\C[0]影响了！\n体力恢复率大大降低！";
const StateTooltipsYetiHeatAuraKarrynOneTCH = "\\C[18]【イエティの熱オーラ】\\C[0]\n\\I[42]体力回復量 大幅ダウン";
const StateTooltipsYetiHeatAuraKarrynTwoSCH = "卡琳被雪人的\\C[18]热气光环\\C[0]影响了！\n体力和意志力恢复率大大降低！";
const StateTooltipsYetiHeatAuraKarrynTwoTCH = "\\C[18]【イエティの熱オーラ】\\C[0]\n\\I[42]体力回復量＆意志力回復量 大幅ダウン";

const StateTooltipsYasuKiSCH = "%1的伤害增加了";
const StateTooltipsYasuKiTCH = "カリンへのダメージ アップ";
const StateTooltipsYasuFocusSCH = "%1的反击率增加了";
const StateTooltipsYasuFocusTCH = "反撃率 アップ";
const StateTooltipsYasuEyeoftheMindSCH = "%1的命中率，暴击率和暴击伤害增加了";
const StateTooltipsYasuEyeoftheMindTCH = "\\I[42]命中力 アップ\n\\I[42]クリティカル率 アップ\n\\I[42]クリティカルダメージ アップ";
const StateTooltipsEnemyDefensiveStanceSCH = "%1免受各种debuff的影响\n防御能力提升，伤害减免量提升";
const StateTooltipsEnemyDefensiveStanceTCH = "\\I[42]様々なデバフを保護\n\\I[42]守備力 アップ\n\\I[42]ダメージ軽減量 アップ";

const StateTooltipsKarrynClitToySCH = "【性玩具】粉红跳蛋\n\\I[40]贴在了阴蒂上！";
const StateTooltipsKarrynClitToyTCH = "【オモチャ】\nピンクローター\n\\I[40]クリに装着中！";
const StateTooltipsKarrynPussyToySCH = "【性玩具】假阴茎\n\\I[40]插进了阴道里！";
const StateTooltipsKarrynPussyToyTCH = "【オモチャ】\nディルド\n\\I[40]マンコに挿入中！";
const StateTooltipsKarrynAnalToySCH = "【性玩具】拉珠\n\\I[40]插进了菊穴里！";
const StateTooltipsKarrynAnalToyTCH = "【オモチャ】\nアナルビーズ\n\\I[40]ケツ穴に挿入中！";
const StateTooltipsEnemyClitToyPinkRotorSCH = "%1带着粉红跳蛋！";
const StateTooltipsEnemyClitToyPinkRotorTCH = "ピンクローターを持っている！";
const StateTooltipsEnemyPussyToyPenisDildoSCH = "%1带着假阴茎！";
const StateTooltipsEnemyPussyToyPenisDildoTCH = "ディルドを持っている！";
const StateTooltipsEnemyAnalToyAnalBeadsSCH = "%1带着拉珠！";
const StateTooltipsEnemyAnalToyAnalBeadsTCH = "アナルビーズを持っている！";
const StateTooltipsToiletPinkRotorSCH = "有人把粉红跳蛋留在厕所隔间了...";
const StateTooltipsToiletPinkRotorTCH = "ピンクローターが放置されている……";
const StateTooltipsToiletPenisDildoSCH = "有人把假阴茎留在厕所隔间了...";
const StateTooltipsToiletPenisDildoTCH = "ディルドが放置されている……";
const StateTooltipsToiletAnalBeadsSCH = "有人把拉珠留在厕所隔间了...";
const StateTooltipsToiletAnalBeadsTCH = "アナルビーズが放置されている……";
const StateWaitressNoAlcoholSCH = "【拒绝饮酒】卡琳拒绝\\C[2]饮酒要求\\C[0].\n意志力再生减半\n每次拒绝饮酒花费%1点意志力";
const StateWaitressNoAlcoholTCH = "\\C[2]【飲酒を拒否中】\\C[0]\n全ての飲み物を断っている\n\\I[42]飲み物を断るのに必要な意志力：%1\n\\I[42]飲み物を断った時は意志力回復量 大幅ダウン";
const StateWaitressDirtyMugsSingularSCH = "【待回收的大酒杯】\n1只";
const StateWaitressDirtyMugsSingularTCH = "【回収待ちのジョッキ】\n1杯";
const StateWaitressDirtyMugsPluralSCH = "【待回收的大酒杯】共%2只";
const StateWaitressDirtyMugsPluralTCH = "【回収待ちのジョッキ】\n%2杯";
const StateWaitressDirtyGlassesSingularSCH = "【待回收的玻璃杯】\n1只";
const StateWaitressDirtyGlassesSingularTCH = "【回収待ちのグラス】\n1杯";
const StateWaitressDirtyGlassesPluralSCH = "【待回收的玻璃杯】共%2只";
const StateWaitressDirtyGlassesPluralTCH = "【回収待ちのグラス】\n%2杯";
const StateWaitressAvailableMugsSingularSCH = "【可用的大酒杯】\n1只";
const StateWaitressAvailableMugsSingularTCH = "【キレイなジョッキ】\n1杯";
const StateWaitressAvailableMugsPluralSCH = "【可用的大酒杯】共%1只";
const StateWaitressAvailableMugsPluralTCH = "【キレイなジョッキ】\n%1杯";
const StateWaitressAvailableGlassesSingularSCH = "【可用的玻璃杯】\n1只";
const StateWaitressAvailableGlassesSingularTCH = "【キレイなグラス】\n1杯";
const StateWaitressAvailableGlassesPluralSCH = "【可用的玻璃杯】共%1只";
const StateWaitressAvailableGlassesPluralTCH = "【キレイなグラス】\n%1杯";
const StateWaitressKarrynLocationSCH = "【地点】卡琳处于%1";
const StateWaitressKarrynLocationTCH = "【現在の場所】\n%1";
const StateWaitressTableALocationSCH = "【地点】卡琳处于酒桌A";
const StateWaitressTableALocationTCH = "【現在のテーブル】\nＡ";
const StateWaitressTableBLocationSCH = "【地点】卡琳处于酒桌B";
const StateWaitressTableBLocationTCH = "【現在のテーブル】\nＢ";
const StateWaitressTableCLocationSCH = "【地点】卡琳处于酒桌C";
const StateWaitressTableCLocationTCH = "【現在のテーブル】\nＣ";
const StateWaitressTableDLocationSCH = "【地点】卡琳处于酒桌D";
const StateWaitressTableDLocationTCH = "【現在のテーブル】\nＤ";
const StateWaitressSleepingSCH = "【喝醉】此人已经喝醉了\n把他踢出酒吧！";
const StateWaitressSleepingTCH = "【泥酔中！】\n追い払うべき迷惑客";
const StateWaitressDrinkingDrinkSCH = "%1 正在喝 %2.";
const StateWaitressDrinkingDrinkTCH = "%2を飲んでいる";
const StateReceptionistVisitorUnknownBeforeSCH = "%1来访的目的不明";
const StateReceptionistVisitorUnknownBeforeTCH = "目的はまだ不明";
const StateReceptionistVisitorUnknownAfterSCH = "%1等待接待员叫号";
const StateReceptionistVisitorUnknownAfterTCH = "受付嬢の対応待ち";
const StateReceptionistVisitorWritingBeforeSCH = "%1持有未填写的申请书";
const StateReceptionistVisitorWritingBeforeTCH = "未記入の申込書を持っている";
const StateReceptionistVisitorWritingDuringSCH = "%1正在填写申请书";
const StateReceptionistVisitorWritingDuringTCH = "申込書に記入中……";
const StateReceptionistVisitorWritingAfterSCH = "%1持有已填写的申请书";
const StateReceptionistVisitorWritingAfterTCH = "記入済みの申込書を持っている";
const StateReceptionistVisitorPaperBeforeSCH = "%1有%2面的申请书需要处理";
const StateReceptionistVisitorPaperBeforeTCH = "%2ページある申込書を持っている";
const StateReceptionistVisitorPaperAfterSCH = "%1有%2的申请书已经被处理了";
const StateReceptionistVisitorPaperAfterTCH = "%2ページの申込書を記入中……";
const StateReceptionistVisitorTimeSCH = "%1的申请书已经处理完了\n允许%2分钟的会面时间";
const StateReceptionistVisitorTimeTCH = "申込書の処理が完了\n\\I[42]所有時間：%2分";
const StateReceptionistVisitorMovingSCH = "%1正在走向前台";
const StateReceptionistVisitorMovingTCH = "受付デスクに向かっている……";
const StateReceptionistVisitorSittingSCH = "%1坐下等待叫号中";
const StateReceptionistVisitorSittingTCH = "座って待機している";
const StateReceptionistVisitorLineSCH = "%1正在前台排队";
const StateReceptionistVisitorLineTCH = "並んで待機中";
const StateReceptionistVisitorDeskSCH = "%1站在卡琳的办公桌前";
const StateReceptionistVisitorDeskTCH = "カリンの前に立っている";

const StateStripperActorDanceComboSCH = "卡琳已经连续\\C[2]%1次\\C[0]使用了脱衣舞技能！\n下一次脱衣舞技能提升的快感和耗费的体力提升！";
const StateStripperActorDanceComboTCH = "【ダンスコンボ！%1連続目】\n次のダンススキル使用時：\n\\I[42]快楽ダメージ アップ\n\\I[42]体力コスト アップ";

const DesireTooltipsMouthIntroSCH = "【口欲】卡琳的性需求之一\n代表卡琳想要用嘴巴吮吸男人的身体\n并品尝他们各种体液的性欲";
const DesireTooltipsMouthIntroTCH = "\\C[1]【口欲】\\C[0]\n\\C[27]カリンの性感帯の１つ、クチの欲求。\\C[0]\nその舌は男のカラダのあらゆる部分を感じ、\n分泌される汁を味わい尽くしてしまう。\n何度もしゃぶり、体液を飲まされる事で\n口内から全身に渡って性衝動が溢れていく。";
const DesireTooltipsBoobsIntroSCH = "【乳欲】卡琳的性需求之一\n代表卡琳想要用乳房或者乳头\n去挤压揉搓硬物的性欲";
const DesireTooltipsBoobsIntroTCH = "\\C[1]【乳欲】\\C[0]\n\\C[27]カリンの性感帯の１つ、おっぱいの欲求。\\C[0]\n完璧に実った乳房は揉みしだかれる事を、\n硬く突起した乳首はイジり倒される事を望んでいる。\n胸への刺激は恋のようなドキドキを生み、\n強い性衝動へと駆られてしまう。";
const DesireTooltipsPussyIntroSCH = "【膣欲】卡琳的性需求之一\n代表卡琳想要阴蒂被玩弄\n小穴被巨大的异物抽插的性欲";
const DesireTooltipsPussyIntroTCH = "\\C[1]【膣欲】\\C[0]\n\\C[27]カリンの性感帯の１つ、マンコの欲求。\\C[0]\n誠実な生き方を貫いてきた性器にとって、\nクリと穴への刺激は強烈な興奮材料になる。\nあらゆる手段で濡らしほぐされた膣は、\n腹の奥から性衝動を昂ぶらせていく。";
const DesireTooltipsButtIntroSCH = "【尻欲】卡琳的性需求之一\n代表卡琳想要屁股被玩弄揉捏\n肛门被异物抽插的性欲";
const DesireTooltipsButtIntroTCH = "\\C[1]【尻欲】\\C[0]\n\\C[27]カリンの性感帯の１つ、ケツの欲求。\\C[0]\n誰もが振り返る自慢の巨尻は\n家畜のようにしつけられ、ホジられる事を望んでいる。\n呼び起こされたマゾヒズムは好奇心から\n性衝動を抑えられなくなってしまう。";
const DesireTooltipsCockIntroSCH = "【棒欲】卡琳的性需求之一\n代表卡琳对勃起肉棒的兴趣\n想要用五感去了解肉棒的情欲\n棒欲上升到一定程度时，卡琳会被肉棒的魅力所吸引\n并处于完全崩坏的性冲动状态";
const DesireTooltipsCockIntroTCH = "\\C[1]【棒欲】\\C[0]\n\\C[27]カリンの性感帯の１つ、チンポへの欲求。\\C[0]\n長らく持ち続けた勃起チンポへの興味は強く、\n五感を通してその全てを知りたがっている。\nチンポが持つ想像以上の魅力を知るたびに、\n性衝動のリミッターは完全に崩壊していく。";

const DesireTooltipsBodyDesireRequirementsUnknownSCH = "\\I[40] 50    \\I[41]   轻度爱抚\n\\I[40] 75    \\I[41]   重度爱抚\n\\I[40]100   \\I[41]   性交\n(默认性欲需求)";
const DesireTooltipsBodyDesireRequirementsUnknownTCH = "\\I[40]ソフト愛撫\\I[41]50\n\\I[40]ハード愛撫\\I[41]75\n\\I[40]セックス\\I[41]100\n （全てデフォルト値）";
const DesireTooltipsCockDesireRequirementsUnknownSCH = "\\I[40] 50    \\I[41]   手交\n\\I[40] 65    \\I[41]   侍奉\n\\I[40] 85    \\I[41]   插入\n(默认性欲需求)";
const DesireTooltipsCockDesireRequirementsUnknownTCH = "\\I[40]手コキ\\I[41]50\n\\I[40]挿入なしプレイ\\I[41]65\n\\I[40]挿入セックス\\I[41]85\n （全てデフォルト値）";
const DesireTooltipsDesireRequirementsKnownSCH = "性欲需求";
const DesireTooltipsDesireRequirementsKnownTCH = "";
const DesireTooltipsDesireRequirementsKnownFormatSCH = "";
const DesireTooltipsDesireRequirementsKnownFormatTCH = "\\I[40]\\C[27]%1\\I[41]\\C[0]%2";


const DesireTooltipsMouthDesireDebuffOneSCH = "\\I[56]\\C[2]口欲在50以上时\n\\C[0]寂寞的嘴唇会在攻击前大声地叫嚣出来\n命中率下降...";
const DesireTooltipsMouthDesireDebuffOneTCH = "\\I[56]口欲が50に達すると、\n\\I[0]口寂しさから気が散ってしまい\n\\I[0]\\C[2]攻撃が命中しにくくなる……。\\C[0]";
const DesireTooltipsMouthDesireDebuffTwoSCH = "\\I[56]\\C[2]口欲在100以上时\n\\C[0]频繁地舔着嘴唇仿佛想要吮吸点什么\n暴击伤害下降...";
const DesireTooltipsMouthDesireDebuffTwoTCH = "\\I[56]口欲が100に達すると、\n\\I[0]“何か”をしゃぶりたい気持ちが邪魔して\n\\I[0]\\c[2]クリティカルダメージが低下してしまう……。\\C[0]";

const DesireTooltipsBoobsDesireDebuffOneSCH = "\\I[56]\\C[2]乳欲在50以上时\n\\C[0]被勃起的乳头所干扰\n闪避率下降...";
const DesireTooltipsBoobsDesireDebuffOneTCH = "\\I[56]乳欲が50に達すると、\n\\I[0]ビンカンになっている乳首が気になって\n\\I[0]\\C[2]攻撃を避けにくくなってしまう……。\\C[0]";
const DesireTooltipsBoobsDesireDebuffTwoSCH = "\\I[56]\\C[2]乳欲在100以上时\n\\C[0]悸动的巨乳分散了注意力\n暴击率下降...";
const DesireTooltipsBoobsDesireDebuffTwoTCH = "\\I[56]乳欲が100に達すると、\n\\I[0]爆乳から誘惑フェロモンが漏れて\n\\I[0]\\C[2]クリティカルヒットは出づらくなっていく……。\\C[0]";

const DesireTooltipsPussyDesireDebuffOneSCH = "\\I[56]\\C[2]膣欲在50以上时\n\\C[0]小穴的欲望使卡琳浑身发热想要脱掉衣服\n扒衣耐性下降...";
const DesireTooltipsPussyDesireDebuffOneTCH = "\\I[56]膣欲が50に達すると、\n\\I[0]股間が火照ってカラダ全体の体温も増すため\n\\I[0]\\C[2]脱がされやすくなってしまう……。\\C[0]";
const DesireTooltipsPussyDesireDebuffTwoSCH = "\\I[56]\\C[2]膣欲在100以上时\n\\C[0]小穴想要被大肉棒插入使卡琳动作失去协调\n暴击闪避率下降... ";
const DesireTooltipsPussyDesireDebuffTwoTCH = "\\I[56]膣欲が100に達すると、\n\\I[0]マン奥の疼きを収めるのに夢中で\n\\I[0]\\C[2]クリティカルを避けづらくなる……。\\C[0]";

const DesireTooltipsButtDesireDebuffOneSCH = "\\I[56]\\C[2]尻欲在50以上时\n\\C[0]无意识地想要在男人面前露出丰满的屁股\n防御力下降...";
const DesireTooltipsButtDesireDebuffOneTCH = "\\I[56]尻欲が50に達すると、\n\\I[0]無意識にケツがオスを求め出し\n\\I[0]\\C[2]守備が疎かになってしまう……。\\C[0]";
const DesireTooltipsButtDesireDebuffTwoSCH = "\\I[56]\\C[2]尻欲在100以上时\n\\C[0]色色地引诱着男人来玩弄自己的屁股\n爱抚耐性下降...";
const DesireTooltipsButtDesireDebuffTwoTCH = "\\I[56]尻欲が100に達すると、\n\\I[0]飢えたエロ尻で男を誘ってしまい\n\\I[0]\\C[2]愛撫を受け入れやすくなる……。\\C[0]";

const DesireTooltipsCockDesireDebuffOneSCH = "\\I[56]\\C[2]棒欲在50以上时\n\\C[0]无意识地控制自己的力道，以防击中了宝贵的肉棒\n攻击力下降...";
const DesireTooltipsCockDesireDebuffOneTCH = "\\I[56]棒欲が50に達すると、\n\\I[0]男の股間に意識を持っていかれて\n\\I[0]\\C[2]攻撃するパワーが弱まってしまう……。\\C[0]";
const DesireTooltipsCockDesireDebuffTwoSCH = "\\I[56]\\C[2]棒欲在100以上时\n\\C[0]对大鸡巴涌起无尽的忠诚心，满脑子都想着要如何成为大肉棒的性奴\n性交耐性下降...";
const DesireTooltipsCockDesireDebuffTwoTCH = "\\I[56]棒欲が100に達すると、\n\\I[0]勃起チンポへの忠誠心が膨らんでしまい\n\\I[0]\\C[2]セックスへの抵抗は薄れていく……。\\C[0]";

const DesireTooltipsMouthDesireTopBuffSCH = "\\I[56]当口欲为全性欲最高时\n\\C[11]卡琳会用下流的舌技魅惑敌人\n\\C[0]导致他们防御力降低";
const DesireTooltipsMouthDesireTopBuffTCH = "\\I[56]性欲の中で口欲が最も高い時、\n\\I[0]卑猥に誘う舌先に魅了された敵は\n\\I[0]\\C[11]カリンからの攻撃に対し守備が甘くなる。\\C[0]";
const DesireTooltipsBoobsDesireTopBuffSCH = "\\I[56]当乳欲为全性欲最高时\n\\C[11]卡琳会故意用爆乳吸引敌人的视线\n\\C[0]导致他们闪避率降低";
const DesireTooltipsBoobsDesireTopBuffTCH = "\\I[56]性欲の中で乳欲が最も高い時、\n\\I[0]爆乳から視線を逸らせなくなった敵は\n\\I[0]\\C[11]カリンからの攻撃を避けにくくなる。\\C[0]";
const DesireTooltipsPussyDesireTopBuffSCH = "\\I[56]当膣欲为全性欲最高时\n\\C[11]卡琳的小穴会散发出淫荡的气息\n\\C[0]导致敌人每回合有几率进入性奋状态";
const DesireTooltipsPussyDesireTopBuffTCH = "\\I[56]性欲の中で膣欲が最も高い時、\n\\I[0]カリンの股間から放たれるフェロモンのせいで\n\\I[0]\\C[27]敵は毎ターン興奮する可能性がある。\\C[0]";
const DesireTooltipsButtDesireTopBuffSCH = "\\I[56]当尻欲为全性欲最高时\n\\C[11]卡琳会摇动丰满的巨臀削弱敌人的意志\n\\C[0]导致他们命中率降低";
const DesireTooltipsButtDesireTopBuffTCH = "\\I[56]性欲の中で尻欲が最も高い時、\n\\I[0]揺れるケツを追いかけるのに必死で\n\\I[0]\\C[11]敵はカリンに攻撃を当てにくくなる。\\C[0]";
const DesireTooltipsCockDesireTopBuffSCH = "\\I[56]当棒欲为全性欲最高时\n\\C[27]卡琳满脑子只有榨干每一根勃起的鸡巴的想法\n\\C[0]导致卡琳的棒欲获得率提升";
const DesireTooltipsCockDesireTopBuffTCH = "\\I[56]性欲の中で棒欲が最も高い時、\n\\I[0]頭の中は勃起チンポでいっぱいになり\n\\I[0]\\C[27]棒欲がどんどん上昇してしまう……。\\C[0]";

const VirginityTextSCH = "Sex Status";  //currently unused
const VirginityTextTCH = "セックスのステータス"; //currently unused
const VirginityYesSCH = "\\C[13]处女\\C[0]";
const VirginityYesTCH = "\\C[13]処女\\C[0]";
const VirginityNoSCH = "\\C[27]非处女\\C[0]";
const VirginityNoTCH = "\\C[27]非処女\\C[0]";
const VirginActorTextSCH = "First Time With:"; //currently unused
const VirginActorTextTCH = "初体験："; //currently unused
const VirginActorNoneSCH = "---------"; //currently unused
const VirginActorNoneTCH = "---------"; //currently unused

const ResistNameSCH = " 耐性";
const ResistNameTCH = "耐性";
const SafeModeSCH = "Safe Mode"; //currently unused
const SafeModeTCH = "Safe Mode"; //currently unused
const ReplayModeSCH = "Replay Mode"; //currently unused
const ReplayModeTCH = "Replay Mode"; //currently unused
const PixelMovementSCH = "Pixel Movement"; //currently unused
const PixelMovementTCH = "Pixel Movement"; //currently unused
const BattleLogSCH = "战斗记录"; 
const BattleLogTCH = "バックログ";
const BattleStatusSCH = "状态"; 
const BattleStatusTCH = "ステータス";
const EdictsSCH = "政策";
const EdictsTCH = "指令";
const EdictCostSCH = "政策花费";
const EdictCostTCH = "指令コスト";
const QuestLogSCH = "Radio"; //currently unused
const QuestLogTCH = "無線";//currently unused
const GlossarySCH = "Notes";//currently unused
const GlossaryTCH = "メモ";//currently unused
const PassiveObtainedOnSCH = "第%1日取得";
const PassiveObtainedOnTCH = "%1日目に取得";
const StaminaRecoverySCH = "\\C[11]%1的体力恢复了%2点!";
const StaminaRecoveryTCH = "\\C[11]%1の体力が%2回復！";
const EnergyRecoverySCH = "\\C[4]%1的精力恢复了%2点!";
const EnergyRecoveryTCH = "\\C[4]%1の精力が%2回復！";

const KarrynTauntMessageSCH = "卡琳挑衅敌人!";
const KarrynTauntMessageTCH = "カリンは挑発した！";
const KarrynFlauntMessageSCH = "卡琳用丰满的身材诱惑敌人!";
const KarrynFlauntMessageTCH = "カリンは自慢のボディで誘惑した！";

const AronCallLizardmanFailSCH = "然而、并没有人出现...!";
const AronCallLizardmanFailTCH = "しかし、誰も現れなかった……！";

const ActorGainPleasureSCH = "\\C[27]%1的高潮值上升了%2!";
const ActorGainPleasureTCH = "\\C[27]%1の快楽度が%2アップ！";
const ActorGainPleasure_SightSCH = "\\C[27]%1被下流的眼神盯着，高潮值上升了%2!";
const ActorGainPleasure_SightTCH = "\\C[27]%1は見られて快楽度が%2アップ！";
const ActorGainPleasure_ToySCH = "\\C[27]%1被性玩具玩弄着，高潮值上升了%2!";
const ActorGainPleasure_ToyTCH = "\\C[27]%1は装着されたオモチャで快楽度が%2アップ！";

const PleasurePercentTextSCH = "%";
const PleasurePercentTextTCH = "％";

const EnemyGainPleasure_Percent_SCH = "\\C[1]%1的射精感上升了%2!";
const EnemyGainPleasure_Percent_TCH = "\\C[1]%1の射精感が%2上昇！";
const EnemyGainPleasure_Value_SCH = "\\C[1]%1的射精感上升了%2!";
const EnemyGainPleasure_Value_TCH = "\\C[1]%1の射精感が%2上昇！";
const ActorSingleOrgasmSCH = "\\C[31]%1失去了%2点精力!";
const ActorSingleOrgasmTCH = "\\C[31]%1は精力を%2失った！";
const ActorMultipleOrgasmSCH = "\\C[1]%1连续%3回绝顶! \\C[31]%1失去了%2点精力!";
const ActorMultipleOrgasmTCH = "\\C[1]%1は%3回連続イッた！\\C[31]精力を%2失った！";

const EjaculatePussySCH = "\\C[27]%1在%2的小穴中\\C[1]射出了%3ml的精液!";
const EjaculatePussyTCH = "\\C[27]膣内\\C[0]に出されたザーメン量、\\C[1]%3ml\\C[0]！！";
const EjaculateAnalSCH = "\\C[27]%1在%2的肛门中\\C[1]射出了%3ml的精液!";
const EjaculateAnalTCH = "\\C[27]アナル\\C[0]に出されたザーメン量、\\C[1]%3ml\\C[0]！！";
const EjaculateMouthSCH = "\\C[27]%1在%2的嘴里\\C[1]射出了%3ml的精液!";
const EjaculateMouthTCH = "\\C[27]クチ\\C[0]に出されたザーメン量、\\C[1]%3ml\\C[0]！！";

const BukkakeFaceSCH = "\\C[27]%1在%2的脸上\\C[1]射出了%3ml的精液!";
const BukkakeFaceTCH = "\\C[27]顔\\C[0]に付いたザーメン量、\\C[1]%3ml\\C[0]！！";
const BukkakeBoobsSCH = "\\C[27]%1在%2的乳房上\\C[1]射出了%3ml的精液!";
const BukkakeBoobsTCH = "\\C[27]おっぱい\\C[0]に付いたザーメン量、\\C[1]%3ml\\C[0]！！";
const BukkakeArmsSCH = "\\C[27]%1在%2的手臂上\\C[1]射出了%3ml的精液!";
const BukkakeArmsTCH = "\\C[27]腕\\C[0]に付いたザーメン量、\\C[1]%3ml\\C[0]！！";
const BukkakeLegsSCH = "\\C[27]%1在%2的腿上\\C[1]射出了%3ml的精液!";
const BukkakeLegsTCH = "\\C[27]足\\C[0]に付いたザーメン量、\\C[1]%3ml\\C[0]！！";
const BukkakeButtSCH = "\\C[27]%1在%2的屁股上\\C[1]射出了%3ml的精液!";
const BukkakeButtTCH = "\\C[27]ケツ\\C[0]に付いたザーメン量、\\C[1]%3ml\\C[0]！！";

const ActorFirstKissMouthSCH = "\\C[18]卡琳失去了初吻!!!";
const ActorFirstKissMouthTCH = "\\C[18]カリンはファーストキスを奪われてしまった！！！";
const ActorFirstKissCockSCH = "\\C[18]糟了! 卡琳的初吻对象竟然是肉棒!!!";
const ActorFirstKissCockTCH = "\\C[18]なんと！カリンのファーストキスの相手はチンポの先っちょになってしまった！！！";
const ActorFirstKissAnusSCH = "\\C[18]糟了! 卡琳的初吻对象竟然是肛门!!!";
const ActorFirstKissAnusTCH = "\\C[18]なんと！カリンのファーストキスの相手はケツの穴になってしまった！！！";
const ActorLostPussyVirginitySCH = "\\C[18]卡琳失去了处女!!!!";
const ActorLostPussyVirginityTCH = "\\C[18]カリンは処女を失った！！！！！";
const ActorLostAnalVirginitySCH = "\\C[18]卡琳失去了肛门处女!!";
const ActorLostAnalVirginityTCH = "\\C[18]カリンはアナルの処女を失った！！！！！";

const InvasionNoiseLevelOneSCH = "\\C[8]外面好像有什么动静.";
const InvasionNoiseLevelOneTCH = "\\C[8]外で何やら物音がしているようだ……。";
const InvasionNoiseLevelTwoSCH = "\\C[7]好像能听到外面有人在走动.";
const InvasionNoiseLevelTwoTCH = "\\C[7]外からわずかに騒音が聞こえる…。";
const InvasionNoiseLevelThreeSCH = "\\C[2]隐约听到有人在外面说话.";
const InvasionNoiseLevelThreeTCH = "\\C[2]別の場所から話声が聞こえる。";
const InvasionNoiseLevelFourSCH = "\\C[10]附近有人在喧哗.";
const InvasionNoiseLevelFourTCH = "\\C[10]近くで騒ぎ声が聞こえる！";
const InvasionBattleStartSCH = "一群入侵者闯入了房间!";
const InvasionBattleStartTCH = "侵入者が現れた！！";

const MasturbateBattleTouchClitSCH = "卡琳开始揉搓阴蒂!";
const MasturbateBattleTouchClitTCH = "カリンはクリトリスを刺激し始めた！";
const MasturbateBattleTouchPussySCH = "卡琳开始抚摸阴唇!";
const MasturbateBattleTouchPussyTCH = "カリンはマンコを刺激し始めた！";
const MasturbateBattleTouchAnalSCH = "卡琳开始按摩肛门!";
const MasturbateBattleTouchAnalTCH = "カリンはアナルを刺激し始めた！";
const MasturbateBattleTouchBoobsSCH = "卡琳开始玩弄乳房!";
const MasturbateBattleTouchBoobsTCH = "カリンはおっぱいを揉みしだき始めた！";
const MasturbateBattleTouchNipplesSCH = "卡琳开始轻捏乳头!";
const MasturbateBattleTouchNipplesTCH = "カリンは乳首をつまんで刺激し始めた！";

const MasturbateBattleFingerPussySCH = "卡琳把手指伸入了阴道!";
const MasturbateBattleFingerPussyTCH = "カリンはマンコに指を挿れて出し入れを始めた！";
const MasturbateBattleFingerAnalSCH = "卡琳把手指伸入了肛门!";
const MasturbateBattleFingerAnalTCH = "カリンはアナルに指を挿れて出し入れを始めた！";

const MasturbateBattleSuckFingersSCH = "卡琳开始吮吸手指!";
const MasturbateBattleSuckFingersTCH = "カリンは指をしゃぶり始めた！";
const MasturbateBattleSuckNipplesSCH = "卡琳开始吮吸自己的乳头!";
const MasturbateBattleSuckNipplesTCH = "カリンは乳首をしゃぶり始めた！";

const SkillDescriptionNoValidTargetsSCH = "没有可使用的目标";
const SkillDescriptionNoValidTargetsTCH = "※使える相手がいません。";
const SkillDescriptionNotEnoughDesireSCH = "※性欲不足";
const SkillDescriptionNotEnoughDesireTCH = "※性欲が不足しています。";
const SkillDescriptionCantDoThisSCH = "现在无法使用";
const SkillDescriptionCantDoThisTCH = "※今はまだ使えません。";
const SkillDescriptionHandsBusySCH = "双手都被占用了";
const SkillDescriptionHandsBusyTCH = "※手の空きが必要です。";
const SkillDescriptionNotWetSCH = "小穴还不够湿润";
const SkillDescriptionNotWetTCH = "※濡れていないので出来ません。";

const TitleDescriptionFirstTimeTitleEquipSCH = "\\C[0]（该效果可通过装备后取得一次性效果）";
const TitleDescriptionFirstTimeTitleEquipTCH = "\\C[0](１度装備すれば効果を取得可能)";

const CharmEquipReqTextSCH = "魅力要求: ";
const CharmEquipReqTextTCH = "必要な魅力： ";
const GrowthRateTextSCH = " 成长度";
const GrowthRateTextTCH = "成長度";

const RemResultsVictorySCH = "胜利!";
const RemResultsVictoryTCH = "勝利！！";
const RemResultsDefeatSCH = "战败...";
const RemResultsDefeatTCH = "敗北した……";
const RemResultsAbortedSCH = "撤退...";
const RemResultsAbortedTCH = "撤退した……";
const RemResultsMasturbateBattleNoneSCH = "卡琳累坏了...";
const RemResultsMasturbateBattleNoneTCH = "カリンは疲れてしまった……";
const RemResultsMasturbateBattleSingleSCH = "卡琳绝顶了!";
const RemResultsMasturbateBattleSingleTCH = "カリンは満足した！！";
const RemResultsMasturbateBattlePluralSCH = "卡琳绝顶了%1次!";
const RemResultsMasturbateBattlePluralTCH = "カリンは%1回絶頂した！！！";
const RemResultsJobBattleEndSCH = "■ 打工时间结束 ■";
const RemResultsJobBattleEndTCH = "■ アルバイトタイム 終了 ■";
const RemResultsBitchEndBattleEndSCH = "ＨＡＰＰＹ　ＥＮＤ";
const RemResultsBitchEndBattleEndTCH = "ＨＡＰＰＹ　ＥＮＤ";
const RemResultsEndlessBattleNormalSCH = "【无尽监狱之战】WAVE %1达成";
const RemResultsEndlessBattleNormalTCH = "【果てしなきプリズンバトル】WAVE %1 達成";
const RemResultsEndlessBattleHellSCH = "【无尽地狱之战】WAVE %1达成";
const RemResultsEndlessBattleHellTCH = "【終わりなきヘルバトル】WAVE %1 達成";
const RemResultsGainedExpSCH = "获得经验值";
const RemResultsGainedExpTCH = "獲得経験値";
const RemResultsLevelUpSCH = "等级提升!";
const RemResultsLevelUpTCH = "レベルアップ！";
const RemResultsOrderIncreaseSCH = "\\I[408]\\C[11]秩序恢复了%1点!";
const RemResultsOrderIncreaseTCH = "\\I[408]\\C[11]秩序が%1上昇した！";
const RemResultsOrderDecreaseSCH = "\\I[409]\\C[10]秩序下降了%1点...";
const RemResultsOrderDecreaseTCH = "\\I[409]\\C[10]秩序が%1低下した……。";
const RemResultsFundingIncreaseSCH = "\\I[400]\\C[11]获得%1的资金!";
const RemResultsFundingIncreaseTCH = "\\I[400]\\C[11]資金が%1Ｇ増えた！";
const RemResultsFundingDecreaseSCH = "\\I[401]\\C[10]减少了%1的资金...";
const RemResultsFundingDecreaseTCH = "\\I[401]\\C[10]資金が%1Ｇ減った……。";
const RemResultsFatigueIncreaseSCH = "\\I[389]\\C[10]疲劳积蓄了%1%...";
const RemResultsFatigueIncreaseTCH = "\\I[389]\\C[10]疲労を%1％蓄積した……。";
const RemResultsFatigueDecreaseSCH = "\\I[388]\\C[11]疲劳减少了%1%!";
const RemResultsFatigueDecreaseTCH = "\\I[388]\\C[11]疲労が%1％減少した！";

const CockinessIncreasedTextSCH = "\\I[354]\\C[11]勇气值上升到了 %1%!";
const CockinessIncreasedTextTCH = "\\I[354]\\C[11]大胆さが%1％まで上昇した！";
const CockinessDecreasedTextSCH = "\\I[489]\\C[10]勇气值减少到了 %1%...";
const CockinessDecreasedTextTCH = "\\I[489]\\C[10]大胆さが%1％に減少した……。";
const CockinessResetSCH = "\\I[489]\\C[10]勇气值归零了...";
const CockinessResetTCH = "\\I[489]\\C[10]大胆さがリセットされた……。";
const CockinessMaxxedOutSCH = "\\I[354]\\C[11]勇气达到了100%!";
const CockinessMaxxedOutTCH = "\\I[354]\\C[11]大胆さが100％になった！";

const RemResultsSubduedWithAttackSCH = "\\I[74]\\C[11]用武力击退了 %1 人!";
const RemResultsSubduedWithAttackTCH = "\\I[74]\\C[11]%1人を撃退した！";
const RemResultsSubduedSexuallySCH = "\\I[43]\\C[27]用性技满足了 %1 人!";
const RemResultsSubduedSexuallyTCH = "\\I[43]\\C[27]%1人を性的に屈服させた！";
const RemResultsSubduedWithAttackAndSexuallySCH = "\\I[291]\\C[11]用武力击退了 %1 人、并且用性技满足了 \\C[27]%3 \\C[11]人!";
const RemResultsSubduedWithAttackAndSexuallyTCH = "\\I[291]\\C[11]%1人を撃退し、%3人は性的に屈服させた！";
const RemResultsKarrynOrgasmSingularSCH = "\\I[99]\\C[27]绝顶了1次!";
const RemResultsKarrynOrgasmSingularTCH = "\\I[99]\\C[27]1回だけ絶頂した！";
const RemResultsKarrynOrgasmPluralSCH = "\\I[99]\\C[27]绝顶了 %1 次!";
const RemResultsKarrynOrgasmPluralTCH = "\\I[99]\\C[27]%1回絶頂した！";
const RemResultsKarrynMasturbatedInBattleSingularSCH = "\\I[46]\\C[27]在战斗中自慰了1次!";
const RemResultsKarrynMasturbatedInBattleSingularTCH = "\\I[46]\\C[27]人前で1回だけオナニーした！";
const RemResultsKarrynMasturbatedInBattlePluralSCH = "\\I[46]\\C[27]在战斗中自慰了 %1 次!";
const RemResultsKarrynMasturbatedInBattlePluralTCH = "\\I[46]\\C[27]人前で%1回オナニーした！";
const RemResultsKarrynKissSCH = "\\I[288]\\C[27]和 %1 人接吻了!";
const RemResultsKarrynKissTCH = "\\I[288]\\C[27]%1人とキスした！";
const RemResultsKarrynHandjobSCH = "\\I[289]\\C[27]给 %1 人手交了!";
const RemResultsKarrynHandjobTCH = "\\I[289]\\C[27]%1人に手コキした！";
const RemResultsKarrynBlowjobSCH = "\\I[294]\\C[27]给 %1 人口交了!";
const RemResultsKarrynBlowjobTCH = "\\I[294]\\C[27]%1人にフェラした！";
const RemResultsKarrynTitjobSCH = "\\I[221]\\C[27]给 %1 人乳交了!";
const RemResultsKarrynTitjobTCH = "\\I[221]\\C[27]%1人にパイズリした！";
const RemResultsKarrynFootjobSCH = "\\I[219]\\C[27]给 %1 人足交了!";
const RemResultsKarrynFootjobTCH = "\\I[219]\\C[27]%1人に足コキした！";
const RemResultsKarrynRimjobSCH = "\\I[299]\\C[27]给 %1 人舔肛了!";
const RemResultsKarrynRimjobTCH = "\\I[299]\\C[27]%1人にケツ舐めした！";
const RemResultsKarrynVaginalSexSCH = "\\I[295]\\C[27]和 %1 人性交了!";
const RemResultsKarrynVaginalSexTCH = "\\I[295]\\C[27]%1人とマンコでセックスした！";
const RemResultsKarrynAnalSexSCH = "\\I[296]\\C[27]和 %1 人肛交了!";
const RemResultsKarrynAnalSexTCH = "\\I[296]\\C[27]%1人とアナルでセックスした！";


const RemParamLevelGainedSingularSCH = "\\C[16]%3%2等级提升了%1!";
const RemParamLevelGainedSingularTCH = "\\C[16]%3%2レベルが %1 上がった！";
const RemParamLevelGainedPluralSCH = "\\C[16]%3%2等级提升了%1!";
const RemParamLevelGainedPluralTCH = "\\C[16]%3%2レベルが %1 上がった！";

const RemWardenLevelRequireSingularSCH = "\\C[8]\\I[42]距离下次典狱长等级提升，还有%1的属性等级！";
const RemWardenLevelRequireSingularTCH = "\\C[8]\\I[25]次の看守レベルまで、あと%1のステータスレベル！";
const RemWardenLevelRequirePluralSCH = "\\C[8]\\I[42]距离下次典狱长等级提升，还有%1的属性等级！";
const RemWardenLevelRequirePluralTCH = "\\C[8]\\I[25]次の看守レベルまで、あと%1のステータスレベル！";
const RemWardenLevelUpSCH = "\\I[352]\\C[11]等级提升!!! \\C[0]%1达到了\\C[16]典狱长等级%2级\\C[0]!!";
const RemWardenLevelUpTCH = "\\I[352]\\C[11]レベルアップ！！\\C[16]%1は看守レベルが %2 になった！！";
const RemWardenLevelLimitReachedSCH = "\\I[353]\\C[8]%1 已经达到了典狱长等级上限并且不会获得更多属性等级了";
const RemWardenLevelLimitReachedTCH = "\\I[353]\\C[8]看守レベルが上限に達しているためこれ以上ステータスレベルを上げられない。";

const RemResultsPassivesTitleSCH = "新被动解锁!!";
const RemResultsPassivesTitleTCH = "新パッシブ解放！！";
const RemResultsTooManyPassivesUnlockedSCH = "\\C[8]\\I[25]另外还有%1个新被动一并解锁！";
const RemResultsTooManyPassivesUnlockedTCH = "\\C[8]\\I[25]その他%1パッシブ";

const RemDailyReportDayCountSCH = "\\#\\{\\{■ 报告书：第%1天 ■\\}\\}";
const RemDailyReportDayCountTCH = "\\#\\{\\{■ 報告書 ～%1日目～ ■\\}\\}";
const RemDailyReportAnarchyNoLimitSCH = "\\I[377]监狱的第%1层已经陷入\\C[7]暴乱状态\\C[0]%2天了";
const RemDailyReportAnarchyNoLimitTCH = "\\I[377]監獄レベル%1の\\C[7]無法状態\\C[0]を%2日間継続\\";
const RemDailyReportAnarchyLimitBefore_singularSCH = "\\I[377]监狱的第%1层已经陷入\\C[7]暴乱状态\\C[0]%2天了，再这样下去统治力可能会进一步降低！";
const RemDailyReportAnarchyLimitBefore_singularTCH = "\\I[377]監獄レベル%1の\\C[7]無法状態\\C[0]を%2日間継続 \\I[25]明日、統制力が更に減少するおそれあり";
const RemDailyReportAnarchyLimitBefore_pluralSCH = "\\I[377]监狱的第%1层已经陷入\\C[7]暴乱状态\\C[0]%2天了，%3天后统治力可能会进一步降低！";
const RemDailyReportAnarchyLimitBefore_pluralTCH = "\\I[377]監獄レベル%1の\\C[7]無法状態\\C[0]を%2日間継続 \\I[25]%3日後、統制力が更に減少する可能性あり";
const RemDailyReportAnarchyPastLimitSCH = "\\I[377]监狱的第%1层已经陷入\\C[7]暴乱状态\\C[0]%2天了，再这样下去统治力会降低\\C[18]-%3\\C[0]点！";
const RemDailyReportAnarchyPastLimitTCH = "\\I[377]監獄レベル%1の\\C[7]無法状態\\C[0]を%2日間継続 \\I[25]統制力：\\C[18]マイナス%3\\C[0]";
const RemDailyReportRiot_NewSCH = "\\I[407]监狱%1层开始 \\C[18]暴动\\C[0]了！！秩序降低了 \\C[18]%2\\C[0]点！";
const RemDailyReportRiot_NewTCH = "\\I[407]監獄レベル%1で\\C[18]暴動勃発\\C[0]!! \\I[25]秩序：\\C[18]マイナス%2\\C[0]";
const RemDailyReportRiot_OldSCH = "\\I[407]监狱%1层已经\\C[18]暴动\\C[0]%2天了！统治力降低了\\C[18]-%3\\C[0]点！";
const RemDailyReportRiot_OldTCH = "\\I[407]監獄レベル%1で\\C[18]暴動勃発\\C[0]!! \\I[25]統制力：更に\\C[18]マイナス%3\\C[0]";
const RemDailyReportOrderChange_PositiveSCH = "\\I[408]秩序上升到了%1点";
const RemDailyReportOrderChange_PositiveTCH = "\\I[408]秩序：%1に上昇";
const RemDailyReportOrderChange_NegativeSCH = "\\I[409]秩序降低到了%1点";
const RemDailyReportOrderChange_NegativeTCH = "\\I[409]秩序：%1に下落";
const RemDailyReportOrderChange_NeutralSCH = "\\I[408]秩序维持在了%1点";
const RemDailyReportOrderChange_NeutralTCH = "\\I[408]秩序：前日同様%1を維持";
const RemDailyReportFundingChange_PositiveSCH = "\\I[410]资金增长到了\\C[11]%1G\\C[0]";
const RemDailyReportFundingChange_PositiveTCH = "\\I[410]資金：\\C[11]プラス%1Ｇ\\C[0]";
const RemDailyReportFundingChange_NegativeSCH = "\\I[411]资金降低到了\\C[2]%1G\\C[0]";
const RemDailyReportFundingChange_NegativeTCH = "\\I[411]資金：\\C[2]マイナス%1Ｇ\\C[0]";
const RemDailyReportBankruptcySCH = "\\I[411]监狱正处于\\C[2]破产\\C[0]状态！！！统治力降低了\\C[18]-%1\\C[0]点！";
const RemDailyReportBankruptcyTCH = "\\I[411]資金：\\C[2]0Ｇ (破産) \\C[0]\\I[25]統制力：更に\\C[18]マイナス%1\\C[0]";
const RemDailyReportEdictPoints_SingularSCH = "\\I[364]本日可使用的政策点数：%1";
const RemDailyReportEdictPoints_SingularTCH = "\\I[364]本日の使用可能な指令値：%1";
const RemDailyReportEdictPoints_PluralSCH = "\\I[364]本日可使用的政策点数：%1";
const RemDailyReportEdictPoints_PluralTCH = "\\I[364]本日の使用可能な指令値：%1";
const RemDailyReportBarRep_AlmostDecaySCH = "\\I[188]酒吧的人气值\\C[8]回落\\C[0]了，去做女服务员兼职可以预防人气回落";
const RemDailyReportBarRep_AlmostDecayTCH = "\\I[188]酒場の評判：\\C[8]ガタ落ち\\C[0] \\I[24]ウェイトレスのバイトで対策可能";
const RemDailyReportBarRep_DecayedSCH = "\\I[188]\\C[8]酒吧的人气值降低了1点\\C[0]";
const RemDailyReportBarRep_DecayedTCH = "\\I[188]\\C[8]酒場の評判：マイナス1\\C[0]";
const RemDailyReportVisitorRep_AlmostDecaySCH = "\\I[159]接待中心的人气值\\C[8]回落\\C[0]了，去做女接待员兼职可以预防人气回落";
const RemDailyReportVisitorRep_AlmostDecayTCH = "\\I[159]面会人受付所の評判：\\C[8]ガタ落ち\\C[0] \\I[24]受付嬢のバイトで対策可能";
const RemDailyReportVisitorRep_DecayedSCH = "\\I[159]\\C[8]接待中心的人气值降低了1点\\C[0]";
const RemDailyReportVisitorRep_DecayedTCH = "\\I[159]\\C[8]面会人受付所の評判：マイナス1\\C[0]";
const RemDailyReportToiletRep_AlmostDecaySCH = "\\I[234]光荣洞的人气值\\C[8]回落\\C[0]了，去做肉便器兼职可以预防人气回落";
const RemDailyReportToiletRep_AlmostDecayTCH = "\\I[234]トイレの評判：\\C[8]ガタ落ち\\C[0] \\I[24]個室で休憩すると対策可能";
const RemDailyReportToiletRep_DecayedSCH = "\\I[234]\\C[8]光荣洞的人气值降低了1点\\C[0]";
const RemDailyReportToiletRep_DecayedTCH = "\\I[234]\\C[8]トイレの評判：マイナス1\\C[0]";
const RemDailyReportStripClubRep_AlmostDecaySCH = "\\I[21]脱衣舞俱乐部的人气值快要\\C[8]回落\\C[0]了，去当脱衣舞娘可以防止人气回落";
const RemDailyReportStripClubRep_AlmostDecayTCH = "\\I[21]ストリップクラブの評判：\\C[8]ガタ落ち\\C[0] \\I[24]ストリッパーのバイトで対策可能";
const RemDailyReportStripClubRep_DecayedSCH = "\\I[21]\\C[8]脱衣舞俱乐部的人气值降低了1点\\C[0]";
const RemDailyReportStripClubRep_DecayedTCH = "\\I[21]\\C[8]ストリップクラブの評判：マイナス1\\C[0]";
const RemDailyReportGymRep_AlmostDecaySCH = "\\I[159]健身房的人气值\\C[8]回落\\C[0]了。去健身房做陪练可以防止人气回落";
const RemDailyReportGymRep_AlmostDecayTCH = "\\I[159]ジムの評判：\\C[8]ガタ落ち\\C[0] \\I[24]トレーナーのバイトで対策可能";
const RemDailyReportGymRep_DecayedSCH = "\\I[159]\\C[8]健身房的人气值降低了1点\\C[0]";
const RemDailyReportGymRep_DecayedTCH = "\\I[159]\\C[8]ジムの評判：マイナス1\\C[0]";

const RemParamGainedStrengthSCH = "Strength increased by %1!"; //unused
const RemParamGainedStrengthTCH = "腕力が %1 上がった！"; //unused
const RemParamGainedStaminaSCH = "Stamina increased by %1!"; //unused
const RemParamGainedStaminaTCH = "体力が %1 上がった！"; //unused
const RemParamGainedEnergySCH = "Energy increased by %1!"; //unused
const RemParamGainedEnergyTCH = "精力が %1 上がった！"; //unused
const RemParamGainedDexteritySCH = "Dexterity increased by %1!"; //unused
const RemParamGainedDexterityTCH = "器用さが %1 上がった！"; //unused
const RemParamGainedAgilitySCH = "Agility increased by %1!"; //unused
const RemParamGainedAgilityTCH = "素早さが %1 上がった！"; //unused
const RemParamGainedEnduranceSCH = "Endurance increased by %1!"; //unused
const RemParamGainedEnduranceTCH = "忍耐力が %1 上がった！"; //unused
const RemParamGainedMindSCH = "Mind increased by %1!"; //unused
const RemParamGainedMindTCH = "マインドが %1 上がった！"; //unused
const RemParamGainedCharmSCH = "Charm increased by %1!"; //unused
const RemParamGainedCharmTCH = "魅力が %1 上がった！"; //unused

const RemExpEnemiesDefeatedSCH = "Enemies Defeated EXP"; //currently unused
const RemExpEnemiesDefeatedTCH = "【戦闘】熟練度"; //currently unused
const RemExpHalberdCombatSCH = "Halberd Combat EXP"; //currently unused
const RemExpHalberdCombatTCH = "【武器】熟練度"; //currently unused
const RemExpUnarmedCombatSCH = "Unarmed Combat EXP"; //currently unused
const RemExpUnarmedCombatTCH = "【素手】熟練度"; //currently unused
const RemExpEvasionCombatSCH = "Evasion EXP"; //currently unused
const RemExpEvasionCombatTCH = "【回避】熟練度"; //currently unused
const RemExpWillpowerCombatSCH = "Willpower EXP"; //currently unused
const RemExpWillpowerCombatTCH = "【意思】熟練度"; //currently unused
const RemExpEnduranceCombatSCH = "Endurance EXP"; //currently unused
const RemExpEnduranceCombatTCH = "【忍耐】熟練度"; //currently unused
const RemExpTalkSensitivitySCH = "Talk Sensitivity EXP"; //currently unused
const RemExpTalkSensitivityTCH = "猥談感度"; //currently unused
const RemExpSightSensitivitySCH = "Sight Sensitivity EXP"; //currently unused
const RemExpSightSensitivityTCH = "視姦感度"; //currently unused
const RemExpFingerSensitivitySCH = "Finger Sensitivity EXP"; //currently unused
const RemExpFingerSensitivityTCH = "指先の感度"; //currently unused
const RemExpMouthSensitivitySCH = "Mouth Sensitivity EXP"; //currently unused
const RemExpMouthSensitivityTCH = "クチ感度"; //currently unused
const RemExpBoobsSensitivitySCH = "Boobs Sensitivity EXP"; //currently unused
const RemExpBoobsSensitivityTCH = "おっぱい感度"; //currently unused
const RemExpPussySensitivitySCH = "Pussy Sensitivity EXP"; //currently unused
const RemExpPussySensitivityTCH = "マンコ感度"; //currently unused
const RemExpButtSensitivitySCH = "Butt Sensitivity EXP"; //currently unused
const RemExpButtSensitivityTCH = "アナル感度"; //currently unused
const RemExpCreampieSensitivitySCH = "Creampie Recipient EXP"; //currently unused
const RemExpCreampieSensitivityTCH = "中出し感度"; //currently unused
const RemExpBukkakeSensitivitySCH = "Bukkake EXP"; //currently unused
const RemExpBukkakeSensitivityTCH = "ぶっかけ感度"; //currently unused
const RemExpSwallowSensitivitySCH = "Swallowing EXP"; //currently unused
const RemExpSwallowSensitivityTCH = "ごっくん感度"; //currently unused
const RemExpKissSkillSCH = "Kissing EXP"; //currently unused
const RemExpKissSkillTCH = "キス熟練度"; //currently unused
const RemExpPettingSkillSCH = "Petting EXP"; //currently unused
const RemExpPettingSkillTCH = "愛撫熟練度"; //currently unused
const RemExpHandjobSkillSCH = "Handjob EXP"; //currently unused
const RemExpHandjobSkillTCH = "手コキ熟練度"; //currently unused
const RemExpBlowjobSkillSCH = "Blowjob EXP"; //currently unused
const RemExpBlowjobSkillTCH = "フェラ熟練度"; //currently unused
const RemExpTittyFuckSkillSCH = "Titjob EXP"; //currently unused
const RemExpTittyFuckSkillTCH = "パイズリ熟練度"; //currently unused
const RemExpPussySexSkillSCH = "Vaginal Sex EXP"; //currently unused
const RemExpPussySexSkillTCH = "生ハメ熟練度"; //currently unused
const RemExpAnalSexSkillSCH = "Anal Sex EXP"; //currently unused
const RemExpAnalSexSkillTCH = "ケツマンコ熟練度"; //currently unused
const RemExpMasturbateSkillSCH = "Masturbation EXP"; //currently unused
const RemExpMasturbateSkillTCH = "オナニー熟練度"; //currently unused
const RemExpOrgasmSpecialSCH = "Orgasm EXP"; //currently unused
const RemExpOrgasmSpecialTCH = "アクメ熟練度"; //currently unused
const RemExpStrippedSpecialSCH = "Stripped EXP"; //currently unused
const RemExpStrippedSpecialTCH = "ストリップ熟練度"; //currently unused
const RemExpDoublePenetrationSpecialSCH = "Double Penetration EXP"; //currently unused
const RemExpDoublePenetrationSpecialTCH = "ニ穴ファック熟練度"; //currently unused
const RemExpTriplePenetrationSpecialSCH = "Triple Penetration EXP"; //currently unused
const RemExpTriplePenetrationSpecialTCH = "三穴ファック熟練度"; //currently unused


const RemYanflyBattleCoreUserSCH = "用户";
const RemYanflyBattleCoreUserTCH = "ユーザー";
const RemYanflyBattleCoreAllySCH = "我方";
const RemYanflyBattleCoreAllyTCH = "味方";
const RemYanflyBattleCoreAlliesSCH = "我方";
const RemYanflyBattleCoreAlliesTCH = "味方";
const RemYanflyBattleCoreEnemySCH = "敌方";
const RemYanflyBattleCoreEnemyTCH = "敵";
const RemYanflyBattleCoreEnemiesSCH = "敌方";
const RemYanflyBattleCoreEnemiesTCH = "敵";
const RemYanflyBattleCoreAllTargetsSCH = "%1全体";
const RemYanflyBattleCoreAllTargetsTCH = "%1全体";
const RemYanflyBattleCoreRandomTargetsSCH = "%2的随机值是%1";
const RemYanflyBattleCoreRandomTargetsTCH = "%2のランダムな%1";

const RemYanflyRemoveSCH = "取下";
const RemYanflyRemoveTCH = "外す";
const RemYanflyEmptySCH = "<未使用>";
const RemYanflyEmptyTCH = "<未使用>";

//Options Main
const RemYanflyOptions_All_SCH = "\\I[272]全体";
const RemYanflyOptions_All_TCH = "\\I[272]全体";
const RemYanflyOptions_All_Help_SCH = "显示所有游戏设置.";
const RemYanflyOptions_All_Help_TCH = "ゲームの設定を全て表示します。";
const RemYanflyOptions_General_SCH = "\\I[273]通常";
const RemYanflyOptions_General_TCH = "\\I[273]一般";
const RemYanflyOptions_General_Help_SCH = "语言速度等一般设置.";
const RemYanflyOptions_General_Help_TCH = "言語や速度などの一般設定を変更出来ます。";
const RemYanflyOptions_Audio_SCH = "\\I[274]声音";
const RemYanflyOptions_Audio_TCH = "\\I[274]オーディオ";
const RemYanflyOptions_Audio_Help_SCH = "更改声音相关的设定.";
const RemYanflyOptions_Audio_Help_TCH = "ゲーム内で流れる音のボリュームを設定出来ます。";
const RemYanflyOptions_Visual_SCH = "\\I[276]画面";
const RemYanflyOptions_Visual_TCH = "\\I[276]画面";
const RemYanflyOptions_Visual_Help_SCH = "更改视觉上的设置.";
const RemYanflyOptions_Visual_Help_TCH = "ゲームの表示に関する設定を変更出来ます。";
const RemYanflyOptions_Controls_SCH = "\\I[280]控制";
const RemYanflyOptions_Controls_TCH = "\\I[280]キー";
const RemYanflyOptions_Controls_Help_SCH = "更改键位设定.\n按下手柄键更改手柄键位设置.";
const RemYanflyOptions_Controls_Help_TCH = "ゲームの操作キーを変更出来ます。\nゲームパッドが接続されている場合、ゲームパッドの設定を変更出来ます。";
const RemYanflyOptions_Cheats_SCH = "\\I[250]作弊模式";
const RemYanflyOptions_Cheats_TCH = "\\I[250]チート";
const RemYanflyOptions_Cheats_Help_SCH = "秘书模式限定专用\n部分难易度可以按喜好来调整";
const RemYanflyOptions_Cheats_Help_TCH = "秘書コース専用の設定です。\n部分的な難易度をお好みにカスタマイズしてプレイ出来ます。";
const RemYanflyOptions_Exit_SCH = "\\I[254]结束";
const RemYanflyOptions_Exit_TCH = "\\I[254]終了";
const RemYanflyOptions_Exit_Help_SCH = "退出设定菜单.";
const RemYanflyOptions_Exit_Help_TCH = "設定画面を終了します。";

//Options General
const RemYanflyOptions_Language_SCH = "\\i[275]文字语言";
const RemYanflyOptions_Language_TCH = "\\i[275]テキストの言語 (Language)";
const RemYanflyOptions_Language_Help_SCH = "更改所有显示文字的语言";
const RemYanflyOptions_Language_Help_TCH = "文章の言語を変更出来ます。";
const RemYanflyOptions_VoiceLanguage_SCH = "\\i[275]配音语言";
const RemYanflyOptions_VoiceLanguage_TCH = "\\i[275]声の言語";
const RemYanflyOptions_VoiceLanguage_Help_SCH = "更改角色语音语言";
const RemYanflyOptions_VoiceLanguage_Help_TCH = "ボイスの言語を変更出来ます。";
const RemYanflyOptions_AlwaysDash_SCH = "\\i[273]默认移动：奔跑";
const RemYanflyOptions_AlwaysDash_TCH = "\\i[273]常時ダッシュ";
const RemYanflyOptions_AlwaysDash_Help_SCH = "关闭时默认为走路. 打开时默认为奔跑.\n按住Shift键以切换走路奔跑.";
const RemYanflyOptions_AlwaysDash_Help_TCH = "ON：常にダッシュのスピード\nOFF：歩行スピード\n※OFFの場合は、SHIFTキーを押し続けることでダッシュします。";
const RemYanflyOptions_MessageSpeed_SCH = "\\i[273]消息速度";
const RemYanflyOptions_MessageSpeed_TCH = "\\i[273]メッセージ表示速度";
const RemYanflyOptions_MessageSpeed_Help_SCH = "改变消息文本显示的速度.";
const RemYanflyOptions_MessageSpeed_Help_TCH = "通常テキストの表示速度を変更出来ます。";
const RemYanflyOptions_MessageSpeed_NoWait_SCH = "无等待";
const RemYanflyOptions_MessageSpeed_NoWait_TCH = "ノーウェイト";
const RemYanflyOptions_CommandRemember_SCH = "\\i[273]记忆上次操作";
const RemYanflyOptions_CommandRemember_TCH = "\\i[273]コマンド記憶";
const RemYanflyOptions_CommandRemember_Help_SCH = "下次的默认选项变为上次的操作项.";
const RemYanflyOptions_CommandRemember_Help_TCH = "メンタルフェーズとアクションフェーズの最後に使ったスキルを記憶します。";

const RemYanflyOptions_Battlelog_Duration_SCH = "\\i[273]战斗文本显示速度";
const RemYanflyOptions_Battlelog_Duration_TCH = "\\i[273]バトルメッセージ表示時間";
const RemYanflyOptions_Battlelog_Duration_Help_SCH = "改变战斗文本在屏幕上的停留时间.";
const RemYanflyOptions_Battlelog_Duration_Help_TCH = "バトル内テキストの表示時間を変更出来ます。";
const RemYanflyOptions_Battlelog_Duration_Zero_SCH = "最短";
const RemYanflyOptions_Battlelog_Duration_Zero_TCH = "ベリーショート";
const RemYanflyOptions_Battlelog_Duration_One_SCH = "短";
const RemYanflyOptions_Battlelog_Duration_One_TCH = "ショート";
const RemYanflyOptions_Battlelog_Duration_Two_SCH = "普通";
const RemYanflyOptions_Battlelog_Duration_Two_TCH = "デフォルト";
const RemYanflyOptions_Battlelog_Duration_Three_SCH = "长";
const RemYanflyOptions_Battlelog_Duration_Three_TCH = "ロング";
const RemYanflyOptions_Battlelog_Duration_Four_SCH = "最长";
const RemYanflyOptions_Battlelog_Duration_Four_TCH = "ベリーロング";

const RemYanflyOptions_Battlelog_Fontsize_SCH = "\\i[273]战斗记录字体大小";
const RemYanflyOptions_Battlelog_Fontsize_TCH = "\\i[273]バトルメッセージのフォントサイズ";
const RemYanflyOptions_Battlelog_Fontsize_Help_SCH = "改变战斗记录中字体的大小";
const RemYanflyOptions_Battlelog_Fontsize_Help_TCH = "バトル内テキストのサイズを変更出来ます。";
const RemYanflyOptions_Battlelog_Fontsize_Zero_SCH = "最小";
const RemYanflyOptions_Battlelog_Fontsize_Zero_TCH = "最小";
const RemYanflyOptions_Battlelog_Fontsize_One_SCH = "小";
const RemYanflyOptions_Battlelog_Fontsize_One_TCH = "小さい";
const RemYanflyOptions_Battlelog_Fontsize_Two_SCH = "普通";
const RemYanflyOptions_Battlelog_Fontsize_Two_TCH = "普通";
const RemYanflyOptions_Battlelog_Fontsize_Three_SCH = "大";
const RemYanflyOptions_Battlelog_Fontsize_Three_TCH = "大きい";
const RemYanflyOptions_Battlelog_Fontsize_Four_SCH = "最大";
const RemYanflyOptions_Battlelog_Fontsize_Four_TCH = "最大";

const RemYanflyOptions_MaleDialogueAppear_SCH = "\\i[273]敌人战斗中对话频率";
const RemYanflyOptions_MaleDialogueAppear_TCH = "\\i[273]敵のセリフ表示頻度";
const RemYanflyOptions_MaleDialogueAppear_Help_SCH = "改变敌人在战斗中的猥谈频率.\n※注意：特定情况下敌人会无视设定进行猥谈.";
const RemYanflyOptions_MaleDialogueAppear_Help_TCH = "セクハラ/セックス時に表示される敵のセリフ頻度を設定出来ます。\n※敵によっては例外があります。";
const RemYanflyOptions_MaleDialogueAppear_Zero_SCH = "关闭";
const RemYanflyOptions_MaleDialogueAppear_Zero_TCH = "沈黙";
const RemYanflyOptions_MaleDialogueAppear_One_SCH = "很少";
const RemYanflyOptions_MaleDialogueAppear_One_TCH = "ごく稀に";
const RemYanflyOptions_MaleDialogueAppear_Two_SCH = "偶尔";
const RemYanflyOptions_MaleDialogueAppear_Two_TCH = "時々";
const RemYanflyOptions_MaleDialogueAppear_Three_SCH = "常常(默认)";
const RemYanflyOptions_MaleDialogueAppear_Three_TCH = "普通(デフォルト)";
const RemYanflyOptions_MaleDialogueAppear_Four_SCH = "较多";
const RemYanflyOptions_MaleDialogueAppear_Four_TCH = "おしゃべり";

const RemYanflyOptions_KarrynLinesPrompt_SCH = "\\i[273]卡琳对话停顿";
const RemYanflyOptions_KarrynLinesPrompt_TCH = "\\i[273]カリンのセリフは待つ";
const RemYanflyOptions_KarrynLinesPrompt_Help_SCH = "当卡琳的对话或内心活动出现时需要按下确认键以继续战斗.\n关闭该选项将会跳过大部分卡琳的对话或心理活动.";
const RemYanflyOptions_KarrynLinesPrompt_Help_TCH = "バトル中にカリンが話す時は自動送りするかどうかの設定が出来ます。\nON：カリン発言時のみ、決定キーを押すまで戦闘メッセージは停止します。\nOFF：カリンのセリフも含めて、戦闘メッセージは全て自動送りされます。";
const RemYanflyOptions_Disable_Rimjobs_SCH = "\\i[273]禁止舔肛行为";
const RemYanflyOptions_Disable_Rimjobs_TCH = "\\i[273]『ケツ舐め』を非表示";
const RemYanflyOptions_Disable_Rimjobs_Help_SCH = "打开时将不会出现舔肛活动\n但游戏流程最初的设计是包含改内容的\n如果无法接受请打开该选项";
const RemYanflyOptions_Disable_Rimjobs_Help_TCH = "ON：アナル舐めシーンが一切発生しなくなります。\nOFF：カリンが男のアナルを舐めるシーンが発生します。\n※ゲーム進行に影響するのでご注意下さい。";
const RemYanflyOptions_Disable_Footjobs_SCH = "\\i[273]禁止足交";
const RemYanflyOptions_Disable_Footjobs_TCH = "\\i[273]『足コキ』を非表示";
const RemYanflyOptions_Disable_Footjobs_Help_SCH = "打开时将不会出现足交活动\n但游戏流程最初的设计是包含改内容的\n如果无法接受请打开该选项";
const RemYanflyOptions_Disable_Footjobs_Help_TCH = "ON：足コキシーンが一切発生しなくなります。\nOFF：カリンが足コキするシーンが発生します。\n※ゲーム進行に影響するのでご注意下さい。";
const RemYanflyOptions_Disable_Smegma_SCH = "\\i[273]禁止包皮垢相关描写";
const RemYanflyOptions_Disable_Smegma_TCH = "\\i[273]チンカス描写の非表示";
const RemYanflyOptions_Disable_Smegma_Help_SCH = "禁止战斗中的包皮垢相关描写\n※游戏内容并没有实际改变，仅对话内容出现变动\n仅在对特定内容感到不适的时候开启此选项";
const RemYanflyOptions_Disable_Smegma_Help_TCH = "ON：チンカスの描写が一切発生しなくなります。\nOFF：カリンがチンカスの匂いを嗅いだり、舐めたりするセリフが発生します。\n※セリフのバリエーションが減少する事にご注意下さい。";
const RemYanflyOptions_Disable_FeraMouth_SCH = "\\i[273]禁用口交章鱼嘴";
const RemYanflyOptions_Disable_FeraMouth_TCH = "\\i[273]バキュームフェラの非表示";
const RemYanflyOptions_Disable_FeraMouth_Help_SCH = "打开时口交不会出现章鱼嘴的情况\n※游戏内容并没有实际改变，只是会减少口交时面部表情的变化性\n仅在对特定内容感到不适的时候开启此选项";
const RemYanflyOptions_Disable_FeraMouth_Help_TCH = "ON：フェラでひょっとこ口をしないようになります（ゲームには影響しません）。\nOFF：経験が増すと吸い付くようなフェラが見れます。\n※表情のバリエーションが少なくなるので、苦手な方のみＯＮにして下さい。";

const RemYanflyOptions_DisplayPleasureAsPercent_SCH = "\\i[273]高潮值以百分比表示";
const RemYanflyOptions_DisplayPleasureAsPercent_TCH = "\\i[273]快楽度を％で表示";
const RemYanflyOptions_DisplayPleasureAsPercent_Help_SCH = "高潮值是否以最大值的百分比显示 \nON：以百分比显示.\nOFF：不以百分比显示";
const RemYanflyOptions_DisplayPleasureAsPercent_Help_TCH = "絶頂に必要な『快楽度』の表示を変更出来ます。\nON：快楽度をパーセンテージで表示します。\nOFF：快楽度を通常の数値で表示します。";

const RemYanflyOptions_ShorterDefeatBattles_SCH = "\\i[273]精简战败轮奸";
const RemYanflyOptions_ShorterDefeatBattles_TCH = "\\i[273]敗北Ｈの短縮";
const RemYanflyOptions_ShorterDefeatBattles_Help_SCH = "设定卡琳败北后的轮奸演出 \nON：敌人射精后或卡琳的体力为0时结束 \nOFF：在场全部敌人都射精后才会结束.囚犯路线难度下此选项永远是关闭的."
const RemYanflyOptions_ShorterDefeatBattles_Help_TCH = "通常の敗北Ｈは全ての敵が射精後に終了します。\nON：敵が射精し終わらなくても、カリンの体力が０になった時点で終了します。\nOFF：通常通り全員が射精するまで続きます。囚人コースでは常にOFFになります。";

//Options Audio
const RemYanflyOptions_MasterVolume_SCH = "\\i[274]主音量";
const RemYanflyOptions_MasterVolume_TCH = "\\i[274]マスター音量";
const RemYanflyOptions_MasterVolume_Help_SCH = "调节主音量.";
const RemYanflyOptions_MasterVolume_Help_TCH = "ゲーム全体のボリュームを設定出来ます。";
const RemYanflyOptions_BGMVolume_SCH = "\\i[274]BGM";
const RemYanflyOptions_BGMVolume_TCH = "\\i[274]BGMの音量";
const RemYanflyOptions_BGMVolume_Help_SCH = "BGM音量大小调节.";
const RemYanflyOptions_BGMVolume_Help_TCH = "ゲーム内で流れる音楽のボリュームを設定出来ます。";
const RemYanflyOptions_BGSVolume_SCH = "\\i[274]效果音";
const RemYanflyOptions_BGSVolume_TCH = "\\i[274]ループ効果音";
const RemYanflyOptions_BGSVolume_Help_SCH = "调节效果音，背景音量.";
const RemYanflyOptions_BGSVolume_Help_TCH = "背景効果音のボリュームを設定出来ます。";
const RemYanflyOptions_MEVolume_SCH = "\\i[274]演出效果音";
const RemYanflyOptions_MEVolume_TCH = "\\i[274]演出音";
const RemYanflyOptions_MEVolume_Help_SCH = "调节演出效果音大小，例如： 睡眠时的过场音乐.";
const RemYanflyOptions_MEVolume_Help_TCH = "休息のときやファンファーレに流れる音楽のボリュームを設定出来ます。";
const RemYanflyOptions_SEVolume_SCH = "\\i[274]声效";
const RemYanflyOptions_SEVolume_TCH = "\\i[274]効果音の音量";
const RemYanflyOptions_SEVolume_Help_SCH = "调节声效音大小.";
const RemYanflyOptions_SEVolume_Help_TCH = "SEのボリュームを設定出来ます。";
const RemYanflyOptions_VoiceVolume_SCH = "\\i[274]语音音量";
const RemYanflyOptions_VoiceVolume_TCH = "\\i[274]カリンの声の音量";
const RemYanflyOptions_VoiceVolume_Help_SCH = "调节卡琳的对话音量";
const RemYanflyOptions_VoiceVolume_Help_TCH = "カリンが話すボイスのボリュームを設定出来ます。";
const RemYanflyOptions_MoansVolume_SCH = "\\i[274]娇喘音量";
const RemYanflyOptions_MoansVolume_TCH = "\\i[274]あえぎ声の音量";
const RemYanflyOptions_MoansVolume_Help_SCH = "调节卡琳娇喘的音量";
const RemYanflyOptions_MoansVolume_Help_TCH = "カリンのあえぎ声のボリュームを設定出来ます。";
const RemYanflyOptions_MaleVolume_SCH = "\\i[274]男性音量";
const RemYanflyOptions_MaleVolume_TCH = "\\i[274]敵の声の音量";
const RemYanflyOptions_MaleVolume_Help_SCH = "调整男性的音量，例如：起哄，笑声等";
const RemYanflyOptions_MaleVolume_Help_TCH = "男が発する笑い声や呼び声のボリュームを設定出来ます。";
const RemYanflyOptions_KeepVoicePlayback_SCH = "\\i[274]声音反复播放";
const RemYanflyOptions_KeepVoicePlayback_TCH = "\\i[274]メッセージ送り後もボイスを再生";
const RemYanflyOptions_KeepVoicePlayback_Help_SCH = "开启：直到下一句语音出现前，当前的语音会一直播放\n关闭：确定键会中断当前语音的播放"
const RemYanflyOptions_KeepVoicePlayback_Help_TCH = "ON：セリフを言い切るまでボイスが再生され続けます。\nOFF：決定キーでボイス再生は中断されます。";
const RemYanflyOptions_AutoContinueAfterVoice_SCH = "\\i[274]卡琳语音后自动继续对话";
const RemYanflyOptions_AutoContinueAfterVoice_TCH = "\\i[274]ボイスを待ってから自動送りする";
const RemYanflyOptions_AutoContinueAfterVoice_Help_SCH = "开启：在卡琳语音播放后将自动继续战斗对话\n该选项需要 卡琳对话停顿 选项开启才会生效"
const RemYanflyOptions_AutoContinueAfterVoice_Help_TCH = "ON：カリンがセリフを言い切ってから、自動でバトルを続行します。\nOFF：ボイスが終わっても自動送りしません。\n※この設定を有効にするには『カリンのセリフは待つ』もONにする必要があります。";

//Options Visual
const RemYanflyOptions_WindowToneRed_SCH = "\\i[277]视窗色彩: 红";
const RemYanflyOptions_WindowToneRed_TCH = "\\i[277]ウィンドウトーン：RED";
const RemYanflyOptions_WindowToneRed_Help_SCH = "改变\\c[18]红色\\c[0]的色值.\n按SHIFT+←/→来调节";
const RemYanflyOptions_WindowToneRed_Help_TCH = "ウィンドウ色彩の\\c[18]赤\\c[0]を変更出来ます。\nSHIFTキーを押しながら左右に動かすことで大きく変更出来ます。\n※セーブデータに依存するのでタイトル画面では変更出来ません。";
const RemYanflyOptions_WindowToneGreen_SCH = "\\i[278]视窗色彩：绿";
const RemYanflyOptions_WindowToneGreen_TCH = "\\i[278]ウィンドウトーン：GREEN";
const RemYanflyOptions_WindowToneGreen_Help_SCH = "改变\\c[29]绿色\\c[0]的色值.\n按SHIFT+←/→来调节";
const RemYanflyOptions_WindowToneGreen_Help_TCH = "ウィンドウ色彩の\\c[29]緑\\c[0]を変更出来ます。\nSHIFTキーを押しながら左右に動かすことで大きく変更出来ます。\n※セーブデータに依存するのでタイトル画面では変更出来ません。";
const RemYanflyOptions_WindowToneBlue_SCH = "\\i[279]视窗色彩：蓝";
const RemYanflyOptions_WindowToneBlue_TCH = "\\i[279]ウィンドウトーン：BLUE";
const RemYanflyOptions_WindowToneBlue_Help_SCH = "改变\\c[14]蓝色\\c[0]的色值.\n按SHIFT+←/→来调节";
const RemYanflyOptions_WindowToneBlue_Help_TCH = "ウィンドウ色彩の\\c[14]青\\c[0]を変更出来ます。\nSHIFTキーを押しながら左右に動かすことで大きく変更出来ます。\n※セーブデータに依存するのでタイトル画面では変更出来ません。";
const RemYanflyOptions_FasterBattleDialogue_SCH = "\\i[276]战斗文本加速";
const RemYanflyOptions_FasterBattleDialogue_TCH = "\\i[276]バトルメッセージ倍速化";
const RemYanflyOptions_FasterBattleDialogue_Help_SCH = "打开加速战斗文本显示速度.";
const RemYanflyOptions_FasterBattleDialogue_Help_TCH = "バトル中に表示されるメッセージが速くなります。";
const RemYanflyOptions_FasterBattleCutins_SCH = "\\i[276]战斗特效精简";
const RemYanflyOptions_FasterBattleCutins_TCH = "\\i[276]カットインを簡略化";
const RemYanflyOptions_FasterBattleCutins_Help_SCH = "打开：战斗动画及性技演出将以静态图片代替，加快战斗流程.\n关闭：战斗动画及性技演出将会播放动画，战斗速度普通.";
const RemYanflyOptions_FasterBattleCutins_Help_TCH = "ON：バトル中のカットインが速くなり、アニメなしの静止画が表示されます。\nOFF：カットインは通常速度で、アニメ再生もされます。\n※カットイン中にゲームが重くなる場合はONにして下さい。";
const RemYanflyOptions_SmootherBattleCutinLoading_SCH = "\\i[276]更顺滑的战斗特效";
const RemYanflyOptions_SmootherBattleCutinLoading_TCH = "\\i[276]カットインのスムーズ化";
const RemYanflyOptions_SmootherBattleCutinLoading_Help_SCH = "配置更好的电脑可以体验到更顺滑的动画.\n如果游戏卡顿或崩溃请关闭该选项.\n该选项不会额外加速战斗速度.";
const RemYanflyOptions_SmootherBattleCutinLoading_Help_TCH = "起動時のロード時間が長くなる代わりに、バトル中のカットイン表示で発生する遅延をかなり抑制します。\n注意１：起動時間が20秒を超える、または頻繁にフリーズする場合はOFFにして下さい。\n注意２：ONにした後、ゲームを再起動することで設定が有効になります。";
const RemYanflyOptions_DisableBattleCutins_SCH = "\\i[276]禁用战斗特效";
const RemYanflyOptions_DisableBattleCutins_TCH = "\\i[276]カットインの非表示";
const RemYanflyOptions_DisableBattleCutins_Help_SCH = "打开这个选项将完全禁用战斗特效\n战斗特效能促进游戏的游玩体验\n※仅在游戏帧率严重收到影响，作为挽救帧率的最后手段";
const RemYanflyOptions_DisableBattleCutins_Help_TCH = "ON：バトル中のカットインは全て表示されません。\nOFF：バトル中のカットインが表示されます。\n※カットインの影響で処理落ちする場合のみ、最終手段としてご使用下さい。";
const RemYanflyOptions_SmootherCGLoading_SCH = "\\i[276]更顺滑的CG展示";
const RemYanflyOptions_SmootherCGLoading_TCH = "\\i[276]CG表示のスムーズ化";
const RemYanflyOptions_SmootherCGLoading_Help_SCH = "配置更好的电脑可以体验到更顺滑的动画，但是启动时会花更长时间读取各种CG到内存.\n如果游戏卡顿或崩溃请关闭该选项.\n该选项不会额外加速战斗速度.";
const RemYanflyOptions_SmootherCGLoading_Help_TCH = "起動時のロード時間が長くなる代わりに、CG表示で発生する遅延をかなり抑制します。\n注意１：起動時間が20秒を超える、または頻繁にフリーズする場合はOFFにして下さい。\n注意２：ONにした後、ゲームを再起動することで設定が有効になります。";
const RemYanflyOptions_SortPassivesAscending_SCH = "\\i[276]被动技能排列";
const RemYanflyOptions_SortPassivesAscending_TCH = "\\i[276]パッシブの並び順を変更";
const RemYanflyOptions_SortPassivesAscending_Help_SCH = "改变排列被动技能的顺序.\nON: 从最初日往后排列.\nOFF: 优先显示最近得到的技能.";
const RemYanflyOptions_SortPassivesAscending_Help_TCH = "パッシブの並べ替えをします。\nON：初日から現在までに取得した順列で表示されます。\nOFF：最新取得から過去までの順列で表示されます。";
const RemYanflyOptions_SynchFPS_SCH = "\\i[276]FPS同步";
const RemYanflyOptions_SynchFPS_TCH = "\\i[273]FPSの同期処理";
const RemYanflyOptions_SynchFPS_Help_SCH = "如果你的电脑屏幕显示帧率在60FPS以上请打开该选项.\n60FPS以下请关闭该选项.\n按F2查看帧率.";
const RemYanflyOptions_SynchFPS_Help_TCH = "モニターが60FPSを超えて動作している場合、ONにしてください。\n60FPSで動作するようにゲーム同期を変更出来ます。\n※F2キーで現在のFPSを確認出来ます。";
const RemYanflyOptions_LightingEffects_SCH = "\\i[276]地图光影特效";
const RemYanflyOptions_LightingEffects_TCH = "\\i[276]フラッシュ演出";
const RemYanflyOptions_LightingEffects_Help_SCH = "是否使用地图光源，比如火把，阳光等.\n如果游戏出现卡顿和掉帧请关闭该选项"
const RemYanflyOptions_LightingEffects_Help_TCH = "フラッシュが使われるイベントでゲーム速度が遅くなる場合は、\nOFFにすることでゲームからフラッシュを解除し、\n動作パフォーマンスを向上させることが出来ます。";
const RemYanflyOptions_MapEffects_SCH = "\\i[276]地图动态特效";
const RemYanflyOptions_MapEffects_TCH = "\\i[276]マップのエフェクト";
const RemYanflyOptions_MapEffects_Help_SCH = "地图动态特效：例如云朵，雾气等.\n关闭该选项如果游戏出现卡顿和掉帧."
const RemYanflyOptions_MapEffects_Help_TCH = "マップのミストや雲などの演出表示を変更出来ます。\nON：マップ演出を表示します。\nOFF：マップ演出を非表示にします（処理が遅くなる場合は推奨）。";
const RemYanflyOptions_DisableFlashing_SCH = "\\i[276]禁用屏幕闪烁";
const RemYanflyOptions_DisableFlashing_TCH = "\\i[276]フラッシュ演出の非表示";
const RemYanflyOptions_DisableFlashing_Help_SCH = "打开该选项将禁用一些屏幕闪烁的效果\n如果你对闪光敏感或因闪光而眼睛疲劳，请打开该选项。" 
const RemYanflyOptions_DisableFlashing_Help_TCH = "フラッシュ表現に敏感な方や目に辛いという場合はONにして下さい。\nON：全画面フラッシュの演出が無効になります。\nOFF：全画面フラッシュの演出が適用されます。";
const RemYanflyOptions_DisplayPubicHair_SCH = "\\i[276]显示阴毛";
const RemYanflyOptions_DisplayPubicHair_TCH = "\\i[276]アンダーヘアの処理";
const RemYanflyOptions_DisplayPubicHair_Help_SCH = "若打开卡琳会有和发色一样，整齐修剪过的阴毛，若关闭则是美丽的白虎";
const RemYanflyOptions_DisplayPubicHair_Help_TCH = "アンダーヘアの生え方が変更出来ます。\nON：カリンの股間には丁寧に整えられた陰毛があります。\nOFF：カリンがパイパンになります。";
const RemYanflyOptions_ShowSexualDamagePopup_SCH = "\\i[276]显示性战斗数值";
const RemYanflyOptions_ShowSexualDamagePopup_TCH = "\\i[276]性ダメージのポップアップ";
const RemYanflyOptions_ShowSexualDamagePopup_Help_SCH = "改变性战斗的数值是否出现.\n例如：获得的欲望和高潮值，失去的体力和精神值.";
const RemYanflyOptions_ShowSexualDamagePopup_Help_TCH = "バトル中の性ダメージの表示を変更出来ます。\nON：カリンの上に性ダメージ数が表示されます。\nOFF：性ダメージはテキストログのみでの表示になります。";

const RemYanflyOptions_EdictsOutlineColor_Obtainable_SCH = "\\i[276]指令边框颜色：能否解锁";
const RemYanflyOptions_EdictsOutlineColor_Obtainable_TCH = "\\i[276]指令のアウトラインカラー：実行可能な場合";
const RemYanflyOptions_EdictsOutlineColor_Obtainable_Help_SCH = "本选项会改变能够解锁的指令边框颜色";
const RemYanflyOptions_EdictsOutlineColor_Obtainable_Help_TCH = "現時点で実行可能な『指令』の枠の色を変更出来ます。";
const RemYanflyOptions_EdictsOutlineColor_MeetReq_SCH = "\\i[276]指令边框颜色：满足解锁条件";
const RemYanflyOptions_EdictsOutlineColor_MeetReq_TCH = "\\i[276]指令のアウトラインカラー：条件を満たしている場合";
const RemYanflyOptions_EdictsOutlineColor_MeetReq_Help_SCH = "本选项会改变满足解锁条件，但还不能解锁的指令边框颜色";
const RemYanflyOptions_EdictsOutlineColor_MeetReq_Help_TCH = "条件を満たしていても現時点では実行不可な『指令』の枠の色を変更出来ます。";
const RemYanflyOptions_EdictsOutlineColor_NoReq_SCH = "\\i[276]指令边框颜色：不可解锁";
const RemYanflyOptions_EdictsOutlineColor_NoReq_TCH = "\\i[276]指令のアウトラインカラー：実行不可な場合";
const RemYanflyOptions_EdictsOutlineColor_NoReq_Help_SCH = "本选项会改变不能解锁的指令边框颜色";
const RemYanflyOptions_EdictsOutlineColor_NoReq_Help_TCH = "条件を満たしていない『指令』の枠の色を変更出来ます。";

const RemYanflyOptions_EdictsOutlineColorName_Green_SCH = "绿";
const RemYanflyOptions_EdictsOutlineColorName_Green_TCH = "グリーン";
const RemYanflyOptions_EdictsOutlineColorName_LightBlue_SCH = "浅蓝";
const RemYanflyOptions_EdictsOutlineColorName_LightBlue_TCH = "ライトブルー";
const RemYanflyOptions_EdictsOutlineColorName_Yellow_SCH = "黄";
const RemYanflyOptions_EdictsOutlineColorName_Yellow_TCH = "イエロー";
const RemYanflyOptions_EdictsOutlineColorName_Purple_SCH = "紫";
const RemYanflyOptions_EdictsOutlineColorName_Purple_TCH = "パープル";
const RemYanflyOptions_EdictsOutlineColorName_Gray_SCH = "灰";
const RemYanflyOptions_EdictsOutlineColorName_Gray_TCH = "グレイ";
const RemYanflyOptions_EdictsOutlineColorName_Black_SCH = "黑";
const RemYanflyOptions_EdictsOutlineColorName_Black_TCH = "ブラック";
const RemYanflyOptions_EdictsOutlineColorName_Red_SCH = "红";
const RemYanflyOptions_EdictsOutlineColorName_Red_TCH = "レッド";

//Options Controls
const RemYanflyOptions_GamepadControl_SCH = "\\i[281]手柄设定";
const RemYanflyOptions_GamepadControl_TCH = "\\i[281]ゲームパッド設定";
const RemYanflyOptions_GamepadControl_Help_SCH = "手柄键位设定.";
const RemYanflyOptions_GamepadControl_Help_TCH = "ゲームパッドのボタン割り当てが設定出来ます。";
const RemYanflyOptions_KeyboardControl_SCH = "\\i[280]键盘设定";
const RemYanflyOptions_KeyboardControl_TCH = "\\i[280]キーボード設定";
const RemYanflyOptions_KeyboardControl_Help_SCH = "键位设定.";
const RemYanflyOptions_KeyboardControl_Help_TCH = "キーボードのキー割り当てが設定出来ます。";
const RemYanflyOptions_CancelSkipMentalPhase_SCH = "\\I[280]快速跳过精神技能阶段";
const RemYanflyOptions_CancelSkipMentalPhase_TCH = "\\I[280]戦闘のメンタルフェーズをスキップ";
const RemYanflyOptions_CancelSkipMentalPhase_Help_SCH = "打开后可以用取消键或者鼠标右键 \n来跳过精神技能阶段.";
const RemYanflyOptions_CancelSkipMentalPhase_Help_TCH = "ON：キャンセルボタン/右クリックでメンタルフェーズをスキップ出来ます。\nOFF：コマンド入力するまで、メンタルフェーズからアタックフェーズに移行出来ません。";

const RemYanflyOptions_Fullscreen_SCH = "\\i[273]全屏切换";
const RemYanflyOptions_Fullscreen_TCH = "\\i[273]画面表示の変更";
const RemYanflyOptions_Fullscreen_Help_SCH = "在窗口模式和全屏模式之间进行切换。\n在游戏过程中按下F4或者ALT+ENTER也可以进行快速切换。";
const RemYanflyOptions_Fullscreen_Help_TCH = "窗口模式：通常通りウィンドウ表示でゲームをプレイ出来ます。\n全屏：全画面表示でゲームをプレイ出来ます。\n※プレイ中にF4キーかAlt+Enterキーでも切り替えられます。";

const RemYanflyGamepadButtonNameSCH = "%1键";
const RemYanflyGamepadButtonNameTCH = "%1ボタン";
const RemYanflyGamepadOkButtonNameSCH = "决定 / 互动";
const RemYanflyGamepadOkButtonNameTCH = "決定 / 調べる";
const RemYanflyGamepadOkButtonHelpSCH = "确定或者与周围的环境互动.";
const RemYanflyGamepadOkButtonHelpTCH = "選択肢の決定や、マップ上で調べたり会話したいときに使います。";
const RemYanflyGamepadCancelButtonNameSCH = "取消";
const RemYanflyGamepadCancelButtonNameTCH = "キャンセル";
const RemYanflyGamepadCancelButtonHelpSCH = "取消按键.";
const RemYanflyGamepadCancelButtonHelpTCH = "選択肢のキャンセルや、メニューを閉じるときに使います。";
const RemYanflyGamepadShiftButtonNameSCH = "跑步/略过";
const RemYanflyGamepadShiftButtonNameTCH = "Shift";
const RemYanflyGamepadShiftButtonHelpSCH = "按住此键跑步或者隐藏文字.";
const RemYanflyGamepadShiftButtonHelpTCH = "ダッシュしたいときと、テキストを非表示したいときに使います。";
const RemYanflyGamepadMenuButtonNameSCH = "菜单";
const RemYanflyGamepadMenuButtonNameTCH = "メニュー";
const RemYanflyGamepadMenuButtonHelpSCH = "用来打开菜单.";
const RemYanflyGamepadMenuButtonHelpTCH = "メニューウィンドウを開くボタンです。";
const RemYanflyGamepadPageUpButtonNameSCH = "上翻页(↑) / 历史记录会看";
const RemYanflyGamepadPageUpButtonNameTCH = "ページ送り(↑) / テキストログの表示";
const RemYanflyGamepadPageUpButtonHelpSCH = "用于选择画面和文字记录的翻页.";
const RemYanflyGamepadPageUpButtonHelpTCH = "メニュー画面やテキストログのページ送りと、テキストログの表示に使います。";
const RemYanflyGamepadPageDownButtonNameSCH = "下翻页(↓)/加速";
const RemYanflyGamepadPageDownButtonNameTCH = "ページ送り(↓) ";
const RemYanflyGamepadPageDownButtonHelpSCH = "用于文字记录等的翻页操作，可以加速对话以及战斗文本";
const RemYanflyGamepadPageDownButtonHelpTCH = "メニュー画面やテキストログのページ送りに使います。";
const RemYanflyGamepadResetDefaultNameSCH = "恢复默认";
const RemYanflyGamepadResetDefaultNameTCH = "デフォルトに戻す";
const RemYanflyGamepadResetDefaultHelpSCH = "恢复到默认设定.";
const RemYanflyGamepadResetDefaultHelpTCH = "ゲームパッドの設定を初期状態に戻します。";
const RemYanflyGamepadFinishConfigNameSCH = "保存设定";
const RemYanflyGamepadFinishConfigNameTCH = "設定を保存する";
const RemYanflyGamepadFinishConfigHelpSCH = "保存手柄按键设定";
const RemYanflyGamepadFinishConfigHelpTCH = "ゲームパッドの設定を保存して閉じます。";

const RemYanflyKeyboardHelpSCH = "改变键位";
const RemYanflyKeyboardHelpTCH = "キーボードに動作を割り当てて下さい。";
const RemYanflyKeyboardDefaultLayoutTextSCH = "默认设置";
const RemYanflyKeyboardDefaultLayoutTextTCH = "初期状態に戻す";
const RemYanflyKeyboardDefaultLayoutHelpSCH = "恢复键位默认设置.";
const RemYanflyKeyboardDefaultLayoutHelpTCH = "キーボードの設定をデフォルトに戻します。";
const RemYanflyKeyboardWASDTextSCH = "WASD模式";
const RemYanflyKeyboardWASDTextTCH = "WASDモード";
const RemYanflyKeyboardWASDHelpSCH = "使用WASD来移动.";
const RemYanflyKeyboardWASDHelpTCH = "WASDキーを方向キーにします。";
const RemYanflyKeyboardFinishConfigTextSCH = "完成设置";
const RemYanflyKeyboardFinishConfigTextTCH = "設定を完了する";
const RemYanflyKeyboardFinishConfigHelpSCH = "保存键位设置";
const RemYanflyKeyboardFinishConfigHelpTCH = "キーボードの設定を保存して戻ります。";
const RemYanflyKeyboardClearTextSCH = "未设置";
const RemYanflyKeyboardClearTextTCH = "未設定";
const RemYanflyKeyboardOKKeySCH = "OK";
const RemYanflyKeyboardOKKeyTCH = "OK";
const RemYanflyKeyboardOKTextSCH = "OK/互动";
const RemYanflyKeyboardOKTextTCH = "OK / 調べる";
const RemYanflyKeyboardEscapeKeySCH = "取消/菜单";
const RemYanflyKeyboardEscapeKeyTCH = "ｷｬﾝｾﾙ&ﾒﾆｭｰ";
const RemYanflyKeyboardEscapeTextSCH = "取消/菜单";
const RemYanflyKeyboardEscapeTextTCH = "キャンセル / メニュー";
const RemYanflyKeyboardCancelKeySCH = "取消";
const RemYanflyKeyboardCancelKeyTCH = "ｷｬﾝｾﾙ";
const RemYanflyKeyboardCancelTextSCH = "取消";
const RemYanflyKeyboardCancelTextTCH = "キャンセル";
const RemYanflyKeyboardMenuKeySCH = "菜单";
const RemYanflyKeyboardMenuKeyTCH = "ﾒﾆｭｰ";
const RemYanflyKeyboardMenuTextSCH = "菜单";
const RemYanflyKeyboardMenuTextTCH = "メニュー";
const RemYanflyKeyboardShiftKeySCH = "跑步";
const RemYanflyKeyboardShiftKeyTCH = "Shift";
const RemYanflyKeyboardShiftTextSCH = "跑步";
const RemYanflyKeyboardShiftTextTCH = "Shift";
const RemYanflyKeyboardPageUpKeySCH = "上翻页";
const RemYanflyKeyboardPageUpKeyTCH = "PgUp";
const RemYanflyKeyboardPageUpTextSCH = "上翻页/历史记录回看";
const RemYanflyKeyboardPageUpTextTCH = "Page Up / テキストログの表示";
const RemYanflyKeyboardPageDownKeySCH = "下翻页";
const RemYanflyKeyboardPageDownKeyTCH = "PgDn";
const RemYanflyKeyboardPageDownTextSCH = "下翻页";
const RemYanflyKeyboardPageDownTextTCH = "Page Down";
const RemYanflyKeyboardLeftKeySCH = "←";
const RemYanflyKeyboardLeftKeyTCH = "←";
const RemYanflyKeyboardLeftTextSCH = "←左";
const RemYanflyKeyboardLeftTextTCH = "←方向";
const RemYanflyKeyboardUpKeySCH = "↑";
const RemYanflyKeyboardUpKeyTCH = "↑";
const RemYanflyKeyboardUpTextSCH = "↑上";
const RemYanflyKeyboardUpTextTCH = "↑方向";
const RemYanflyKeyboardRightKeySCH = "→";
const RemYanflyKeyboardRightKeyTCH = "→";
const RemYanflyKeyboardRightTextSCH = "→右";
const RemYanflyKeyboardRightTextTCH = "→方向";
const RemYanflyKeyboardDownKeySCH = "↓";
const RemYanflyKeyboardDownKeyTCH = "↓";
const RemYanflyKeyboardDownTextSCH = "↓下";
const RemYanflyKeyboardDownTextTCH = "↓方向";


//Options Cheats
const RemYanflyOptions_Cheats_ActorDoublePassiveGain_SCH = "\\i[182]\\C[27]被动获取速度两倍";
const RemYanflyOptions_Cheats_ActorDoublePassiveGain_TCH = "\\i[182]\\C[27]パッシブ解放２倍速";
const RemYanflyOptions_Cheats_ActorDoublePassiveGain_Help_SCH = "卡琳获取被动的速度变为普通的双倍\n★适合想让卡琳快速堕落成淫乱女的人";
const RemYanflyOptions_Cheats_ActorDoublePassiveGain_Help_TCH = "新しいパッシブの解放が２倍速くなります。\n★ビッチなカリンを早く見たい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_SCH = "\\i[429]\\C[14]体力伤害值2倍";
const RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_TCH = "\\i[429]\\C[14]体力ダメージ２倍";
const RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_Help_SCH = "敌人对卡琳造成双倍的体力伤害\n★适合不想让卡琳太无敌的人";
const RemYanflyOptions_Cheats_EnemyDoublePhysicalDamage_Help_TCH = "敵からの物理ダメージが２倍になります。\n★カリンの無敵っぷりを解除したい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_SCH = "\\i[429]\\C[14]体力伤害值3倍";
const RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_TCH = "\\i[429]\\C[14]体力ダメージ３倍";
const RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_Help_SCH = "敌人对卡琳造成双倍的体力伤害\n★适合想让卡琳容易瘫倒在地的人";
const RemYanflyOptions_Cheats_EnemyTriplePhysicalDamage_Help_TCH = "敵からの物理ダメージが３倍になります。\n★手っ取り早くカリンに倒れて欲しい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_SCH = "\\i[387]\\C[1]快感获得2倍";
const RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_TCH = "\\i[387]\\C[1]快楽ダメージ２倍";
const RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_Help_SCH = "敌人对卡琳施加双倍的快感\n★适合想让卡琳快速堕落给快感的人";
const RemYanflyOptions_Cheats_EnemyDoubleSexualDamage_Help_TCH = "敵からの快楽ダメージが２倍になります。\n★快楽堕ちを早く見たい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_EnemyTripleSexualDamage_SCH = "\\i[387]\\C[1]快感获得3倍";
const RemYanflyOptions_Cheats_EnemyTripleSexualDamage_TCH = "\\i[387]\\C[1]快楽ダメージ３倍";
const RemYanflyOptions_Cheats_EnemyTripleSexualDamage_Help_SCH = "敌人对卡琳施加三倍的快感\n★适合想让卡琳不断高潮的人";
const RemYanflyOptions_Cheats_EnemyTripleSexualDamage_Help_TCH = "敵からの快楽ダメージが３倍になります。\n★即イキ濡れ濡れ状態で楽しみたい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_SCH = "\\i[387]\\C[1]敌人快感减半";
const RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_TCH = "\\i[387]\\C[1]敵が遅漏化";
const RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_Help_SCH = "敌人需要两倍快感才会射精\n★适合不想让敌人那么快射精的人";
const RemYanflyOptions_Cheats_EnemyDoubleOrgasmPoint_Help_TCH = "敵が絶頂するのに必要な快楽度が２倍になります。\n★早漏を防ぎたい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_EnemyAlwaysAct_SCH = "\\i[385]\\C[2]敌人每回合必然行动";
const RemYanflyOptions_Cheats_EnemyAlwaysAct_TCH = "\\i[385]\\C[2]敵が必ず行動";
const RemYanflyOptions_Cheats_EnemyAlwaysAct_Help_SCH = "敌人每回合必然会行动\n★适合想让敌人多多行动的人";
const RemYanflyOptions_Cheats_EnemyAlwaysAct_Help_TCH = "敵が必ず毎ターン行動するようになります。\n★敵のターンをスキップさせたくない人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_ActorHalfStaminaRegen_SCH = "\\i[473]\\C[29]回复减半";
const RemYanflyOptions_Cheats_ActorHalfStaminaRegen_TCH = "\\i[473]\\C[29]回復半減";
const RemYanflyOptions_Cheats_ActorHalfStaminaRegen_Help_SCH = "卡琳的体力恢复率减半\n★适合想看到卡琳体力逐渐被消耗的人";
const RemYanflyOptions_Cheats_ActorHalfStaminaRegen_Help_TCH = "カリンの体力回復が半減します。\n★じわじわと追い詰められるのを見たい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_ActorThirdStaminaRegen_SCH = "\\i[473]\\C[29]回复1/3";
const RemYanflyOptions_Cheats_ActorThirdStaminaRegen_TCH = "\\i[473]\\C[29]回復３分の１";
const RemYanflyOptions_Cheats_ActorThirdStaminaRegen_Help_SCH = "卡琳的体力恢复率减半\n★适合想看到卡琳体力逐渐不怎么恢复的人";
const RemYanflyOptions_Cheats_ActorThirdStaminaRegen_Help_TCH = "カリンの体力回復が３分の１になります。\n★回復量を大幅に減らしたい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_ActorNoEvasion_SCH = "\\i[427]\\C[30]无法回避";
const RemYanflyOptions_Cheats_ActorNoEvasion_TCH = "\\i[427]\\C[30]フルボッコ\\C[30]";
const RemYanflyOptions_Cheats_ActorNoEvasion_Help_SCH = "卡琳无法进行闪避\n★适合想看到卡琳硬吃攻击的人";
const RemYanflyOptions_Cheats_ActorNoEvasion_Help_TCH = "カリンは一切回避しなくなります。\n★攻撃を全部受けさせたい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_ActorHalfExpRate_SCH = "\\i[361]\\C[30]经验值减半";
const RemYanflyOptions_Cheats_ActorHalfExpRate_TCH = "\\i[361]\\C[30]経験値半減";
const RemYanflyOptions_Cheats_ActorHalfExpRate_Help_SCH = "卡琳获取的经验值全部减半\n★适合想花更多时间升级的人";
const RemYanflyOptions_Cheats_ActorHalfExpRate_Help_TCH = "カリンの取得経験値が半減します。\n★レベルアップにもっと時間をかけたい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_LessControlFive_SCH = "\\i[377]\\C[10]统治力-5";
const RemYanflyOptions_Cheats_LessControlFive_TCH = "\\i[377]\\C[10]統制力が-5";
const RemYanflyOptions_Cheats_LessControlFive_Help_SCH = "监狱的统治力-5\n★适合想要监狱维持更低秩序的人";
const RemYanflyOptions_Cheats_LessControlFive_Help_TCH = "監獄の統制力が５下がります。\n★より低い秩序でプレイしたい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_LessControlTen_SCH = "\\i[377]\\C[10]统治力-10";
const RemYanflyOptions_Cheats_LessControlTen_TCH = "\\i[377]\\C[10]統制が-10";
const RemYanflyOptions_Cheats_LessControlTen_Help_SCH = "监狱的统治力-10\n★适合想要监狱快速降低秩序的人";
const RemYanflyOptions_Cheats_LessControlTen_Help_TCH = "監獄の統制力が１０下がります。\n★手っ取り早く秩序を落としたい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_InstantRiotsOne_SCH = "\\i[407]\\C[7]一层暴动多发";
const RemYanflyOptions_Cheats_InstantRiotsOne_TCH = "\\i[407]\\C[7]レベル１で暴動多発";
const RemYanflyOptions_Cheats_InstantRiotsOne_Help_SCH = "1层每3天会暴动一次\n★适合想要重温一层特别事件的人";
const RemYanflyOptions_Cheats_InstantRiotsOne_Help_TCH = "監獄レベル１でほぼ３日に１回暴動が発生するようになります。\n★特定の監獄レベルで再戦したい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_InstantRiotsTwo_SCH = "\\i[407]\\C[7]二层暴动多发";
const RemYanflyOptions_Cheats_InstantRiotsTwo_TCH = "\\i[407]\\C[7]レベル２で暴動多発";
const RemYanflyOptions_Cheats_InstantRiotsTwo_Help_SCH = "2层每3天会暴动一次\n★适合想要重温二层特别事件的人";
const RemYanflyOptions_Cheats_InstantRiotsTwo_Help_TCH = "監獄レベル２でほぼ３日に１回暴動が発生するようになります。\n★特定の監獄レベルで再戦したい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_InstantRiotsThree_SCH = "\\i[407]\\C[7]三层暴动多发";
const RemYanflyOptions_Cheats_InstantRiotsThree_TCH = "\\i[407]\\C[7]レベル３で暴動多発";
const RemYanflyOptions_Cheats_InstantRiotsThree_Help_SCH = "3层每3天会暴动一次\n★适合想要重温三层特别事件的人";
const RemYanflyOptions_Cheats_InstantRiotsThree_Help_TCH = "監獄レベル３でほぼ３日に１回暴動が発生するようになります。\n★特定の監獄レベルで再戦したい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_InstantRiotsFour_SCH = "\\i[407]\\C[7]四层暴动多发";
const RemYanflyOptions_Cheats_InstantRiotsFour_TCH = "\\i[407]\\C[7]レベル４で暴動多発";
const RemYanflyOptions_Cheats_InstantRiotsFour_Help_SCH = "4层每3天会暴动一次\n★适合想要重温四层特别事件的人";
const RemYanflyOptions_Cheats_InstantRiotsFour_Help_TCH = "監獄レベル４でほぼ３日に１回暴動が発生するようになります。\n★特定の監獄レベルで再戦したい人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_WaitressLog_SCH = "\\i[282]\\C[17]记忆力很好的女仆";
const RemYanflyOptions_Cheats_WaitressLog_TCH = "\\i[282]\\C[17]らくらくウェイトレス";
const RemYanflyOptions_Cheats_WaitressLog_Help_SCH = "开启本选项，可以在服务员小游戏中解锁战斗记录\n★适合不想要记客人点了什么酒的人\n※仅秘书模式有效";
const RemYanflyOptions_Cheats_WaitressLog_Help_TCH = "ウェイトレス中にバックログを表示出来るようになります。\n★注文を暗記したくない人向け。\n※秘書モードでのみ有効";
const RemYanflyOptions_Cheats_NoAutoSave_SCH = "\\i[282]\\C[18]自动存档解除\\C[0]";
const RemYanflyOptions_Cheats_NoAutoSave_TCH = "\\i[282]\\C[18]オートセーブ解除";
const RemYanflyOptions_Cheats_NoAutoSave_Help_SCH = "系统将不会自动存档\n※请记得多多手动存档！";
const RemYanflyOptions_Cheats_NoAutoSave_Help_TCH = "オートセーブを無効化します。\n※こまめなセーブをお忘れなく！\n※秘書モードでのみ有効";

//Save
const RemYanflySaveYesSCH = "是";
const RemYanflySaveYesTCH = "はい";
const RemYanflySaveNoSCH = "否";
const RemYanflySaveNoTCH = "いいえ";
const RemYanflySaveEmptySCH = "未设定";
const RemYanflySaveEmptyTCH = "未使用";
const RemYanflySaveDeleteTextSCH = "确定要删除该存档吗?";
const RemYanflySaveDeleteTextTCH = "このファイルを削除しますか？";
const RemYanflySaveLoadTextSCH = "确定要读取该存档吗?";
const RemYanflySaveLoadTextTCH = "このファイルをロードしますか？";
const RemYanflySaveSaveTextSCH = "确定要覆盖该存档吗?";
const RemYanflySaveSaveTextTCH = "このファイルに上書きしてもいいですか？";
const RemYanflySaveInvalidTextSCH = "该存档不是本游戏的存档文件.";
const RemYanflySaveInvalidTextTCH = "このファイルは別のゲームで使用されています。";
const RemYanflySaveSelectHelpSCH = "请选择一个空位.";
const RemYanflySaveSelectHelpTCH = "ファイルを選んでください。";
const RemYanflySaveLoadHelpSCH = "读取该存档.";
const RemYanflySaveLoadHelpTCH = "このファイルをロードします。";
const RemYanflySaveSaveHelpSCH = "保存到该存档.";
const RemYanflySaveSaveHelpTCH = "このファイルにセーブします。";
const RemYanflySaveDeleteHelpSCH = "删除该存档.";
const RemYanflySaveDeleteHelpTCH = "このファイルを削除します。";
const RemYanflyAutosavingSCH = "自动保存中...";
const RemYanflyAutosavingTCH = "セーブ中…";

const RemYanflySavePlaytimeSCH = "游戏时间:";
const RemYanflySavePlaytimeTCH = "プレイ時間:";
const RemYanflySaveTotalSavesSCH = "保存次数:";
const RemYanflySaveTotalSavesTCH = "セーブ数:";
const RemYanflySaveTotalDaysSCH = "总天数:";
const RemYanflySaveTotalDaysTCH = "周回プレイを含めた総合日数:";
const RemYanflySaveTotalPlaythroughsSCH = "周目数:";
const RemYanflySaveTotalPlaythroughsTCH = "周回プレイ数:";
const RemYanflySaveTotalGameClearsSCH = "破关次数";
const RemYanflySaveTotalGameClearsTCH = "クリア数:";
const RemYanflySaveTotalEndingsSCH = "Endings Seen:"; // currently unused
const RemYanflySaveTotalEndingsTCH = "エンディング:"; // currently unused

const RemYanflyTargetEverybodySCH = "Everybody"; // currently unused
const RemYanflyTargetEverybodyTCH = "Everybody"; // currently unused
const RemYanflyTargetMultiEverybodySCH = "Anyone"; // currently unused
const RemYanflyTargetMultiEverybodyTCH = "Anyone"; // currently unused
const RemYanflyTargetMultiAlliesSCH = "Any Ally"; // currently unused
const RemYanflyTargetMultiAlliesTCH = "Any Ally"; // currently unused
const RemYanflyTargetMultiFoesSCH = "Any Enemy"; // currently unused
const RemYanflyTargetMultiFoesTCH = "Any Enemy"; // currently unused
const RemYanflyTargetFemaleAllySCH = "Female Ally"; // currently unused
const RemYanflyTargetFemaleAllyTCH = "Female Ally"; // currently unused
const RemYanflyTargetFemaleEnemySCH = "Female Enemy"; // currently unused
const RemYanflyTargetFemaleEnemyTCH = "Female Enemy"; // currently unused

const RemFTKRSkillTreeConfirmTextSCH = "%2";
const RemFTKRSkillTreeConfirmTextTCH = "%2";
const RemFTKRSkillTreeYesSCH = "实行";
const RemFTKRSkillTreeYesTCH = "実行";
const RemFTKRSkillTreeNoSCH = "取消";
const RemFTKRSkillTreeNoTCH = "キャンセル";
const RemFTKRSkillTreeEdictPointsSCH = "政策点数:";
const RemFTKRSkillTreeEdictPointsTCH = "指令値(EP)";
const RemFTKRSkillTreeEdictPointsAbbrSCH = "EP";
const RemFTKRSkillTreeEdictPointsAbbrTCH = "EP";
const RemFTKRSkillTreeOrderSCH = "秩序:";
const RemFTKRSkillTreeOrderTCH = "秩序";
const RemFTKRSkillTreeFundingSCH = "资金:";
const RemFTKRSkillTreeFundingTCH = "資金";
const RemFTKRSkillTreeFundingCostSCH = "支出:";
const RemFTKRSkillTreeFundingCostTCH = "コスト";
const RemFTKRSkillTreeCostItemSCH = "%1 Cost:"; // currently unused
const RemFTKRSkillTreeCostItemTCH = "%1 コスト"; // currently unused
const RemFTKRSkillTreePreReqTextSCH = "\\c[16]【获取条件】";
const RemFTKRSkillTreePreReqTextTCH = "\\c[16]【取得条件】";
const RemFTKRSkillTreeReqTypeEdictSCH = "政策: ";
const RemFTKRSkillTreeReqTypeEdictTCH = "指令：";
const RemFTKRSkillTreeReqTypePassiveSCH = "被动: ";
const RemFTKRSkillTreeReqTypePassiveTCH = "パッシブ：";


const RemErrorMessageSCH = "If your error message says 'Array buffer allocation failed' or 'resolution' or 'Out of memory', then your game has run out of memory so please close all other programs, ESPECIALLY BROWSER WINDOWS, before running Karryn's Prison. For all other errors, if your game files or save file haven't been modified, please take a screenshot of this screen and report it to the #kp-bug-reports channel on our Discord! Please also tell us what version of the game you are running, as well as many details of what happened before your error occurred! (" + RemVersionText + ")";
const RemErrorMessageTCH = "申し訳ありません。エラーが発生しました！メッセージ「'Array buffer allocation failed'」「'resolution'」「Out of memory」が表示される場合、PCのメモリが不足しています。ゲームを起動する前に他のソフトウェア、特にブラウザソフトを全て閉じて下さい。その他エラーの場合は現在のバージョン、エラー発生時の状態、そしてこのエラー画面のスクリーンショットをRemtairyのDiscordにある「#バグ報告」チャンネルに添付していただければ、迅速に対応させていただきます。エラー発生前後の具体的な状況もお知らせ頂くと幸いです。お手数おかけして申し訳ございませんが、どうぞよろしくお願い致します！ ("  + RemVersionText + ")";

const RemEquipTypesSCH = ["","武器","首饰","称号","加载装备存档", "储存当前装备"];
const RemEquipTypesTCH = ["","武器"," ｱｸｾｻﾘｰ ","称号","装備セットをロード", "装備セットをセーブ"];

const RemSkillTypesSCH = ["",
"攻击技能",
"精神技能",
"性技",
"意志技能",
"强化技能",
"弱化技能",
"被动技能",
"政策",
"猥谈",
"视奸",
"失去平衡...",
"跌倒...",
"自慰",
"被解除武装...",
"女侍者",
"酒保",
"女接待员",
"光荣洞",
"自慰",
"脱衣舞娘",
"中场休息"
];

const RemSkillTypesTCH = ["",
"攻撃スキル",
"精神スキル",
"性スキル",
"意思スキル",
"強化スキル",
"弱体スキル",
"パッシブ",
"指令",
"猥談",
"視姦",
"足がフラつく…",
"立たないと…",
"オナニー",
"再武装",
"ウェイトレス",
"バーテンダー",
"受付嬢",
"トイレ",
"オナニー",
"ストリッパー",
"インターミッション"
];

//Enemy Types
const RemPrisonerGenericSCH = "囚犯";
const RemPrisonerGenericTCH = "囚人";
const RemPrisonerGuardSCH = "卫兵";
const RemPrisonerGuardTCH = "警備兵";
const RemPrisonerThugSCH = "暴徒";
const RemPrisonerThugTCH = "チンピラ";
const RemPrisonerGoblinSCH = "哥布林";
const RemPrisonerGoblinTCH = "ゴブリン";
const RemPrisonerOrcSCH = "兽人";
const RemPrisonerOrcTCH = "オーク";
const RemPrisonerSlimeSCH = "史莱姆";
const RemPrisonerSlimeTCH = "スライム";
const RemPrisonerNerdSCH = "宅男";
const RemPrisonerNerdTCH = "オタク";
const RemPrisonerRogueSCH = "盗贼";
const RemPrisonerRogueTCH = "盗賊";
const RemPrisonerLizardmanSCH = "蜥蜴人";
const RemPrisonerLizardmanTCH = "リザードマン";
const RemPrisonerHomelessSCH = "流浪汉";
const RemPrisonerHomelessTCH = "浮浪者";
const RemPrisonerWerewolfSCH = "狼人";
const RemPrisonerWerewolfTCH = "ウェアウルフ";
const RemPrisonerYetiSCH = "雪人";
const RemPrisonerYetiTCH = "イエティ";


const RemReceptionistVisitorSCH = "会面者";
const RemReceptionistVisitorTCH = "面会人";
const RemReceptionistFanSCH = "忠实粉丝";
const RemReceptionistFanTCH = "ファン";

//Boss Types
const RemBossYasuSCH = "副典狱长";
const RemBossYasuTCH = "副長官";
const RemBossTonkinSCH = "兽人";
const RemBossTonkinTCH = "オーク";
const RemBossCargillSCH = "医生";
const RemBossCargillTCH = "Dr.";
const RemBossAronSCH = "阿尔法蜥蜴人";
const RemBossAronTCH = "アルファリザードマン";
const RemBossNoinimSCH = "雪人";
const RemBossNoinimTCH = "グレートイエティ";
const RemBossGobrielSCH = "队长";
const RemBossGobrielTCH = "キャプテン";
const RemBossEmperorSCH = "陛下";
const RemBossEmperorTCH = "陛下";

//Disable Smegma Text
const RemDisableSmegmaSkill815NameSCH = "勃起肉棒的自动清洁机";
const RemDisableSmegmaSkill815NameTCH = "勃起に目がないチンポ掃除機";


//Skills
const RemRestoreMindPartialSuccessSCH = "%1从绝顶中成功地取得了一些理智.";
const RemRestoreMindPartialSuccessTCH = "%1の絶頂はわずかに収まった。";
const RemRestoreMindFullSuccessSCH = "%1从绝顶中完全恢复了!";
const RemRestoreMindFullSuccessTCH = "%1の絶頂は完全に収まった！";
const RemRestoreMindFailureSCH = "%1还沉浸于高潮中...";
const RemRestoreMindFailureTCH = "%1の絶頂は収まらなかった…。";

//Orgasm Skill Message
const RemOrgasmSkillMessageKarrynKissSCH = "，在接吻的时候去了";
const RemOrgasmSkillMessageKarrynKissTCH = "キスで気持ち良くなり過ぎて、";
const RemOrgasmSkillMessageKarrynPettingSCH = "，在爱抚肉棒的时候去了";
const RemOrgasmSkillMessageKarrynPettingTCH = "チンポを愛撫する喜びのあまり、";
const RemOrgasmSkillMessageKarrynHandjobSCH = "，在给肉棒手淫的时候去了";
const RemOrgasmSkillMessageKarrynHandjobTCH = "チンポをシゴく快感で";
const RemOrgasmSkillMessageKarrynBlowjobSCH = "，在吮吸肉棒的时候去了";
const RemOrgasmSkillMessageKarrynBlowjobTCH = "チンポしゃぶりに興奮して";
const RemOrgasmSkillMessageKarrynTittyFuckSCH = "，用双乳夹住肉棒揉搓的时候去了";
const RemOrgasmSkillMessageKarrynTittyFuckTCH = "パイズリをする快感で";
const RemOrgasmSkillMessageKarrynPussySexSCH = "，在用小穴品鉴肉棒的时候去了";
const RemOrgasmSkillMessageKarrynPussySexTCH = "マンコに押し寄せる快感によって、";
const RemOrgasmSkillMessageKarrynAnalSexSCH = "，在用菊穴品鉴肉棒的时候去了";
const RemOrgasmSkillMessageKarrynAnalSexTCH = "アナルに与えられる快感で、";
const RemOrgasmSkillMessageEnemyKissSCH = "，在被亲吻的时候去了";
const RemOrgasmSkillMessageEnemyKissTCH = "キスの気持ち良さで";
const RemOrgasmSkillMessageEnemyPettingSCH = "，在被爱抚的时候去了";
const RemOrgasmSkillMessageEnemyPettingTCH = "愛撫の快感で";
const RemOrgasmSkillMessageEnemyHandjobSCH = "，在给肉棒手交的时候去了";
const RemOrgasmSkillMessageEnemyHandjobTCH = "手コキの興奮で";
const RemOrgasmSkillMessageEnemyBlowjobSCH = "，在给肉棒口交的时候去了";
const RemOrgasmSkillMessageEnemyBlowjobTCH = "フェラをしながら";
const RemOrgasmSkillMessageEnemyTittyFuckSCH = "，在给肉棒乳交的时候去了";
const RemOrgasmSkillMessageEnemyTittyFuckTCH = "パイズリをしながら";
const RemOrgasmSkillMessageEnemyPussySexSCH = "，在小穴被肉棒侵犯的时候去了";
const RemOrgasmSkillMessageEnemyPussySexTCH = "マンコを犯されながら";
const RemOrgasmSkillMessageEnemyAnalSexSCH = "，在菊穴被肉棒侵犯的时候去了";
const RemOrgasmSkillMessageEnemyAnalSexTCH = "ケツ穴ファックされながら";
const RemOrgasmSkillMessageEnemyCunnilingusSCH = "，在被别人舔阴的时候去了";
const RemOrgasmSkillMessageEnemyCunnilingusTCH = "クンニの刺激で";
const RemOrgasmSkillMessageBukkakeSCH = "，在被射上精液的时候去了";
const RemOrgasmSkillMessageBukkakeTCH = "ぶっかけられて";
const RemOrgasmSkillMessageSwallowSCH = "，在吞精的时候去了";
const RemOrgasmSkillMessageSwallowTCH = "ザーメンを飲んで";
const RemOrgasmSkillMessagePussyCreampieSCH = "，在被小穴中出的时候去了";
const RemOrgasmSkillMessagePussyCreampieTCH = "マンコに中出しされて";
const RemOrgasmSkillMessageAnalCreampieSCH = "，在被菊穴中出的时候去了";
const RemOrgasmSkillMessageAnalCreampieTCH = "ケツ奥に中出しされて";
const RemOrgasmSkillMessageMasochismSCH = "，在抖M的快感下去了";
const RemOrgasmSkillMessageMasochismTCH = "Ｍの感情が高ぶるあまり、";
const RemOrgasmSkillMessageSadismSCH = "，在抖S的快感下去了";
const RemOrgasmSkillMessageSadismTCH = "Ｓの快感に酔いしれて";
const RemOrgasmSkillMessageMasturbateSCH = "，在自慰的时候去了";
const RemOrgasmSkillMessageMasturbateTCH = "オナニーの快感で";
const RemOrgasmSkillMessageSpankSCH = "，在被打屁股的时候去了";
const RemOrgasmSkillMessageSpankTCH = "スパンキングの刺激で";
const RemOrgasmSkillMessageTalkSCH = "，在成为猥谈目标的时候去了";
const RemOrgasmSkillMessageTalkTCH = "卑猥なトークにムラムラし過ぎて、";
const RemOrgasmSkillMessageSightSCH = "，在被视奸的时候去了";
const RemOrgasmSkillMessageSightTCH = "男の視線に興奮して";
const RemOrgasmSkillMessageToySCH = "，在被性玩具的刺激下去了";
const RemOrgasmSkillMessageToyTCH = "オモチャの刺激で";

//Waitress
const RemAlcoholTypeWaterSCH = "水";
const RemAlcoholTypeWaterTCH = "水";
const RemAlcoholTypePaleAleSCH = "生啤";
const RemAlcoholTypePaleAleTCH = "生ビール";
const RemAlcoholTypeDarkAleSCH = "黑啤";
const RemAlcoholTypeDarkAleTCH = "黒ビール";
const RemAlcoholTypeVodkaSCH = "伏特加";
const RemAlcoholTypeVodkaTCH = "ウォッカ";
const RemAlcoholTypeTequilaSCH = "龙舌兰";
const RemAlcoholTypeTequilaTCH = "テキーラ";
const RemAlcoholTypeGoldRumSCH = "金兰姆";
const RemAlcoholTypeGoldRumTCH = "ゴールドラム";
const RemAlcoholTypeOverproofRumSCH = "高度朗姆";
const RemAlcoholTypeOverproofRumTCH = "高アルコールラム";
const RemAlcoholTypeWhiskeySCH = "威士忌";
const RemAlcoholTypeWhiskeyTCH = "ウイスキー";
const RemAlcoholTypeDirtyMugsSingularSCH = "空啤酒杯";
const RemAlcoholTypeDirtyMugsSingularTCH = "空ジョッキ";
const RemAlcoholTypeDirtyMugsPluralSCH = "重叠的空啤酒杯";
const RemAlcoholTypeDirtyMugsPluralTCH = "重ねた空ジョッキ";
const RemAlcoholTypeDirtyGlassesSingularSCH = "空酒杯";
const RemAlcoholTypeDirtyGlassesSingularTCH = "空グラス";
const RemAlcoholTypeDirtyGlassesPluralSCH = "重叠的空酒杯";
const RemAlcoholTypeDirtyGlassesPluralTCH = "重ねた空グラス";

const RemWaitressGetsTipSCH = "\\C[3]%1拿到了%2G的小费!";
const RemWaitressGetsTipTCH = "\\C[3]%1は%2Ｇのチップをゲット！";
const RemWaitressEnemySleepSCH = "%1醉醺醺的在桌子上睡着了.";
const RemWaitressEnemySleepTCH = "%1は酔いつぶれてテーブルに突っ伏したまま眠った。";
const RemWaitressEnemyWakeUpSCH = "%1被喧闹声吵醒了.";
const RemWaitressEnemyWakeUpTCH = "%1は喧騒で目が覚めた。";
const RemWaitressEnemyLeavesBarSCH = "\\C[8]%1起身离开了酒吧.";
const RemWaitressEnemyLeavesBarTCH = "\\C[8]%1は起き上がって酒場から立ち去った。";
const RemWaitressEnemyLeavesBarDrunkSCH = "\\C[8]%1起身了，拖着醉醺醺的步伐地离开了酒吧.";
const RemWaitressEnemyLeavesBarDrunkTCH = "\\C[8]%1は起き上がると、酔った足取りで酒場から去った。";
const RemWaitressEnemyCallingForWaitressSCH = "\\C[2]%1正在呼叫女服务员.";
const RemWaitressEnemyCallingForWaitressTCH = "\\C[2]%1はウェイトレスを呼んでいる！";
const RemWaitressEnemyDidntCallForWaitressSCH = "但是%1还没决定好要点什么.";
const RemWaitressEnemyDidntCallForWaitressTCH = "しかし%1はまだ、何を飲むか決めかねているようだ。";
const RemWaitressEnemyAskingForDrinkSCH = "\\C[2]%1点了『%2』.";
const RemWaitressEnemyAskingForDrinkTCH = "\\C[2]%1は『%2』を注文した。";
const RemWaitressEnemyAskingForWaitressToDrinkSCH = "%1提议如果愿意喝一点酒杯里的酒，就给%2小费.";
const RemWaitressEnemyAskingForWaitressToDrinkTCH = "%1は彼の飲み残しを飲めば、チップを渡すと提案してきた。";
const RemWaitressEnemyAskingForWaitressToFlashSCH = "%1提议如果愿意掀开一下制服，就给%2小费.";
const RemWaitressEnemyAskingForWaitressToFlashTCH = "%1は%2が服をまくれば、チップを渡すと提案してきた。";
const RemWaitressRefusesDrinkSCH = "但是%1拒绝了，周围的人都很失望.";
const RemWaitressRefusesDrinkTCH = "しかし、%1はプライドを守るために断った。";
const RemWaitressAcceptsDrinkSCH = "\\C[31]%1在大家的注视下喝了一小口，周围的人哄堂大笑.";
const RemWaitressAcceptsDrinkTCH = "\\C[31]客達が注目する中、%1は一口だけすすった。";
const RemWaitressWontFlashSCH = "但是%1拒绝向酒吧里的男人们展示身体.";
const RemWaitressWontFlashTCH = "しかし、%1は拒否した。";
const RemWaitressFlashesSCH = "\\C[27]%1抿嘴一笑并给了所有人一个挑逗的眼神.";
const RemWaitressFlashesTCH = "\\C[27]%1は笑みを浮かべて応じた。";
const RemWaitressEnemyRefusesDrinkSCH = "但是%1并没有点这杯酒.";
const RemWaitressEnemyRefusesDrinkTCH = "しかし、%1は受け取らなかった。";
const RemWaitressEnemyAcceptsDrinkSCH = "%1接过了对方支付的酒钱.";
const RemWaitressEnemyAcceptsDrinkTCH = "%1は受け取ると、料金を支払った。";
const RemWaitressEnemyAlcoholKissSCH = "\\C[27]%1在和%2接吻时顺势喂下了口中的饮料!";
const RemWaitressEnemyAlcoholKissTCH = "\\C[27]%1は口移しで%2に飲ませた！";
const RemWaitressEnemyCheerForBrawlNoDrinkSCH = "%1正看着其他人争吵而欢呼雀跃.";
const RemWaitressEnemyCheerForBrawlNoDrinkTCH = "%1は喧嘩をあおっている。";
const RemWaitressEnemyCheerForBrawlYesDrinkSCH = "%1一边喝着酒一边看着正进行的争吵.";
const RemWaitressEnemyCheerForBrawlYesDrinkTCH = "%1は喧嘩を楽しみながら飲んでいる。";
const RemWaitressBrawlStartSCH = "\\C[18]争吵开始了!!";
const RemWaitressBrawlStartTCH = "\\C[18]喧嘩が始まった！！";
const RemWaitressBrawlJoinSCH = "\\C[18]%1愤怒得加入了争吵!";
const RemWaitressBrawlJoinTCH = "\\C[18]%1が喧嘩に参加した！";
const RemWaitressBarDamageSCH = "\\C[3]酒吧损失了%1G的物品!";
const RemWaitressBarDamageTCH = "\\C[3]酒場は%1Ｇの損害！";
const RemWaitressEnemyTellsJokeSCH = "%1开始讲一个笑话.";
const RemWaitressEnemyTellsJokeTCH = "%1はジョークを言い出した。";
const RemWaitressEnemyContinuesJokeSCH = "%1继续讲他的笑话.";
const RemWaitressEnemyContinuesJokeTCH = "%1はまだジョーク話を続けている。";
const RemWaitressEnemyHearsJokeSCH = "%1仔细听着%2的笑话.";
const RemWaitressEnemyHearsJokeTCH = "%1は%2のジョーク話に付き合っている。";
const RemWaitressEnemyLaughsJokeSCH = "%1被%2的笑话逗得哈哈大笑.";
const RemWaitressEnemyLaughsJokeTCH = "%1は%2のジョークにウケている。";
const RemWaitressEnemyChugsDrinkSCH = "%1开始喝杯中的饮料.";
const RemWaitressEnemyChugsDrinkTCH = "%1は一気飲みした。";
const RemWaitressEnemyChugsDrinkFinishSCH = "%1一口气干了剩下的饮料.";
const RemWaitressEnemyChugsDrinkFinishTCH = "%1は残りを一気飲みした。";
const RemWaitressEnemyChattingSCH = "%1跟%2在闲谈.";
const RemWaitressEnemyChattingTCH = "%1は%2と雑談している。";
const RemWaitressEnemyChattingHimselfSCH = "%1在自言自语.";
const RemWaitressEnemyChattingHimselfTCH = "%1は独り言をつぶやいている。";
const RemWaitressEnemyEntersBarSCH = "\\C[2]%1进入酒吧坐在了%2前.";
const RemWaitressEnemyEntersBarTCH = "\\C[2]%1が入店して来た。%1は%2席に腰掛けた。";
const RemWaitressEnemyFumingSCH = "\\C[10]%1的脸阴沉了下来...";
const RemWaitressEnemyFumingTCH = "\\C[10]%1は暗い面持ちをしている……。";
const RemWaitressEnemyStartSexSCH = "\\C[27]%2醉得走不直了，%1赶紧把她放倒在吧台上!!!";
const RemWaitressEnemyStartSexTCH = "\\C[27]%1は酔った%2をテーブルに押し倒した！！！";
const RemWaitressEnemyRefillsKarrynMugSCH = "%1用生啤灌满了%2的杯子!";
const RemWaitressEnemyRefillsKarrynMugTCH = "%1は%2のジョッキへ更にビールを注ぎ込んだ！";
const RemWaitressEnemyDumpsKarrynMugSCH = "%1拿着%2的啤酒杯，并把剩下的酒倒在了地上!";
const RemWaitressEnemyDumpsKarrynMugTCH = "%1がおっぱいジョッキの中身を捨てた！";
const RemWaitressDrinkSemenMugSCH = "\\C[27]%1从杯子中啜饮了\\C[1]%2ml的精液!";
const RemWaitressDrinkSemenMugTCH = "\\C[27]%1はジョッキに溜まったザーメンを飲み干した！！ザーメン量\\C[1]%2ml\\C[0]！！";

const RemReceptionistVisitingRoomA_SCH = "会面室A";
const RemReceptionistVisitingRoomA_TCH = "面会室Ａ";
const RemReceptionistVisitingRoomB_SCH = "会面室B";
const RemReceptionistVisitingRoomB_TCH = "面会室Ｂ";
const RemReceptionistVisitingRoomC_SCH = "会面室C";
const RemReceptionistVisitingRoomC_TCH = "面会室Ｃ";
const RemReceptionistVisitingRoomD_SCH = "会面室D";
const RemReceptionistVisitingRoomD_TCH = "面会室Ｄ";

const RemReceptionistNewVisitorSCH = "\\C[2]%1拿了号码，并坐了下来.";
const RemReceptionistNewVisitorTCH = "\\C[2]%1は番号札を受け取って着席した。";
const RemReceptionistNewGoblinSCH = "\\C[10]哥布林闯进了柜台!";
const RemReceptionistNewGoblinTCH = "\\C[10]ゴブリンが侵入してきた！";
const RemReceptionistGoblinDefeatedSCH = "\\C[8]%1溜走了!";
const RemReceptionistGoblinDefeatedTCH = "\\C[8]%1は立ち去った！";
const RemReceptionistVisitorEntersVisitingRoomSCH = "\\C[11]%1向%2走去.";
const RemReceptionistVisitorEntersVisitingRoomTCH = "\\C[11]%1は%2へ向かって行った。";
const RemReceptionistVisitingRoomStatusOccupiedPluralSCH = "\\C[23]「%1正在使用中，还有%2分钟结束, 完毕!」";
const RemReceptionistVisitingRoomStatusOccupiedPluralTCH = "\\C[23]「%1は%2分以上使用中になっています！」";
const RemReceptionistVisitingRoomStatusOccupiedSingleSCH = "\\C[23]「%1还有一分钟就空出来了, 完毕!」";
const RemReceptionistVisitingRoomStatusOccupiedSingleTCH = "\\C[23]「%1は1分以上使用中になっています！」";
const RemReceptionistVisitingRoomStatusNotOccupiedSCH = "\\C[23]「%1现在可以使用, 完毕!」\"";
const RemReceptionistVisitingRoomStatusNotOccupiedTCH = "\\C[23]「現在、%1は空室です！」";
const RemReceptionistVisitorWantsToHandOverPaperSCH = "%1正在等待提交申请书.";
const RemReceptionistVisitorWantsToHandOverPaperTCH = "%1は記入済み申込書を手渡そうとしている。";
const RemReceptionistVisitorAngryComplaint_OccupiedVisitingRoomSCH = "\\C[10]%1抱怨%2正在使用中.";
const RemReceptionistVisitorAngryComplaint_OccupiedVisitingRoomTCH = "%2は別の面会人が使っている！\\C[10]%1が苦情を言ってきた。";
const RemReceptionistGreetVisitorResultNormalSCH = "%1答复说是来和囚犯会面的.";
const RemReceptionistGreetVisitorResultNormalTCH = "%1は囚人との面会に来ているようだ。";
const RemReceptionistFinishedProcessingPapersSCH = "%1的申请书处理完毕. 允许%2分钟的会面.";
const RemReceptionistFinishedProcessingPapersTCH = "申込書の処理が完了。%1の面会時間：%2分";
const RemReceptionistVisitorLeavesAngrySCH = "\\C[10]%1突然愤怒地离开了接待中心!";
const RemReceptionistVisitorLeavesAngryTCH = "\\C[10]%1は怒ってその場から立ち去ってしまった！";
const RemReceptionistFanLeavesHappySCH = "%1笑嘻嘻地离开了接待中心.";
const RemReceptionistFanLeavesHappyTCH = "%1は笑顔で受付所から立ち去った。";
const RemReceptionistFanLeavesDejectedSCH = "%1沮丧地离开了接待中心...";
const RemReceptionistFanLeavesDejectedTCH = "%1はガックリして受付所から立ち去った……。";
const RemReceptionistPervLeavesHappySCH = "%1咧嘴大笑地离开了接待中心.";
const RemReceptionistPervLeavesHappyTCH = "%1はスッキリして受付所から立ち去った。";
const RemReceptionistPervLeavesAngrySCH = "%1欲求不满地离开了接待中心...";
const RemReceptionistPervLeavesAngryTCH = "%1は欲求不満のまま受付所から立ち去った……。";
const RemReceptionistNotHereForVisitationSCH = "看起来%1并不是来和犯人会面的!";
const RemReceptionistNotHereForVisitationTCH = "%1はカリンに会いに来ただけだった！";

const RemGloryBattleEndSCH = "■ 光荣洞事件 结束 ■";
const RemGloryBattleEndTCH = "■ お手洗いタイム 終了 ■";
const RemGloryLeftStallCockNameSCH = "左侧的肉棒";
const RemGloryLeftStallCockNameTCH = "左のチンポ";
const RemGloryRightStallCockNameSCH = "右侧的肉棒";
const RemGloryRightStallCockNameTCH = "右のチンポ";
const RemGloryGuestEnterBathroomSCH = "\\C[8]有人进入了厕所.";
const RemGloryGuestEnterBathroomTCH = "\\C[8]トイレに人が来た気配がする……。";
const RemGloryGuestLeaveBathroomSCH = "\\C[8]有人离开了厕所.";
const RemGloryGuestLeaveBathroomTCH = "\\C[8]誰かがトイレから立ち去った。";
const RemGloryGuestEnterLeftStallSCH = "\\C[7]有人把肉棒从左侧的洞伸了出来.";
const RemGloryGuestEnterLeftStallTCH = "\\C[7]誰かが左の個室に入った。";
const RemGloryGuestLeaveLeftStallSCH = "\\C[7]有人把肉棒从左侧的洞抽了出去.";
const RemGloryGuestLeaveLeftStallTCH = "\\C[7]左の個室から人が出たようだ。";
const RemGloryGuestEnterRightStallSCH = "\\C[7]有人把肉棒从右侧的洞伸了出来.";
const RemGloryGuestEnterRightStallTCH = "\\C[7]誰かが右の個室に入った。";
const RemGloryGuestLeaveRightStallSCH = "\\C[7]有人把肉棒从右侧的洞抽了出去.";
const RemGloryGuestLeaveRightStallTCH = "\\C[7]右の個室から人が出たようだ";
const RemGloryGuestPissingLeftStallSCH = "\\C[8]左侧的隔间传来了有人撒尿的声音.";
const RemGloryGuestPissingLeftStallTCH = "\\C[8]左の個室から小便の音がしている。";
const RemGloryGuestEatingLeftStallSCH = "\\C[8]左侧的隔间传来了有人吃东西的声音.";
const RemGloryGuestEatingLeftStallTCH = "\\C[8]左の個室から食べる音が聞こえる。";
const RemGloryGuestPissingRightStallSCH = "\\C[8]右侧的隔间传来了有人撒尿的声音.";
const RemGloryGuestPissingRightStallTCH = "\\C[8]右の個室から小便の音がしている。";
const RemGloryGuestEatingRightStallSCH = "\\C[8]右侧的隔间传来了有人吃东西的声音.";
const RemGloryGuestEatingRightStallTCH = "\\C[8]右の個室から食べる音が聞こえる。";
const RemGloryGuestShowedThroughLeftHoleSCH = "\\C[27]一根大肉棒从左侧的洞伸了出来!";
const RemGloryGuestShowedThroughLeftHoleTCH = "\\C[27]左の穴からチンポが現れた！";
const RemGloryGuestShowedThroughRightHoleSCH = "\\C[27]一根大肉棒从右侧的洞伸了出来!";
const RemGloryGuestShowedThroughRightHoleTCH = "\\C[27]右の穴からチンポが現れた！";

const RemStripperBattleEndSCH = "■ 卡琳的脱衣舞秀结束了 ■";
const RemStripperBattleEndTCH = "■ ストリップタイム 終了 ■";
const RemStripperEnemyTossCondomOntoStageSCH = "%1名客人向舞台上抛出了射满的避孕套.";
const RemStripperEnemyTossCondomOntoStageTCH = "%1はコンドームを床に投げた。";
const RemStripperEnemyTipsCondomToBeltSCH = "%1名顾客把自己射满的避孕套挂在了%2的腰带上！";
const RemStripperEnemyTipsCondomToBeltTCH = "%1は%2のガーターベルトにコンドームを付けた！";
const RemStripperEnemyTipsCondomToBraSCH = "%1名顾客把自己射满的避孕套挂在了%2的胸罩上！";
const RemStripperEnemyTipsCondomToBraTCH = "%1は%2のブラにコンドームを付けた！";
const RemStripperEnemyTipsCondomToNippleSCH = "%1名顾客把自己射满的避孕套系在了%2的勃起乳头上！";
const RemStripperEnemyTipsCondomToNippleTCH = "%1は%2の勃起乳首にコンドームを付けた！";
const RemStripperEnemyTipsCondomToHairbandSCH = "%1名顾客把自己射满的避孕套挂在了%2的兔耳发箍上！";
const RemStripperEnemyTipsCondomToHairbandTCH = "%1は%2のヘアバンドにコンドームを付けた！";
const RemStripperEnemyTipsCondomToSidetailSCH = "%1名顾客把自己射满的避孕套当作头绳系在了%2的侧马尾上！";
const RemStripperEnemyTipsCondomToSidetailTCH = "%1は%2のサイドテールにコンドームを付けた！";
const RemStripperEnemyEntersStripClubSCH = "\\C[8]%1名顾客观看了本场表演.";
const RemStripperEnemyEntersStripClubTCH = "\\C[8]%1が席に着いた。";
const RemStripperEnemyLeavesStripClubHappySCH = "\\C[8]%1名顾客带着微笑退场了.";
const RemStripperEnemyLeavesStripClubHappyTCH = "\\C[8]%1はスッキリした表情で立ち去った。";
const RemStripperEnemyLeavesStripClubUnhappySCH = "\\C[8]%1名顾客带着不满的表情退场了.";
const RemStripperEnemyLeavesStripClubUnhappyTCH = "\\C[8]%1は不満げな表情で立ち去った。";
const RemStripperEnemyJoinVIPSingularSCH = "\\C[8]%1牵着客人们的手并带着他们前往私人包间提供进一步的服务......";
const RemStripperEnemyJoinVIPSingularTCH = "\\C[8]残った客は%1に手を引かれて、カーテンをくぐった……。";
const RemStripperEnemyJoinVIPPluralSCH = "\\C[8]%1牵着客人们的手并带着他们前往私人包间提供进一步的服务......";
const RemStripperEnemyJoinVIPPluralTCH = "\\C[8]残った客達は%1に手を引かれて、カーテンをくぐった……。";

const RemMidBattleEnemyReinforcementSCH = "\\C[2]%1作为增援出现了！";
const RemMidBattleEnemyReinforcementTCH = "\\C[2]増援に%1が現れた！";

const RemLevelFiveFreeBattleDefeatSettingSCH = [
"随机",
"第一层 酒吧储藏室",
"第二层 男性厕所",
"第三层 隔离牢房",
"第四层 废弃处理区",
"第五层 祭坛"
];
const RemLevelFiveFreeBattleDefeatSettingTCH = [
"ランダム",
"監獄レベル１ 酒吧储藏室",
"監獄レベル２ 男性厕所",
"監獄レベル３ 隔离牢房",
"監獄レベル４ 废弃处理区",
"監獄レベル５ 祭坛"
];
