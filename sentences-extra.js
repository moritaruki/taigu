(()=>{
const out=[];
const add=(level,category,tw,jp,pron,pattern,grammar)=>out.push({
 id:'s'+String(301+out.length).padStart(3,'0'),category,level,tw,jp,pron,pattern,grammar,
 source:'TOCFL Band C2向け本教材オリジナル練習文'
});
const times=[
 ['今仔日','今日','kin-á-ji̍t'],['明仔載','明日','bîn-á-tsài'],['後日','明後日','āu-ji̍t'],['禮拜一','月曜日','lé-pài-it'],['禮拜二','火曜日','lé-pài-jī'],
 ['禮拜三','水曜日','lé-pài-sann'],['禮拜四','木曜日','lé-pài-sì'],['禮拜五','金曜日','lé-pài-gōo'],['禮拜六','土曜日','lé-pài-la̍k'],['禮拜日','日曜日','lé-pài-ji̍t'],
 ['早起','朝','tsá-khí'],['中晝','昼','tiong-tàu'],['下晡','午後','ē-poo'],['暗時','夜','àm-sî'],['下禮拜','来週','ē lé-pài']
];
const acts=[
 ['去運動','運動しに行きます','khì ūn-tōng'],['去散步','散歩に行きます','khì sàn-pōo'],['去買物件','買い物に行きます','khì bé mi̍h-kiānn'],
 ['去食飯','ご飯を食べに行きます','khì tsia̍h-pn̄g'],['去看電影','映画を見に行きます','khì khuànn tiān-iánn'],['學台語','台湾語を勉強します','o̍h Tâi-gí'],
 ['整理房間','部屋を片付けます','tsíng-lí pâng-king'],['佮朋友見面','友人に会います','kah pîng-iú kìnn-bīn'],['坐火車去台南','列車で台南へ行きます','tsē hué-tshia khì Tâi-lâm'],['佇厝休睏','家で休みます','tī tshù hiu-khùn']
];
for(const t of times)for(const a of acts)add('中級','予定・日常',`我${t[0]}欲${a[0]}。`,`私は${t[1]}、${a[1]}。`,`guá ${t[2]} beh ${a[2]}.`,'時間＋欲＋動詞','時を示して予定・意向を述べる練習です。');

const conds=[
 ['有時間','時間があれば','ū sî-kan'],['好天','天気が良ければ','hó-thinn'],['無落雨','雨が降らなければ','bô lo̍h-hōo'],['身體較好','体調が良くなれば','sin-thé khah hó'],['朋友有閒','友人が暇なら','pîng-iú ū-îng'],
 ['工作做煞','仕事が終われば','kang-tsok tsò-suah'],['火車準時','列車が時間通りなら','hué-tshia tsún-sî'],['店有開','店が開いていれば','tiàm ū khui'],['價數合理','値段が妥当なら','kè-siàu ha̍p-lí'],['你嘛欲去','あなたも行きたいなら','lí mā beh khì']
];
const results=[
 ['我就去運動','私は運動しに行きます','guá tō khì ūn-tōng'],['我就去散步','私は散歩に行きます','guá tō khì sàn-pōo'],['我就去買物件','私は買い物に行きます','guá tō khì bé mi̍h-kiānn'],
 ['我就去食飯','私はご飯を食べに行きます','guá tō khì tsia̍h-pn̄g'],['我就去看電影','私は映画を見に行きます','guá tō khì khuànn tiān-iánn'],['我就學台語','私は台湾語を勉強します','guá tō o̍h Tâi-gí'],
 ['我就整理房間','私は部屋を片付けます','guá tō tsíng-lí pâng-king'],['我就佮朋友見面','私は友人に会います','guá tō kah pîng-iú kìnn-bīn'],['我就坐火車去台南','私は列車で台南へ行きます','guá tō tsē hué-tshia khì Tâi-lâm'],['我就佇厝休睏','私は家で休みます','guá tō tī tshù hiu-khùn']
];
for(const c of conds)for(const r of results)add('上級','条件・判断',`若是${c[0]}，${r[0]}。`,`${c[1]}、${r[1]}。`,`nā-sī ${c[2]}, ${r[2]}.`,'若是〜，就〜','条件と結果を組み合わせる練習です。');

const reasons=[
 ['我真愛台灣','台湾が大好きなので','guá tsin ài Tâi-uân'],['我欲學較自然的台語','もっと自然な台湾語を学びたいので','guá beh o̍h khah tsū-jiân ê Tâi-gí'],
 ['明仔載愛早起','明日は早起きしなければならないので','bîn-á-tsài ài tsá-khí'],['最近真無閒','最近とても忙しいので','tsuè-kīn tsin bô-îng'],['外口咧落雨','外は雨が降っているので','guā-kháu teh lo̍h-hōo'],
 ['彼間店真好食','あの店はとてもおいしいので','hit king tiàm tsin hó-tsia̍h'],['車站離遮真近','駅はここからとても近いので','tshia-tsām lī tsia tsin kūn'],['我有淡薄仔累','少し疲れているので','guá ū tām-po̍h-á luī'],
 ['今仔日天氣真好','今日は天気がとても良いので','kin-á-ji̍t thinn-khì tsin hó'],['這件代誌真重要','このことはとても重要なので','tsit kiānn tāi-tsì tsin tiōng-iàu']
];
const reasonActs=[
 ['逐工攏練習','毎日練習します','ta̍k-kang lóng liān-si̍p'],['欲較早睏','早めに寝ます','beh khah tsá khùn'],['欲坐捷運','MRTに乗ります','beh tsē tsia̍t-ūn'],
 ['欲先確認一下','まず確認します','beh sing khak-jīn tsi̍t-ē'],['欲共朋友聯絡','友人に連絡します','beh kā pîng-iú liân-lo̍k'],['欲去彼搭食飯','そこへ食事に行きます','beh khì hit tah tsia̍h-pn̄g'],
 ['欲行路去','歩いて行きます','beh kiânn-lōo khì'],['欲休睏一下','少し休みます','beh hiu-khùn tsi̍t-ē'],['欲出去行行咧','少し外へ出かけます','beh tshut-khì kiânn-kiânn--leh'],['欲閣想一下','もう少し考えます','beh koh siūnn tsi̍t-ē']
];
for(const c of reasons)for(const a of reasonActs)add('上級','理由・説明',`因為${c[0]}，所以我${a[0]}。`,`${c[1]}、${a[1]}。`,`in-uī ${c[2]}, sóo-í guá ${a[2]}.`,'因為〜，所以〜','理由と結果を明確につなぐ練習です。');

const topics=[
 ['台語發音','台湾語の発音','Tâi-gí huat-im'],['語言學習','語学学習','gí-giân ha̍k-si̍p'],['時間管理','時間管理','sî-kan kuán-lí'],['旅行規劃','旅行計画','lí-hîng kui-uē'],['工作溝通','仕事上のコミュニケーション','kang-tsok kau-thong'],
 ['顧客服務','顧客サービス','kòo-kheh ho̍k-bū'],['團隊合作','チームワーク','thuân-tuī ha̍p-tsok'],['文化差異','文化の違い','bûn-huà tsha-ī'],['資訊安全','情報セキュリティ','tsu-sìn an-tsuân'],['網路隱私','オンラインプライバシー','bāng-lōo ún-su'],
 ['環境保護','環境保護','khuân-kíng pó-hōo'],['交通安全','交通安全','kau-thong an-tsuân'],['風險管理','リスク管理','hong-hiám kuán-lí'],['問題分析','問題分析','būn-tê hun-sik'],['資料整理','情報整理','tsu-liāu tsíng-lí']
];
const preds=[
 ['真重要','はとても重要です','tsin tiōng-iàu'],['需要時間','には時間が必要です','su-iàu sî-kan'],['需要經驗','には経験が必要です','su-iàu king-giām'],['無遐爾簡單','はそれほど簡単ではありません','bô hiah-nī kán-tan'],['會影響生活','は生活に影響します','ē íng-hióng sing-ua̍h'],
 ['會影響工作','は仕事に影響します','ē íng-hióng kang-tsok'],['需要慢慢仔了解','はゆっくり理解する必要があります','su-iàu bān-bān-á liáu-kái'],['值得閣研究','はさらに研究する価値があります','ta̍t-tit koh gián-kiù'],['需要閣確認','はさらに確認が必要です','su-iàu koh khak-jīn'],['有真濟面向','には多くの側面があります','ū tsin tsē bīn-hiòng']
];
for(const t of topics)for(const p of preds)add('発展','抽象・意見',`對我來講，${t[0]}${p[0]}。`,`私にとって、${t[1]}${p[1]}。`,`tuì guá lâi kóng, ${t[2]} ${p[2]}.`,'對我來講，〜','自分の立場から抽象的な話題を説明する練習です。');

if(out.length!==500)throw new Error('sentence extra count '+out.length);
window.EXTRA_SENTENCES=out;
SENTENCES.push(...out);
if(window.SENTENCE_META){SENTENCE_META.count=SENTENCES.length;SENTENCE_META.levels={'初級':150,'中級':250,'上級':250,'発展':150};SENTENCE_META.version='2.0';}
})();
